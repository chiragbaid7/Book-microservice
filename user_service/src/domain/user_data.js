const User = require('./UserSchema');

exports.createuser = async({name,email,password,phoneno})=>{
    const doc = new User({
        name: name,
        email:email,
        password:password,
        phoneno:phoneno
    });
    const data = await doc.save();
    return data;
}

exports.checkuser = async({email,password})=>{
    const data = await User.findOne({email, password});
    return data;
}

exports.getuserbyid = async(id)=>{
    const data = await User.findById(id,'name email phoneno').exec()
    return data;
}
exports.getuserbymail = async(email)=>{
    const data = await User.findOne({email:email}, '_id name')
    return data;
}

exports.getlistofusers = async()=>{
    const data = await User.find({},'-password -phoneno');
    return data;
}

exports.deleteuser = async(id)=>{
    const data = await User.findByIdAndDelete(id);
    return data;
}


exports.updatename = async(id,newname)=>{
    const data = await User.findOneAndUpdate(
        {id:id},
        {name:newname},
        {new:true}
    )
    return data;

}

exports.updatephone = async(id,newphone)=>{
    const data = await User.findOneAndUpdate(
        {id:id},
        {phone:newphone},
        {new:true}
    )
    return data;

}

exports.updatepassword = async(id,newpassword)=>{
    const data = await User.findOneAndUpdate(
        {id:id},
        {password:newpassword},
        {new:true}
    )
    return data;

}
