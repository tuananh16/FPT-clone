import React, { useState } from "react";
import "./style.scss";

function ColorList() {
  const donChuaHT = [
    {
      id: 1,
      maDH: "abc",
      date: "27 / 8 / 2023",
      name: "Nguyen tuan Anh",
      phone: 999999999,
      address: "ha noi",
      giaohang: "Chuyen phat nhanh",
      thanhToan: "chuyen khoan",
      tinhTrangDon: "chua hoan thanh",
    },
    {
      id: 2,
      maDH: "abc",
      date: "27 / 8 / 2023",
      name: "Nguyen tuan Anh",
      phone: 999999999,
      address: "ha noi",
      giaohang: "Chuyen phat nhanh",
      thanhToan: "chuyen khoan",
      tinhTrangDon: "chua hoan thanh",
    },
  ];
  const [listOrder, setListOrder] = useState(donChuaHT);

  const handleDelete = (id) => {
    const upDateList = listOrder.filter((e) => e.id !== id);
    setListOrder(upDateList);
  };

  return (
    <div className="ad-home">
      <h2>DANH SÁCH LOẠI Màu</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Danh Mục</th>
            <th>Loại Sản Phẩm</th>
            <th>Tùy chỉnh</th>
          </tr>
        </thead>
        <tbody>
          {listOrder.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.maDH}</td>
              <td>{e.date}</td>
              <td>{e.name}</td>
              <td>
              <button style={{marginRight:"20px"}} >Sửa</button>
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