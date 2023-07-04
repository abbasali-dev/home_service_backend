const {RESPONSE_SUCCESS} = require("../../utils/constants")
const {ServicesService} = require("../../services/service.service")


exports.getServices = async (req, res, next) => {
    try {
        const services = req.params?.id ? await ServicesService.getServicesById(req.params.id) : await ServicesService.getServices(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: services
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.updateServices = async (req, res, next) => {
    try {
        const service = await ServicesService.updateServices(req.params.id, req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: service
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.addServices = async (req, res, next) => {
    try {
        const service = await ServicesService.addServices(req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: service
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteServices = async (req, res, next) => {
    try {
        const service = await ServicesService.deleteServices(req.params.id)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: service
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteAllServices = async (req, res, next) => {
    try {
        await ServicesService.deleteAllServices()
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.getServicesCount = async (req, res, next) => {
    try {
        const count = await ServicesService.getServicesCount(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: count
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.getServiceJobs = async  (req, res,next) => {
    try {
        const count = await ServicesService.getServiceJobs(res.params.id)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: count
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}
