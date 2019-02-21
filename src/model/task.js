const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = Schema({
  idUser: String,
  advertencia: String,
  coords: {
    lan: String,
    lng: String
  }
})
