const { JsonWebTokenError } = require('jsonwebtoken');
const {BaseError,INTERNAL,NotFound} = require('./api-error')

exports.pageNotfound = async(req,res,next) => {
    const err = new NotFound(description="Page not found")
    next(err);
}


exports.ErrorHandler = async(error,req,res,next)=>{ 
    if(error instanceof BaseError){
        return res.status(error.statuscode).json({error:error});
    } 
    res.status(500).json({error:new INTERNAL()})
}