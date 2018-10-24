const path = require('path')
const express = require('express')
const request = require('superagent')
const db = require('./db/db')
// const auth = require('./routes/auth')
const server = express()
const { userExists, createUser } = require('./db/db')
// const sodium = require('sodium').api


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/quote', require('./routes/quotes'))
server.use('/article', require('./routes/article'))


// server.use('/auth', auth)

// function generate (password) {
//   const passwordBuffer = Buffer.from(password, 'utf8')
//   return sodium.crypto_pwhash_str(
//     passwordBuffer,
//     sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
//     sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
//   )
// }

server.get('/register', (req, res) => {
  res.send('we are going somewhere')
})


server.post('/register', (req, res) => {
  userExists(req.body.users)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.users, req.body.password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
})


server.get('/comics', (req, res) => {
  db.getComics()
    .then(comics => {
      res.json(comics)
    })
    .catch(err => {
      console.log(err)
    })
})


server.get('/ad', (req, res) => {
  request.get('http://itsthisforthat.com/api.php?json')
    .then(ApiRes => {
      let response = JSON.parse(ApiRes.text)
      let randomThis = response.this
      let randomThat = response.that
      const adText = 'Looking for ' + randomThis + ' for ' + randomThat + '. Please.'
      res.json(adText)
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = {
  server
}
