import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function getUser() {
    const user = email;
    return user;
  }
  let navigateTo = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigateTo("/");
    }
  }, []);
  async function login() {
    let res = await fetch("http://realestateapi.somee.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(res.status);
    if (res.status != 200) {
      window.alert("Login Fail, User Not Found !");
    } else {
      res = await res.json();
      console.log(res);
      localStorage.setItem("jwt", res.accessToken);
      localStorage.setItem("user-info", getUser());
      navigateTo("/");
    }
  }

  return (
    <div className="login-wrapper">
      <Header></Header>
      <div className="form">
        <h1>Login</h1>

        <div className="input-box">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="email-login"
            placeholder="Email"
          />
          <FontAwesomeIcon icon={faAt} className="login-icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="password"
            placeholder="Password"
          />
          <FontAwesomeIcon icon={faLock} className="login-icon" />
        </div>
        <div className="check-box">
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox">Remember Me</label>
          <a href="#">Forgot Password ?</a>
        </div>

        <button onClick={login} className="login-btn">
          Login
        </button>
        <div className="register-question">
          <span>Don't have an account ?</span>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
