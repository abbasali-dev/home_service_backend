const mongoose = require('mongoose')

const {JOB_STATUS, SCHEMA} = require("../../utils/constants")


const job = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SCHEMA.USER,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SCHEMA.CATEGORY,
        required: true
    },
    status: {
        type: String,
        enum: [JOB_STATUS.COMPLETED, JOB_STATUS.IN_PROGRESS, JOB_STATUS.RATED, JOB_STATUS.PAYMENT_DONE, JOB_STATUS.REATED_PAYMENT_DONE],
        default: JOB_STATUS.IN_PROGRESS
    },
    rating:{
        type: Number,
        min: 1,
        max:5
    },
    payment:{
        amount:{
            type: Number,
        },
        transaction_id:{
            type: String,
        }
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

module.exports = mongoose.model(SCHEMA.JOB, job)