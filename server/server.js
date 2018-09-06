const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()




server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/', (req, res) => {
  request.get('https://randomfox.ca/floof/')
  .then(ApiRes => { 
     res.json(ApiRes.body.image)
  })
  .catch(err => {
    console.log(err)
  })
})

// let io = require ('socket.io')(http);

// io.on('connection', function(socket){
//   socket.on('new-message', function(msg){
//     io.emit('receive-message', msg);
//   })
// })



module.exports = server
