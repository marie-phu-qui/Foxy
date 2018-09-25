const router = require('express').Router()
const db = require('../db/db')

const request = require('superagent')

router.get('/', (req, res) => {
    request.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        .then(ApiRes => {
            res.json(ApiRes.body.message)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/names', (req, res) => {
    db.getQuoteNames()
        .then(names => {
            res.json(names[Math.floor(Math.random() * 21)].trumps)
        })
})

module.exports = router
