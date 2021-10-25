//create and save the token in the cookie

const sendToken = (user,statusCode,res) =>{

    // get the token 
    const token = user.getJwtToken()

    //OPTIONS FOR COOKIE
    const options ={
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME *24* 60*60*1000
        ),  
        httpOnly:true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success:true,
        token,
        user
    })
}

module.exports = sendToken