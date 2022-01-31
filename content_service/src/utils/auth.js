const jwt = require("jsonwebtoken");
const {development} = require('../config/config');
const { Unauthorized } = require("./error/api-error");

exports.verifyToken = async(req,res,next) =>{
    try {     
      const jwtToken = req.headers.authorization.split(" ")[1];
      const {user_id} = await jwt.verify(jwtToken, development.privateKey)
      if(user_id===null){
        throw new Error;
      }
      req.user_id = user_id;
      next();
    } catch(err) {
        next(new Unauthorized(description="Unauthorized!!!"));
    }
}