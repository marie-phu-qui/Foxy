const router = require('express').Router()
const request = require('superagent')

const db = require('../db/db')


router.get('/', (req, res) => {
  db.getArticles()
    .then(articles => {
      let randomArticleObject = articles[Math.floor(Math.random() * 22)]
      res.json(randomArticleObject.article)
    })
})


router.get('/fox', (req, res) => {
  request.get('https://randomfox.ca/floof/')
    .then(ApiRes => {
      res.json(ApiRes.body.image)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router