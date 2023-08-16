import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function ListProduct() {
  const [data, setData] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/product/list-product", config)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log("lỗi");
        setData(error);
      });
  }, []);
  if (!data)
    return (
      <div className="ad-home">
        <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Loại Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Màu</th>
              <th>Giá </th>
              <th>Số Lượng </th>
              <th>Thay Đổi</th>
            </tr>
          </thead>
        </table>
      </div>
    );

  // ====== delete product =======
  const handleDelete = async (id) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(
        `http://localhost:3000/product/delete/?id=${id}`,
        config
      );
      setData((prevData) => prevData.filter((item) => item.id !== id));
      alert('Bạn chắc chắn xóa sản phẩm này')
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  const handlesua = (event) => {
    // axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const sua = event.target.id;
    console.log(sua);
  };

  return (
    <div className="ad-home">
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Loại Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Màu</th>
            <th>Giá </th>
            <th>Số Lượng </th>
            <th>Thay Đổi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.categoryName}</td>
              <td>{e.productName}</td>
              <td>{e.color}</td>
              <td>{new Intl.NumberFormat("vi-VN").format(e.price)} đ</td>
              <td>{e.quantity}</td>
              <td>
                <button style={{ marginRight: "20px" }} onClick={handlesua}>
                  Sửa
                </button>
                <button onClick={() => handleDelete(e.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
