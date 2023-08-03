import React from "react";
import "./login.scss";

function Login({ handleClickoff }) {
  const handleClick = () => {
    handleClickoff(false);
  };
  return (
    <div style={{
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    zIndex: "100",
    alignItems:"center",
    }}>
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
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
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
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
