const express = require('express')
const router = express.Router()

const passport = require('../middleware/passport.middleware')
const jobRoutes = require('./JobRoutes/job.routes')
const userRoutes = require('./UserRoutes/user.routes')
const serviceRoutes = require('./ServiceRoutes/service.routes')
const categoryRoutes = require('./CategoryRoutes/category.routes')
const authenticationRoutes = require('./AuthRoutes/authentication.routes')
const authorizationRoutes = require('./AuthRoutes/authorization.routes')
const {AUTH_STRETEGY} = require("../utils/constants")
const {Authorize} = require("../middleware/helpers.middleware")


router.use('/', authenticationRoutes)


router.use('/authorize', [passport.authenticate(AUTH_STRETEGY.JWT, {session: false})], authorizationRoutes)

router.use('/users', [passport.authenticate(AUTH_STRETEGY.JWT, {session: false}), Authorize()], userRoutes)

router.use('/jobs', [passport.authenticate(AUTH_STRETEGY.JWT, {session: false}), Authorize()], jobRoutes)

router.use('/services', [passport.authenticate(AUTH_STRETEGY.JWT, {session: false}), Authorize()], serviceRoutes)

router.use('/categories', [passport.authenticate(AUTH_STRETEGY.JWT, {session: false}), Authorize()], categoryRoutes)



module.exports = router