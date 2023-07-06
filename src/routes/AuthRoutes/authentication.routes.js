const express = require('express')
const router = express.Router()

const {AuthenticationController} = require('../../controllers')
const {ValidationHandler, ResponseHandler} = require("../../middleware/helpers.middleware");
const {UserValidationSchema} = require("../../validators/user.validator");

router.post('/signUp', ValidationHandler(UserValidationSchema.postValidation),ResponseHandler(AuthenticationController.signUp), AuthenticationController.sendEmailLink)

router.post('/signIn', ValidationHandler(UserValidationSchema.signInValidation),ResponseHandler(AuthenticationController.signIn), AuthenticationController.sendEmailLink)

module.exports = router