call npm uninstall dlms-server dlms-base

copy ..\..\dlms-server\server\dlms-base-1.0.7.tgz .
copy ..\..\dlms-server\server\dlms-server-1.0.7.tgz .
call npm install dlms-base-1.0.7.tgz
call npm install dlms-server-1.0.7.tgz
