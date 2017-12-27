const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const queries = require('./queries.js')
router.use(express.static('public'))

router.get('/cookies/', queries.getCookie)

router.get('/cookies/:id', queries.getCookieID)

router.post('/cookies/',queries.addCookie)

router.put('/cookies/:id', queries.updateCookie)

router.delete('/cookies/:id', queries.deleteCookie)


module.exports = router
