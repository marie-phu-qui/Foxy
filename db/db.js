const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)



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

module.exports = {
  getComics,
  getArticles,
  getQuoteNames
}