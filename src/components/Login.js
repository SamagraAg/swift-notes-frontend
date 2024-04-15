import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
  const host = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleClick = async (e) => {
    console.log(process.env.REACT_APP_BACKEND_URL)
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.success === true) {
      console.log(jsonResponse.authToken);
      localStorage.setItem("token", jsonResponse.authToken);
      props.showAlert("Logged in successfully", "success");
      navigate("/");
    } else {
      setCredentials({ email: "", password: "" });
      props.showAlert("Invalid credentials", "danger");
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
                <h3 className="text-center text-warning">Login</h3>
                <div className="form-group my-2">
                  <label htmlFor="email" className="text-light">
                    Email:
                  </label>
                  <input
                    value={credentials.email}
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="password" className="text-light">
                    Password:
                  </label>
                  <input
                    value={credentials.password}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={onChange}
                    required
                    minLength={5}
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
