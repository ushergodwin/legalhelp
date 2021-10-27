const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const User = require('../models/user')
const sendToken = require('../utils/jwtToken')


//register user => api/v1/register
exports.registerUser = catchAsyncError( async(req,res,next)=>{

    const {name, email, password} = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:'avatars/l3bcquiktvwgxzr8n51v',
            url:'https://res.cloudinary.com/emmatechs/image/upload/v1631800644/avatars/l3bcquiktvwgxzr8n51v.jpg'
        }
    })

    sendToken(user, 200, res)
})

//Login user => api/v1/login
exports.loginUser= catchAsyncError( async(req,res,next)=>{

    const {email, password} = req.body
    
    //checks if user inputs email and password 
    if(!email || !password){
        return next(new ErrorHandler('Please enter email and password', 400))
    }

    //find user in the database
    const user = await User.findOne({email}).select('+password')

    if(!user){
        return (new ErrorHandler('Invalid email or password', 401))
    }

    //checks if password is correct or Not
    const isPasswordMatched= await user.comparePassword(password)

    if(!isPasswordMatched){
        return (new ErrorHandler('Invalid email or password', 401))
    }

    sendToken(user, 200, res)

})
exports.logout = catchAsyncError( async(req,res,next)=>{
    res.cookie('token', null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged out successfully"
    })
})