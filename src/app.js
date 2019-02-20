const path = require('path')
const express = require('express')
const logger = require('morgan')
const router = express.Router()


const app = express()


//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//middlewars
app.use(logger('dev'))

app.use('/',(req, res) => {
  res.send('Hola mundo el servidor esta corriendo')
})

//escchar al servidor
app.listen(app.get('port'), () => {
    console.log(`esta corriendo el servidor ${app.get('port')}`)
})
