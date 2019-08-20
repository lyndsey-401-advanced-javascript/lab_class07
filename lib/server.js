'use strict';

const express = require('express');
const app = express();

let db = [];

app.use(express.json());

//our middleware function to log paths and time
const requestTime = (req, res, next) => {
    let timeStamp = getFormattedDate();
    console.log(`TIMELOG: ${req.method} :: ${req.path} :: ${timeStamp}`);
    next();
}

function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return str;
}

// Route to Get All Categories
app.get('/categories', requestTime, (req, res, next) => {
    let count = db.length;
    let results = db;
    res.json({ count, results });
  });
  
// Route to Create a Category
app.post('/categories', requestTime, (req, res, next) => {
    let record = req.body;
    record.id = Math.random();
    db.push(record);
    res.json(record);
    // next();
});


module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log('I\'m listening'));
    },
};
