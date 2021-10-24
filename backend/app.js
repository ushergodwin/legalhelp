const express = require("express");
const app = express();

app.use(express.json())

//import all routes
const users = require('./routes/userRoutes.js')
const blog = require('./routes/blogRouter');

app.use('/api/v1/', users)
app.use('/api/v1/', blog);
module.exports = app;