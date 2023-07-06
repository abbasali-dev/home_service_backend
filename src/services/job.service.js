const {Job} = require("../models")

module.exports.JobService = {
    getJobs: (queryData) => {
        return Job.find(queryData)
    },
    getJobById: (_id) => {
        return Job.findById(_id)
    },
    updateJob: (_id, commentData) => {
        return Job.findByIdAndUpdate(_id, commentData)
    },
    addJob: (commentData) => {
        return new Job(commentData).save()
    },
    deleteJob: (_id) => {
        return Job.findByIdAndDelete(_id)
    },
    deleteAllJobs: () => {
        return Job.deleteMany()
    },
    getJobCount: (queryData) => {
        return Job.find(queryData).count()
    },
}