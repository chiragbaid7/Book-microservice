const repo = require('../domain/content_data');
const {development} = require('../config/config')
const axios = require('axios');

exports.createcontent = async(title,story,user_id)=>{
    const data = await repo.createcontent(title,story,user_id);
    return data;
}

exports.getcontent = async(content_id)=>{
    const data = await repo.getcontentbyid(content_id)
    return data;
}

exports.updatetitle = async(content_id,title)=>{
    await repo.updatetitle(content_id,title)
}

exports.updatestoty = async(content_id,story)=>{
    await repo.updatestory(content_id,story)
}

exports.getnewcontents = async()=>{
    const data = await repo.sortcontentnew();
    return data;
}

exports.gettoplikedcontents = async()=>{

    // fetch top liked content ids from User interaction service
    // through API Composition other methods can also be used like 
    // #TODO: CQRS to query data from different microservices. 

    const {data} = await axios.get(`${development.internal_like_api}`)
    const contents_ids_list = [];
    data.data.forEach(element => {
        contents_ids_list.push(element.content_id);
    });
    // get all the content ids and then prepare the query for getting top contents
    const contents = await repo.toplikedcontent(contents_ids_list);

    // preserve all contents in ordered fashion. - O(N*N) time complexity 
    const ordered_contents = []
    data.data.forEach(element=>{
        contents.forEach(content=>{
            if(element.content_id==content._id){
                ordered_contents.push(content);
            }
        })
    })
    return ordered_contents;
}

exports.gettopreadcontents = async()=>{

    // fetch top liked content ids from User interaction service
    // through API Composition other methods can also be used like 
    // #TODO: CQRS to query data from different microservices. 

    const {data} = await axios.get(`${development.internal_read_api}`)
    const contents_ids_list = [];

    data.data.forEach(element => {
        contents_ids_list.push(element.content_id);
    });

    // get all the content ids and then prepare the query for getting top contents
    const contents = await repo.topreadcontent(contents_ids_list);
    const ordered_contents = []

    data.data.forEach(element=>{
        contents.forEach(content=>{
            if(element.content_id==content._id){
                ordered_contents.push(content);
            }
        })
    })
    return ordered_contents;
}

exports.deletecontent = async(content_id)=>{

    const data = await repo.deletecontent(content_id)
    return data;
}
