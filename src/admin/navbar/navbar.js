import React from "react";
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
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
      <Link to="admin/trang-chu">
        <div className="ad-navbar-logo">
          <img src="https://media3.scdn.vn/img4/2020/05_04/kJeRRsQS1Kzg5lZunJZB.png" />
        </div>
      </Link>
      <ul>
        <Link to="admin/trang-chu">
          <li>
            <span>
              <img src="https://tse3.mm.bing.net/th?id=OIP.aFUA62GXzSVCvoHZp8-wxwHaHa&pid=Api&P=0&h=180" />
              Trang Chủ
            </span>
          </li>
        </Link>
        {/*========== Đơn hàng================= */}
        <li onClick={handleToggleSubList1}>
          <span>
            <img src="https://cdn4.iconfinder.com/data/icons/delivery-29/128/11-512.png" />
            Đơn hàng
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList1 && (
            <ul>
              <Link to="admin/chua-hoan-thanh">
                <li onClick={(event) => event.stopPropagation()}>
                  Chưa Hoàn Thành
                </li>
              </Link>
              <Link to="admin/da-hoan-thanh">
                <li onClick={(event) => event.stopPropagation()}>
                  Đã Hoàn Thành
                </li>
              </Link>
              <Link to="admin/all-don-hang">
                <li onClick={(event) => event.stopPropagation()}>
                  Tất Cả Đơn Hàng
                </li>
              </Link>
            </ul>
          )}
        </li>
        {/* ===========Loại sản phẩm ================== */}
        <li onClick={handleToggleSubList2}>
          <span>
            <img src="https://tse1.mm.bing.net/th?id=OIP.IpwQjLfvurMs8UJzj_31gAHaHa&pid=Api&P=0&h=180" />
            Loại Sản Phẩm
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList2 && (
            <ul>
              <Link to="admin/loai-san-pham/danh-sach">
                <li>Danh Sách</li>
              </Link>
              <Link to="admin/loai-san-pham/them">
                <li>Thêm</li>
              </Link>
            </ul>
          )}
        </li>
        {/* ===========Loại Màu  ================== */}
        <li onClick={handleToggleSubList4}>
          <span>
            <img src="https://cdn.tgdd.vn/ValueIcons/14/icon_da_sac.png" />
            Loại Màu
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList4 && (
            <ul>
              <Link to="admin/loai-mau/danh-sach">
                <li>Danh Sách</li>
              </Link>
              <Link to="admin/loai-mau/them">
                <li>Thêm</li>
              </Link>
            </ul>
          )}
        </li>
        {/* ======================= Sản phẩm ==================== */}
        <li onClick={handleToggleSubList3}>
          <span>
            <img src="https://tse2.mm.bing.net/th?id=OIP.tCpf7Miad6ONbcc2-GbxFAHaHa&pid=Api&P=0&h=180" />
            Sản Phẩm
            <i className="fa-solid fa-caret-down" />
          </span>
          {showSubList3 && (
            <ul>
              <Link to="admin/san-pham/danh-sach">
                <li>Danh Sách</li>
              </Link>
              <Link to="admin/san-pham/them">
                <li>Thêm</li>
              </Link>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
