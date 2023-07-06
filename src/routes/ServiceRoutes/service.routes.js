const express = require('express')
const router = express.Router()

const {ServiceController} = require("../../controllers")
const {
    ResponseHandler, ValidationHandler
} = require("../../middleware/helpers.middleware");
const {ServiceValidationSchema} = require("../../validators/service.validator");


router.get('/', ResponseHandler(ServiceController.getServices))

router.post('/', ValidationHandler(ServiceValidationSchema.postValidation), ResponseHandler(ServiceController.addService))

router.put("/:id", ValidationHandler(ServiceValidationSchema.putValidation), ResponseHandler(ServiceController.updateService))

router.delete("/:id", ResponseHandler(ServiceController.deleteService))

router.delete("/", ResponseHandler(ServiceController.deleteAllServices))

router.get("/count", ResponseHandler(ServiceController.getServicesCount))

router.get("/:id/jobs", ResponseHandler(ServiceController.getServiceJobs))

router.get("/:id", ResponseHandler(ServiceController.getServices))

module.exports = router