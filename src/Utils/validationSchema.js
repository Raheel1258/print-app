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
        phone: Yup.string().matches(phoneRegExp, t('invalid_phone')).required(t('phone_required')),
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
        fullName: Yup.string().required('Full Name is required'),
        companyName: Yup.string(),
        addressLine1: Yup.string().required('Address is required'),
        addressLine2: Yup.string().required('Address is required'),
        area: Yup.string().required('Area is required'),
        district: Yup.string().required('District is required'),
        // cityCountry: Yup.string(),
        contactNumber: Yup.string().matches(phoneRegExp, t('invalid_phone')).required(t('phone_required')),
    }))
}

export const addCreditCardSchema = (t) => {
    return (Yup.object({
        cardNumber: Yup.string().min(16, "Minimun 16-digits required").max(16, "Max 16-digits required").required('Card-Number is required'),
        cardName:Yup.string(),
        expiryMonth: Yup.string().min(1, "Min 1-digit").max(2, 'Max 2-digits required').required('Expiry Month is required'),
        expiryYear: Yup.string().min(4, "Min 4-digit").max(4, 'Max 4-digits required').required('Expiry Year is required'),
        cvc: Yup.string().min(3, 'Min 3-digit required').max(4, 'Max 4-digit required').required('Cvc is required'),
    }))
}


