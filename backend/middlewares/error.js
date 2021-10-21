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