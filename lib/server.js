'use strict';

const express = require('express');
const app = express();

let db = [];

//our middleware function to log paths and time
const timeStamp = (req, res, next) => {
    req.requestTime = new Date();
    next();
}

const logger = (req, res, next) => {
    console.log(`TIMELOG: ${req.method} :: ${req.path} :: ${req.requestTime}`);
    next();
}

app.use(express.json());
app.use(timeStamp);
app.use(logger);


//random boolean funct. 
const isValid = (req, res, next) => {
    let randomBoolaen = Boolean(Math.round(Math.random()));
    console.log('boolean is here');
   
    if (randomBoolaen === true){
            res.send('yay cows!');
    }
   
    if (randomBoolaen === false){
            res.status(500).send(err);
    }
    
    next();
};


// Route to Get All Categories
app.get('/categories', (req, res, next) => {
    let count = db.length;
    let results = db;
    res.json({ count, results });
});
        
// Route to Create a Category
app.post('/categories', isValid, (req, res, next) => {
    let record = req.body;
    console.log('I am app.post /categories');
    record.id = Math.random();
    db.push(record);
    res.json(record);
});

//error 404 - not found (route error)
app.use('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});

//error 500 - internal (server side) error
app.use((err, req, res, next) => {
    res.status(500).send(err);
});


module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log('I\'m listening'));
    },
};
