import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../Services/signupServices";
// 1. init values
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  RePassword: "",
};

// 3. validate(using yup handler)
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("email format").required("email is Required"),
  phoneNumber: Yup.number(),
  password: Yup.string()
    .required("password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  RePassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignUpForm = () => {
  const [error, setError] = useState("");

  // 2. submit
  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };
    try {
      const { data } = await signupUser(userData);
      setError("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formControl">
        <label>name</label>
        <input
          name="name"
          {...formik.getFieldProps("name")}
          type="text"
          placeholder="enter your full name"
        />
        {formik.errors.name && formik.touched.name && (
          <p className="error-onForm">{formik.errors.name}</p>
        )}
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          name="email"
          {...formik.getFieldProps("email")}
          type="email"
          placeholder="email@ex.com"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="error-onForm">{formik.errors.email}</p>
        )}
      </div>
      <div className="formControl">
        <label>phone number</label>
        <input
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
          type="tel"
          placeholder="09********"
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <p className="error-onForm">{formik.errors.phoneNumber}</p>
        )}
      </div>
      <div className="formControl">
        <label>password</label>
        <input
          name="password"
          {...formik.getFieldProps("password")}
          type="password"
          placeholder="enter your password"
        />
        {formik.errors.password && formik.touched.password && (
          <p className="error-onForm">{formik.errors.password}</p>
        )}
      </div>
      <div className="formControl">
        <label>enter password again</label>
        <input
          name="RePassword"
          {...formik.getFieldProps("RePassword")}
          type="password"
          placeholder="confirm your password"
        />
        {formik.errors.RePassword && formik.touched.RePassword && (
          <p className="error-onForm">{formik.errors.RePassword}</p>
        )}
      </div>
      <button type="submit" className="btn primary" disabled={!formik.isValid}>
        sign up
      </button>
      {error && <p className="error-onForm">{error}</p>}
      <Link to="/login" className="link">
        Already login? <span>Yes!</span>
      </Link>
    </form>
  );
};

export default SignUpForm;
