const express = require('express')
const router = express.Router()

const {JobController} = require("../../controllers")
const {
    ResponseHandler, ValidationHandler
} = require("../../middleware/helpers.middleware");
const {JobValidationSchema} = require("../../validators/job.validator");

router.get('/', ResponseHandler(JobController.getJobs))

router.post('/', ValidationHandler(JobValidationSchema.postValidation), ResponseHandler(JobController.addJob))

router.put("/:id", ValidationHandler(JobValidationSchema.putValidation), ResponseHandler(JobController.updateJob))

router.delete("/", ResponseHandler(JobController.deleteAllJobs))

router.delete("/:id", ResponseHandler(JobController.deleteJob))

router.get("/count", ResponseHandler(JobController.getJobsCount))

router.get('/:id', ResponseHandler(JobController.getJobs))

module.exports = router