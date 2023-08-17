import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function ListProductType() {
  const [listProductType, setlistProductType] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/categories/list", config)
      .then((response) => {
        setlistProductType(response.data);
      })
      .catch((error) => {
        console.log(error, "loi");
      });
  }, []);
  if (!listProductType) return null;
  const handleDelete = (id) => {
    const upDateList = listProductType.filter((e) => e.id !== id);
    setlistProductType(upDateList);
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
            <th>Tùy chỉnh</th>
          </tr>
        </thead>
        <tbody>
          {listProductType.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.id}</td>
              <td>{e.categoryName}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProductType;
