/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ServicesController } from './controllers/documentController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ActionController } from './controllers/documentController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DocumentController } from './controllers/documentController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';
const multer = require('multer');




// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "StateHistory": {
        "dataType": "refObject",
        "properties": {
            "state": {"dataType":"string","required":true},
            "date": {"dataType":"double","required":true},
            "email": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Person": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "department": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "employeeNumber": {"dataType":"string","required":true},
        },
        "additionalProperties": {"dataType":"any"},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommentHistory": {
        "dataType": "refObject",
        "properties": {
            "date": {"dataType":"double","required":true},
            "user": {"ref":"Person","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommentInfo": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "date": {"dataType":"double","required":true},
            "user": {"ref":"Person","required":true},
            "topic": {"dataType":"string","required":true},
            "text": {"dataType":"string","required":true},
            "edited": {"dataType":"array","array":{"dataType":"refObject","ref":"CommentHistory"}},
            "approved": {"dataType":"string"},
            "private": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AttachmentInfo": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "hash": {"dataType":"string","required":true},
            "collection": {"dataType":"string"},
            "doc": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "size": {"dataType":"double","required":true},
            "date": {"dataType":"double","required":true},
            "type": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Requestor": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "department": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "employeeNumber": {"dataType":"string","required":true},
            "owner": {"dataType":"boolean","required":true},
            "requested": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocInfo": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "state": {"dataType":"string","required":true},
            "requestors": {"dataType":"array","array":{"dataType":"refObject","ref":"Requestor"},"required":true},
            "reviewers": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"},"required":true},
            "deliveryTeam": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"},"required":true},
            "agreement": {"dataType":"boolean","required":true},
            "planningMotivation": {"dataType":"string","required":true},
            "planningObjectives": {"dataType":"double","required":true},
            "planningAudience": {"dataType":"string","required":true},
            "planningRules": {"dataType":"string","required":true},
            "planningThemes": {"dataType":"string","required":true},
            "planningChallenges": {"dataType":"string","required":true},
            "planningWinningTopics": {"dataType":"string","required":true},
            "planningIncubation": {"dataType":"string","required":true},
            "planningPlatforms": {"dataType":"string","required":true},
            "logisticsTimeline": {"dataType":"string","required":true},
            "logisticsDuration": {"dataType":"string","required":true},
            "logisticsLocation": {"dataType":"string","required":true},
            "logisticsPlatform": {"dataType":"string","required":true},
            "logisticsInfrastructureBuilt": {"dataType":"string","required":true},
            "marketingBudget": {"dataType":"string","required":true},
            "marketingPrizeCategories": {"dataType":"string","required":true},
            "marketingPrizes": {"dataType":"string","required":true},
            "marketingGuidelines": {"dataType":"string","required":true},
            "marketingChannels": {"dataType":"string","required":true},
            "marketingActivities": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "dateCreated": {"dataType":"double","required":true},
            "dateUpdated": {"dataType":"double","required":true},
            "curStateRead": {"dataType":"array","array":{"dataType":"string"}},
            "curStateWrite": {"dataType":"array","array":{"dataType":"string"}},
            "stateHistory": {"dataType":"array","array":{"dataType":"refObject","ref":"StateHistory"},"required":true},
            "comments": {"dataType":"array","array":{"dataType":"refObject","ref":"CommentInfo"},"required":true},
            "attachments": {"dataType":"array","array":{"dataType":"refObject","ref":"AttachmentInfo"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocumentInfo": {
        "dataType": "refAlias",
        "type": {"ref":"DocInfo","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocCreate": {
        "dataType": "refObject",
        "properties": {
            "requestors": {"dataType":"array","array":{"dataType":"refObject","ref":"Requestor"}},
            "reviewers": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"}},
            "deliveryTeam": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"}},
            "agreement": {"dataType":"boolean"},
            "planningMotivation": {"dataType":"string"},
            "planningObjectives": {"dataType":"double"},
            "planningAudience": {"dataType":"string"},
            "planningRules": {"dataType":"string"},
            "planningThemes": {"dataType":"string"},
            "planningChallenges": {"dataType":"string"},
            "planningWinningTopics": {"dataType":"string"},
            "planningIncubation": {"dataType":"string"},
            "planningPlatforms": {"dataType":"string"},
            "logisticsTimeline": {"dataType":"string"},
            "logisticsDuration": {"dataType":"string"},
            "logisticsLocation": {"dataType":"string"},
            "logisticsPlatform": {"dataType":"string"},
            "logisticsInfrastructureBuilt": {"dataType":"string"},
            "marketingBudget": {"dataType":"string"},
            "marketingPrizeCategories": {"dataType":"string"},
            "marketingPrizes": {"dataType":"string"},
            "marketingGuidelines": {"dataType":"string"},
            "marketingChannels": {"dataType":"string"},
            "marketingActivities": {"dataType":"string"},
            "title": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocumentCreate": {
        "dataType": "refAlias",
        "type": {"ref":"DocCreate","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocSummary": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "state": {"dataType":"string","required":true},
            "requestors": {"dataType":"array","array":{"dataType":"refObject","ref":"Requestor"},"required":true},
            "reviewers": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"},"required":true},
            "deliveryTeam": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"},"required":true},
            "agreement": {"dataType":"boolean","required":true},
            "planningMotivation": {"dataType":"string","required":true},
            "planningObjectives": {"dataType":"double","required":true},
            "planningAudience": {"dataType":"string","required":true},
            "planningRules": {"dataType":"string","required":true},
            "planningThemes": {"dataType":"string","required":true},
            "planningChallenges": {"dataType":"string","required":true},
            "planningWinningTopics": {"dataType":"string","required":true},
            "planningIncubation": {"dataType":"string","required":true},
            "planningPlatforms": {"dataType":"string","required":true},
            "logisticsTimeline": {"dataType":"string","required":true},
            "logisticsDuration": {"dataType":"string","required":true},
            "logisticsLocation": {"dataType":"string","required":true},
            "logisticsPlatform": {"dataType":"string","required":true},
            "logisticsInfrastructureBuilt": {"dataType":"string","required":true},
            "marketingBudget": {"dataType":"string","required":true},
            "marketingPrizeCategories": {"dataType":"string","required":true},
            "marketingPrizes": {"dataType":"string","required":true},
            "marketingGuidelines": {"dataType":"string","required":true},
            "marketingChannels": {"dataType":"string","required":true},
            "marketingActivities": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "dateCreated": {"dataType":"double","required":true},
            "dateUpdated": {"dataType":"double","required":true},
            "curStateRead": {"dataType":"array","array":{"dataType":"string"}},
            "curStateWrite": {"dataType":"array","array":{"dataType":"string"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocList": {
        "dataType": "refObject",
        "properties": {
            "count": {"dataType":"double","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"DocSummary"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocumentList": {
        "dataType": "refAlias",
        "type": {"ref":"DocList","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommentCreate": {
        "dataType": "refObject",
        "properties": {
            "topic": {"dataType":"string","required":true},
            "text": {"dataType":"string","required":true},
            "private": {"dataType":"boolean"},
            "approved": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocUpdate": {
        "dataType": "refObject",
        "properties": {
            "requestors": {"dataType":"array","array":{"dataType":"refObject","ref":"Requestor"}},
            "reviewers": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"}},
            "deliveryTeam": {"dataType":"array","array":{"dataType":"refObject","ref":"Person"}},
            "agreement": {"dataType":"boolean"},
            "planningMotivation": {"dataType":"string"},
            "planningObjectives": {"dataType":"double"},
            "planningAudience": {"dataType":"string"},
            "planningRules": {"dataType":"string"},
            "planningThemes": {"dataType":"string"},
            "planningChallenges": {"dataType":"string"},
            "planningWinningTopics": {"dataType":"string"},
            "planningIncubation": {"dataType":"string"},
            "planningPlatforms": {"dataType":"string"},
            "logisticsTimeline": {"dataType":"string"},
            "logisticsDuration": {"dataType":"string"},
            "logisticsLocation": {"dataType":"string"},
            "logisticsPlatform": {"dataType":"string"},
            "logisticsInfrastructureBuilt": {"dataType":"string"},
            "marketingBudget": {"dataType":"string"},
            "marketingPrizeCategories": {"dataType":"string"},
            "marketingPrizes": {"dataType":"string"},
            "marketingGuidelines": {"dataType":"string"},
            "marketingChannels": {"dataType":"string"},
            "marketingActivities": {"dataType":"string"},
            "title": {"dataType":"string"},
            "state": {"dataType":"string"},
            "comment": {"ref":"CommentCreate"},
            "attachments": {"dataType":"array","array":{"dataType":"refObject","ref":"AttachmentInfo"}},
            "$set": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocumentUpdate": {
        "dataType": "refAlias",
        "type": {"ref":"DocUpdate","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommentUpdate": {
        "dataType": "refObject",
        "properties": {
            "topic": {"dataType":"string"},
            "text": {"dataType":"string"},
            "private": {"dataType":"boolean"},
            "approved": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router,opts?:{multer?:ReturnType<typeof multer>}) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################

    const upload = opts?.multer ||  multer({"limits":{"fileSize":8388608}});

    
        const argsServicesController_getProfile: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                email: {"in":"path","name":"email","required":true,"dataType":"string"},
        };
        app.get('/api/profile/:email',
            ...(fetchMiddlewares<RequestHandler>(ServicesController)),
            ...(fetchMiddlewares<RequestHandler>(ServicesController.prototype.getProfile)),

            async function ServicesController_getProfile(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServicesController_getProfile, request, response });

                const controller = new ServicesController();

              await templateService.apiHandler({
                methodName: 'getProfile',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsActionController_createDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.post('/api/action/:id',
            ...(fetchMiddlewares<RequestHandler>(ActionController)),
            ...(fetchMiddlewares<RequestHandler>(ActionController.prototype.createDoc)),

            async function ActionController_createDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsActionController_createDoc, request, response });

                const controller = new ActionController();

              await templateService.apiHandler({
                methodName: 'createDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_createDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                body: {"in":"body","name":"body","required":true,"ref":"DocumentCreate"},
        };
        app.post('/api/:docType',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.createDoc)),

            async function DocumentController_createDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_createDoc, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'createDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_getDocs: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                match: {"in":"query","name":"match","dataType":"string"},
        };
        app.get('/api/:docType',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.getDocs)),

            async function DocumentController_getDocs(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_getDocs, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'getDocs',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_getDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/:docType/:id',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.getDoc)),

            async function DocumentController_getDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_getDoc, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'getDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_cloneDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/:docType/:id/copy',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.cloneDoc)),

            async function DocumentController_cloneDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_cloneDoc, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'cloneDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_copyDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                args: {"in":"body","name":"args","required":true,"ref":"DocumentUpdate"},
        };
        app.post('/api/:docType/:id/copy',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.copyDoc)),

            async function DocumentController_copyDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_copyDoc, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'copyDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_updateDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                args: {"in":"body","name":"args","required":true,"ref":"DocumentUpdate"},
        };
        app.patch('/api/:docType/:id',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.updateDoc)),

            async function DocumentController_updateDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_updateDoc, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'updateDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_deleteDoc: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/:docType/:id',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.deleteDoc)),

            async function DocumentController_deleteDoc(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_deleteDoc, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'deleteDoc',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_addComment: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                args: {"in":"body","name":"args","required":true,"ref":"CommentCreate"},
        };
        app.post('/api/:docType/:id/comment',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.addComment)),

            async function DocumentController_addComment(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_addComment, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'addComment',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_getComment: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                cid: {"in":"path","name":"cid","required":true,"dataType":"string"},
        };
        app.get('/api/:docType/:id/comment/:cid',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.getComment)),

            async function DocumentController_getComment(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_getComment, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'getComment',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_updateComment: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                cid: {"in":"path","name":"cid","required":true,"dataType":"string"},
                args: {"in":"body","name":"args","required":true,"ref":"CommentUpdate"},
        };
        app.patch('/api/:docType/:id/comment/:cid',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.updateComment)),

            async function DocumentController_updateComment(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_updateComment, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'updateComment',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_deleteComment: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                cid: {"in":"path","name":"cid","required":true,"dataType":"string"},
        };
        app.delete('/api/:docType/:id/comment/:cid',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.deleteComment)),

            async function DocumentController_deleteComment(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_deleteComment, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'deleteComment',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_getAttachments: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/api/docs/attachments',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.getAttachments)),

            async function DocumentController_getAttachments(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_getAttachments, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'getAttachments',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_getDocAttachments: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                docId: {"in":"path","name":"docId","required":true,"dataType":"string"},
        };
        app.get('/api/docs/:docId/attachments',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.getDocAttachments)),

            async function DocumentController_getDocAttachments(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_getDocAttachments, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'getDocAttachments',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_getDocAttachment: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                docId: {"in":"path","name":"docId","required":true,"dataType":"string"},
                attachmentId: {"in":"path","name":"attachmentId","required":true,"dataType":"string"},
        };
        app.get('/api/docs/:docId/attachments/:attachmentId',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.getDocAttachment)),

            async function DocumentController_getDocAttachment(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_getDocAttachment, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'getDocAttachment',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_deleteDocAttachments: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                docId: {"in":"path","name":"docId","required":true,"dataType":"string"},
                attachmentId: {"in":"path","name":"attachmentId","required":true,"dataType":"string"},
        };
        app.delete('/api/docs/:docId/attachments/:attachmentId',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.deleteDocAttachments)),

            async function DocumentController_deleteDocAttachments(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_deleteDocAttachments, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'deleteDocAttachments',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentController_createDocAttachments: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                docId: {"in":"path","name":"docId","required":true,"dataType":"string"},
                file: {"in":"formData","name":"file","required":true,"dataType":"file"},
        };
        app.post('/api/docs/:docId/attachments',
            upload.fields([
                {
                    name: "file",
                    maxCount: 1
                }
            ]),
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.createDocAttachments)),

            async function DocumentController_createDocAttachments(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_createDocAttachments, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'createDocAttachments',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
