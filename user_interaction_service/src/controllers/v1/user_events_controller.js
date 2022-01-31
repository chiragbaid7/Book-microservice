const service = require('../../service/user_events_services')

exports.likecontentcontroller = async(req,res,next)=>{ 
    try{
        const user_id = req.user_id;
        const content_id = req.query.content_id
        const data = await service.updatelike(content_id, user_id)
        res.status(201).json({success:true})
    } catch(err){
        next(err)
    }
}

exports.readcontentcontroller = async(req,res,next)=>{ 
    try{
        const user_id = req.user_id;
        const content_id = req.query.content_id
        const data = await service.updateread(content_id, user_id)
        res.status(201).json({success:true})
    } catch(err){
        next(err)
    }
}

exports.getcontentlikes = async(req,res,next)=>{
    
    try{
        const content_id = req.params.content_id
        const data = await service.getcontentlikes(content_id)
        res.status(201).json({result:data})
    } catch(err){
        next(err)
    }
}

exports.getcontentreads = async(req,res,next)=>{
    
    try{
        const content_id = req.params.content_id
        const data = await service.getcontentreads(content_id)
        res.status(201).json({result:data})
    } catch(err){
        next(err)
    }
}

exports.toplikedcontents = async(req,res,next)=>{
    try{
       const data = await service.getpopularlikescontents();
        res.status(201).json({result:data})
    }catch(err){
        next(err)
    }
}

exports.topreadcontents = async(req,res,next)=>{
    try{
        console.log("yaha pahuch")
        const data = await service.getpopularreadcontents();
        res.status(201).json({result:data})
    }catch(err){
        next(err)
    }
}


