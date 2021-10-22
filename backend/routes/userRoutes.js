 const express = require('express')
 const router = express.Router()

 //import the controller function right here
const {registerUser, loginUser} = require('../controllers/userControllers')

//specify route and method
router.route('/register').post(registerUser)
router.route('/login').post(loginUser) 

module.exports = router
