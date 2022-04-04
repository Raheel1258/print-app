import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(5, 'Minimun 5 required').required('Password is required')
});


export const signupValidationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(5, 'Minimun 5 required').required('Password is required')
});


export const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
});