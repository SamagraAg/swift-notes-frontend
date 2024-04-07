import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const host = "http://localhost:5000";
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.success === true) {
      console.log(jsonResponse.authToken);
      localStorage.setItem("token", jsonResponse.authToken);
      navigate("/");
    } else {
      console.log(jsonResponse.errors)
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
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
              <form id="login-form" className="form" onSubmit={handleClick}>
                <h3 className="text-center text-warning">Register</h3>
                <div className="form-group my-2">
                  <label htmlFor="name" className="text-light">
                    Full Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={onChange}
                  />
                </div>
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
                    onChange={onChange}
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
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="cpassword" className="text-light">
                    Confirm Password:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    className="form-control"
                    onChange={onChange}
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
                  Already a user?{" "}
                  <Link to="/login" className="text-warning">
                    Login here
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

export default Signup;
