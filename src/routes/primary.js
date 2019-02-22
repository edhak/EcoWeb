const express = require('express')
const router = express.Router()
const Task = require('../model/task')

router.get('/', (req,res) =>{
  res.render('index')
})

router.get('/information', (req, res) => {
  res.render('information')
})

router.get('/ecoApp', (req, res) => { //como hacer funcionar con un boton?
  res.render('ecoApp')
})

router.get('/gracias', (req, res) => { //como hacer funcionar con un boton?
  res.render('gracias')
})

router.get('/respuestas', (req, res) => { //como hacer funcionar con un boton?
  res.render('respuestas')
})

router.post('/ecoApp/add', async (req, res, next) => {
  let body = req.body
  let datos = {
    idUser : body.idUser,
    advertencia: body.adv,
    coords:{
      lat: body.lat,
      lng: body.lng
    }
  }
  const task = new Task(datos)
  console.log(req.body)
  console.log(task)

  await task.save()

  console.log("se guardo")
  res.redirect('/gracias')

})

module.exports = router
