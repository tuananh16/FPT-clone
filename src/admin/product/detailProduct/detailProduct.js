import "./style.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import { confirmAlert } from "react-confirm-alert";
import "react-slideshow-image/dist/styles.css";

function DetailProduct() {
  
  const token = localStorage.getItem("token");
  const [detailProduct, setDetailProduct] = useState("");
  const path = window.location.href;
  // console.log(path.split('/').pop(7))
  const id = path.split("/").pop(7);
  // ======== xóa màu =================
  const handleDelete = (productDetailId) => {
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
                `http://localhost:3000/product/delete-product-metadata?productId=${id}&productDetailsId=${productDetailId}`,
                config
              );

              const updatedModules = detailProduct.module.filter(
                (item) => item.id !== productDetailId
              );

              setDetailProduct((prevDetailProduct) => ({
                ...prevDetailProduct,
                module: updatedModules,
              }));
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

  // ======= sửa màu ================
  // ================================
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
  }, [detailProduct]);
  return (
    <div>
      {detailProduct && (
        <div className="ad-home">
          <div className="ad-header-detail">
            <div
              style={{ display: "flex", alignItems: "baseline", width: "40%" }}
            >
              <h1>{detailProduct.name}</h1>
              <p style={{ margin: 0, paddingLeft: "10px" }}>
                MSP:{detailProduct.id}
              </p>
            </div>
            <h2>
              Tổng sản phẩm:{" "}
              <span style={{ color: "#000" }}>
                {detailProduct.totalQuantity}
              </span>{" "}
              sp
            </h2>

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
            <div
              className="ad-body-left"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    // style={{ marginBottom: "24px" }}
                    src={`http://localhost:3000/${detailProduct.coverImg}`}
                    alt="Cover Image"
                  />
                </div>
                {detailProduct.imagesList.map((e, index) => (
                  <div key={index}>
                    <img
                      style={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      src={`http://localhost:3000/${e}`}
                      alt={`Image ${index}`}
                    />
                  </div>
                ))}
              </Slide>
            </div>

            <div className="ad-body-right">
              <div className="color-product">
                {/* test màu */}

                <div className="category-imformation">
                  <p>Màu Sắc:</p>
                  <p>Thay Đổi: </p>
                </div>
                <div
                  style={{ marginLeft: "15px", width: "80%", display: "flex" }}
                >
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
                      <p
                        style={{
                          margin: "10px",
                        }}
                      >
                        SL: {e.quantity}
                      </p>
                      <div>
                        <button
                          onClick={() => {
                            handleDelete(e.productDetailId);
                          }}
                        >
                          Xóa
                        </button>
                        <button style={{ margin: "0 5px" }}>Sửa</button>
                      </div>
                    </div>
                  ))}
                </div>
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
