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
            <th>Loại Màu</th>
            <th>Tùy chỉnh</th>
          </tr>
        </thead>
        <tbody>
          {colorList.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.id}</td>
              <td >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{width:'80px'}}>{e.name}</div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: e.name,
                      marginLeft:"10px"
                    }}
                  ></div>
                </div>
              </td>
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
