const events = require('../domain/user_events_data');

exports.updatelike = async(content_id, user_id)=>{
    const data = await events.updatelike(content_id, user_id);
    return data
}

exports.updateread = async(content_id, user_id)=>{
    const data = await events.updateread(content_id, user_id);
    return data
}

exports.getpopularlikescontents = async()=>{
    const data = await events.getpopularlikescontents();
    return data;
}

exports.getpopularreadcontents = async()=>{
    const data = await events.getpopularreadcontents();
    return data;
}

exports.getcontentlikes = async(content_id)=>{
    const data = await events.getcontentlikes(content_id)
    return data;
}

exports.getcontentreads = async(content_id)=>{
    const data = await events.getcontentreads(content_id)
    return data;
}