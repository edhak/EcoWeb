const path = require('path')
const express = require('express')
const logger = require('morgan')

const app = express()

const primary = require('./routes/primary')



//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//middlewars
app.use(logger('dev'))

//Organizando las rutas hemos redireccionado las rutas de primary
app.use('/', primary)


//escucha al servidor
app.listen(app.get('port'), () => {
    console.log(`esta corriendo el servidor ${app.get('port')}`)
})
