import React from "react";
import logo from "../images/logo.png";

const Login = () => (
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
              <span><img src={logo} height="50px" alt="logo"/></span>
            <h5 class="card-title text-center">Operations studio</h5>
            <p>Please enter your email below</p>
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  required
                  autofocus
                />
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Remember this device
                </label>
              </div>
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
