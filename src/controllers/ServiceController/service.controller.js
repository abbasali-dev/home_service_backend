const {RESPONSE_SUCCESS} = require("../../utils/constants")
const {ServicesService} = require("../../services/services.service")


exports.getServices = async (req, res) => {
    return req.params?.id ? await ServicesService.getServiceById(req.params.id) : await ServicesService.getServices(res.locals.queryData)
}

exports.updateService = (req) => {
    return ServicesService.updateService(req.params.id, req.body)
}

exports.addService = async (req) => {
    return ServicesService.addService(req.body)
}

exports.deleteService = (req) => {
    return ServicesService.deleteService(req.params.id)
}

exports.deleteAllServices = async () => {
    await ServicesService.deleteAllServices()
    return {
        response: RESPONSE_SUCCESS.SUCCESS.code
    }
}

exports.getServicesCount = (req, res) => {
    return ServicesService.getServiceCount(res.locals.queryData)
}

exports.getServiceJobs = (req) => {
    return ServicesService.getServiceJobs(req.params.id)
}
