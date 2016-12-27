'use strict';
const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    routes = require('./routes/team-router'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000); //Defino puerto

let app = express(); //Mi instancia de Express con la que trabajaré.

app
    .set( 'views', viewDir ) //Defino donde estarán las vistas
    .set( 'view engine', 'pug' ) //Defino el motor de vistas
    .set( 'port', port ) //Defino el puerto

    .use( bodyParser.json() ) //Manipular envio de info en JSON
    .use( bodyParser.urlencoded({ extended: false }) ) //Forms podrán enviar variables.
    .use( publicDir ) //Seteo el directorio publico
    .use( favicon ) //Seteo Favicon
    .use( morgan('dev') ) //config morgan en fase dev
    .use( restFul)
    .use( routes);    //que use mis rutas
module.exports = app;