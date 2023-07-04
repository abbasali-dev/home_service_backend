const {RESPONSE_SUCCESS} = require("../../utils/constants")
const {UserService} = require("../../services/user.service")


exports.getUsers = async (req, res, next) => {
    try {
        const data = req.params.id ? await UserService.getUsersById(req.params.id) : await UserService.getUsers(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: data
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: user
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const user = await UserService.addUser(req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: user
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await UserService.deleteUser(req.params.id)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: user
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.verifyEmail = async (req, res, next) => {
    try {
        await UserService.verifyEmail(req.user._id)
        return res.sendFile(process.env.EMAIL_VERIFIED_TEMPLATE_FILE_PATH)
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteAllUsers = async (req, res, next) => {
    try {
        await UserService.deleteAllUsers()
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.getUsersCount = async (req, res, next) => {
    try {
        const count = await UserService.getUsersCount(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: count
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}