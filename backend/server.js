const app = require('./app')

const connectDb= require('./config/database')

const cloudinary = require('cloudinary')

const dotenv = require('dotenv')

//Handling Uncaught Exception errors

process.on('uncaughtException', err=>{
    console.log(`ERROR: ${err.stack}`)
    console.log('Server shutting down due to Uncaught Exception')
    process.exit(1) 

})



//connecting to the database
connectDb() 

//setting up config file
dotenv.config({path:'backend/config/config.env'})

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})  

//setting up cloudinary configuration
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})
 

//handle unhandled promise Rejections
process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`)
    console.log('Server shutting down due to Unhandled Promise Rejection')
    server.close(()=>{
        process.exit(1)
    })
})