const process = require('process');
const path = require('path');
require('dotenv').config({path: path.join(__dirname,'../../.env')});

module.exports = {
    development: {
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        dialect : process.env.DIALECT,
        host: process.env.HOST,
        db_port: process.env.DB_PORT,
        port: process.env.PORT,
        privateKey: process.env.privateKey,
        internal_like_api: process.env.INTERNAL_LIKE_API,
        internal_read_api: process.env.INTERNAL_READ_API
    }
}