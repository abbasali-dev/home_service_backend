const express = require('express')
const router = express.Router()

const {ServiceController} = require("../../controllers")
const {
    QueryToObject, ErrorHandler
} = require("../../middleware/validate.middleware");


router.get('/', QueryToObject, ServiceController.getServices, ErrorHandler)

router.post('/', ServiceController.addService, ErrorHandler)

router.put("/:id", ServiceController.updateService, ErrorHandler)

router.delete("/:id", ServiceController.deleteService, ErrorHandler)

router.delete("/", ServiceController.deleteAllServices, ErrorHandler)

router.get("/count", QueryToObject, ServiceController.getServicesCount, ErrorHandler)

router.get("/:id/jobs", ServiceController.getServiceJobs, ErrorHandler)

router.get("/:id", ServiceController.getServices, ErrorHandler)

module.exports = router