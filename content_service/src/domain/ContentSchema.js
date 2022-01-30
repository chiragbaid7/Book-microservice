const {Schema,model} = require('mongoose') 

const ContentSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    story:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
},{timestamps: true}
)
module.exports = model('Content', ContentSchema)