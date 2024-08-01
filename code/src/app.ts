/**
 * Copyright (c) 2024 Discover Financial Services
 */
import express from 'express';
import * as path from 'path';
import { Server, Config, Logger } from 'dlms-server';
import './controllers/index';
import { RegisterRoutes } from './routes';
import { ValidateError } from 'tsoa';
import { AppMgr } from './appMgr';
import { users } from './myUserProfileService';
const axios = require('axios');
const { spawn } = require('child_process');
const log = new Logger('app');

/**
 * Initialize custom routes
 *
 * @param app Express Application
 */
async function addCustomRoutes(app: express.Application) {
    /**  */
    app.get(
        '/api/info',
        function (_req: express.Request, res: express.Response) {
            const port = process.env['PORT'];
            const baseUrl = process.env['BASE_URL'];
            const oauthEnabled = process.env['OAUTH_ENABLED'];
            const basicAuthEnabled = process.env['BASIC_AUTH_ENABLED'];
            res.send({ baseUrl, port, oauthEnabled, basicAuthEnabled });
        }
    );
    RegisterRoutes(app);

    app.use(function errorHandler(
        err: unknown,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): express.Response | void {
        if (err instanceof ValidateError) {
            console.warn(
                `Caught Validation Error for ${req.path}:`,
                JSON.stringify(err.fields, null, 4)
            );
            console.warn('request was ', JSON.stringify(req.body, null, 4));
            return res.status(422).json({
                message: 'Validation Failed',
                details: err?.fields,
            });
        }
        if (err instanceof Error) {
            return res.status(500).json({
                message: 'Internal Server Error',
            });
        }

        next();
    });

    if (process.env.NODE_ENV !== 'production') {
        // Check if React dev server is running on PORT+1
        const port = parseInt(process.env['PORT'] || '3000');
        let reactPort = port + 1;
        let found = 0;
        while (found < 2) {
            try {
                log.debug('Looking for React dev server on port', reactPort);
                const r = await axios.get(`http://127.0.0.1:${reactPort}`, {
                    proxy: false,
                });
                // If found on port, then done
                if (r.data.indexOf('Request') > -1) {
                    log.debug(
                        'Found React Dev server running on port ',
                        reactPort
                    );
                    found = 2;
                } else {
                    reactPort++;
                }
            } catch (e) {
                if ((e as any).code == 'ECONNREFUSED') {
                    log.debug('Not running on port, so start it');
                    const subprocess = spawn(
                        `cd src/ui && PORT=${reactPort} REACT_APP_SERVER=${port} BROWSER=none npm run start`,
                        {
                            shell: true,
                        }
                    );
                    subprocess.unref();
                    subprocess.stdout.on('data', (data: Buffer) => {
                        log.debug('React: ', data.toString());
                    });
                    found = 2;
                } else {
                    log.debug('Error:', e);
                    log.debug('Error starting React Dev server - Exiting');
                    process.exit(1);
                }
            }
        }

        app.get(
            '/*',
            async function (
                _req: express.Request,
                res: express.Response,
                next: express.NextFunction
            ) {
                let url = _req.url;
                log.debug(`GET ${url}`);

                // Get url
                const getUrl = async (url: string) => {
                    try {
                        const r = await axios.get(
                            `http://127.0.0.1:${reactPort}${url}`,
                            { responseType: 'arraybuffer', proxy: false }
                        );
                        const buffer = Buffer.from(r.data);
                        const contentType = r.headers['content-type'];
                        res.setHeader('content-type', contentType);
                        res.status(200).send(buffer);
                        return true;
                    } catch (e) {
                        log.debug('e=', e);
                        return false;
                    }
                };

                // If file with extension, then try to get file
                if (url.indexOf('.') > -1) {
                    if (await getUrl(url)) {
                        return;
                    }
                }

                // If no extension, then send to React dev server
                if (await getUrl('')) {
                    return;
                }

                // If not found, then try to get file
                if (await getUrl(url)) {
                    return;
                }

                // If still not found, then send to next handler
                next();
            }
        );
    } else {
        let dirname = __dirname;
        const i = __dirname.indexOf('/build');
        if (i > -1) {
            dirname = __dirname.substring(0, i) + '/src/';
        }
        log.debug('dirname=', dirname);
        app.use(express.static(path.join(dirname, 'ui/build')));
        app.get('/*', function (_req: express.Request, res: express.Response) {
            res.sendFile(path.join(dirname, 'ui/build', 'index.html'));
        });
    }
}

/**
 * Main function to start the dlms server
 */
async function main() {
    const appMgr = await AppMgr.init();
    const config = new Config();

    /** Get the requestor user type from the config */
    const userName = config.getStr('USER', 'requestor');
    let user = users[0];
    for (const _user of users) {
        /** Set the current user to the requestor */
        if (_user.id == userName) {
            user = _user;
        }
    }
    log.debug('Default user=', user);

    /** Run the server with the custom routes */
    await Server.run(appMgr, { addCustomRoutes, disabledAuthUser: user });
}

/** Start the server */
main();
