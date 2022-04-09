const express = require('express');
const EventEmitter = require('events')
const app = express();
// EventEmitter
const eventEmitter = new EventEmitter()

eventEmitter.on('start',()=>{
    console.log('events call')
})

function e (){
    eventEmitter.emit('start')
}
e()



app.listen(3000)