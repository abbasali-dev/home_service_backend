const yup = require('yup');
const {SERVICE_STATUS} = require("../utils/constants");

module.exports.ServiceValidationSchema = {
    postValidation: yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        location: yup.string().required('Location is required'),
        price: yup.number().required('Price is required'),
        status: yup
            .string()
            .oneOf([SERVICE_STATUS.PENDING, SERVICE_STATUS.APPROVED, SERVICE_STATUS.REJECTED], 'Invalid Status')
            .optional(),
        rating: yup.number().min(1).max(5).optional(),
        reason: yup.string().optional(),
        jobs: yup.array().optional(),
        category_id: yup.string().min(24).max(24).required('Category is required'),
        user_id: yup.string().min(24).max(24).required('User is required'),
    }),
    putValidation: yup.object().shape({
        title: yup.string().optional(),
        description: yup.string().optional(),
        location: yup.string().optional(),
        price: yup.number().optional(),
        status: yup
            .string()
            .oneOf([SERVICE_STATUS.PENDING, SERVICE_STATUS.APPROVED, SERVICE_STATUS.REJECTED], 'Invalid Status')
            .optional(),
        rating: yup.number().min(1).max(5).optional(),
        reason: yup.string().optional(),
        jobs: yup.array().optional(),
        category_id: yup.string().min(24).max(24).optional()
    })
};