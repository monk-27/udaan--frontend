"use client";
import FormInput from "./forminput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { faUserPlus, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-phone-number-input/style.css";
import "./login.css";

import { useEffect, useState } from "react";
import Routing from "component/app/routing";

const Login = ({ toggleLogin }: any) => {
  const [showAlert, SetShowAlert] = useState(false);
  const [alertData, SetAlertData] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [isValid, setisValid] = useState<any>(false);

  const formik = useFormik({
    initialValues: {
      line7: "",
      line4: "",
    },
    validationSchema: Yup.object({
      line7: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!"),
      line4: Yup.string()
        .min(8, "Password should be not less than  8 characters!")
        .max(12, "Password should be not more than  12 characters!")
        .required("Field is Required!"),
    }),
    onSubmit: (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true);
      setShowComponent(true);
    },
  });

  const handleClick = () => {
    setisValid(formik.isValid);
    if (!formik.isValid) {
      setShowComponent(false);
      console.log("clicked on invalid");
    } else {
      setShowComponent(false);
      console.log("clicked on valid");
    }
  };

  return (
    <>
      {!showComponent ? (
        <div className="container">
          <div className="login">
            <form className="container" onSubmit={formik.handleSubmit}>
              <h1>Login</h1>
              <FormInput
                type="text"
                label="Email/Phone Number"
                placeholder="Enter Your email id/Phone Number"
                name="line7"
                style={{
                  marginBottom: "30px",
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#eeeeef",
                  boxSizing: "border-box"
                }}
                formik={formik}
              />
              <FormInput
                type="password"
                label="Password"
                placeholder=""
                name="line4"
                style={{
                  marginBottom: "30px",
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#eeeeef",
                  boxSizing: "border-box"

                }}
                formik={formik}
              />
              <input type="checkbox" />
              <span>Remember me</span>
              <a href="#">Forgot password?</a>
              <button
                className="login-button"
                type="submit"
                onClick={handleClick}
              >
                Login
              </button>
              <hr />
              <p>Or Connect With</p>
              <hr />
              <ul>
                <li>
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </li>
                <li>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </li>
                <li>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </li>
                <li>
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </li>
              </ul>
              <div className="clearfix"></div>
              <span className="copyright">&copy;2019</span>
              
            </form>
            </div>
            <div className="register">
              <div className="container">
              <FontAwesomeIcon icon={faUserPlus} size="5x" />
                <h2>Hello,friend!</h2>
                <p>Enter your personal details and start journey with us</p>
                <button>
                  Register <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
              </div>
            </div>
          
        </div>
      ) : (
        <Routing/>
      )}
    </>
  );
};

export default Login;
