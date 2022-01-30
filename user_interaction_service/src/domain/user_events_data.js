const User_Events = require('./UserEventsSchema')

exports.updatelike = async(content_id,user_id)=>{

    const options =  {upsert: true, new: true, setDefaultsOnInsert: true};
    const data = await User_Events.findOneAndUpdate(
       {content_id: content_id},
       {$addToSet:{liked_by:user_id}},
       options 
    );
    return data;
}

exports.updateread = async(content_id,user_id)=>{
    const options =  {upsert: true, new: true, setDefaultsOnInsert: true};
    const data = await User_Events.findOneAndUpdate(
       {content_id:content_id},
       {$addToSet:{read_by:user_id}},
       options 
    );
    return data;
}

exports.getcontentlikes = async(content_id)=>{
    const data = await User_Events.findOne({content_id:content_id},'liked_by')
    return data
}

exports.getcontentreads = async(content_id)=>{
    const data = await User_Events.findOne({content_id:content_id},'read_by')
    return data
}

exports.getpopularlikescontents = async()=>{
    const data = await User_Events.aggregate([
        {
            $project:{
                _id:0,
                content_id: 1,
                liked_by:1,
                length:{$size:'$liked_by'}
            }
        },
        {$sort:{length:-1}}
    ])
    return data;
}

exports.getpopularreadcontents = async()=>{
    const data = await User_Events.aggregate([
        {
            $project:{
                _id:0,
                content_id: 1,
                read_by:1,
                length:{$size:'$read_by'}
            }
        },
        {$sort:{length:-1}}
    ])
    return data;
}