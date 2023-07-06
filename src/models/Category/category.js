const mongoose = require('mongoose')

const {SCHEMA} = require("../../utils/constants")


const category = new mongoose.Schema({
    name: {
        type: 'string',
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

module.exports = mongoose.model(SCHEMA.CATEGORY, category)