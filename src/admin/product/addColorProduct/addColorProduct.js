import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

function AddColorProduct() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [addColor, setAddColor] = useState({
    id: "",
    color: 0,
    quantity: 1,
  });

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/product/add-product-metadata", config)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData([]);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddColor((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "http://localhost:3000/product/add-product-metadata",
        addColor,
        config
      )
      .then((response) => {
        console.log(response)
        if (response.data.status === true) {
          toast.success("Color product added successfully");
          setAddColor({
            id: "",
            color: "",
            quantity: 1,
          });
        } else if (response.data.message === "Id Invalid") {
          toast.error("ID không tồn tại");
        } else if (response.data.message === "Color Existed") {
          toast.error("Màu hiện có");
        }
      })
      .catch((error) => {
        toast.error("Lỗi");
        console.error(
          "Đã xảy ra lỗi:",
          error.response ? error.response.data : error.message
        );
      });
  };

  console.log(addColor);

  return (
    <div className="ad-home">
      <h1>Thêm màu cho sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <p>Nhập ID sản phẩm</p>
        <input
          type="text"
          name="id"
          value={addColor.id}
          onChange={handleChange}
          required
        />
        <p>Chọn màu cho sản phẩm</p>
        <select
          value={addColor.color}
          name="color"
          onChange={handleChange}
          required
        >
          <option disabled>--Chọn--</option>
          {data.map((e, index) => (
            <option
              key={index}
              value={e.id}
              style={{ backgroundColor: e.name, color: "#fff" }}
            >
              {e.name}
            </option>
          ))}
        </select>
        <p>Nhập số lượng sản phẩm</p>
        <input
          type="number"
          name="quantity"
          min="1"
          value={addColor.quantity}
          onChange={handleChange}
        />
        <button name="submit" type="submit">
          GỬI
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddColorProduct;
