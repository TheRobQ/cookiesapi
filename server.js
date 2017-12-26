'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const router = require('./server/routes.js')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bees knees"`)
})



module.exports = app;
