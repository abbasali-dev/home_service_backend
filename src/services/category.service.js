const {Category} = require("../models")

module.exports.CategoryService = {
    getCategories: (queryData) => {
        return Category.find(queryData)
    },
    getCategoryById: (_id) => {
        return Category.findById(_id)
    },
    updateCategory: (_id, postData) => {
        return Category.findByIdAndUpdate(_id, postData)
    },
    addCategory: (postData) => {
        return new Category(postData).save()
    },
    deleteCategory: (_id) => {
        return Category.findByIdAndDelete(_id)
    },
    deleteAllCategories: () => {
        return Category.deleteMany()
    },
    getCategoryCount: (queryData) => {
        return Category.find(queryData).count()
    },
}