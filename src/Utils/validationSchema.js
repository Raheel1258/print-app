import * as Yup from "yup";



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginValidationSchema = (t) => {
    return (Yup.object({
        email: Yup.string().email(t('invalid_email')).required(t('email_required')),
        password: Yup.string().min(5, t('min_required_5')).required(t('password_required'))
    }))
}

export const signupValidationSchema = (t) => {
    return (Yup.object({
        firstName: Yup.string().required(t('firstName_required')),
        lastName: Yup.string().required(t('lastName_required')),
        phone: Yup.string().matches(phoneRegExp, t('invalid_phone')).required(t('phone_required')),
        email: Yup.string().email(t('invalid_email')).required(t('email_required')),
        password: Yup.string().min(5, t('min_required_5')).required(t('password_required'))
    }))
}

export const forgotPasswordValidationSchema = (t) => {
    return (Yup.object({
        email: Yup.string().email(t('invalid_email')).required(t('email_required')),
    }))
}

export const verificationCodeSchema = (t) => {
    return (Yup.object({
        otpCode: Yup.string().required(t('otp_required')),
    }))
}


export const resetPasswordSchema = (t) => {
    return (Yup.object({
        newPassword: Yup.string().min(5, t('min_required_5')).required(t('new_password_required')),
        confirmPassword: Yup.string().required(t('confirm_password_required'))
    }))
}


export const updatePersonalDetailSchema = (t) => {
    return (Yup.object({
        firstName: Yup.string().required(t('firstName_required')),
        lastName: Yup.string().required(t('lastName_required')),
        mobile: Yup.string().matches(phoneRegExp, t('invalid_phone')).required(t('phone_required')),
        email: Yup.string().email(t('invalid_email')).required(t('email_required')),
    }))
}

export const changePasswordSchema = (t) => {
    return (Yup.object({
        currentPassword: Yup.string().min(5, t('min_required_5')).required(t('current_password_required')),
        newPassword: Yup.string().min(5, t('min_required_5')).required(t('new_password_required')),
        confirmPassword: Yup.string().required(t('confirm_password_required'))
    }))
}

export const addAddressSchema = (t) => {
    return (Yup.object({
        fullName: Yup.string().required('required name'),
        companyName: Yup.string(),
        addressLine1: Yup.string().required('*'),
        addressLine2: Yup.string().required('*'),
        area: Yup.string().required('*'),
        district: Yup.string().required('*'),
        cityCountry: Yup.string().required('*'),
        contactNumber: Yup.string().matches(phoneRegExp, ('*')).required('*'),
    }))
}

export const addCreditCardSchema = (t) => {
    return (Yup.object({
        cardNumber: Yup.string().required('*'),
        cardName:Yup.string().required('*'),
        expiryMonth: Yup.string().required('*'),
        expiryYear: Yup.string().required('*')
    }))
}


