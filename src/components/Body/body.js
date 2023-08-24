import { useState, useEffect } from "react";
import "./body.scss";
import CountdownTimer from "./countdownTimer";
import Slideshow from "../slideShow/slideShow2";
import Example from "../slideShow/slideShow";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  highlightsPhones,
  laptopHot,
  tabletHot,
  saleOption,
  goldTimeNow,
  goldTime2h,
  goldTime4h,
  goldTime6h,
  listHotPromotion,
  Monopoly,
  topSearch,
  coolSummer,
  homeSmart,
  sale50,
  speakerKaraoke,
  TVXiaomi,
  onlineDeals,
  fan,
  noOil,
  robotVacuumCleaner,
  electricCooker,
  waterPurifier,
  hotAccessories,
} from "./data";

function Body({ cart, onChangeCart }) {
  //============== GET DATA =====================
  // console.log(data)
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/product/home", config)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log("lỗi");
        setData(error);
      });
  }, []);
  console.log(data);

  // ========================================
  const handleClickAdd = (item) => {
    let newCart = [...cart];
    const index = newCart.findIndex(
      (x) => x.id === item.id && x.name === item.name
    );
    if (index === -1) {
      item.quantity = 1;
      newCart.push(item);
    } else {
      ++newCart[index].quantity;
    }
    onChangeCart(newCart);
  };
  //  giờ vàng
  const [activeGoldTime, setActiveGoldTime] = useState(1);

  const handleClickGoldTime1 = () => {
    setActiveGoldTime(1);
  };

  const handleClickGoldTime2 = () => {
    setActiveGoldTime(2);
  };

  const handleClickGoldTime3 = () => {
    setActiveGoldTime(3);
  };

  const handleClickGoldTime4 = () => {
    setActiveGoldTime(4);
  };

  //
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count <= 9) {
      setCount((prevCount) => prevCount + 1);
    }
    setProgress((prevProgess) => prevProgess + 10);
  };
  const img = [
    {
      src: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      caption: "Giảm đến 1 triệu khi mở thẻ TPBANK EVO",
    },
    {
      src: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/1/638159442854755781_zalopay.jpg",
      caption: "Giảm ngay 200.000Đ qua ZaloPay-QR",
    },
    {
      src: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
      caption: "Giảm ngay 5% qua Kredivo",
    },
  ];
  const [caption, setCaption] = useState(
    "Giảm đến 1 triệu khi mở thẻ TPBANK EVO"
  );

  const handleMouseEnter = (newCaption) => {
    setCaption(newCaption);
  };

  const handleMouseLeave = () => {
    setCaption("Giảm đến 1 triệu khi mở thẻ TPBANK EVO");
  };

  // gợi ý hôm nay
  const [activeSuggest, setActiveSuggest] = useState(1);

  const handleClickSuggest1 = () => {
    setActiveSuggest(1);
  };

  const handleClickSuggest2 = () => {
    setActiveSuggest(2);
  };

  const handleClickSuggest3 = () => {
    setActiveSuggest(3);
  };

  const handleClickSuggest4 = () => {
    setActiveSuggest(4);
  };
  const handleClickSuggest5 = () => {
    setActiveSuggest(5);
  };
  const handleClickSuggest6 = () => {
    setActiveSuggest(6);
  };
  const handleClickSuggest7 = () => {
    setActiveSuggest(7);
  };

  // Điện máy gia dụng
  const [activeMang, setActiveMang] = useState(1);

  const handleClickMang1 = () => {
    setActiveMang(1);
  };

  const handleClickMang2 = () => {
    setActiveMang(2);
  };

  const handleClickMang3 = () => {
    setActiveMang(3);
  };

  const handleClickMang4 = () => {
    setActiveMang(4);
  };

  const handleClickMang5 = () => {
    setActiveMang(5);
  };

  const handleClickMang6 = () => {
    setActiveMang(6);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(249, 30, 0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "650px",
      }}
    >
      {data.length !== 0 ? (
        <div className="body-total">
          {/* <Header test ={ amount} /> */}
          {/* ---------sale----- */}
          <div className="body-small">
            <div className="sale-img">
              <img src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211284855136698_desk-header.png" />
            </div>
            {/* slide show quảng cáo */}
            <div className="slide-show">
              <Example />
              <div className="box-right">
                <div>
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/5/638216046150312315_F-H2_385x100.png" />
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/8/638191457114237037_F-H2_385x100.png" />
                </div>
                <div className="promotion-information">
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#6c757d",
                    }}
                  >
                    Tin khuyến mãi
                  </p>
                  <div className="slide-information">
                    <img src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Tin%20KM%20main(6).png" />
                    <p>Samsung giảm đến 200k qua ZaloPay</p>
                  </div>
                  <div className="slide-information">
                    <img src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Tin%20KM%20main(7).png" />
                    <p>Gia dụng: Giá rẻ hơn lại có quà</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sale-option">
              {saleOption.map((c) => (
                <div className="sale-option-box" key={c.id}>
                  <div className="box-wrap">
                    <img src={c.img} />
                  </div>
                  <p>{c.name}</p>
                </div>
              ))}
            </div>

            {/* Giờ vàng */}
            <div className="gold-time">
              <div className="gold-time-upper">
                <h2>GIỜ VÀNG GIÁ SỐC</h2>
                <div className="jamb"></div>
                <a href="/">Xem thể lệ</a>
                <img src="https://fptshop.com.vn/Content/v5d/sale-special/images/ic-right.png" />
              </div>

              {/* giờ vàng dưới */}
              <div className="gold-time-bottom">
                <div className="row">
                  <div
                    className={`row-children ${
                      activeGoldTime === 1 ? "active3" : ""
                    }`}
                    onClick={handleClickGoldTime1}
                  >
                    <div className="row-children2 ">
                      <p>Hôm nay</p>
                      <div className="countdown-time">
                        <CountdownTimer />
                      </div>
                    </div>
                    <p>Đang diễn ra </p>
                  </div>
                  <div
                    className={`row-children ${
                      activeGoldTime === 2 ? "active3" : ""
                    }`}
                    onClick={handleClickGoldTime2}
                  >
                    <div className="row-children2">
                      <p>Hôm nay</p>
                      <div className="countdown-time">14:00 -16:00</div>
                    </div>
                    <p>Sắp diễn ra </p>
                  </div>
                  <div
                    className={`row-children ${
                      activeGoldTime === 3 ? "active3" : ""
                    }`}
                    onClick={handleClickGoldTime3}
                  >
                    <div className="row-children2">
                      <p>Hôm nay</p>
                      <div className="countdown-time">16:00 -18:00</div>
                    </div>
                    <p>Sắp diễn ra </p>
                  </div>
                  <div
                    className={`row-children ${
                      activeGoldTime === 4 ? "active3" : ""
                    }`}
                    onClick={handleClickGoldTime4}
                  >
                    <div className="row-children2">
                      <p>Hôm nay</p>
                      <div className="countdown-time">18:00 -20:00</div>
                    </div>
                    <p>Sắp diễn ra </p>
                  </div>
                </div>
                {/* sản phẩm giờ vàng */}
                {activeGoldTime === 1 && (
                  <div className="product">
                    <div style={{ width: "1200px", height: "auto" }}>
                      <Slide
                        slidesToScroll={4}
                        slidesToShow={4}
                        indicators={false}
                        duration={50000000}
                      >
                        {goldTimeNow.map((product) => (
                          <div key={product.id} className="product-box">
                            <div className="product-box-up2">
                              <div className="product-box-up">
                                <img src={product.img} />
                                <span className="discount">
                                  {product.discount}
                                </span>
                              </div>
                            </div>
                            <div className="product-box-bottom">
                              <h3>{product.name}</h3>
                              <span className="price">
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ{" "}
                              </span>
                              <span
                                className="old-price"
                                style={{
                                  textDecoration: "line-through",
                                  zIndex: 1,
                                }}
                              >
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.oldPrice
                                )}{" "}
                                đ
                              </span>
                              <div className="progress-bar">
                                {" "}
                                <div className="sold">
                                  Đã bán {count}/10 suất
                                </div>
                                <div
                                  className="progress-bar2 "
                                  style={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    backgroundColor: "#cb1c22",
                                    transition: "width 0.5s",
                                  }}
                                >
                                  {" "}
                                </div>
                              </div>

                              <div
                                className="price-shock"
                                onClick={handleClick}
                              >
                                MUA GIÁ SỐC
                              </div>
                              <div className="watch-product">
                                <a href="/">Xem sản phẩm</a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                  </div>
                )}
                {activeGoldTime === 2 && (
                  <div className="product">
                    <div style={{ width: "1200px", height: "auto" }}>
                      <Slide
                        slidesToScroll={4}
                        slidesToShow={4}
                        indicators={false}
                        duration={50000000}
                      >
                        {goldTime2h.map((product) => (
                          <div key={product.id} className="product-box">
                            <div className="product-box-up2">
                              <div className="product-box-up">
                                <img src={product.img} />
                                <span className="discount">
                                  {product.discount}
                                </span>
                              </div>
                            </div>
                            <div className="product-box-bottom">
                              <h3>{product.name}</h3>
                              <span className="price">{product.price} </span>
                              <span
                                className="old-price"
                                style={{
                                  textDecoration: "line-through",
                                  zIndex: 1,
                                }}
                              >
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.oldPrice
                                )}{" "}
                                đ
                              </span>
                              <div className="progress-bar">
                                {" "}
                                <div className="sold">
                                  Đã bán {count}/10 suất
                                </div>
                                <div
                                  className="progress-bar2 "
                                  style={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    backgroundColor: "#cb1c22",
                                    transition: "width 0.5s",
                                  }}
                                >
                                  {" "}
                                </div>
                              </div>

                              <div
                                className="price-shock"
                                onClick={handleClick}
                              >
                                MUA GIÁ SỐC
                              </div>
                              <div className="watch-product">
                                <a href="/">Xem sản phẩm</a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                  </div>
                )}
                {activeGoldTime === 3 && (
                  <div className="product">
                    <div style={{ width: "1200px", height: "auto" }}>
                      <Slide
                        slidesToScroll={4}
                        slidesToShow={4}
                        indicators={false}
                        duration={50000000}
                      >
                        {goldTime4h.map((product) => (
                          <div key={product.id} className="product-box">
                            <div className="product-box-up2">
                              <div className="product-box-up">
                                <img src={product.img} />
                                <span className="discount">
                                  {product.discount}
                                </span>
                              </div>
                            </div>
                            <div className="product-box-bottom">
                              <h3>{product.name}</h3>
                              <span className="price">{product.price} </span>
                              <span
                                className="old-price"
                                style={{
                                  textDecoration: "line-through",
                                  zIndex: 1,
                                }}
                              >
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.oldPrice
                                )}{" "}
                                đ
                              </span>
                              <div className="progress-bar">
                                {" "}
                                <div className="sold">
                                  Đã bán {count}/10 suất
                                </div>
                                <div
                                  className="progress-bar2 "
                                  style={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    backgroundColor: "#cb1c22",
                                    transition: "width 0.5s",
                                  }}
                                >
                                  {" "}
                                </div>
                              </div>

                              <div
                                className="price-shock"
                                onClick={handleClick}
                              >
                                MUA GIÁ SỐC
                              </div>
                              <div className="watch-product">
                                <a href="/">Xem sản phẩm</a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                  </div>
                )}
                {activeGoldTime === 4 && (
                  <div className="product">
                    <div style={{ width: "1200px", height: "auto" }}>
                      <Slide
                        slidesToScroll={4}
                        slidesToShow={4}
                        indicators={false}
                        duration={50000000}
                      >
                        {goldTime6h.map((product) => (
                          <div key={product.id} className="product-box">
                            <div className="product-box-up2">
                              <div className="product-box-up">
                                <img src={product.img} />
                                <span className="discount">
                                  {product.discount}
                                </span>
                              </div>
                            </div>
                            <div className="product-box-bottom">
                              <h3>{product.name}</h3>
                              <span className="price">{product.price} </span>
                              <span
                                className="old-price"
                                style={{
                                  textDecoration: "line-through",
                                  zIndex: 1,
                                }}
                              >
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.oldPrice
                                )}{" "}
                                đ
                              </span>
                              <div className="progress-bar">
                                {" "}
                                <div className="sold">
                                  Đã bán {count}/10 suất
                                </div>
                                <div
                                  className="progress-bar2 "
                                  style={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    backgroundColor: "#cb1c22",
                                    transition: "width 0.5s",
                                  }}
                                >
                                  {" "}
                                </div>
                              </div>

                              <div
                                className="price-shock"
                                onClick={handleClick}
                              >
                                MUA GIÁ SỐC
                              </div>
                              <div className="watch-product">
                                <a href="/">Xem sản phẩm</a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* ảnh sale2 */}
            <div className="sale-img2">
              <img src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/10/638193055015899862_H7_1200x100.png" />
            </div>

            {/* khuyến mãi hot */}
            <div className="hot-promotion">
              <div className="promotion-header">
                <i
                  className="fa-brands fa-gripfire"
                  style={{ color: "#cd1817" }}
                ></i>
                <h2>KHUYẾN MÃI HOT</h2>
              </div>
              <div className="promotion-body">
                <div className="product">
                  <div style={{ width: "1200px", paddingTop: "20px" }}>
                    <Slide
                      slidesToScroll={4}
                      slidesToShow={4}
                      indicators={false}
                      duration={50000000}
                    >
                      {data.products.map((product) => (
                        <div key={product.id} className="product-box">
                          <div className="product-box-up2">
                            <div className="product-box-up">
                              <img src={`http://localhost:3000/${product.coverImg}`} />
                              <span
                                className="discount "
                                style={{
                                  top: "60%",
                                  backgroundColor: "#ea9d02",
                                }}
                              >
                                Trả góp 0%
                              </span>
                              <span className="discount">giảm 10.000 ₫</span>
                            </div>
                          </div>
                          <div className="product-box-bottom">
                            <h3>{product.name}</h3>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  width: "130px",
                                  position: "relative",
                                  width: "130px",
                                  backgroundColor: "#ef8573",
                                  borderRadius: "14px",
                                  height: "28px",
                                }}
                              >
                                {" "}
                                <div className="sold" style={{ color: "#fff" }}>
                                  {new Intl.NumberFormat("vi-VN").format(
                                    product.price
                                  )}{" "}
                                  đ
                                </div>
                                <div
                                  className="progress-bar2 "
                                  style={{
                                    width: "90%",
                                    height: "100%",
                                    backgroundColor: "#cb1c22",
                                    transition: "width 0.5s",
                                    borderBottomLeftRadius: "14px",
                                    borderTopLeftRadius: "14px",
                                  }}
                                >
                                  {" "}
                                </div>
                              </div>
                              <span
                                className="old-price"
                                style={{
                                  textDecoration: "line-through",
                                  zIndex: 1,
                                }}
                              >
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.oldPrice
                                )}{" "}
                                đ
                              </span>
                            </div>
                          </div>
                          <div
                            className="wrap-logo"
                            style={{
                              height: "94px",
                              padding: "9px 10px 0px",
                              backgroundColor: "#f8f9fa",
                              borderRadius: "5px",
                              display: "flex",
                            }}
                          >
                            {img.map((image, index) => (
                              <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                              >
                                <img className="icon-img" src={image.src} />
                                <div style={{ display: "flex" }}>
                                  {caption === index && (
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        position: "absolute",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                      }}
                                    >
                                      {image.caption}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </Slide>
                  </div>
                </div>
              </div>
            </div>

            {/* banner cảm ơn */}
            <div className="banner-thanks" style={{ margin: "24px 0px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  padding: "176px 0px 84px 0px",
                }}
              >
                <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/19/638200932754566946_desk-html-banner.png " />
                <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765465980266_desk-html-banner-1.png" />
                <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765466589284_desk-html-banner-2.png" />
                <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765466492700_desk-html-banner-3.png" />

                <img
                  style={{ height: "52px", width: "480px", marginTop: "20px" }}
                  src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765464794390_desk-html-sub-cate@2x.png"
                />
              </div>
            </div>
            {/* Tuần lễ sam sung giá sốc */}
            <div
              style={{
                width: "1200px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                padding: "20px 16px",
              }}
            >
              <div>
                <h2>TUẦN LỄ SAMSUNG GIÁ SỐC</h2>
                <img src="https://images.fpt.shop/unsafe/fit-in/1168x97/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418271334821_H7-%201200x100_2.png" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418265291454_Desk%20(1).png" />
                <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418265740186_Desk%20(2).png" />
                <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418265740186_Desk%20(3).png" />
                <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418266452655_Desk%20(5).png" />
              </div>
            </div>
            {/* banner tiếp */}
            <div>
              <img
                style={{
                  padding: "24px 0px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/30/638210391350005936_F-H5_1200x200.png"
              />
            </div>
            {/* Điện thoại nổi bật */}
            <div className="list-of-products">
              <div className="header-list">
                <h2>ĐIỆN THOẠI NỔI BẬT</h2>
                <Link to="/dien-thoai">Xem tất cả</Link>
              </div>
              <div className="promotion-body">
                <div className="product2">
                  {data.data[2].products.map((product) => (
                    <div key={product.id} className="product-box">
                      <div className="product-box-up2">
                        {/* phần trên sp */}
                        <div className="product-box-up">
                          <Link to={`/dien-thoai/${product.id}`}>
                            <img
                              src={`http://localhost:3000/${product.coverImg}`}
                            />
                          </Link>
                          <span
                            className="discount "
                            style={{ top: "60%", backgroundColor: "#ea9d02" }}
                          >
                            Trả góp 0%
                          </span>
                          <span className="discount">giảm 10.000 ₫</span>
                        </div>
                      </div>
                      {/* phần dưới sp */}
                      <div className="product-box-bottom">
                        <Link to={`/dien-thoai/${product.id}`}>
                          <h3>{product.name}</h3>
                        </Link>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "130px",
                              position: "relative",
                              width: "130px",
                              backgroundColor: "#ef8573",
                              borderRadius: "14px",
                              height: "28px",
                            }}
                          >
                            {" "}
                            <div className="sold" style={{ color: "#fff" }}>
                              {new Intl.NumberFormat("vi-VN").format(
                                product.price
                              )}{" "}
                              đ
                            </div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: "90%",
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                                borderBottomLeftRadius: "14px",
                                borderTopLeftRadius: "14px",
                              }}
                            >
                              {" "}
                            </div>
                          </div>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                        </div>
                      </div>
                      {/* Phần chân*/}
                      <div className="footer-product">
                        <div className="param">
                          <i className="fa-solid fa-microchip" />
                          {product.cpu}
                          <i className="fa-solid fa-mobile-screen" />
                          {product.screen} inch
                          <i className="fa-solid fa-memory" />
                          {product.ram} GB
                          <i className="fa-solid fa-hard-drive" />
                          {product.rom} GB
                          <i className="fa-solid fa-weight-hanging" />
                          {product.weight} kg
                        </div>
                        <div className="icon-img2">
                          <div className="logo-img1">
                            <img
                              className="logo-img"
                              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                            />
                            <div className="voucher1">
                              <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                            </div>
                          </div>
                          <div className="logo-img2">
                            <img
                              className="logo-img"
                              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                            />
                            <div className="voucher2">
                              <p>Giảm ngay 5% qua Kredivo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn">
                        <Link to={`/dien-thoai/${product.id}`}>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                        </Link>
                        <button
                          className="cartBtn"
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            textAlign: "center",
                            padding: "10px 4px",
                            backgroundColor: "#99a2aa",
                            borderRadius: "4px",

                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleClickAdd(product);
                          }}
                        >
                          THÊM VÀO GIỎ HÀNG
                        </button>
                      </div>
                    </div>
                    // </div>
                    // </div>
                  ))}
                </div>
              </div>
            </div>
            {/* banner tiếp */}
            <div
              style={{
                margin: "0px 0px 24px 0px",
                cursor: "pointer",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/22/638203754274592025_F-H5_1200x200.png"
              />
            </div>
            {/* Laptop bán chạy */}
            <div className="list-of-products">
              <div className="header-list">
                <h2>LAPTOP BÁN CHẠY</h2>
                <a href="/">Xem tất cả</a>
              </div>
              <div className="promotion-body">
                <div className="product2">
                  {data.data[0].products.map((product) => (
                    <div key={product.id} className="product-box">
                      <div className="product-box-up2">
                        {/* phần trên sp */}
                        <div className="product-box-up">
                          <Link to={`/Laptop/${product.id}`}>
                            <img
                              src={`http://localhost:3000/${product.coverImg}`}
                            />
                          </Link>
                          <span
                            className="discount "
                            style={{ top: "60%", backgroundColor: "#ea9d02" }}
                          >
                            Trả góp 0%
                          </span>
                          <span className="discount">giảm 10.000 ₫</span>
                        </div>
                      </div>
                      {/* phần dưới sp */}
                      <div className="product-box-bottom">
                        <Link to={`/Laptop/${product.id}`}>
                          <h3>{product.name}</h3>
                        </Link>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "130px",
                              position: "relative",
                              width: "130px",
                              backgroundColor: "#ef8573",
                              borderRadius: "14px",
                              height: "28px",
                            }}
                          >
                            {" "}
                            <div className="sold" style={{ color: "#fff" }}>
                              {new Intl.NumberFormat("vi-VN").format(
                                product.price
                              )}{" "}
                              đ
                            </div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: "90%",
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                                borderBottomLeftRadius: "14px",
                                borderTopLeftRadius: "14px",
                              }}
                            >
                              {" "}
                            </div>
                          </div>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                        </div>
                      </div>
                      {/* Phần chân*/}
                      <div className="footer-product">
                        <div className="param">
                          <i className="fa-solid fa-microchip" />
                          {product.cpu}
                          <i className="fa-solid fa-mobile-screen" />
                          {product.screen} inch
                          <i className="fa-solid fa-memory" />
                          {product.ram} GB
                          <i className="fa-solid fa-hard-drive" />
                          {product.rom} GB
                          <i className="fa-solid fa-weight-hanging" />
                          {product.weight} kg
                        </div>
                        <div className="icon-img2">
                          <div className="logo-img1">
                            <img
                              className="logo-img"
                              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                            />
                            <div className="voucher1">
                              <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                            </div>
                          </div>
                          <div className="logo-img2">
                            <img
                              className="logo-img"
                              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                            />
                            <div className="voucher2">
                              <p>Giảm ngay 5% qua Kredivo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn">
                        <Link to={`/Laptop/${product.id}`}>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                        </Link>
                        <button
                          className="cartBtn"
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            textAlign: "center",
                            padding: "10px 4px",
                            backgroundColor: "#99a2aa",
                            borderRadius: "4px",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleClickAdd(product);
                          }}
                        >
                          THÊM VÀO GIỎ HÀNG
                        </button>
                      </div>
                    </div>
                    // </div>
                    // </div>
                  ))}
                </div>
              </div>
            </div>
            {/* lại banner tiếp */}
            <div
              style={{
                margin: "0px 0px 24px 0px",
                cursor: "pointer",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/1/638212173977917545_F-H5_1200x200@2x.png"
              />
            </div>
            {/* TABLET BÁN CHẠY */}
            <div className="list-of-products">
              <div className="header-list">
                <h2>TABLET BÁN CHẠY</h2>
                <a href="/">Xem tất cả</a>
              </div>
              <div className="promotion-body">
                <div className="product2">
                  {data.data[1].products.map((product) => (
                    <div key={product.id} className="product-box">
                      <div className="product-box-up2">
                        {/* phần trên sp */}
                        <div className="product-box-up">
                          <Link to={`/Tablet/${product.id}`}>
                            <img
                              src={`http://localhost:3000/${product.coverImg}`}
                            />
                          </Link>
                          <span
                            className="discount "
                            style={{ top: "60%", backgroundColor: "#ea9d02" }}
                          >
                            Trả góp 0%
                          </span>
                          <span className="discount">giảm 10.000 ₫</span>
                        </div>
                      </div>
                      {/* phần dưới sp */}
                      <div className="product-box-bottom">
                        <Link to={`/Tablet/${product.id}`}>
                          <h3>{product.name}</h3>
                        </Link>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "130px",
                              position: "relative",
                              width: "130px",
                              backgroundColor: "#ef8573",
                              borderRadius: "14px",
                              height: "28px",
                            }}
                          >
                            {" "}
                            <div className="sold" style={{ color: "#fff" }}>
                              {new Intl.NumberFormat("vi-VN").format(
                                product.price
                              )}{" "}
                              đ
                            </div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: "90%",
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                                borderBottomLeftRadius: "14px",
                                borderTopLeftRadius: "14px",
                              }}
                            >
                              {" "}
                            </div>
                          </div>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                        </div>
                      </div>
                      {/* Phần chân*/}
                      <div className="footer-product">
                        <div className="param">
                          <i className="fa-solid fa-microchip" />
                          {product.cpu}
                          <i className="fa-solid fa-mobile-screen" />
                          {product.screen} inch
                          <i className="fa-solid fa-memory" />
                          {product.ram} GB
                          <i className="fa-solid fa-hard-drive" />
                          {product.rom} GB
                          <i className="fa-solid fa-weight-hanging" />
                          {product.weight} kg
                        </div>
                        <div className="icon-img2">
                          <div className="logo-img1">
                            <img
                              className="logo-img"
                              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                            />
                            <div className="voucher1">
                              <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                            </div>
                          </div>
                          <div className="logo-img2">
                            <img
                              className="logo-img"
                              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                            />
                            <div className="voucher2">
                              <p>Giảm ngay 5% qua Kredivo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn">
                        <Link to={`/Tablet/${product.id}`}>
                          {" "}
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                        </Link>
                        <button
                          className="cartBtn"
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            textAlign: "center",
                            padding: "10px 4px",
                            backgroundColor: "#99a2aa",
                            borderRadius: "4px",

                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleClickAdd(product);
                          }}
                        >
                          THÊM VÀO GIỎ HÀNG
                        </button>
                      </div>
                    </div>
                    // </div>
                    // </div>
                  ))}
                </div>
              </div>
            </div>
            {/* lại banner tiếp */}
            <div
              style={{
                margin: "0px 0px 24px 0px",
                cursor: "pointer",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/26/638206902344418886_H5_1200X200.png"
              />
            </div>
            {/* GỢI Ý HÔM NAY */}
            <div className="list-of-products">
              <div className="header-list">
                <h2>GỢI Ý HÔM NAY</h2>
              </div>
              <ul className="option2">
                <li
                  className={activeSuggest === 1 ? "active3" : ""}
                  onClick={handleClickSuggest1}
                >
                  Độc Quyền
                </li>
                <li
                  className={activeSuggest === 2 ? "active3" : ""}
                  onClick={handleClickSuggest2}
                >
                  Top Tìm Kiếm
                </li>
                <li
                  className={activeSuggest === 3 ? "active3" : ""}
                  onClick={handleClickSuggest3}
                >
                  Hè Mát Lạnh
                </li>
                <li
                  className={activeSuggest === 4 ? "active3" : ""}
                  onClick={handleClickSuggest4}
                >
                  Nhà Thông Minh
                </li>
                <li
                  className={activeSuggest === 5 ? "active3" : ""}
                  onClick={handleClickSuggest5}
                >
                  Phụ Kiện -50%
                </li>
                <li
                  className={activeSuggest === 6 ? "active3" : ""}
                  onClick={handleClickSuggest6}
                >
                  Loa Karaoke
                </li>
                <li
                  className={activeSuggest === 7 ? "active3" : ""}
                  onClick={handleClickSuggest7}
                >
                  TV Xiaomi
                </li>
              </ul>
              {activeSuggest === 1 && (
                <div className="promotion-body">
                  <div className="product2">
                    {Monopoly.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-microchip" />
                            {product.cpu}
                            <i className="fa-solid fa-mobile-screen" />
                            {product.screen}
                            <i className="fa-solid fa-memory" />
                            {product.ram}
                            <i className="fa-solid fa-hard-drive" />
                            {product.memory}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSuggest === 2 && (
                <div className="promotion-body">
                  <div className="product2">
                    {topSearch.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-microchip" />
                            {product.cpu}
                            <i className="fa-solid fa-mobile-screen" />
                            {product.screen}
                            <i className="fa-solid fa-memory" />
                            {product.ram}
                            <i className="fa-solid fa-hard-drive" />
                            {product.memory}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSuggest === 3 && (
                <div className="promotion-body">
                  <div className="product2">
                    {coolSummer.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-microchip" />
                            {product.cpu}
                            <i className="fa-solid fa-mobile-screen" />
                            {product.screen}
                            <i className="fa-solid fa-memory" />
                            {product.ram}
                            <i className="fa-solid fa-hard-drive" />
                            {product.memory}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSuggest === 4 && (
                <div className="promotion-body">
                  <div className="product2">
                    {homeSmart.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSuggest === 5 && (
                <div className="promotion-body">
                  <div className="product2">
                    {sale50.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-microchip" />
                            {product.cpu}
                            <i className="fa-solid fa-mobile-screen" />
                            {product.screen}
                            <i className="fa-solid fa-memory" />
                            {product.ram}
                            <i className="fa-solid fa-hard-drive" />
                            {product.memory}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSuggest === 6 && (
                <div className="promotion-body">
                  <div className="product2">
                    {speakerKaraoke.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-microchip" />
                            {product.cpu}
                            <i className="fa-solid fa-mobile-screen" />
                            {product.screen}
                            <i className="fa-solid fa-memory" />
                            {product.ram}
                            <i className="fa-solid fa-hard-drive" />
                            {product.memory}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSuggest === 7 && (
                <div className="promotion-body">
                  <div className="product2">
                    {TVXiaomi.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-microchip" />
                            {product.cpu}
                            <i className="fa-solid fa-mobile-screen" />
                            {product.screen}
                            <i className="fa-solid fa-memory" />
                            {product.ram}
                            <i className="fa-solid fa-hard-drive" />
                            {product.memory}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* ĐIỆN MÁY - GIA DỤNG*/}
            <div className="list-of-products">
              <div className="header-list">
                <h2>ĐIỆN MÁY - GIA DỤNG</h2>
                <a href="/">Xem tất cả</a>
              </div>
              <div className="option3">
                <div
                  className={`option-appliances ${
                    activeMang === 1 ? "active2" : ""
                  }`}
                  onClick={handleClickMang1}
                >
                  <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209730365932396_ic-star.png" />
                  <p>Ưu đãi online</p>
                </div>
                <div
                  className={`option-appliances ${
                    activeMang === 2 ? "active2" : ""
                  }`}
                  onClick={handleClickMang2}
                >
                  <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209713467489005_img-quat-dieu-hoa.png" />
                  <p>Quạt điều hòa</p>
                </div>
                <div
                  className={`option-appliances ${
                    activeMang === 3 ? "active2" : ""
                  }`}
                  onClick={handleClickMang3}
                >
                  <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209713467646952_img-noi-chien.png" />
                  <p>Nồi chiên không dầu</p>
                </div>
                <div
                  className={`option-appliances ${
                    activeMang === 4 ? "active2" : ""
                  }`}
                  onClick={handleClickMang4}
                >
                  <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209812502023224_img-may-hut-bui.png" />
                  <p>Robot hút bụi</p>
                </div>
                <div
                  className={`option-appliances ${
                    activeMang === 5 ? "active2" : ""
                  }`}
                  onClick={handleClickMang5}
                >
                  <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209812905717511_img-noi-com-dien.png" />
                  <p>Nồi cơm điện</p>
                </div>
                <div
                  className={`option-appliances ${
                    activeMang === 6 ? "active2" : ""
                  }`}
                  onClick={handleClickMang6}
                >
                  <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209812903746667_img-may-loc-nuoc.png" />
                  <p>Máy lọc nước</p>
                </div>
              </div>
              {activeMang === 1 && (
                <div className="promotion-body">
                  <div className="product2">
                    {onlineDeals.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-bolt" />
                            {product.wattage}
                            <i className="fa-solid fa-glass-water" />
                            {product.bottle}
                            <i className="fa-solid fa-house" />
                            {product.acreage}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeMang === 2 && (
                <div className="promotion-body">
                  <div className="product2">
                    {fan.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-bolt" />
                            {product.wattage}
                            <i className="fa-solid fa-glass-water" />
                            {product.bottle}
                            <i className="fa-solid fa-house" />
                            {product.acreage}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeMang === 3 && (
                <div className="promotion-body">
                  <div className="product2">
                    {noOil.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-bolt" />
                            {product.wattage}
                            <i className="fa-solid fa-glass-water" />
                            {product.bottle}
                            <i className="fa-solid fa-compass" />
                            {product.control}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeMang === 4 && (
                <div className="promotion-body">
                  <div className="product2">
                    {robotVacuumCleaner.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-bolt" />
                            {product.wattage}
                            <i className="fa-solid fa-battery-three-quarters" />
                            {product.battery}
                            <i className="fa-solid fa-house" />
                            {product.uses}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeMang === 5 && (
                <div className="promotion-body">
                  <div className="product2">
                    {electricCooker.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-bolt" />
                            {product.wattage}
                            <i className="fa-solid fa-glass-water" />
                            {product.bottle}
                            <i className="fa-solid fa-house" />
                            {product.regime}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",

                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
              {activeMang === 6 && (
                <div className="promotion-body">
                  <div className="product2">
                    {waterPurifier.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          {/* phần trên sp */}
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span
                              className="discount "
                              style={{ top: "60%", backgroundColor: "#ea9d02" }}
                            >
                              Trả góp 0%
                            </span>
                            <span className="discount">giảm 10.000 ₫</span>
                          </div>
                        </div>
                        {/* phần dưới sp */}
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                position: "relative",
                                width: "130px",
                                backgroundColor: "#ef8573",
                                borderRadius: "14px",
                                height: "28px",
                              }}
                            >
                              {" "}
                              <div className="sold" style={{ color: "#fff" }}>
                                {new Intl.NumberFormat("vi-VN").format(
                                  product.price
                                )}{" "}
                                đ
                              </div>
                              <div
                                className="progress-bar2 "
                                style={{
                                  width: "90%",
                                  height: "100%",
                                  backgroundColor: "#cb1c22",
                                  transition: "width 0.5s",
                                  borderBottomLeftRadius: "14px",
                                  borderTopLeftRadius: "14px",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                            <span
                              className="old-price"
                              style={{
                                textDecoration: "line-through",
                                zIndex: 1,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN").format(
                                product.oldPrice
                              )}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                        {/* Phần chân*/}
                        <div className="footer-product">
                          <div className="param">
                            <i className="fa-solid fa-bolt" />
                            {product.wattage}
                            <i className="fa-solid fa-glass-water" />
                            {product.RO}
                            <i className="fa-solid fa-vials" />
                            {product.waterFilter}
                          </div>
                          <div className="icon-img2">
                            <div className="logo-img1">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                              />
                              <div className="voucher1">
                                <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                              </div>
                            </div>
                            <div className="logo-img2">
                              <img
                                className="logo-img"
                                src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                              />
                              <div className="voucher2">
                                <p>Giảm ngay 5% qua Kredivo</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#cb1c22",
                              borderRadius: "4px",
                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            MUA NGAY
                          </button>
                          <button
                            className="cartBtn"
                            style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              padding: "10px 4px",
                              backgroundColor: "#99a2aa",
                              borderRadius: "4px",
                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClickAdd(product);
                            }}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                      </div>
                      // </div>
                      // </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Ưu đãi khi thanh toán onl */}
            <div
              style={{
                width: "1200px",
                height: "240px",
                backgroundColor: "#ffffff",
                marginBottom: "24px",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <h2 style={{ margin: "0px 0px 10px 0px" }}>
                ƯU ĐÃI KHI THANH TOÁN ONLINE
              </h2>
              <Slideshow />
            </div>
            {/* Dịch vụ tiện ích */}
            <div className="service">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <h2>DỊCH VỤ TIỆN ÍCH</h2>
                <a href="/">Xem tất cả</a>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="warp-service">
                  <img src="https://fptshop.com.vn/Content/v5d/images/ic-water.png" />
                  <div>
                    <strong>Thanh toán tiền nước</strong>
                    <p>Thanh toán nhanh chóng và tiện lợi</p>
                  </div>
                </div>
                <div
                  className="warp-service"
                  style={{
                    backgroundColor: "#fefae8",
                    border: "1px solid #fdf1ba",
                  }}
                >
                  <img src="https://fptshop.com.vn/Content/v5d/images/service-item2.png" />
                  <div>
                    <strong>Thanh toán tiền điện</strong>
                    <p>Thanh toán nhanh chóng và tiện lợi</p>
                  </div>
                </div>
                <div
                  className="warp-service"
                  style={{
                    backgroundColor: "#ebf8ff",
                    border: "1px solid #bee3f8",
                  }}
                >
                  <img src="https://fptshop.com.vn/Content/v5d/images/service-item3.png" />
                  <div>
                    <strong>Thẻ cào điện thoại</strong>
                    <p>Giảm 2% cho thẻ mệnh giá từ 100.000đ</p>
                  </div>
                </div>
                <div
                  className="warp-service"
                  style={{
                    backgroundColor: "#ffebeb",
                    border: "1px solid #f9c7c9",
                  }}
                >
                  <img src="https://fptshop.com.vn/Content/v5d/images/ic-credit-card.png" />
                  <div>
                    <strong>Thẻ game</strong>
                    <p>Giảm 2% cho thẻ mệnh giá từ 100.000đ</p>
                  </div>
                </div>
              </div>
            </div>
            {/* phụ kiện hot */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "21px",
                  padding: "0px 15px",
                }}
              >
                PHỤ KIỆN HOT
              </h2>
              <div className="sale-option" style={{ height: "280px" }}>
                {hotAccessories.map((c) => (
                  <div
                    className="sale-option-box"
                    style={{
                      width: "149px",
                      height: "139px",
                      justifyContent: "normal",
                    }}
                    key={c.id}
                  >
                    <div
                      style={{
                        height: "80px",
                        fontSize: "45px",
                        color: "#777",
                      }}
                    >
                      <i className={c.icon} />
                    </div>
                    <p>{c.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* suýt cuối */}
            <div
              style={{
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <img
                style={{ borderRadius: "10px", cursor: "pointer" }}
                src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199039669299_icon-desktop-1.png"
              />
              <img
                style={{ borderRadius: "10px", cursor: "pointer" }}
                src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199040294624_icon-desktop.png"
              />
              <img
                style={{ borderRadius: "10px", cursor: "pointer" }}
                src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/24/638128430158696737_img-1.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="sharingon">
          <div className="ring">
            <div className="to"></div>
            <div className="to"></div>
            <div className="to"></div>
            <div className="circle"></div>
          </div>
        </div>
      )}
    </div>
  );
}
//  test 2 ===========================================-----
export default Body;
