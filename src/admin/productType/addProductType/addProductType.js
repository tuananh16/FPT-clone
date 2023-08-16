import React from "react";
import "./style.scss";

function AddProductType() {
  return (
    <div className="ad-home">
      <h2>Thêm Loại sản phẩm</h2>
      <form>
        <br />
        <label htmlFor="loaisanpham_name">Vui lòng nhập Loại sản phẩm</label>
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

export default AddProductType;
