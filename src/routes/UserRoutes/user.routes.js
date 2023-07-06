const express = require('express')
const router = express.Router()

const {
    UserController, AuthenticationController,
} = require('../../controllers')
const {ValidationHandler, ResponseHandler} = require("../../middleware/helpers.middleware");
const {UserValidationSchema} = require("../../validators/user.validator");


// --------------------------------User Routes Authorized for Users --------------------------------
router.get('/',ResponseHandler(UserController.getUsers))

router.get('/count', ResponseHandler(UserController.getUsersCount))

router.post('/',ValidationHandler(UserValidationSchema.postValidation),ResponseHandler(UserController.addUser))

router.delete("/",ResponseHandler(UserController.deleteAllUsers))

router.put("/:id",ValidationHandler(UserValidationSchema.putValidation),ResponseHandler(UserController.updateUser))

router.put("/:id/update_email",ValidationHandler(UserValidationSchema.putValidation),ResponseHandler(UserController.updateEmail), AuthenticationController.sendEmailLink)

router.delete("/:id",ResponseHandler(UserController.deleteUser))

router.get('/:id',ResponseHandler(UserController.getUsers))

module.exports = router