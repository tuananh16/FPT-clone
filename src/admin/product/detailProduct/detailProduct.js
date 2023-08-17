import "./style.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

function DetailProduct() {
  const token = localStorage.getItem("token");
  const [detailProduct, setDetailProduct] = useState("");
  const path = window.location.href;
  // console.log(path.split('/').pop(7))
  const id = path.split("/").pop(7);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`http://localhost:3000/product/productdetails?id=${id}`, config)
      .then((response) => {
        setDetailProduct(response.data.data);
      })
      .catch((error) => {
        console.log("lỗi");
        setDetailProduct(error);
      });
  }, []);
  console.log(detailProduct);
  return (
    <div>
      {detailProduct && (
        <div className="ad-home">
          <div className="ad-header-detail">
            <h1>{detailProduct.name}</h1>
            <div className="ad-price">
              <h2>
                {new Intl.NumberFormat("vi-VN").format(detailProduct.price)} đ
              </h2>
              <span>
                {new Intl.NumberFormat("vi-VN").format(detailProduct.oldPrice)}{" "}
                đ
              </span>
            </div>
          </div>
          <div className="ad-body">
            <div className="ad-body-left">
              <img src={`http://localhost:3000/${detailProduct.coverImg}`} />
            </div>
            <div className="ad-body-right">
              <div className="color-product">
                {/* test màu */}
                {detailProduct.metaData.map((e, index) => (
                  <div key={index} className="wrap-color">
                    <div
                      className="color-icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: e.colorName,
                      }}
                    ></div>
                    <p>SL: {e.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="param-detail">
                <ul>
                  <li>
                    <div className="name-icon">
                      <p>Màn Hình : </p>
                    </div>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <p>{detailProduct.screen} inch</p>
                  </li>
                  <li>
                    <div className="name-icon">
                      <p>Rom : </p>
                    </div>
                    <i className="fa-solid fa-ruler"></i>
                    <p>{detailProduct.rom} GB</p>
                  </li>
                  <li>
                    <div className="name-icon">
                      <p>Ram : </p>
                    </div>
                    <i className="fa-solid fa-memory"></i>
                    <p>{detailProduct.ram} GB</p>
                  </li>
                  <li>
                    <div className="name-icon">
                      <p>Cpu : </p>
                    </div>
                    <i className="fa-solid fa-microchip"></i>
                    <p>{detailProduct.cpuName}</p>
                  </li>
                  <li>
                    <div className="name-icon">
                      <p>Trọng Lượng : </p>
                    </div>
                    <i className="fa-solid fa-weight-hanging"></i>
                    <p>{detailProduct.weight}</p>
                  </li>
                </ul>
                {/* <a href="/">Xem thông tin kỹ thuật</a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailProduct;
