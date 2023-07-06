const yup = require('yup');
const {ROLES, GENDER} = require("../utils/constants");
const {isUnique} = require("../utils/helperFunctions");
const {User} = require("../models");

module.exports.UserValidationSchema = {
    putValidation: yup.object().shape({
        name: yup.string().optional(),
        email: yup.string().email('Invalid email').optional().test(
            'unique-email','This Email is already in use',(value)=>isUnique(User, {'email':value})
        ),
        age: yup.number().optional(),
        gender: yup.string().oneOf([GENDER.MALE, GENDER.FEMALE], 'Invalid Gender').optional(),
        role: yup
            .string()
            .oneOf([ROLES.COSTUMER, ROLES.SELLER], 'Invalid role').optional(),
        is_email_verified: yup.boolean().optional(),
        is_email_changed_after_verification: yup.boolean().optional()
    }),
    postValidation: yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required').test(
                'unique-email','This Email is already in use',(value)=>isUnique(User, {'email':value})
            ),
        age: yup.number().required(),
        gender: yup.string().oneOf([GENDER.MALE, GENDER.FEMALE], 'Invalid Gender').required(),
        role: yup
            .string()
            .oneOf([ROLES.COSTUMER, ROLES.SELLER], 'Invalid role')
            .optional(),
        password: yup.string().required('Password is required'),
        is_email_verified: yup.boolean().optional(),
        is_email_changed_after_verification: yup.boolean().optional()
    }),
    signInValidation:yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required')
    })
};