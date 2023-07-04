const jwt = require('jsonwebtoken')
const fs = require('fs')
const bcrypt = require("bcrypt")

const {JSON_WEB_TOKEN, EMAIL_VERIFICATION_URL} = require("./constants")

module.exports.generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: JSON_WEB_TOKEN.EXPIRE})
}

module.exports.isValidPassword = async (passwordGiven, passwordStored) => {
    return await bcrypt.compare(passwordGiven, passwordStored)
}

module.exports.replaceDataInTemplate = (filepath, key, value) => {
    const template = fs.readFileSync(filepath, 'utf-8')
    return template.replace(key, value)
}

module.exports.readFile = (filepath) => {
    return fs.readFileSync(filepath)
}

module.exports.generateVerificationLink = (token) => {
    return process.env.SERVE_URL + EMAIL_VERIFICATION_URL.MIDDLE_PATH + token
}

module.exports.findMostMatchingRoute = (url, routsArray) => {
    let maxMatches = 0;
    let mostMatchingRoute = [];

    for (const route of routsArray) {
        const matches = calculateMatchingScore(url, route.path);
        if (matches > maxMatches) {
            maxMatches = matches;
            mostMatchingRoute = [route];
        } else if (matches === maxMatches) {
            mostMatchingRoute.push(route);
        }
    }

    return mostMatchingRoute[0];
}

function calculateMatchingScore(inputText, text) {
    const inputWords = inputText.toLowerCase().split(' ');
    const textWords = text.toLowerCase().split(' ');
    let matches = 0;

    for (const inputWord of inputWords) {
        if (textWords.includes(inputWord)) {
            matches++;
        }
    }

    return matches;
}