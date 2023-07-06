const jwt = require('jsonwebtoken')
const fs = require('fs')
const bcrypt = require("bcrypt")

const {JSON_WEB_TOKEN, EMAIL_VERIFICATION_URL, RESPONSE_FAILURE} = require("./constants")

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

module.exports.findMostMatchingRoute = (url, routes) => {
    let maxMatches = 0;
    let mostMatchingRoute = [];

    for (const route of Object.keys(routes)) {
        const matches = calculateMatchingScore(url, route);
        if (matches > maxMatches) {
            maxMatches = matches;
            mostMatchingRoute = [route];
        } else if (matches === maxMatches) {
            mostMatchingRoute.push(route);
        }
    }

    return routes[mostMatchingRoute[0]];
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


module.exports.isUnique = async (schema, value) => {
    const data = await schema.findOne(value);
    return !data;
};

module.exports.checkCustomError = (err) => {
    for (const [_, val] of Object.entries(RESPONSE_FAILURE)) {
        if (err.code === val.code) {
            return true;
        }
    }
    return false;
}