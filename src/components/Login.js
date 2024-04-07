import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div id="login">
      <h3 className="text-center text-light pt-5 d-none">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-warning">Login</h3>
                <div className="form-group my-2">
                  <label htmlFor="email" className="text-light">
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="password" className="text-light">
                    Password:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value="Submit"
                  />
                </div>
                <div id="register-link" className="text-light text-right">
                  Not a user?{" "}
                  <Link to="/signup" className="text-warning">
                    Register here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
