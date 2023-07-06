const express = require('express')
const router = express.Router()

const {CategoryController} = require("../../controllers")
const {
    ResponseHandler, ValidationHandler
} = require("../../middleware/helpers.middleware");
const {CategoryValidationSchema} = require("../../validators/category.validator");

router.get('/', ResponseHandler(CategoryController.getCategories))

router.post('/', ValidationHandler(CategoryValidationSchema.postValidation), ResponseHandler(CategoryController.addCategory))

router.put("/:id", ValidationHandler(CategoryValidationSchema.postValidation), ResponseHandler(CategoryController.updateCategory))

router.delete("/", ResponseHandler(CategoryController.deleteAllCategories))

router.delete("/:id", ResponseHandler(CategoryController.deleteCategory))

router.get("/count", ResponseHandler(CategoryController.getCategoriesCount))

router.get('/:id', ResponseHandler(CategoryController.getCategories))


module.exports = router