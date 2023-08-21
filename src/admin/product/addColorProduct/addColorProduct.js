import React, { useEffect, useState } from "react";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AddColorProduct() {
  const token = localStorage.getItem("token");
  const [colorProduct, setColorProduct] = useState({
    id: "",
    color: "",
    quantity: 1, // Fixed the typo in the property name
  });

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/color/list", config)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setColorProduct(response.data[0]);
        }
      })
      .catch((error) => {
        console.log(error, "loi");
      });
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3000/color/add", colorProduct, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Color product added successfully");
        setColorProduct({
          id: "",
          color: "",
          quantity: 1,
        });
      })
      .catch((error) => {
        toast.error("An error occurred");
        console.log(error);
      });
  };

  return (
    <div className="ad-home">
      <h2>Thêm Màu Cho Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="id">Vui Lòng Nhập ID Sản Phẩm</label>
        <input
          className="subcategory-input"
          type="text"
          name="id"
          value={colorProduct.id}
          onChange={(e) =>
            setColorProduct({ ...colorProduct, id: e.target.value })
          }
          required
        />
        <br />

        <label htmlFor="color">Vui Lòng Chọn Loại Màu</label>
        <select
          value={colorProduct.colorId}
          name="colorId"
          onChange=''
          required
        >
          <option disabled>--Chọn--</option>
          {colorProduct.colors.map((e, index) => (
            <option
              key={index}
              value={e.id}
              style={{ backgroundColor: e.name, color: "#fff" }}
            >
              {e.name}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="quantity">Vui Nhập Số Lượng</label>
        <input
          className="subcategory-input"
          type="number"
          name="quantity"
          value={colorProduct.quantity}
          onChange={(e) =>
            setColorProduct({ ...colorProduct, quantity: e.target.value })
          }
          required
        />
        <br />

        <button type="submit">Gửi</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddColorProduct;
