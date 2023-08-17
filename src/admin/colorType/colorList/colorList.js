import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function ColorList() {
  const [colorList, setColorList] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/color/list", config)
      .then((response) => {
        setColorList(response.data);
      })
      .catch((error) => {
        console.log(error, "loi");
      });
  }, []);
  if (!colorList) return null;
  const handleDelete = (id) => {
    const upDateList = colorList.filter((e) => e.id !== id);
    setColorList(upDateList);
  };

  return (
    <div className="ad-home">
      <h2>DANH SÁCH CÁC MÀU </h2>
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
          {colorList.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.id}</td>
              <td>{e.name}</td>
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

export default ColorList;
