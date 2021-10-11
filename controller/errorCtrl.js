const fs = require('fs');

module.exports = (err,req,res,next) => {
  	err.statusCode = err.statusCode || 500;
  	err.status = err.status || 'error';

  	//console.log(err);
  	if(err.code=='11000')
  		return res.render('error');

  	res.status(err.statusCode).json({
  		error : err.message
  	});
 }