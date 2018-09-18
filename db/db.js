// const connection = require('./connection')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)
const hash = require('../server/routes/auth')



function getComics() {
  // return request.get('/comics'){
    // console.log(db('comics').select(comicImage))
    // return db('comics').select()
    // res.body
  // }

  return db('comics').select()
 }

 function getArticles(){
return db('mainwords').select()
 }
 
 function getQuoteNames(){
   return db('dtwords').select()
 }

//  server.get('/comics', (req, res) => {
//  }
// server/db/users.js


function createUser (users, password) {
  const passwordHashed = hash.generate(password)
  console.log('Hi 22');
  return db('users')
    .insert({users, hash: passwordHashed})
}

function userExists (users) {
  return db('users')
    .count('id as n')
    .where('users', users)
    .then(count => {
      return count[0].n > 0
    })
}


module.exports = {
  getComics,
  getArticles,
  getQuoteNames,
  createUser,
  userExists
  
}