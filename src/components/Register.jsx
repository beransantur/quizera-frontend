import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextInput from "./TextInput";

const Register = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(null);

  {
    /******** FORMIK-ARGUMENTS ********/
  }
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "*Minimum 3 characters").required("*Required"),
    email: Yup.string().email("*Invalid email format").required("*Required"),
    password: Yup.string()
      .min(3, "*Minimum 3 characters")
      .required("*Required"),
  });

  const onSubmit = async (values, formikProps) => {
    formikProps.setSubmitting(true);
    const createdUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const registeredUser = await axios.post(
      "http://localhost:5000/users/register",
      createdUser
    );

    const data = await registeredUser.data;
    console.log(data);
    if (data.createdUser) {
      setIsRegisterSuccess(true);
    }

    if (data.userAlreadyExists) {
      setIsRegisterSuccess(false);
    }
  };

  return (
    <div className="register">
      <div class="container">
        <div className="d-flex justify-content-center">
          <div className="col col-12 col-md-6 position-relative">
            <h1 className="text-center text-white">Register</h1>
            <Link to={"/"}>
              <button className="btn btn-info position-absolute top-0 ">
                <Link to={"/"}>
                  <Icon.ArrowLeft size={30} color={"black"} />
                </Link>{" "}
              </button>
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  console.log(formik.values);
                  return (
                    <>
                      {isRegisterSuccess === true && (
                        <div className="bg-success text-white position-absolute text-center p-5 register-success">
                          <Icon.X
                            style={{
                              position: " absolute",
                              left: "25px",
                              top: "25px",
                              cursor: "pointer",
                            }}
                            size={32}
                            color={"white"}
                            onClick={() => {
                              setIsRegisterSuccess(null);
                              formik.resetForm();
                            }}
                          />
                          <p className="p-3 display-6">
                            {" "}
                            You've registered successfully!
                          </p>
                          <p>If you want, you can log in now</p>
                          <Link to={"/login"}>
                            <button className="btn btn-primary px-5">
                              Login
                            </button>
                          </Link>
                        </div>
                      )}
                      {isRegisterSuccess === false && (
                        <div className="bg-danger text-white position-absolute text-center p-5 register-success">
                          <Icon.X
                            style={{
                              position: " absolute",
                              left: "25px",
                              top: "25px",
                              cursor: "pointer",
                            }}
                            size={32}
                            color={"white"}
                            onClick={() => {
                              setIsRegisterSuccess(null);
                              formik.resetForm();
                            }}
                          />
                          <p className="p-3 display-6">
                            {" "}
                            User with that email already exists!
                          </p>
                          <p>You can try to register with another email.</p>
                          <button
                            className="btn btn-secondary px-5"
                            onClick={() => {
                              setIsRegisterSuccess(null);
                              formik.resetForm();
                            }}
                          >
                            Ok
                          </button>
                        </div>
                      )}
                      <Form class="mt-5 border p-4 bg-light shadow">
                        <h4 class="mb-5 text-secondary">Create Your Account</h4>
                        <div class="row">
                          <div class="mb-3 col">
                            <TextInput
                              name={"name"}
                              type={"text"}
                              className={"form-control"}
                              placeHolder={"Enter Name"}
                              labelText={"Name"}
                            />
                          </div>

                          <div class="mb-3 col-md-12">
                            <TextInput
                              name={"email"}
                              type={"text"}
                              className={"form-control"}
                              placeHolder={"Enter Email"}
                              labelText={"Email"}
                            />
                          </div>
                          <div class="mb-3 col-md-12">
                            <TextInput
                              name={"password"}
                              type={"password"}
                              className={"form-control"}
                              placeHolder={"Enter Password"}
                              labelText={"Password"}
                            />
                          </div>
                          <div class="col-md-12">
                            <button
                              class="btn btn-primary float-end"
                              type="submit"
                              disabled={
                                formik.isSubmitting ||
                                !formik.dirty ||
                                !formik.isValid
                              }
                            >
                              Signup Now
                            </button>
                          </div>
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>

              <p class="text-center mt-3 lead text-white">
                If you have account, Please &nbsp;
                <Link to={"/login"}>
                  <div className="ml-4 d-inline-block">Login Now</div>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
