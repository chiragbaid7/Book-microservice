const service = require('../service/content')

exports.createcontentcontroller = async(req,res,next)=>{
    try {
        const user_id = req.user_id;
        const {title,story} = req.body;
        const data = await service.createcontent(title,story,user_id)
        res.status(201).json({result:data})
    } catch(err){
        next(err)
    }
}

exports.getcontentcontroller = async(req,res,next)=>{
    try{
       const data = await service.getcontent(req.params.content_id)
       res.status(201).json({result:data}) 
    }catch(err){
        next(err)
    }
}

exports.getnewcontentscontroller = async(req,res,next)=>{
    try {
        const data = await service.getnewcontents();
        res.status(201).json({result:data})
    }catch(err){
        next(err);
    }
}

exports.updatestory = async(req,res,next)=>{
    try{
        const {story} = req.body;
        const content_id = req.params.content_id;
        const data = await service.updatestoty(content_id,story)
        res.status(200).json({success:true})
    }catch(err){
        next(err)
    }
}

exports.updatetitle = async(req,res,next)=>{
    try{
        const {title} = req.body;
        const content_id = req.params.content_id;
        const data = await service.updatetitle(content_id,title)
        res.status(200).json({success:true})
    }catch(err){
        next(err)
    }
}

exports.gettoplikedcontents = async(req, res,next)=>{
    try{
        const data = await service.gettoplikedcontents(); 
        res.status(201).json({result:data})
    }catch(err){
        next(err)
    }
} 

exports.gettopreadcontents = async(req, res,next)=>{
    try{
        const data = await service.gettopreadcontents(); 
        res.status(201).json({result:data})
    }catch(err){
        next(err)
    }
} 

exports.deletecontent = async(req,res,next)=>{
    try{
        const content_id = req.query.content_id;
        const data = await service.deletecontent(content_id); 
        res.status(201).json({success:true})
    }catch(err){
        next(err)
    }
}