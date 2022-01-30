const {Schema,model} = require('mongoose') 

const UserEvents = new Schema({
    content_id:{
        type: Schema.Types.ObjectId,
        index:true,
        required: true
    },
    liked_by:[{ 
        type: Schema.Types.ObjectId,
    }],
    read_by:[{ 
        type: Schema.Types.ObjectId, 
    }]
})

module.exports = model('UserEvent',UserEvents)