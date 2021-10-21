const ErrorHandler = require('../utils/errorHandler')
// const User = require('../models/user')

//testing controllers

exports.createUser= (req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"this route is for creating users"
    })
}

exports.getUser= async(req,res,next)=>{

    // const user = await User.findById(req.user.id)

    // if(!user){

    //     return (new ErrorHandler('Creating the user', 404))
    // }

    res.status(200).json({
        sucess:true,
        // user
        message:'User found succesfully'
    })
}