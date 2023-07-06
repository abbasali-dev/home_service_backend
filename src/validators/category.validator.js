const yup = require('yup');

module.exports.CategoryValidationSchema = {
    postValidation: yup.object().shape({
        name: yup.string().required('Category Name is required'),
    })
};