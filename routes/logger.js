'use strict';

/**
 * This is function to print the timelog with request details
 * @function
 * @name logger
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  console.log(`TIMELOG: ${req.method} :: ${req.path} :: ${req.requestTime}`);
  next();
};
