'use strict';

//random boolean funct.

/**
 * This is function to return a random boolean and send an error is false
 * @function
 * @name isValid
 * @param req
 * @param res
 * @param next
 */
module.exports =  (req, res, next) => {
    
  let randomBoolaen = Boolean(Math.round(Math.random()));
  
  //console.log('boolean is here');
   
  if (randomBoolaen === true){
    res.send('yay cows!');

  } else {

    res.status(500).send(err);
  }
    
  next();
};

