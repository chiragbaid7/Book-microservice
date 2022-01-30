const jwt = require("jsonwebtoken");
const { Unauthorized } = require('../utils/error/api-error');
const {development} = require('../config/config');

exports.verifyToken = async(req,res,next) =>{
    try {
        if(req.headers.authorization===undefined){
            throw new Unauthorized(description = "No user_id given")
        }
      const jwtToken = req.headers.authorization.split(" ")[1];
      const {user_id} = await jwt.verify(jwtToken, development.privateKey)
      if(user_id===null){
        throw new Unauthorized(description="UNauthorized");
      }
      req.user_id = user_id;
      next();
    } catch(err) {
        next(err);
    }
}