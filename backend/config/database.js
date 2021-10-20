const mongoose = require('mongoose')

const connectDb = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI_STRING
    ).then(con=>
        console.log(`Database connected with connection host: ${con.connection.host}`))
}

module.exports = connectDb