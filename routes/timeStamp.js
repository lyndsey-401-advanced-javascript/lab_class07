'use strict';

/**
 * This is function that logs paths and the request time
 * @function
 * @name timeStamp
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
//our middleware function to log paths and time
  req.requestTime = new Date();
  next();
};
