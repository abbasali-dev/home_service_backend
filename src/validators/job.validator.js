const yup = require('yup');
const {JOB_STATUS} = require("../utils/constants");

module.exports.JobValidationSchema = {
    postValidation: yup.object().shape({
        user_id: yup.string().min(24).max(24).required('User is required'),
        service_id: yup.string().min(24).max(24).required('Service is required'),
        status: yup
            .string()
            .oneOf([JOB_STATUS.COMPLETED, JOB_STATUS.IN_PROGRESS, JOB_STATUS.RATED, JOB_STATUS.PAYMENT_DONE, JOB_STATUS.REATED_PAYMENT_DONE], 'Invalid Status')
            .optional(),
        rating: yup.number().min(1).max(5).optional(),
        payment: yup.object().optional()
    }),
    putValidation: yup.object().shape({
        user_id: yup.string().min(24).max(24).optional(),
        service_id: yup.string().min(24).max(24).optional(),
        status: yup
            .string()
            .oneOf([JOB_STATUS.COMPLETED, JOB_STATUS.IN_PROGRESS, JOB_STATUS.RATED, JOB_STATUS.PAYMENT_DONE, JOB_STATUS.REATED_PAYMENT_DONE], 'Invalid Status')
            .optional(),
        rating: yup.number().min(1).max(5).optional(),
        payment: yup.object().optional()
    })
};