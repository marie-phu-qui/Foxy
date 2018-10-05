const router = require('express').Router()
const db = require('../db/db')


router.get('/quote', (req, res) => {
    request.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        .then(ApiRes => {
            res.json(ApiRes.body.message)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/quote/names/', (req, res) => {
    db.getQuoteNames()
        .then(names => {
            res.json(names[Math.floor(Math.random() * 21)].trumps)
        })
})

module.exports = router
