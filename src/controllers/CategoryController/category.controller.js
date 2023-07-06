const {CategoryService} = require("../../services/category.service")
const {RESPONSE_SUCCESS} = require("../../utils/constants");


exports.getCategories = async (req, res) => {
    return req.params.id ? await CategoryService.getCategoryById(req.params.id) : await CategoryService.getCategories(res.locals.queryData)
}

exports.updateCategory = (req) => {
    return CategoryService.updateCategory(req.params.id, req.params.body);
}

exports.addCategory = (req) => {
    return CategoryService.addCategory(req.body)
}

exports.deleteCategory = (req) => {
    return CategoryService.deleteCategory(req.params.id)
}

exports.deleteAllCategories = async () => {
    await CategoryService.deleteAllCategories()
    return {
        response: RESPONSE_SUCCESS.SUCCESS.code
    }
}


exports.getCategoriesCount = (req, res) => {
    return CategoryService.getCategoriesCount(res.locals.queryData)
}

exports.getCategoryCount = (req, res) => {
    return CategoryService.getCategoryCount(res.locals.queryData)
}