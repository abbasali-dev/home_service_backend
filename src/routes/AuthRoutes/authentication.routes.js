const express = require('express')
const router = express.Router()

const {AuthenticationController} = require('../../controllers')
const {BodyValidate} = require("../../middleware/validate.middleware");

router.post('/signUp', BodyValidate, AuthenticationController.signUp, AuthenticationController.sendEmailLink)

router.post('/signIn', BodyValidate, AuthenticationController.signIn, AuthenticationController.sendEmailLink)

module.exports = router