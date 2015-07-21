#!/bin/bash

IP_ADDRESS=$(ifconfig eth0 | grep "inet addr" | cut -d ':' -f2 | cut -d ' ' -f1)

sed -i "2s/^/var ip_address=\"$IP_ADDRESS\";\n/" /server.js

exec node server.js
