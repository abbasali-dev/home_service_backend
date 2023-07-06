const {UserService} = require("../../services/user.service")
const {RESPONSE_SUCCESS} = require("../../utils/constants");


exports.getUsers = (req) => {
    return req.params.id ? UserService.getUsersById(req.params.id) : UserService.getUsers(req.query)
}

exports.updateUser = (req) => {
    return UserService.updateUser(req.params.id, req.body);
}

exports.updateEmail = async (req, res, next) => {
    res.locals.user = await UserService.updateUser(req.params.id, req.body)
    return next()
}

exports.addUser = (req) => {
    return UserService.addUser(req.body)
}

exports.deleteUser = (req) => {
    return UserService.deleteUser(req.params.id)
}

exports.verifyEmail = async (req, res) => {
    await UserService.verifyEmail(req.user._id)
    return res.sendFile(process.env.EMAIL_VERIFIED_TEMPLATE_FILE_PATH)
}

exports.deleteAllUsers = async () => {
    await UserService.deleteAllUsers()
    return {
        response: RESPONSE_SUCCESS.SUCCESS.code
    }
}

exports.getUsersCount = (req) => {
    return UserService.getUsersCount(req.query)
}