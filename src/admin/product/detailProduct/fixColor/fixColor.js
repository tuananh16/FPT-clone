import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

function FixColor() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const id = window.location.href.split("/").pop(7);

  const [addColor, setAddColor] = useState({
    color: 0,
    quantity: 0,
  });
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        `http://localhost:3000/product/update-product-metadata?id=${id}`,
        config
      )
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData(null);
      });
  }, []);
  if (!data) return <div>Loading...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddColor((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addColor.color === 0) {
      toast.error("ko chọn màu");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      axios
        .put(
          `http://localhost:3000/product/update-product-metadata?productDetailsId=${id}&colorId=${addColor.color}&quantity=${addColor.quantity}`,
          addColor,
          config
        )
        .then((response) => {
          if (response.data.status === true) {
            toast.success("Sửa mã màu thành công");
            setAddColor({
              color: "",
              quantity: 0,
            });
          }
          else{
            toast.error("Mã màu trùng với mã màu khác")
          }
        })
        .catch((error) => {
          console.log(error.response);
          toast.error("Lỗi");
        });
    }
  };
  console.log(addColor);

  return (
    <div className="ad-home">
      <h1>Sửa màu cho sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <p>Chọn màu cho sản phẩm</p>
        <select
          value={addColor.color}
          name="color"
          onChange={handleChange}
          required
        >
          <option>--Chọn--</option>
          {data.colorList.map((e, index) => (
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
        <button style={{ marginTop: "15px" }} name="submit" type="submit">
          GỬI
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FixColor;
