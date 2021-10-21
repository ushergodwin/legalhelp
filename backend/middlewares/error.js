const ErrorHandler = require('../utils/errorHandler')

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error'

    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            sucess:false,
            error:err,
            message: err.message || 'Internal Server Error',
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
        if(err.name === 'ValidationError'){
            const message= Object.values(err.errors).map(value=>value.message)
            error = new ErrorHandler(message, 400)
        }

        res.status(err.statusCode).json({
            success:false,
            message: error.message || 'Internal Server'
        })
    }

    res.status(err.statusCode).json({
        success: false,
        error: err.stack
        
    })
}