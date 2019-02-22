const mongoose = require('mongoose')

let db

module.exports = () => {
  if(!db){
    db = mongoose.createConnection('mongodb://localhost:27017/coord')
  }

  return db
}
