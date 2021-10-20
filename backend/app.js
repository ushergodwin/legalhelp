const express = require("express");
const app = express();

app.use(express.json())

//import all routes
const users = require('../routes/userRoutes.js')

app.use('api/v1/', users)

module.exports = app;