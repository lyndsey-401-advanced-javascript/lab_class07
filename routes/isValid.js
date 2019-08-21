'use strict';

//random boolean funct. 
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

