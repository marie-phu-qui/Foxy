const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get('/', (req, res) => {
  res.send('we are going somewhere')
})


server.post('/', register)



function register (req, res) {
  request.get('/api/v1/auth/register')
  .then(ApiRes => { 
     res.json(ApiRes.body.image)
  })
  .catch(err => {
    console.log(err)
  })
}


server.get('*', )