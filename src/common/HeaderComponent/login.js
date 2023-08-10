import React, { useState } from "react";
import axios from "axios";
import "./login.scss";

function Login() {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };

  // Đăng nhập ================================

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        username: usernameLogin,
        password: passwordLogin,
      })
      .then((response) => {
        const { username, access_token, role } = response.data;
        setUsernameLogin(username);
        localStorage.setItem("username", usernameLogin);
        localStorage.setItem("token", access_token);
        localStorage.setItem("role", role);
        if (role === 1) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/trang-chu";
        }
      })
      .catch((error) => {
        setErrorMessageLogin("Sai tài khoản hoặc mật khẩu");
      });
  };

  // Đăng ký ===================================
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/auth/register`, {
        username: username,
        password: password,
        repassword: passwordAgain,
      })
      .then((response) => {
        const isNewRecord = response.data.status;
        console.log(isNewRecord);
        if (password !== passwordAgain) {
          setErrorMessage("Mật khẩu không khớp");
        } else if (isNewRecord === false) {
          setErrorMessage("Tài khoản đã tồn tại");
        } else {
          setErrorMessage("Tạo tài khoản thành công. Mời bạn đăng nhập");
          setUsername("");
          setPassword("");
          setPasswordAgain("");
        }
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error(error);
        setErrorMessage("Đã xảy ra lỗi trong quá trình đăng ký");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        backgroundColor: "aqua",
      }}
    >
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        {/* ====== Đăng nhập ============ */}
        <div className="login">
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            {errorMessageLogin && (
              <p
                className={
                  errorMessage.includes("thành công") ? "success" : "error"
                }
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0",
                }}
              >
                {errorMessageLogin}
              </p>
            )}
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              value={usernameLogin}
              onChange={(e) => setUsernameLogin(e.target.value)}
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
            <button type="submit">Log in</button>
          </form>
        </div>
        {/* ============== Đăng ký =========================*/}
        <div className="register">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            {errorMessage && (
              <p
                className={
                  errorMessage.includes("thành công") ? "success" : "error"
                }
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0",
                }}
              >
                {errorMessage}
              </p>
            )}
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePassword}
            />
            <input
              className="input"
              type="password"
              name="repassword"
              placeholder="Enter The Password Again"
              required
              value={passwordAgain}
              onChange={handlePasswordAgain}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
