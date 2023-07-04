const {RESPONSE_FAILURE, ROLE_BASED_ROUTES} = require("../utils/constants")
const {findMostMatchingRoute} = require("../utils/helperFunctions");

module.exports.Authorize = () => {
    return (req, res, next) => {
        if (!req.user.role) {
            return res.status(RESPONSE_FAILURE.FORBIDDEN_ERR.code).json({message: RESPONSE_FAILURE.FORBIDDEN_ERR.message})
        }
        const authorized = findMostMatchingRoute(req.originalUrl, ROLE_BASED_ROUTES[req.user.role])?.allowedMethods.find(method => method === req.method);
        if (!authorized) {
            return res.status(RESPONSE_FAILURE.UNAUTHORIZED_ERR.code).json({message: RESPONSE_FAILURE.UNAUTHORIZED_ERR.message})
        }
        next()

    }
}