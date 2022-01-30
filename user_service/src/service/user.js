const {NotFound, Unauthorized, BadRequest} = require('../utils/error/api-error');
const {MessageBroker} = require('../utils/publisher')
const repo = require('../domain/user_data');

exports.createuser = async(payload)=>{
        const user = await repo.getuserbymail(payload.email);
        if(user){
            throw new BadRequest(description="User already exists")
        }
        const data = await repo.createuser(payload);
        const msg = await new MessageBroker().init();
        await msg.publisher({email:data.email,message:"Hi there"})
        return data;
}

exports.authuser = async(payload)=>{
    const data = await repo.getuserbymail(payload.email);
    if(!data){
        throw new Unauthorized(description="No such email id exits") 
    }
    const user = await repo.checkuser(payload);
    if(!user){
        throw new Unauthorized(description = "Authentication failes, wrong password")
    }
    return user;
}

exports.getuser = async(id)=>{
    const data = await repo.getuserbyid(id);
    if(!data){    
            throw new NotFound(description=`${id} not found`)
    }
    return data;
}

exports.listofusers = async()=>{
    const data = await repo.getlistofusers();
    return data;
}

exports.deleteuser = async(id)=>{
    const user = await repo.getuserbyid(id);
    if(!user || user === null){    
            throw new NotFound(description=`${id} not found`)
    }
    const data = await repo.deleteuser(id); 
    return data;
}

exports.updatephone = async(user_id, newphone)=>{
    const data = await repo.updatephone(user_id, newphone);
    return data;
}

exports.updatename = async(user_id, newname)=>{
    const data = await repo.updatename(user_id, newname);
    return data;
}

exports.updatepassword = async(user_id, newpassword)=>{
    const data = await repo.updatepassword(user_id, newpassword);
    return data;
}