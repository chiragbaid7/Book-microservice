const mongoose = require('mongoose');

class Database{
    constructor() {
        this._connect()
    }
    _connect(){
        mongoose.connect(
            'mongodb://mongo:27017/user_events',
            {
                useNewUrlParser: true, useUnifiedTopology: true
            })
            .then(()=>console.log("success"))
            .catch(()=>console.log("failure"))
    }
}

module.exports = new Database()