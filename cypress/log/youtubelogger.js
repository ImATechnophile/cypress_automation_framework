const logger = require('./logger');
// const productionLoggerFile = require('./productionLoggerFile')

var log = null;

if (process.env.NODE_ENV !== 'production') {
    log = logger();
  }

//   if (process.env.NODE_ENV === 'productionLoggerFile') {
//     logger = productionLoggerFile();
//   }


  module.exports=log;