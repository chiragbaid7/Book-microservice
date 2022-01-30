const amqplib = require('amqplib');
const {sendEMail} = require('./email')

//create a TCP connection 
// create a channel with connection instance 
// create a queue data structure to send data to the msg broker

class MessageBroker{
    constructor(){
        this.channel;
        this.queue="email"
    }
    async init(){    
        this.connection = await amqplib.connect('amqp://rabbitmq')
        this.channel = await this.connection.createChannel()
        await this.channel.assertQueue(this.queue)
        return this
    }
    async subscribe(){
        const res = this.channel.consume(this.queue,async(a)=>{
        const data = JSON.parse(a.content.toString());
        const info = await sendEMail(data);
        this.channel.ack(a)
        return info;
        })
    return res;
    }
}

module.exports= MessageBroker;
