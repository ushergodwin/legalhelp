 const express = require('express')
 const router = express.Router()

 const {isUserAuthenticated} = require('../middlewares/user')

 //import the controller function right here
const {registerUser, loginUser,logout} = require('../controllers/userControllers')

//specify route and method
router.route('/register').post(registerUser)
router.route('/login').post(loginUser) 
router.route('/logout').get(logout)

module.exports = router
