const {RESPONSE_FAILURE, RESPONSE_SUCCESS, ROLE_BASED_ROUTES} = require("../utils/constants")
const {findMostMatchingRoute, checkCustomError} = require("../utils/helperFunctions");


module.exports.ValidationHandler = (schema) => async (req, res, next) => {
    try {
        if (schema && req.body) {
            await schema.validate(req.body)
        }
        next()
    } catch (err) {
        return res.status(RESPONSE_FAILURE.NOT_ACCEPTABLE_ERR.code).json({success: false, message: err.message});
    }

}

module.exports.ResponseHandler = (handler) => async (req, res, next) => {
    try {
        const data = await handler(req, res, next)
        return data && res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: data
        })
    } catch (err) {
        if(checkCustomError(err)){
            return res.status(err.code).json({
                success: false,
                error: err.message
            })
        }
        return res.status(RESPONSE_FAILURE.SERVER_ERROR.code).json({
            success: false,
            error: RESPONSE_FAILURE.SERVER_ERROR.message
        })
    }
}

module.exports.Authorize = () => {
    return (req, res, next) => {
        if (!req.user.role) {
            return res.status(RESPONSE_FAILURE.FORBIDDEN_ERR.code).json({message: RESPONSE_FAILURE.FORBIDDEN_ERR.message})
        }
        const authorized = findMostMatchingRoute(req.originalUrl, ROLE_BASED_ROUTES[req.user.role])?.find(method => method === req.method);
        if (!authorized) {
            return res.status(RESPONSE_FAILURE.UNAUTHORIZED_ERR.code).json({message: RESPONSE_FAILURE.UNAUTHORIZED_ERR.message})
        }
        next()

    }
}
