const app = require('./app')

const connectDb= require('./config/database')

const dotenv = require('dotenv')

//connecting to the database
connectDb() 

//setting up config file
dotenv.config({path:'backend/config/config.env'})

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})