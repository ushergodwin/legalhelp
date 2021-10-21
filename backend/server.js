const app = require('./app')

const connectDb= require('./config/database')

const dotenv = require('dotenv')

//connecting to the database
connectDb() 

//setting up config file
dotenv.config({path:'backend/config/config.env'})

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})  

//handle unhandled promise Rejections
process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`)
    console.log('Server shutting down due to Unhandled Promise Rejection')
    server.close(()=>{
        process.exit(1)
    })
})