import React from "react";
import "./style.scss";

function AddProduct() {
  return (
    <div className="ad-home">
      <h2>Thêm sản phẩm</h2>
      <form className="abc">
        <div className="ad-wrap">
          <p>Loại sản phẩm</p>
          <select >
            <option >
              --Chọn-- <i className="fa-solid fa-sort-down"></i>
            </option>
            <option>Điện Thoại</option>
            <option>Laptop</option>
            <option>Tablet</option>
          </select>
          <p>Tên sản phẩm</p>
          <input placeholder="Nhập tên sản phẩm" required/>
          <p>Giá sản phẩm</p>
          <input placeholder="Nhập giá sản phẩm"  required/>
          <p>CPU</p>
          <input required placeholder="Nhập tên CPU" />
          <p>Ram</p>
          <input required placeholder="Nhập tên Ram" />
          <p>Rom</p>
          <input required placeholder="Nhập tên Rom" />
          <p>Màn hình</p>
          <input required placeholder="Nhập tên màn hình" />
          <p>Trọng lượng</p>
          <input required placeholder="Nhập tên Trọng lượng" />
          <p>Số lượng</p>
          <input required placeholder="Nhập số lượng" />
          <p>Ảnh đại diện</p>
          <input required type="file" />
          <p>Ảnh sản phẩm</p>
          <input required type="file" />
        </div>
        <button name="submit" type="submit">
          Gửi
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
