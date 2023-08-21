import "./style.scss";
import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";

// import {anh} from '../../../../../New folder/files/'

function ListProduct() {
  const [data, setData] = useState("");
  const token = localStorage.getItem("token");
  /////////////////////////////////////////

  /////////////////////////////////////
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
        <h2>DANH SÁCH SẢN PHẨM</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
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
  const handleDelete = (id) => {
    confirmAlert({
      title: "Bạn có chắc xóa sản phẩm này không",
      buttons: [
        {
          label: "OK",
          onClick: async () => {
            try {
              const config = {
                headers: { Authorization: `Bearer ${token}` },
              };
              await axios.delete(
                `http://localhost:3000/product/delete/?id=${id}`,
                config
              );
              setData((prevData) => prevData.filter((item) => item.id !== id));
            } catch (error) {
              console.log("Error deleting product:", error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="ad-home">
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Loại Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Ảnh</th>
            <th>Giá </th>
            <th>SL </th>
            <th>Thay Đổi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.id}</td>
              <td>{e.categoryName}</td>
              <td>{e.productName}</td>
              <td>
                <img
                  style={{ maxHeight: "70px", maxWidth: "70px" }}
                  src={`http://localhost:3000/${e.coverImgPath}`}
                  alt="Màu"
                />
              </td>
              <td>{new Intl.NumberFormat("vi-VN").format(e.price)} đ</td>
              <td>{e.quantity}</td>
              <td>
                <Link to={`/admin/admin/san-pham/chi-tiet-san-pham/${e.id}`}>
                  <button>Xem Chi Tiết</button>
                </Link>
                <Link to={`/admin/admin/san-pham/sua/${e.id}`}>
                  <button style={{ margin: "0 5px" }}>Sửa</button>
                </Link>

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
