const config = require('../../knexfile').development
const db = require('knex')(config)

function getComics() {
  // return request.get('/comics'){
    // console.log(db('comics').select(comicImage))
    // return db('comics').select()
    // res.body
  // }

  return db('comics').select()
 }


//  server.get('/comics', (req, res) => {
//  }

module.exports = {
  getComics
}