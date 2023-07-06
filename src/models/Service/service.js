const mongoose = require('mongoose')

const {SERVICE_STATUS, SCHEMA} = require("../../utils/constants")


const service = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [SERVICE_STATUS.PENDING, SERVICE_STATUS.APPROVED, SERVICE_STATUS.REJECTED],
        default: SERVICE_STATUS.PENDING
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    reason: [{
        type: String
    }],
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: SCHEMA.JOB
    }],
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SCHEMA.CATEGORY,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SCHEMA.USER,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model(SCHEMA.SERVICE, service)