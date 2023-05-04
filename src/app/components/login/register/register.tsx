"use client";

import FormInput from "./forminput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Login from "./login";

import "react-phone-number-input/style.css";
import "./register.css";

import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

const Register = () => {
  const [showAlert, SetShowAlert] = useState(false);
  const [alertData, SetAlertData] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [isValid, setisValid] = useState<any>(false);
  // const router = useRouter();

  const formik = useFormik({
    initialValues: {
      line1: "",
      line2: "",
      line3: "",
      line4: "",
      line5: "",

      line6: "",
      line7: "",

      line9: "",
    },
    validationSchema: Yup.object({
      line1: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!"),
      line2: Yup.string()
        .min(13, "Incorrect Number!")
        .max(20, "Incorrect Number!")
        .required("Phone Number can't be Empty"),
      line3: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!"),
      line4: Yup.string()
        .min(8, "Password should be not less than  8 characters!")
        .max(12, "Password should be not more than  12 characters!")
        .required("Field is Required!"),
      line5: Yup.string()
        .min(8, "Password should be not less than  8 characters!")
        .max(12, "Password should be not more than  12 characters!")
        .required("Field is Required!"),

      line6: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!"),
      line7: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!"),

      line9: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!"),
    }),

    //

    onSubmit: (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true);
      setShowComponent(true);
    },
  });

  const handleRegisterClick = () => {
    setisValid(formik.isValid);
    if (!formik.isValid) {
      setShowComponent(false);
      console.log("clicked on invalid");
    } else {
      setShowComponent(false);
      console.log("clicked on valid");
    }
  };

  // const handleLinkClick = (event: any) => {
  //   handleRegisterClick();
  //   event.preventDefault();
  //   router.push("/register");
  // };

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
  console.log(formik.values);

  return (
    <>
      {!showComponent ? (
        <>
          <div className="card-register">
            <div className="card-container-register">
                <h1>Register</h1>
              <form className="forms" onSubmit={formik.handleSubmit}>

                <FormInput
                  type="text"
                  label="Full Name"
                  placeholder="Enter Your Name"
                  name="line6"
                  style={{ marginBottom: 20 }}
                  formik={formik}
                />

                <FormInput
                  type="email"
                  label="Email Address (No Spam!)"
                  placeholder="Enter Your email id"
                  name="line7"
                  style={{ marginBottom: 20 }}
                  formik={formik}
                />

                <FormInput
                  type="phone"
                  label="Mobile Number"
                  placeholder="Phone Number"
                  name="line2"
                  onChange={(phone: any) =>
                    formik.setFieldValue("phone", phone)
                  }
                  formik={formik}
                  style={{ marginBottom: 20 }}
                  countries={["US", "GB", "CA", "AU", "NZ", "IN"]}
                  international={true}
                />

                <FormInput
                  type="date"
                  label="Date of Birth"
                  placeholder="dd/mm/yy"
                  name="line9"
                  formik={formik}
                  style={{ marginBottom: 20 }}
                />

                <FormInput
                  type="textarea"
                  label="Address"
                  placeholder="Address"
                  name="line3"
                  formik={formik}
                  style={{ marginBottom: 20 }}
                />
                <FormInput
                  type="password"
                  label="Create Password"
                  placeholder=""
                  name="line4"
                  formik={formik}
                  style={{ marginBottom: 20 }}
                />
                <FormInput
                  type="password"
                  label="Confirm Password"
                  placeholder=""
                  name="line5"
                  formik={formik}
                  style={{ marginBottom: 20 }}
                />

                <FormInput
                  type="select"
                  label="Gender"
                  placeholder="Select Type"
                  name="line1"
                  formik={formik}
                  style={{ marginBottom: 20 }}
                  options={[
                    {
                      label: "Please Select any option",
                      value: "",
                      disabled: true,
                      selected: true,
                    },
                    {
                      label: "Male",
                      value: "Male",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Female",
                      value: "Female",
                      disabled: false,
                      selected: false,
                    },
                  ]}
                />
                {/* <a
                  href="/register"
                  onClick={handleLinkClick}
                  className="register-button"
                >
                  Register
                </a> */}

                
              <button
                  className="register-button"
                  type="submit"
                  onClick={handleClick}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Register;
