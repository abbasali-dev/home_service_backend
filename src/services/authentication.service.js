const {User} = require("../models")
const {RESPONSE_FAILURE} = require("../utils/constants")
const {isValidPassword} = require("../utils/helperFunctions")


module.exports.AuthenticationService = {
    signUp: async (data) => {
        return await new User(data).save()
    },
    signIn: async (data) => {
        const {email, password} = data
        const user = await User.findOne({email: email})
        if (!user) {
            throw {
                code: RESPONSE_FAILURE.INVALID_CREDENTIAL_ERR.code,
                message:RESPONSE_FAILURE.INVALID_CREDENTIAL_ERR.message
            }
        }
        if (!await isValidPassword(password, user.password)) {
            throw {
                code: RESPONSE_FAILURE.INVALID_CREDENTIAL_ERR.code,
                message:RESPONSE_FAILURE.INVALID_CREDENTIAL_ERR.message
            }
        }
        return user
    }
}