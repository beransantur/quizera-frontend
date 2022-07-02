import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  /******** FORMIK-ARGUMENTS ********/
  const validationSchema = Yup.object({
    email: Yup.string().email("*Invalid email format").required("*Required"),
    password: Yup.string().min(3, "*Min 3 characters").required("*Required"),
  });

  const onSubmit = async (values, formikProps) => {
    formikProps.setSubmitting(true);

    const registeredUser = await axios.post(
      "https://quizera-backend.herokuapp.com/users/login",
      values
    );

    const data = await registeredUser.data;
    if (data.loggedInUser) {
      setUser(data.loggedInUser);
      navigate(`/welcome`);
    }
    if (data.error) {
      setIsLoginSuccess(false);
      setErrorMessage(data.error);
    }
  };

  return (
    <div className="login">
      <div class="container">
        <div className="d-flex justify-content-center">
          <div className="col col-12 col-md-6 position-relative">
            <h1 className="text-center text-white">Login</h1>
            <Link to={"/"}>
              <button className="btn btn-info position-absolute top-0 ">
                <Icon.ArrowLeft size={30} color={"black"} />
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
                  return (
                    <>
                      {isLoginSuccess === false && (
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
                              setIsLoginSuccess(null);
                              formik.resetForm();
                            }}
                          />
                          <p className="p-3 display-6">
                            {" "}
                            Unfortunately, {errorMessage} ..
                          </p>
                          <p>You can try to log in again..</p>
                          <button
                            className="btn btn-secondary px-5"
                            onClick={() => {
                              setIsLoginSuccess(null);
                              formik.resetForm();
                            }}
                          >
                            Ok
                          </button>
                        </div>
                      )}
                      <Form class="mt-5 border p-4 bg-light shadow">
                        <h4 class="mb-5 text-secondary">
                          Login to your account
                        </h4>
                        <div class="row">
                          <div class="mb-3 col-md-12">
                            <TextInput
                              name={"email"}
                              type={"text"}
                              placeHolder={"Enter Email"}
                              labelText={"Email"}
                            />
                          </div>
                          <div class="mb-3 col-md-12">
                            <TextInput
                              name={"password"}
                              type={"password"}
                              placeHolder={"Enter Password"}
                              labelText={"Password"}
                            />
                          </div>
                          <div class="col-md-12">
                            <button
                              class="btn btn-success w-100"
                              type="submit"
                              disabled={
                                formik.isSubmitting ||
                                !formik.dirty ||
                                !formik.isValid
                              }
                            >
                              Login Now
                            </button>
                          </div>
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
