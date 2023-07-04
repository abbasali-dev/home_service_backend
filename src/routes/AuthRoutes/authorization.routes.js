const express = require('express')
const router = express.Router()

const {AuthenticationController, UserController} = require('../../controllers')

router.get('/verify_email', UserController.verifyEmail)

router.get('/authorize_token', AuthenticationController.authorizeJWTToken)


module.exports = router