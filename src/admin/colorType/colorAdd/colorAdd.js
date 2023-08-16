import React from "react";
import "./style.scss"

function ColorAdd() {
  return (
    <div className="ad-home">
        <h2>Thêm Loại Màu</h2>
      <form >
        
        <br />
        <label htmlFor="loaisanpham_name">
          Vui lòng chọn Loại sản phẩm
        </label>
        <br />
        <input
          className="subcartegory-input"
          type="text"
          name="loaisanpham_name"
          required
        />
        <button className="admin-btn" type="submit">
          Gửi
        </button>
      </form>
    </div>
  );
}

export default ColorAdd;
