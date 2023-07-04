const mongoose = require("mongoose");

const URLSTR = process.env.MONGO_URI;
exports.connect = () => {
    mongoose.connect(URLSTR);
    const database = mongoose.connection;
    database.on('error', (error) => {
        console.log(error)
    });
    database.once('connected', () => {
        console.log('Database Connected');
    });
}