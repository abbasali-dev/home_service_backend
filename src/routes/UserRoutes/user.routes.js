const express = require('express')
const router = express.Router()

const {
    UserController, AuthenticationController,
} = require('../../controllers')
const {QueryToObject, ErrorHandler} = require('./../../middleware/validate.middleware');


// --------------------------------User Routes Authorized for Users --------------------------------
router.get('/', QueryToObject, UserController.getUsers, ErrorHandler)

router.get('/count', QueryToObject, UserController.getUsersCount, ErrorHandler)

router.post('/', UserController.addUser, ErrorHandler)

router.delete("/", UserController.deleteAllUsers, ErrorHandler)

router.put("/:id",UserController.updateUser, AuthenticationController.sendEmailLink, ErrorHandler)

router.delete("/:id", UserController.deleteUser, ErrorHandler)

router.get('/:id' , UserController.getUsers, ErrorHandler)

module.exports = router