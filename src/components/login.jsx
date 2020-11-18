import React from "react";
import "../App.css";
import logo from "../images/logo.png";

const Login = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-box card-signin my-5">
          <div className="card-body">
            <span>
              <img src={logo} alt="logo" />
            </span>
            <h4 className="card-title">Operations studio</h4>
            <p className="email-text">Please enter your email below</p>
            <form className="form-signin">
              <div className="form-label-group email-address">
                <label for="inputEmail">Email Address</label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  required
                  autofocus
                />
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label
                  className="custom-control-label checkbox"
                  for="customCheck1"
                >
                  <p className="span-text">Remember this device</p>
                </label>
              </div>
              <button className="btn btn-primary button border" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
