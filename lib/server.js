'use strict';

const express = require('express');
const app = express();
const logger = require('../routes/logger');
const timeStamp = require('../routes/timeStamp');
const categoryRoutes = require('../routes/category-routes');


let db = [];

//documentation .use

app.use(express.json());
app.use(timeStamp);
app.use(logger);
app.use(categoryRoutes);

app.use('/docs', express.static('./docs'));

//error 404 - not found (route error)
//app.use - says "hey express, take this into account"
/**
 * middleware that catches all unused routes with a 404
 * @function
 * @param req
 * @param response
 */
app.use('*', (req, res) => {
  res.status(404).send('404');
});

/**
 * middleware that handles errors
 * @function
 * @param err
 * @param req
 * @param res
 * @param next
 */
//error 500 - internal (server side) error
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

/**
 * function to start server
 * @type {{server: *, start: start}}
 */
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3003; //port as an argument to function, port as .env variable, local host 3000 as port
    //app.listen tells express to listen to requests from any client 
    //a port is a discreet pathway an http request folllow from application to web (computer to application)
    app.listen(PORT, () => console.log('I\'m listening'));
  },
};
