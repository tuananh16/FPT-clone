import React from "react";
import { useState } from "react";
import "./style.scss";
function Navbar() {
  const [showSubList1, setShowSubList1] = useState(false);
  const [showSubList2, setShowSubList2] = useState(false);
  const [showSubList3, setShowSubList3] = useState(false);
  const [showSubList4, setShowSubList4] = useState(false);

  const handleToggleSubList1 = (event) => {
    event.stopPropagation();
    setShowSubList1(!showSubList1);
  };

  const handleToggleSubList2 = () => {
    setShowSubList2(!showSubList2);
  };

  const handleToggleSubList3 = () => {
    setShowSubList3(!showSubList3);
  };
  const handleToggleSubList4 = () => {
    setShowSubList4(!showSubList4);
  };
  return (
    <div className="ad-navbar">
      <div className="ad-navbar-logo">
        <img src="https://media3.scdn.vn/img4/2020/05_04/kJeRRsQS1Kzg5lZunJZB.png" />
      </div>
      <ul>
        <li>
        <span>
            <img src="https://tse3.mm.bing.net/th?id=OIP.aFUA62GXzSVCvoHZp8-wxwHaHa&pid=Api&P=0&h=180" />
            Trang Chủ
          </span>
        </li>
        <li onClick={handleToggleSubList1}>
          <span>
            <img src="https://cdn4.iconfinder.com/data/icons/delivery-29/128/11-512.png" />
            Đơn hàng
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList1 && (
            <ul>
              <li onClick={(event) => event.stopPropagation()}>
                Chưa Hoàn Thành
              </li>
              <li onClick={(event) => event.stopPropagation()}>
                Đã Hoàn Thành
              </li>
              <li onClick={(event) => event.stopPropagation()}>
                Tất Cả Đơn Hàng
              </li>
            </ul>
          )}
        </li>
        <li onClick={handleToggleSubList2}>
          <span>
            <img src="https://tse1.mm.bing.net/th?id=OIP.IpwQjLfvurMs8UJzj_31gAHaHa&pid=Api&P=0&h=180" />
            Loại Sản Phẩm
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList2 && (
            <ul>
              <li>Danh Sách</li>
              <li>Thêm</li>
            </ul>
          )}
        </li>
        <li onClick={handleToggleSubList3}>
          <span>
            <img src="https://tse2.mm.bing.net/th?id=OIP.tCpf7Miad6ONbcc2-GbxFAHaHa&pid=Api&P=0&h=180" />
            Sản Phẩm
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList3 && (
            <ul>
              <li>Danh Sách</li>
              <li>Thêm</li>
            </ul>
          )}
        </li>
        <li onClick={handleToggleSubList4}>
          <span>
            <img src="https://tse2.mm.bing.net/th?id=OIP.UKb-LSLJTft1xPHNlt79sAHaHa&pid=Api&P=0&h=180" />
            Ảnh sản phẩm
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList4 && (
            <ul>
              <li>Danh Sách</li>
              <li>Thêm</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
