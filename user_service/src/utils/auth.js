const jwt = require("jsonwebtoken");
const { Unauthorized } = require("./error/api-error");
const {development} = require('../config/config');

exports.generateToken = async(user_id) =>{ 
    const jwtToken = await jwt.sign(
        {user_id: user_id},
        development.privateKey,
        {expiresIn: 60*60},
    )
    return jwtToken;
}
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