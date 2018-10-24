const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)
const hash = require('../routes/auth')



function getComics() {
  return db('comics').select()
 }

 function getArticles(){
return db('mainwords').select()
 }
 
 function getQuoteNames(){
   return db('dtwords').select()
 }



function createUser (users, password) {
  const passwordHashed = hash.generate(password)
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