const {RESPONSE_FAILURE} = require("../utils/constants")


module.exports.QueryToObject = (req, res, next) => {
    const queryData = {}
    if (Object.keys(req.query).length) {
        Object.assign(queryData, req.query);
    }
    res.locals.queryData = queryData || {}
    next()
}

module.exports.ErrorHandler = (req, res) => {
    res.status(RESPONSE_FAILURE.SERVER_ERROR.code).json({
        success: false,
        error: RESPONSE_FAILURE.SERVER_ERROR.message
    })
}

module.exports.BodyValidate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body)
        return next();
    } catch (err) {
        return res.status(500).json({success: false, message: err.message});
    }
}

module.exports.paramsValidate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.params);
        return next();
    } catch (err) {
        return res.status(500).json({success: false, message: err.message});
    }
}

module.exports.paramsBodyValidate = (schema, schema2) => async (req, res, next) => {
    try {
        await schema.validate(req.params);
        await schema2.validate(req.body)
        return next();
    } catch (err) {
        return res.status(500).json({success: false, message: err.message});
    }
}
