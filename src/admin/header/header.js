import React from "react";
import "./style.scss";
function Header() {
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/trang-chu";
    // setUsername("Tài khoản của tôi");
  };
  return (
    <div className="admin-header">
      <div className="ad-header2">
        <p>XIN CHÀO: </p>
        <b>ADMIN</b>
      </div>
      <div className="ad-header2">
        <a href="/" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket" />
          <p>Đăng Xuất</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
