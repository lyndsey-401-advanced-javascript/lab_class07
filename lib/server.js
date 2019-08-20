'use strict';

const express = require('express');
const app = express();

let db = [];

app.use(express.json());

// Route to Get All Categories
app.get('/categories', (req, res, next) => {
    let count = db.length;
    let results = db;
    res.json({ count, results });
  });
  
// Route to Create a Category
app.post('/categories', (req, res, next) => {
    let record = req.body;
    record.id = Math.random();
    db.push(record);
    res.json(record);
});


module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log('I\'m listening'));
    },
};
