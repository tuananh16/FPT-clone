import "./headerDetail.scss";
import { highlightsPhones, laptopHot, tabletHot } from "../../Body/data";
import { useEffect, useState } from "react";
import SlideShowDetail from "./slideShowDetail";
import BuyNow from "../buyNow/buyNow";
import axios from "axios";

function HeaderDetail() {
  const suggestBundled = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png",
      name: "Củ sạc Apple Power Adapter 20W Type-C",
      price: "520.000₫",
      oldPrice: "549.000₫",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/13/638065491421965102_op-lung-iphone-14-pro-max-silicone-case-with-magsafe-dd.jpg",
      name: "Ốp lưng iPhone 14 Pro Max Silicone Case with MagSafe",
      price: "1.340.000₫",
      oldPrice: "1.549.000₫",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/8/637982433040096193_tai-nghe-airpods-pro-2022-dd.jpg",
      name: "Tai nghe AirPods Pro 2022",
      price: "5.990.000₫",
      oldPrice: "6.990.000₫",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/21/637756950346589456_day-sac-magsafe-charger-to-usb-c-cable-1-m-trang-dd.jpg",
      name: "Dây sạc Apple Magsafe Charger to USB-C Cable 1m",
      price: "990.000₫",
      oldPrice: "1.549.000₫",
    },
  ];
  const combo = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146114144718738_Trip20C_Black.jpg",
      name: "Pin sạc dự phòng UmeTravel 20000mAH TRIP20C",
      price: "539.000₫",
      oldPrice: "899.000₫",
      discover:
        "Giảm đến 60% Sạc dự phòng/Tai Nghe khi mua kèm ĐTDĐ. MTB. iPhone",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/6/29/637290490234819549_HASP-00630524-dd.png",
      name: "Cáp Lightning UmeTravel Military fibre C1 2m",
      price: "197.100₫",
      oldPrice: "219.000₫",
      discover: "Giảm ngay 10% Cáp/Sạc khi mua kèm ĐTDĐ. iPhone",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/28/637999851012728029_IMG_0840.jpg",
      name: "Ốp bảo vệ camera iPhone 14 Pro / 14 Pro Max Mipow",
      price: "539.000₫",
      oldPrice: "399.000₫",
      discover: "Giảm thêm 10% khi mua kèm ĐTDĐ. iPhone. bất kỳ ốp lưng nào",
    },
  ];

  const [buyNow, setBuyNow] = useState(false);
  const token = localStorage.getItem("token");

  const handleClick = () => {
    setBuyNow(true);
  };
  const handleClickoff = (e) => {
    setBuyNow(e);
  };

  const [productDetail, setProductDetail] = useState("");

  // useEffect(() => {
  //   const path = window.location.href;
  //   let arrDevice = null;
  //   if (path.indexOf("dien-thoai") != -1) {
  //     arrDevice = highlightsPhones.filter(
  //       (items) => items.id == path.split("/")[path.split("/").length - 1]
  //     )[0];
  //     setProductDetail(arrDevice);
  //   } else if (path.indexOf("tablet") != -1) {
  //     arrDevice = tabletHot.filter(
  //       (items) => items.id == path.split("/")[path.split("/").length - 1]
  //     )[0];
  //     setProductDetail(arrDevice);
  //   } else {
  //     arrDevice = laptopHot.filter(
  //       (items) => items.id == path.split("/")[path.split("/").length - 1]
  //     )[0];
  //     setProductDetail(arrDevice);
  //   }
  // }, []);
  useEffect(() => {
    const path = window.location.href;
    const id = path.split("/").pop(7);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`http://localhost:3000/product/product-details?id=${id}`, config)
      .then((response) => {
        setProductDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error, "loi");
      });
  }, []);
  // console.log(productDetail)
  return (
    <div className="wrap-header-detail">
      {productDetail && (
        <>
          <div>
            <div className="header-detail">
              <ul>
                <li>Trang chủ</li>
                <li>Điện thoại</li>
                <li>Apple(iphone)</li>
              </ul>
            </div>
            <div className="body-up-detail">
              <div className="name-product">
                <h1>{productDetail.name}</h1>
                <span>(No.00832906)</span>
              </div>
              <div className="rating">
                <ul>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                </ul>
                <a href="/">455 đánh giá</a>
                <span>|</span>
                <a href="/">1347 Hỏi & đáp</a>
                <i className="fa-solid fa-plus" />
                <a href="/"> So sánh</a>
              </div>
            </div>
            <div className="body-bottom-detail">
              <div className="left-detail">
                <div className="slide-show-detail">
                  <SlideShowDetail data ={productDetail}/>
                </div>
                <div className="feature">
                  <a href="/">
                    <i className="fa-solid fa-image" />
                    <p>Xem thêm 17 ảnh</p>
                  </a>
                  <a href="/">
                    <i className="fa-brands fa-youtube" />
                    <p>Video trên tay</p>
                  </a>
                  <a href="/">
                    <i className="fa-solid fa-box-open" />
                    <p>Trong hộp có gì</p>
                  </a>
                </div>
                <div className="param-detail">
                  <ul>
                    <li>
                      <i className="fa-solid fa-mobile-screen-button"></i>
                      <p>6.55 inch, AMOLED, FHD+, 1080 x 2400 Pixels</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-notch"></i>
                      <p>50.0 MP + 8.0 MP + 2.0 MP </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-camera-retro"></i>
                      <p>32.0 MP + 8.0 MP </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-microchip"></i>
                      <p>Snapdragon 7 Gen 1 </p>
                    </li>
                    <li>
                      <i className="fa-regular fa-hard-drive"></i>
                      <p>128 GB </p>
                    </li>
                  </ul>
                  <a href="/">Xem thông tin kỹ thuật</a>
                </div>
                <div className="policy-detail">
                  <i className="fa-solid fa-medal fa-rotate-180"></i>
                  <p>Hàng chính hãng - Bảo hành 12 tháng </p>
                  <i className="fa-solid fa-truck-fast"></i>
                  <p>Giao hàng toàn quốc</p>
                </div>
              </div>
              <div className="right-detail">
                <div className="price-detail">
                  <div className="price-left">
                    <div className="price-main">
                      {" "}
                      {new Intl.NumberFormat("vi-VN").format(
                        productDetail.price
                      )}{" "}
                      đ{" "}
                    </div>
                    <div className="price-cost">
                      {" "}
                      {new Intl.NumberFormat("vi-VN").format(
                        productDetail.oldPrice
                      )}{" "}
                      đ
                    </div>
                  </div>
                  <div className="price-right">
                    <p>Trả góp chỉ từ</p>
                    <p>
                      <b>1.960.500₫</b>/tháng
                    </p>
                  </div>
                </div>
                <div className="reward-points">
                  <b>+6.670 điểm thưởng dự kiến</b>
                </div>
                <div className="select-GB">
                  <div className="box-GB">
                    <label className="radio">
                      <input type="radio" defaultChecked name="contact" />
                      128GB
                    </label>
                  </div>
                  <div className="box-GB">
                    <label className="radio">
                      <input type="radio" name="contact" />
                      256GB
                    </label>
                  </div>
                  <div className="box-GB">
                    <label className="radio">
                      <input type="radio" name="contact" />
                      512GB
                    </label>
                  </div>
                  <div className="box-GB">
                    <label className="radio">
                      <input type="radio" name="contact" />
                      1TB
                    </label>
                  </div>
                </div>
                <div className="select-color">
                  <div className="machine-color">
                    <div
                      className="box-img"
                      style={{ backgroundColor: "purple" }}
                    ></div>
                    <input type="radio" defaultChecked name="color" />
                    <p>Tím</p>
                  </div>
                  <div className="machine-color">
                    <div
                      className="box-img"
                      style={{ backgroundColor: "yellow" }}
                    ></div>
                    <input type="radio" name="color" />
                    <p>Vàng</p>
                  </div>
                  <div className="machine-color">
                    <div
                      className="box-img"
                      style={{ backgroundColor: "black" }}
                    ></div>
                    <input type="radio" name="color" />
                    <p>Đen</p>
                  </div>
                  <div className="machine-color">
                    <div
                      className="box-img"
                      style={{ backgroundColor: "silver" }}
                    ></div>
                    <input type="radio" name="color" />
                    <p>Xám</p>
                  </div>
                </div>
                <div className="box-promo">
                  <div
                    style={{
                      padding: "8px 10px",
                      border: "1px solid #e9ecef",
                      fontWeight: "500",
                    }}
                  >
                    Chọn 1 trong 3 khuyến mãi sau
                  </div>
                  <ul>
                    <li>
                      <input type="radio" name="option" />
                      <p>
                        Giá đặc biệt chỉ 26.890.000đ khi mua màu Tím áp dụng tại
                        danh sách cửa hàng nhất định đến 22/06{" "}
                        <a href="/">Xem chi tiết</a>
                      </p>
                    </li>
                    <li>
                      <input type="radio" name="option" />
                      <p>
                        Giảm ngay 2.510.000đ khi mua màu Tím áp dụng đến 22/06{" "}
                      </p>
                    </li>
                    <li>
                      <input type="radio" name="option" />
                      <p>Trả góp 0%</p>
                    </li>
                  </ul>
                  <div
                    style={{
                      backgroundColor: "#e9ecef",
                      padding: "4px 10px",
                      width: "124px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    Thêm ưu đãi
                  </div>
                  <div>
                    <ul className="endow">
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Giảm đến 30% hệ sinh thái Apple{" "}
                        <a href="/">Xem chi tiết</a>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Thu cũ đổi mới trợ giá ngay đến 2 triệu (SmartExchange)
                        <a href="/">Xem chi tiết</a>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Tặng PMH 50.000đ mua MDMH khi mua kèm iPhone 14 Pro Max
                      </li>
                      <li>
                        <a href="/">
                          Xem thêm ưu đãi khác{" "}
                          <i className="fa-solid fa-caret-down" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-discount">
                  <ul>
                    <li>
                      <div className="check-discount">
                        <img src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/4/637846629514363952_ic-tp-bank.jpg" />
                        <input type="checkbox" name="check" />
                      </div>
                      <div>
                        <p>EVO</p>
                        <span>
                          Giảm ngay 20% tối đa 1.000.000đ khi mở thẻ đồng thương
                          hiệu TPBANK EVO <a href="/">Xem chi tiết</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="check-discount">
                        <img src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/14/637828748513420662_Kredio.jpg" />
                        <input type="checkbox" name="check" />
                      </div>
                      <div>
                        <p>Thanh toán Kredivo</p>
                        <span>
                          Giảm ngay 5% tối đa 500.000 đồng khi thanh toán trả
                          góp 6/12 tháng qua Kredivo{" "}
                          <a href="/">Xem chi tiết</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="order">
                  <div className="buy-now" onClick={handleClick}>
                    <strong>Mua ngay</strong>
                    <p>Giao hàng miễn phí hoặc nhận tại shop</p>
                  </div>
                  {buyNow && <BuyNow onHandleClose={handleClickoff} />}
                  <div className="contributions">
                    <div className="contributions1">
                      <strong>Trả góp 0%</strong>
                      <p>Duyệt nhanh qua điện thoại</p>
                    </div>
                    <div className="contributions2">
                      <strong>Trả góp qua thẻ</strong>
                      <p>Visa, Master Card, JCB, AMEX</p>
                    </div>
                  </div>
                </div>
                <div className="customer-care">
                  <div className="hotline" style={{ fontSize: "14px" }}>
                    Gọi
                    <a style={{ color: "#cb1c22" }} href="/">
                      1800-6601
                    </a>
                    để được tư vấn mua hàng (Miễn phí)
                  </div>
                  <a href="/">
                    {" "}
                    <i className="fa-solid fa-location-dot" />
                    Tìm shop có hàng gần nhất
                  </a>
                </div>
                <div className="old-product">
                  <a href="/">
                    <p className="old-product-name">
                      Mua hàng cũ: {productDetail.name}
                    </p>
                    <p>
                      Giá từ:{" "}
                      <span>
                        {new Intl.NumberFormat("vi-VN").format(
                          productDetail.price * 0.8
                        )}{" "}
                        đ{" "}
                      </span>
                    </p>
                  </a>
                </div>
                {/* Gợi ý sản phẩm kèm theo */}
                <div className="suggest-bundled">
                  <b style={{ fontWeight: "500" }}>Gợi ý sản phẩm mua kèm</b>
                  <div className="product-suggest">
                    {suggestBundled.map((e, index) => (
                      <div className="product" key={index}>
                        <div className="product-img">
                          <img style={{ padding: "5px" }} src={e.img} />
                        </div>
                        <div className="product-tt">
                          <p>{e.name}</p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "470px",
                            }}
                          >
                            <div>
                              <b>{e.price}</b>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "#99a2aa",
                                }}
                              >
                                {e.oldPrice}
                              </span>
                            </div>
                            <button className="cartBtn">
                              Thêm vào giỏ hàng
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mua theo combo */}
                <div className="suggest-bundled">
                  <b style={{ fontWeight: "500" }}>Mua theo combo</b>
                  <div className="product-suggest">
                    <div>
                      {combo.map((e, index) => (
                        <div className="product" key={index}>
                          <div className="product-img">
                            <img style={{ padding: "5px" }} src={e.img} />
                          </div>
                          <div className="product-tt">
                            <p>{e.name}</p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "470px",
                                marginBottom: "10px",
                              }}
                            >
                              <div>
                                <b>{e.price}</b>
                                <span
                                  style={{
                                    textDecoration: "line-through",
                                    color: "#99a2aa",
                                  }}
                                >
                                  {e.oldPrice}
                                </span>
                              </div>
                              <button className="cartBtn">
                                Thêm vào giỏ hàng
                              </button>
                            </div>
                            <div
                              style={{
                                backgroundColor: "#f8f9fa",
                                borderRadius: "3px",
                                fontSize: "14px",
                                padding: "5px",
                              }}
                            >
                              {e.discover}
                            </div>
                          </div>
                        </div>
                      ))}
                      <input
                        type="text"
                        placeholder="Chọn sản phẩm khác"
                        style={{ padding: "3px 8px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <button className="cartBtn">Mua thêm 3 sản phẩm</button>
                  <p>
                    Tiết kiệm : <span>421.400₫</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderDetail;
