const express = require('express')
const router = express.Router()

const model = require('../model/task')

router.get('/', (req,res) =>{
  res.render('index')
})

router.get('/information', (req, res) => {
  res.render('information')
})

router.get('/ecoApp', (req, res) => { //como hacer funcionar con un boton?
  res.render('ecoApp')
})

router.post('/ecoApp/add', (req, res) => {
  let body = req.body
  
})

module.exports = router
