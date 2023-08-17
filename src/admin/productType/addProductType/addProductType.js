import React, { useState } from "react";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AddProductType() {
  const token = localStorage.getItem("token");
  const [productType, setProductType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("http://localhost:3000/categories/create", { name: productType }, config)
      .then((response) => {
        if (response.data.status === true) {
          toast.success("🦄 Tạo sản phẩm thành công!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setProductType('')
        }
        console.log(response)
      })
      .catch((error) => {
        console.error("Error creating product type:", error);
        toast.error("Đã xảy ra lỗi khi tạo sản phẩm", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="ad-home">
      <h2>Thêm Loại sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="loaisanpham_name">Vui lòng nhập Loại sản phẩm</label>
        <br />
        <input
          className="subcategory-input"
          type="text"
          name="name"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          required
        />
        <button className="admin-btn" type="submit">
          Gửi
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddProductType;
