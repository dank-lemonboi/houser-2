require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      checkForSession = require('./middlewares/checkForSession'),
      authCtrl = require('./controllers/authController')
      houseCtrl = require('./controllers/houseController')

      const {
            SERVER_PORT,
            CONNECTION_STRING,
            SESSION_SECRET
      } = process.env

  

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.use(session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
            maxAge: 259200
      }
}))

app.use(checkForSession)

app.get('/api/me', authCtrl.userValidate)
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.post('/api/auth/logout', authCtrl.logout)

app.get('/api/house/read', houseCtrl.getHouses)
app.post('/api/house/create', houseCtrl.newHouse)
app.delete('/api/house/delete', houseCtrl.delete)


massive(CONNECTION_STRING).then( db => {
      app.set('db', db)
      app.listen(SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}...`)});
})

