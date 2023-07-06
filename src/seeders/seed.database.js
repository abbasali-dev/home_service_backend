const {User} = require('./../models');
const {DEFAULT_ADMIN} = require("../utils/constants");

exports.seedDatabase = async () => {
    try {
        const adminExists = await User.exists({ role: 'admin' })

        if (!adminExists) {
            await new User(DEFAULT_ADMIN).save()
        }
    } catch (error) {
        console.error('Error seeding the database:', error)
    }
};
