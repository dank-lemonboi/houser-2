require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      checkForSession = require('./middlewares/checkForSession'),
      ctrl = require('./controllers/authController')

      const {
            SERVER_PORT,
            CONNECTION_STRING,
            SESSION_SECRET
      } = process.env

  massive(CONNECTION_STRING).then( db => {
            app.set('db', db)
      })

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

 
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)


app.listen(SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}...`)});

