const nodemailer = require('nodemailer')

const {
    generateToken,
    replaceDataInTemplate,
    generateVerificationLink
} = require("../../utils/helperFunctions")
const {RESPONSE_SUCCESS, RESPONSE_FAILURE, HTML_VAR_TO_REPLACE} = require("../../utils/constants")
const {AuthenticationService} = require("../../services/authentication.service")


exports.signUp = async (req, res, next) => {
    const user = await AuthenticationService.signUp(req.body)
    res.locals.token = generateToken({
        _id: user._id,
        email: user.email,
        role: user.role
    })
    res.locals.user = user
    return next()
}

exports.signIn = async (req, res, next) => {
    const user = await AuthenticationService.signIn(req.body)
    res.locals.token = generateToken({
        _id: user._id,
        email: user.email,
        role: user.role,
        is_email_verified: user.is_email_verified
    })
    res.locals.user = user
    return next()
}

exports.sendEmailLink = (req, res) => {
    if (res.locals.user?.is_email_verified) {
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: {
                id: res.locals.user._id,
                token: res.locals.token,
                role: res.locals.user.role,
                email_verified: true
            }
        })
    }
    const emailContent = replaceDataInTemplate(process.env.EMAIL_TEMPLATE_FILE_PATH, HTML_VAR_TO_REPLACE.Link, generateVerificationLink(res.locals.token))

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    })
    const mailOptions = {
        from: process.env.EMAIL,
        to: res.locals.user.email,
        subject: HTML_VAR_TO_REPLACE.TITLE,
        html: emailContent
    }
    transporter.sendMail(mailOptions).then((info) => {
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: {
                id: res.locals.user._id,
                role: res.locals.user.role,
                token: res.locals.token,
                email_sent: true,
                email_sent_info: info
            }
        })
    }).catch(err => {
        return res.status(RESPONSE_FAILURE.FAILED_DELIVERY.code).json({
            success: false,
            error: err.message
        })
    })
}

exports.authorizeJWTToken = (req, res) => {
    if (req.user.role === req.authInfo.role) {
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: {
                id: req.user.id,
                user: req.user
            }
        })
    }
    return res.status(RESPONSE_FAILURE.UNAUTHORIZED_ERR.code).json({
        success: false,
        error: RESPONSE_FAILURE.UNAUTHORIZED_ERR.message
    })
}