const express = require('express');
const app = express();

const MessageBroker = require('./utils/subscriber')

app.use(express.json());

async function main(){
    const msg = await new MessageBroker().init();
    const data = await msg.subscribe();
    console.log("Success", data); 
}

main().catch((error)=>console.log(error))

app.listen(4000)