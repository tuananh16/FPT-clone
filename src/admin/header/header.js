import React from "react";
import "./style.scss";
function Header() {
  return (
    <div className="admin-header">
      <div className="ad-header2">
        <p>XIN CHÀO: </p>
        <b>ADMIN</b>
      </div>
      <div className="ad-header2">
        
        <a href="/">
          <i className="fa-solid fa-right-from-bracket" />
          <p>Đăng Xuất</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
