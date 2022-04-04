const express = require('express')
const router = express.Router()
const send = require('../controllers/mailController')
router.route('/ask').post(send)
module.exports = router