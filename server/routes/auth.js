const path = require('path')
const express = require('express')
const request = require('superagent')
const {userExists, createUser}  = require('../../db/db')
const router = express.Router()
const server = express()


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get('/auth', (req, res) => {
  res.send('we are going somewhere')
})



router.post('/register', register)

function register (req, res) {
  // const {username, password} = req.body
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.username, req.body.password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
  // TODO: make sure username doesn't already exist
  // TODO: if not, hash the password and add the user to the database
}

// function register (req, res) {
//   request.get('/api/v1/auth/register')
//   .then(ApiRes => { 
//      res.json(ApiRes.body.image)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }


server.get('*', )