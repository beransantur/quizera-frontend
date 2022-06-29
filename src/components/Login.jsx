import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const Login = () => {
  return (
    <div className="login">
      <div class="container">
        <div className="d-flex justify-content-center">
          <div className="col col-12 col-md-6 position-relative">
            <h1 className="text-center text-white">Login</h1>
            <button className="btn btn-info position-absolute top-0 ">
              <Link to={"/"}>
                <Icon.ArrowLeft size={30} color={"black"} />
              </Link>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
              <form action="" class="mt-5 border p-4 bg-light shadow">
                <h4 class="mb-5 text-secondary">Login to your account</h4>
                <div class="row">
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
                      placeholder="Enter Password"
                    />
                  </div>
                  <div class="col-md-12">
                    <Link to={"/welcome"}>
                      <button class="btn btn-success w-100">Login Now</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
