import React, { useState } from "react";
import "./login.scss";

function Login({ handleClickoff }) {
  const handleClick = () => {
    handleClickoff(false);
  };
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
    console.log(e.target.value);
  };
  const handleForSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordAgain) {
      setErrorMessage("mật khẩu trong trùng khớp");
    } else {
      setErrorMessage("tạo tài khoản thành công. Mời bạn đăng nhập");
      console.log("tK:" + username, "mk :" + password);
      setUsername("");
      setPassword("");
      setPasswordAgain("");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        zIndex: "100",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          left: "0",
          top: "0",
          position: "fixed",
          backgroundColor: "#00000090",
          display: "flex",
          justifyContent: "center",
          zIndex: "100",
        }}
        onClick={handleClick}
      ></div>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button>Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form" onSubmit={handleForSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            {errorMessage && (
              <p
                className={
                  errorMessage.includes("thành công") ? "success" : "error"
                }
                style={{display:'flex',justifyContent:'center'}}
              >
                {errorMessage}
              </p>
            )}
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
              value={password}
              onChange={handlePassword}
            />
            <input
              className="input"
              type="password"
              name="pswd again"
              placeholder="Enter The Password Again"
              required
              value={passwordAgain}
              onChange={handlePasswordAgain}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
