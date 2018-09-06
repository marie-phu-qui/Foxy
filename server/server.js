const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const apiEndpointBase = 'https://randomfox.ca/floof/'

// {"image":"http:\/\/randomfox.ca\/images\/57.jpg","link":"http:\/\/randomfox.ca\/?i=57"}


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/fox', (req, res) => {
  request.get(apiEndpointBase + 'fox')
  .then(ApiRes => { 
    res.json(ApiRes.body)
  })
  .catch(err => {
    console.log(err)
  })
})



module.exports = server
