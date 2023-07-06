const {User} = require("../models")

module.exports.UserService = {
    getUsers: (queryData) => {
        return User.find(queryData)
    },
    getUsersById: (_id) => {
        return User.findById(_id)
    }, updateUser: (_id, userData) => {
        return User.findByIdAndUpdate(_id, userData)
    },
    addUser: (userData) => {
        return new User(userData).save()
    },
    deleteUser: (_id) => {
        return User.findByIdAndDelete(_id)
    },
    verifyEmail: (_id) => {
        return User.findByIdAndUpdate(_id, {
            is_email_verified: true,
            is_email_changed_after_verification: false
        })
    },
    deleteAllUsers: () => {
        return User.deleteMany()
    },
    getUsersCount: (queryData) => {
        return User.find(queryData).count()
    }
}