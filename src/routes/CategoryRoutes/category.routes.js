const express = require('express')
const router = express.Router()

const {CategoryController} = require("../../controllers")
const {
    QueryToObject,
    ErrorHandler, ParamsToObject
} = require("../../middleware/validate.middleware");

router.get('/', QueryToObject, CategoryController.getCategories, ErrorHandler)

router.post('/', CategoryController.addCategory, ErrorHandler)

router.put("/:id", CategoryController.updateCategory, ErrorHandler)

router.delete("/", CategoryController.deleteAllCategories, ErrorHandler)

router.delete("/:id", CategoryController.deleteCategory, ErrorHandler)

router.get("/count", QueryToObject, CategoryController.getCategoriesCount, ErrorHandler)

router.get('/:id',ParamsToObject, CategoryController.getCategories, ErrorHandler)


module.exports = router