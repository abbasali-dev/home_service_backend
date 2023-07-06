const {Service} = require("../models")
module.exports.ServicesService = {
    getServices: (queryData) => {
        return Service.find(queryData)
    },
    getServiceById: (_id) => {
        return Service.find(_id)
    },
    updateService: (_id, suggestionData) => {
        return Service.findByIdAndUpdate(_id, suggestionData)
    },
    addService: (suggestionData) => {
        return new Service(suggestionData).save()
    },
    deleteService: (_id) => {
        return Service.findByIdAndDelete(_id)
    },
    addJobInService: (_id, job_id) => {
        return Service.findByIdAndUpdate(_id, {
            $push: {
                jobs: job_id
            }
        }, {
            new: true
        })
    },
    addReasonInService:(_id, reason)=>{
        return Service.findByIdAndUpdate(_id, {
            $push: {
                reason: reason
            }
        }, {
            new: true
        })
    },
    deleteServiceJobs: (_id) => {
        return Service.findByIdAndUpdate(_id, {
            $set: {
                jobs: []
            }
        }, {
            new: true
        })
    },
    deleteAllServices: () => {
        return Service.deleteMany()
    },
    getServiceCount: (queryData) => {
        return Service.find(queryData).count()
    },
    getServiceJobs:(_id)=>{
        return Service.findById(_id).populate('jobs')
    }
}