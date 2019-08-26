'use strict';

const isValid = require('./isValid');
const express = require('express');
const router = express.Router();


// Route to Get All Categories
/**
 * This is a route to get categories
 * @name categories
 * @param req
 * @param res
 * @param next
 */
router.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category

/**
 * This is a route to post categories
 * @function
 * @name categories
 * @param req
 * @param res
 * @param next
 */
router.post('/categories', isValid, (req, res, next) => {
  let record = req.body;
  console.log('I am app.post /categories');
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

module.exports = router; 

