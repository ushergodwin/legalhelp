const ErrorHandler = require('../utils/errorHandler')
const CatchAsyncError = require('../middlewares/catchAsyncError')
// const User = require('../models/user')

//testing controllers

exports.createUser= CatchAsyncError( async(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"this route is for creating users"
    })
})

exports.getUser= CatchAsyncError( async(req,res,next)=>{

    // const user = await User.findById(req.user.id)

    // if(!user){

    //     return (new ErrorHandler('Creating the user', 404))
    // }

    res.status(200).json({
        sucess:true,
        // user
        message:'User found succesfully'
    })
})