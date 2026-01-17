import * as Yup from "yup";

// Strong Email Regex
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});


export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .matches(emailRegex, "Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
export const forgotPasswordSchema = Yup.object().shape({

  email: Yup.string()
    .matches(emailRegex, "Please enter a valid email address")
    .required("Email is required"),


});
export const otpVerificationSchema = Yup.object().shape({
  otp: Yup.string()
    .length(4,  'Code must be exactly 4 digits')
    .required('Code is required'),
});



export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});



