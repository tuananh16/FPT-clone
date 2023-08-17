import React, { useState } from "react";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AddColorProduct() {
  const token = localStorage.getItem("token");
  const [colorProduct, setColorProduct] = useState({
    id: "",
    color: "",
    quantyti: 1,
  });

  //   const test = color.split("#").pop(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };

    // axios
    //   .post(
    //     `http://localhost:3000/color/create/?color=%23${test}`,
    //     { color: color },
    //     config
    //   )
    //   .then((response) => {
    //     if (response.status === 201) {
    //       toast.success("🦄 Tạo màu thành công!", {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //       });
    //       setColor("");
    //     }
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error("Error creating color:", error);
    //     toast.error("Đã xảy ra lỗi khi tạo màu", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     });
    //   });
  };

  return (
    <div className="ad-home">
      <h2>Thêm Màu Cho Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="color">Vui Lòng Nhập ID Sản Phẩm</label>
        <input
          className="subcategory-input"
          type="text"
          name="id"
          value={colorProduct.id}
          //   onChange={(e) => setColor(e.target.value)}
          required
        />
        <br />

        <label htmlFor="color">Vui Lòng Chọn Loại Màu</label>
        <input
          className="subcategory-input"
          type="color"
          name="color"
          value={colorProduct.color}
          //   onChange={(e) => setColor(e.target.value)}
          required
        />
        <br />

        <label htmlFor="color">Vui Nhập Số Lượng</label>
        <input
          className="subcategory-input"
          type="number"
          name="quantity"
          value={colorProduct.quantyti}
          //   onChange={(e) => setColor(e.target.value)}
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
