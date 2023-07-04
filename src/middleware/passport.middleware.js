const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const {User} = require('../models')

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([ExtractJwt.fromUrlQueryParameter('token'), ExtractJwt.fromAuthHeaderAsBearerToken()]),
    secretOrKey: process.env.JWT_SECRET_KEY
}

passport.use(
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
        try {
            const user = await User.findById(jwtPayload.id)
            if (user) {
                return done(null, user, jwtPayload)
            } else {
                return done(null, false)
            }
        } catch (err) {
            return done(err, false)
        }
    })
)

module.exports = passport
