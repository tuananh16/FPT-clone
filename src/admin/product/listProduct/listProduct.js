import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function ListProduct() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!data) return null;

  console.log(data);

  // ====== delete product =======
  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setData(data.filter((e) => e.id !== id));
  };
  const handlesua = (id) => {
    // axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const sua = data.filter((e) => e.id === id);
    console.log(sua);

    // setData();
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
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
              <td></td>
              <td></td>
              <td>
                <button style={{ marginRight: "20px" }}
                onClick={() => handlesua(e.id)}>Sửa</button>
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
