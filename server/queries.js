const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const favorite = require('./favorites.js')

const getCookie = (req, res, next) =>{
  res.status(200).send('you got all cookies')
}

const getCookieID = (req, res, next) =>{
  res.status(200).send('You got one cookie')
}

const addCookie = (req, res, next) => {
  res.status(200).send('you added a cookie')
}

const updateCookie = (req,res,next) =>{
  res.status(200).send('you updated a cookie')
}

const deleteCookie = (req,res,next) =>{
  res.status(200).send('you deleted a cookie')
}

module.exports = {
getCookie,
getCookieID,
addCookie,
updateCookie,
deleteCookie
}
