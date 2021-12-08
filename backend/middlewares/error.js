const ErrorHandler = require('../utils/errorHandler')

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;


    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        console.log(err)
        
        res.status(err.statusCode).json({
            sucess:false,
            error:err,
            message: err.message,
            stack:err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION'){
        const error = {...err}

        error.message = err.message

        //wrong mongoose id error
        if(err.name === 'CastError'){
            const message = `Resource Not Found, Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }
        
        //handling mongoose validation error
        // if(err.name === 'ValidationError'){
        //     const message= Object.values(err.errors).map(value=>value.message)
        //     error = new ErrorHandler(message, 400)
        // }

        res.status(err.statusCode).json({
            success:false,
            message: error.message || 'Internal Server'
        })
    }

}