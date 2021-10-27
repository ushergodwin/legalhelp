const catchAsyncError = require('./catchAsyncError')
const ErrorHanler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

//checks if user is authenticated or not

exports.isUserAuthenticated = catchAsyncError( async(req,res,next)=>{

    const {token} = req.cookies

    if(!token){

        return next(new ErrorHandler('Login first to access this resource',401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)

    next()
})

