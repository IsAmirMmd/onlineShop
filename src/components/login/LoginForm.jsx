import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
import { Link } from "react-router-dom";
// 1. init values
const initialValues = {
  name: "",
  email: "",
  password: "",
  RePassword: "",
};

// 2. submit
const onSubmit = (values) => {
  console.log(values);
  //   axios
  //     .post("http://localhost:3001/users", values)
  //     .then((res) => console.log(res.data))
  //     .catch();
};

// 3. validate(using yup handler)
const validationSchema = Yup.object({
  email: Yup.string().email("email format").required("email is Required"),
  password: Yup.string()
    .required("password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginForm = () => {
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
        <label>email</label>
        <input
          name="email"
          {...formik.getFieldProps("email")}
          type="text"
          placeholder="email@ex.com"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="error-onForm">{formik.errors.email}</p>
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
      <button type="submit" className="btn primary" disabled={!formik.isValid}>
        Login
      </button>
      <Link to="/signup" className="link">
        new user? <span>signup</span>
      </Link>
    </form>
  );
};

export default LoginForm;