const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter your name'],
        maxlength:[30, 'Your name cannot exceed 30 characters']
    },
    email:{
        type:String,
        required:[true, 'Please enter your email'],
        unique:true,
        validate:[validator.isEmail, 'Please enter a valid email address']
    },
  
    password:{
        type:String,
        required:[true, 'Please enter your password'],
        minlength:[6, 'Your password must at least be 6 characters'],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            // required:true
        },
        url:{
            type:String,
            // required:true
        }
    },
    role:{
        type:String,
        default:'user',
        trim:true,
    },
    legalDocuments:{
        public_id:{
            type:String  
        },
        url:{
            type:String,
            
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    resetPasswordToken: String,
    resetPasswordExpire:Date
})

//Encrypting user password before saving user
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})
 
//compare user password
userSchema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//return JWT token 
userSchema.methods.getJwtToken= function(){
    return jwt.sign({ id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
} 

// //generate password reset token
// userSchema.methods.getResetPasswordToken= function(){
//     //generate token
//     const resetToken = crypto.randomBytes(20).toString('hex')

//     //hash and set to resetPasswordToken
//     this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

//     //set token expire time

//     this.resetPasswordExpire = Date.now() + 30*60*1000

//     return resetToken
// }

module.exports=mongoose.model('User', userSchema)