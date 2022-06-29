import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const Register = () => {
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
              <form action="" class="mt-5 border p-4 bg-light shadow">
                <h4 class="mb-5 text-secondary">Create Your Account</h4>
                <div class="row">
                  <div class="mb-3 col">
                    <label>
                      Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      class="form-control"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div class="mb-3 col-md-12">
                    <label>
                      Email<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label>
                      Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-primary float-end">
                      Signup Now
                    </button>
                  </div>
                </div>
              </form>
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
