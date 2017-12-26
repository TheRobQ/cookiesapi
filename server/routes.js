const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const queries = require('../server/queries.js')

router.get('/cookies/', queries.getCookie)

router.get('/cookies/:id', queries.getCookieid)

router.post('/cookies/',queries.addCookie)//no touchy

router.put('/cookies/', queries.updateCookie)

router.delete('/cookies/:id', queries.deleteCookie)


module.exports = router
