const Content = require('./ContentSchema');

exports.createcontent = async(title,story,user_id)=>{
    const doc = new Content({
        title:title,
        story:story,
        user_id: user_id
    })
    const data = await doc.save()
    return data
}

exports.getcontentbyid = async(content_id)=>{
    const data = await Content.findById({_id:content_id})
    return data
}

exports.sortcontentnew = async()=>{
    const data = await Content.find({}).
                sort({createdAt:'desc'}).exec()
    return data
}

exports.updatetitle = async({content_id,newtitle})=>{
    const data = await Content.findByIdAndUpdate(
        {_id:content_id},
        {title: newtitle}
    )
    return data;
}

exports.updatestory = async({content_id,newstory})=>{
    const data = await Content.findByIdAndUpdate(
        {_id:content_id},
        {story: newstory}
    )
    return data;
}

exports.deletecontent = async(content_id)=>{
    const data = await Content.findByIdAndDelete(
        {_id:content_id}
    )
    return data;
}

exports.toplikedcontent = async(contents_ids_list)=>{
   const data = await Content.find({
       '_id':{ 
           $in: contents_ids_list
       }
   },'_id title story user_id')

   return data;
}

exports.topreadcontent = async(contents_ids_list)=>{
   const data = await Content.find({
       '_id':{ 
           $in: contents_ids_list
       }
    },'_id title story user_id') 
   return data;
}
