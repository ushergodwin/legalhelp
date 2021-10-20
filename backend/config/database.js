const mongoose = require('mongoose')

const connectDb = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(con=>{
        console.log(`Database connected with connection host: ${con.connection.host}`)}
    )}



module.exports = connectDb