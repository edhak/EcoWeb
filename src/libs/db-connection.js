const mongoose = require('mongoose')

let db

module.exports = () => {
  if(!db){
    db = mongoose.createConnection('mongoose://localhost:27017/coord')
  }

  return db
}
