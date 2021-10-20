 const express = require('express')
 const router = express.Router()

const {createUser} = require('../controllers/userControllers')

router.route('/user/new').post(createUser)

module.exports = router
