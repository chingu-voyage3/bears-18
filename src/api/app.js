var express = require('express');
var jwt = require('jsonwebtoken');
var route = require('./routes');


var app = express();
var port = 8500;
var authRoutes = express.Router();
var apiRoutes = express.Router();

app.listen(port);

route(app, authRoutes, apiRoutes);

//TODO: backend validation
//TODO: how to make a request for token after expiration
//TODO: check how to make only a particular domain to access the api url
//TODO: insert the database
//TODO: sanitize the incoming using dompurify and jsdom
// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
 
// const window = (new JSDOM('')).window;
// const DOMPurify = createDOMPurify(window);
 
// const clean = DOMPurify.sanitize(dirty);
//TODO: process image on the server side
//TODO: process of image uploading