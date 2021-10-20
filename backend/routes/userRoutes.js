 const express = require('express')
 const router = express.Router()

 //import the controller function right here
const {createUser} = require('../controllers/userControllers')

//specify route and method
router.route('/user/new').post(createUser)

module.exports = router
