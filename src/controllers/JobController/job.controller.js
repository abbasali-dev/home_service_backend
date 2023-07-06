const {RESPONSE_SUCCESS} = require("../../utils/constants")
const {JobService} = require("../../services/job.service")


exports.getJobs = async (req, res) => {
    return req.params.id ? await JobService.getJobById(req.params.id) : await JobService.getJobs(res.locals.queryData)
}

exports.getJobsByFilters = async (req) => {
    return JobService.getJobsByFilters(req.query)
}

exports.updateJob = (req) => {
    return JobService.updateJob(req.params.id, req.body)
}

exports.addJob = async (req) => {
    return JobService.addJob(req.body)
}

exports.deleteJob = async (req) => {
    return JobService.deleteJob(req.params.id)
}

exports.deleteAllJobs = async () => {
    await JobService.deleteAllJobs()
    return {
        response: RESPONSE_SUCCESS.SUCCESS.code
    }
}

exports.getJobsCount = async (req, res) => {
    return JobService.getJobCount(res.locals.queryData)
}