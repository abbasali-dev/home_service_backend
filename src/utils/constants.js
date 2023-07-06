exports.ROLES = {
    COSTUMER: 'costumer',
    SELLER: 'seller',
    ADMIN: 'admin'
}

exports.GENDER = {
    MALE: 'male',
    FEMALE: 'female'
}

exports.SCHEMA = {
    USER: 'User',
    JOB: 'Job',
    SERVICE: 'Service',
    CATEGORY: 'Category',
}

exports.JOB_STATUS = {
    COMPLETED: 'Completed',
    IN_PROGRESS: 'In Progress',
    RATED : 'Rated',
    PAYMENT_DONE: 'Payment Done',
    REATED_PAYMENT_DONE: 'Rated and Payment Done',
}

exports.SERVICE_STATUS = {
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    PENDING: 'Pending',
}


exports.RESPONSE_FAILURE = {
    EMPTY: {
        code: 400,
        message: 'Request Object or Params can not be empty!'
    },
    SERVER_ERROR: {
        code: 500,
        message: 'Some error occurred while processing request'
    },
    NOT_FOUND_ERR: {
        code: 404,
        message: 'Cannot find the requested resource'
    },
    UNAUTHORIZED_ERR: {
        code: 401,
        message: 'Unauthorized'
    },
    FORBIDDEN_ERR: {
        code: 403,
        message: 'Forbidden'
    },
    NOT_ACCEPTABLE_ERR: {
        code: 406,
        message: 'Not Acceptable'
    },
    UNABLE_TO_FULL_FILL_REQUEST_ERR: {
        code: 422,
        message: 'Unable to full fill request'
    },
    INVALID_CREDENTIAL_ERR: {
        code: 401,
        message: 'Invalid credential'
    },
    FAILED_DELIVERY: {
        code: 424,
        message: 'Failed Email delivery'
    },
    ALREADY_EXISTS: {
        code: 409,
        message: 'Already exists'
    }
}

exports.RESPONSE_SUCCESS = {
    SUCCESS: {
        code: 200,
        message: 'Success'
    },
    SUCCESS_UPDATE: {
        code: 201,
        message: 'Success'
    }
}

exports.ERROR_TYPES = {
    VALIDATION_ERR: 'ValidationError',
}

exports.JSON_WEB_TOKEN = {
    EXPIRE: '1hr'
}

exports.BCRYPT = {
    SALT_ROUNDS: 10,
    HASH_ROUNDS: 10,
}

exports.AUTH_STRETEGY = {
    LOCAL: 'local',
    JWT: 'jwt'
}

exports.HTML_VAR_TO_REPLACE = {
    TITLE: 'Verify Email',
    Link: "{{verificationLink}}"
}

exports.ENCODING = {
    UTF8: 'utf8',
    UTF16: 'utf16',
    UTF32: 'utf32'
}

exports.EMAIL_VERIFICATION_URL = {
    MIDDLE_PATH: 'authorize/verify_email?token='
}

exports.DEFAULT_ADMIN = {
    name: 'Abbas Ali Admin',
    email: 'abbasali.zulfiqar@example.com',
    age:20,
    gender: 'male',
    role: 'admin',
    password: process.env.ADMIN_PASSWORD,
    is_email_verified:true,
    is_email_changed_after_verification:false,
}

const CUSTOMER_ROUTES = {
    'users':['GET', 'POST', 'PUT'],
    'users/count':['GET'],
    'jobs':['GET','PUT','POST','DELETE'],
    'jobs/count':['GET'],
    'services':['GET'],
    'services/count':['GET'],
    'services/jobs':['GET'],
    'categories':['GET']
}

const SELLER_ROUTES = {
    ...CUSTOMER_ROUTES,
    'services':['GET', 'POST', 'PUT','DELETE']
}

const ADMIN_ROUTES = {
    ...SELLER_ROUTES,
    'users':['GET', 'POST', 'PUT', 'DELETE'],
    'categories':['GET', 'POST', 'PUT', 'DELETE']
}

exports.ROLE_BASED_ROUTES ={
    costumer:CUSTOMER_ROUTES,
    seller:SELLER_ROUTES,
    admin:ADMIN_ROUTES,
}