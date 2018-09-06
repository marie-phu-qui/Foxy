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



module.exports = server
