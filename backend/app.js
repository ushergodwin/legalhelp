const express = require("express");
const app = express();


const cookieParser= require('cookie-parser')
const bodyParser= require('body-parser')
const fileUpload= require('express-fileupload')

const cors = require('cors');

//import the error MiDDLEWARE
const errorMiddleware = require('./middlewares/error')

//import all routes
const users = require('./routes/userRoutes.js')
const blog = require('./routes/blogRouter');

app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(fileUpload())

app.use(cors());



app.use('/api/v1/', users)
app.use('/api/v1/', blog);

app.use(errorMiddleware)
module.exports = app;