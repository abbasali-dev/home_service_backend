const {RESPONSE_SUCCESS} = require("../../utils/constants")
const {CategoryService} = require("../../services/category.service")


exports.getCategories = async (req, res, next) => {
    try {
        const categories = req.params.id ? await CategoryService.getCategoryById(req.params.id) : await CategoryService.getCategories(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: categories
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const category = await CategoryService.updateCategory(req.params.id, req.params.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: category
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.addCategory = async (req, res, next) => {
    try {
        const category = await CategoryService.addCategory(req.body)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: category
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await CategoryService.deleteCategory(req.params.id)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: category
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}

exports.deleteAllCategories = async (req, res, next) => {
    try {
        const category = await CategoryService.deleteAllCategories()
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: category
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}



exports.getCategoriesCount = async (req, res, next) => {
    try {
        const count = await CategoryService.getCategoriesCount(res.locals.queryData)
        return res.status(RESPONSE_SUCCESS.SUCCESS.code).json({
            success: true,
            data: count
        })
    } catch (err) {
        res.locals.errObj = err
        next()
    }
}