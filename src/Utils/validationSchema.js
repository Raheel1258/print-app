import * as yup from "yup";

export const loginValidationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email required'),
    password: yup.string().min(5, 'Minimun 5 required').required('Password required')
  })