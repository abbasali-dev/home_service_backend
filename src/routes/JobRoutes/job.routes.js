const express = require('express')
const router = express.Router()

const {JobController} = require("../../controllers")
const {
    QueryToObject,
    ErrorHandler, ParamsToObject
} = require("../../middleware/validate.middleware");

router.get('/', QueryToObject, JobController.getJobs, ErrorHandler)

router.post('/', JobController.addJob, ErrorHandler)

router.put("/:id", JobController.updateJob, ErrorHandler)

router.delete("/", JobController.deleteAllJobs, ErrorHandler)

router.delete("/:id", JobController.deleteJob, ErrorHandler)

router.get("/count", QueryToObject, JobController.getJobsCount, ErrorHandler)

router.get('/:id',ParamsToObject, JobController.getJobs, ErrorHandler)

module.exports = router