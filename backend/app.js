const express = require("express");
const app = express();

const cookieParser = require('cookie-parser')

//import the error MiDDLEWARE
const errorMiddleware = require('./middlewares/error')

//import all routes
const users = require('./routes/userRoutes.js')

app.use(express.json())
app.use(cookieParser())


app.use('/api/v1/', users)

app.use(errorMiddleware)

module.exports = app;