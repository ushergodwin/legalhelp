const express = require("express");
const app = express();

//import the error MiDDLEWARE
const errorMiddleware = require('./middlewares/error')

//import all routes
const users = require('./routes/userRoutes.js')
const blog = require('./routes/blogRouter');

app.use(express.json())


app.use('/api/v1/', users)
app.use('/api/v1/', blog);

app.use(errorMiddleware)
module.exports = app;