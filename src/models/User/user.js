const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const {ROLES, SCHEMA, BCRYPT, GENDER} = require("../../utils/constants")

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        enum: [GENDER.MALE,GENDER.FEMALE],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_email_verified: Boolean,
    is_email_changed_after_verification: Boolean,
    role: {
        type: String,
        enum: [ROLES.COSTUMER,ROLES.ADMIN, ROLES.SELLER],
        default: ROLES.COSTUMER,
        required: true
    },
    last_successful_login: {
        type: Date,
    },
    login_attempts: {
        type: Number,
        min:0,
        max:5
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

user.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(BCRYPT.SALT_ROUNDS)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


module.exports = mongoose.model(SCHEMA.USER, user)