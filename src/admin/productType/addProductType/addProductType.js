import React from "react";
import "./style.scss"

function AddProductType() {
  return (
    <div className="ad-home">
        <h2>Thêm Loại sản phẩm</h2>
      <form action="" method="POST" encType="multipart/form-data">
        <label htmlFor="danhmuc_id">
          Chọn danh mục
        </label>
        <br />
        <select required name="danhmuc_id" id="danhmuc_id">
          <option>--Chọn--</option>
          <option>Điện Thoại</option>
          <option>Laptop</option>
          <option>IPHONE</option>
        </select>
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

export default AddProductType;
