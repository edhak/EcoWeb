const db = require('../libs/db-connection')()
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TaskSchema = Schema({
  idUser: String,
  advertencia: String,
  coords: {
    lat: String,
    lng: String
  }
})

module.exports = db.model('tasks', TaskSchema)
