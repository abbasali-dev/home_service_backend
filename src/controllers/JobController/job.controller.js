const {RESPONSE_SUCCESS} = require("../../utils/constants")
const {JobService} = require("../../services/job.service")


exports.getJobs = async (req, res, next) => {
    try {
        const jobs = req.params.id ? await JobService.getJobsById(req.params.id) : await JobService.getJobs(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: jobs
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.getJobsByFilters = async (req, res, next) => {
    try {
        const jobs = await JobService.getJobsByFilters(req.query)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: jobs
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.updateJob = async (req, res, next) => {
    try {
        const job = await JobService.updateJob(req.params.id, req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: job
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.addJob = async (req, res, next) => {
    try {
        const job = await JobService.addJob(req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: job
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteJob = async (req, res, next) => {
    try {
        const job = await JobService.deleteJob(req.params.id)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: job
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteAllJobs = async (req, res, next) => {
    try {
        await JobService.deleteAllJobs()
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.getJobsCount = async (req, res, next) => {
    try {
        const count = await JobService.getJobCount(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: count
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}