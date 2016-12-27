"use strict";
const app = require('./app'),
    server = app.listen( app.get('port'), () => console.log(`Starting API REST in ${app.get('port')} port`));