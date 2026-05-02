call npm uninstall dlms-server dlms-base

copy ..\..\dlms-server\server\dlms-base-2.0.2.tgz .
copy ..\..\dlms-server\server\dlms-server-2.0.2.tgz .
call npm install dlms-base-2.0.2.tgz
call npm install dlms-server-2.0.2.tgz
