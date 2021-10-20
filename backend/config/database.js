const mongoose = require('mongoose')
const dotenv= require('dotenv')

//setting up config file
dotenv.config({path:'backend/config/config.env'})



const connectDb = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(con=>{
        console.log(`Database connected with connection host: ${con.connection.host}`)}
    )}



module.exports = connectDb