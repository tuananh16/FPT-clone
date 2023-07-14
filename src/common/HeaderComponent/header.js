import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
// khôi phục tiếp
//  khôi phục
// list-option
function Header({cart}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  // hover thẻ li các kiểu
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const handleCategoryHover = () => {
    //categoryId
    setHoveredCategory(); //categoryId
  };

  const listCategory = [
    {
      name: "ĐIỆN THOẠI",
      id: 1,
      iconName: "fa-solid fa-mobile-screen",
      metaData: {
        p1: "HÃNG SẢN XUẤT",
        brand: [
          "Apple",
          "Samsung",
          "Nokia",
          "Xiaomi",
          "Oppo",
          "realme",
          "Apple",
          "Samsung",
          "Nokia",
        ],
        p2: "ĐỒNG HỒ THÔNG MINH",
        watch: ["Apple", "Samsung", "Nokia", "Xiaomi", "Oppo", "Oppo"],
        p3: "MỨC GIÁ",
        price: [
          "Dưới 2 triêu",
          "Từ 2 - 4 triêu",
          "Từ 4 - 6 triêu",
          "Từ 6 - 8 triệu",
          "Từ 8 - 10 triêu",
          "Trên 10 triệu",
        ],
      },
      bestSeller: {
        p4: "BÁN CHẠY NHẤT",
        img: [
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/23/638204338060590865_samsung-galaxy-a34-dd-moi.jpg",
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/24/638152739283440892_xiaomi-redmi-note-12-dd-bh.jpg",
        ],
        name: ["Samsung Galaxy A34 5G", "Xiaomi Redmi Note 12 4GB-128GB"],
        price: ["7.790.000 ₫", "4.590.000 ₫"],
      },
    },
    {
      iconName: "fa-solid fa-laptop",
      name: "LAPTOP",
      id: 2,
      metaData: {
        p1: "HÃNG SẢN XUẤT",
        brand: [
          "Apple",
          "Asus",
          "MSI",
          "HP",
          "Lenovo",
          "Acer",
          "Dell",
          "Gigabyte",
          "Masstel",
        ],
        p2: "PHẦN MỀM",
        software: [
          "Diệt virus",
          "Microsoft Office",
          "Windows",
          "Phần mềm khác",
        ],
        p3: "MỨC GIÁ",
        price: [
          "Dưới 5 triêu",
          "Từ 5 - 10 triêu",
          "Từ 10 - 15 triêu",
          "Từ 15 - 20 triệu",
          "Từ 20 - 25 triêu",
          "Trên 25 triệu",
        ],
      },
    },
    {
      iconName: "fa-solid fa-tablet-screen-button",
      name: "MÁY TÍNH BẢNG",
      id: 3,
      metaData: {
        p1: "HÃNG SẢn XUẤT",
        brand: [
          "Apple",
          "Samsung",
          "Masstel",
          "Lenovo",
          "Xiaomi",
          "OPPO",
          "Coolpad",
        ],
        p2: "MỨC GIÁ",
        price: [
          "Dưới 2 triêu",
          "Từ 2 - 5 triêu",
          "Từ 5 - 8 triêu",
          "Trên 825 triệu",
        ],
      },
      bestSeller: {
        p4: "BÁN CHẠY NHẤT",
        img: [
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059452014421919_ipad-gen-9-wifi-dd.jpg",
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/19/638174908829566756_samsung-galaxy-tab-a8-wifi-dd.jpg",
        ],
        name: [
          "iPad Gen 9 2021 10.2 inch WiFi 64GB",
          "Samsung Galaxy Tab A8 WiFi",
        ],
        price: ["7.490.000 ₫", "4.590.000 ₫"],
      },
    },
    {
      iconName: "fa-brands fa-apple",
      name: "APPLE",
      id: 4,
      metaData: {
        p1: "CÁC SẢN PHẨM CỦA APPLE",
        brand: [
          "iPhone",
          "iPad",
          "MacBook",
          "Apple Watch",
          "Apple Tai nghe",
          "iMac",
          "Mac Mini",
          "Sạc & Cáp",
          "Ốp lưng & Bao da",
          "Apple TV",
          "Chuột & Trackpad",
          "Bàn phím",
        ],
      },
      bestSeller: {
        p4: "BÁN CHẠY NHẤT",
        img: [
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg",
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846050335072_iphone-13-dd-1.jpg",
        ],
        name: ["iPhone 14 Pro Max 128GB", "iPhone 13 128GB"],
        price: ["26.890.000 ₫", "16.890.000 ₫"],
      },
    },
    {
      iconName: "fa-solid fa-desktop",
      name: "PC - LINH KIỆN",
      id: 5,
      // items:["PC","Linh kiện", "Màn hình", "Xây dựng PC"]
    },
    {
      iconName: "fa-solid fa-headphones",
      name: "PHỤ KIỆN",
      id: 6,
      metaData: {
        p1: "CÁC SẢN PHẨM PHỤ KIỆN",
        brand: [
          "Router",
          "Bao da ốp lưng",
          "Sạc dự phòng",
          "Thẻ nhớ",
          "Phụ kiện Apple",
          "Miếng dán màn hình",
          "Loa",
          "USB - Ổ cứng",
          "Sạc cáp",
          "Tai nghe",
        ],
      },
      bestSeller: {
        p4: "BÁN CHẠY NHẤT",
        img: [
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/23/637968458856440391_HASP-LOA-BLUETOOTH-KARAOKE-SOUNDMAX-M22-AVT.jpg",
          "https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146111983706760_Trip10000_Black.jpg",
        ],
        name: [
          "Combo Loa Bluetooth Karaoke Soundmax M22 + Mic không dây",
          "Pin sạc dự phòng UmeTravel 10000mAh TRIP10000 Quick Charge",
        ],
        price: ["1.845.000 ₫", "539.000 ₫"],
      },
    },
    {
      iconName: "fa-solid fa-rotate-left fa-flip-horizontal",
      name: "MÁY CŨ GIÁ RẺ",
      id: 7,
    },
    {
      iconName: "fa-solid fa-house",
      name: "HÀNG GIA DỤNG",
      id: 8,
    },
    {
      iconName: "fa-solid fa-sim-card fa-flip-horizontal",
      name: "SIM & THẺ",
      id: 9,
    },
    {
      iconName: "fa-brands fa-react",
      name: "KHUYẾN MÃI",
      id: 10,
    },
  ];

  const listOption = [
    {
      id: 1,
      name: "Tin mới",
    },
    {
      id: 2,
      name: "Khuyến Mãi",
    },
    {
      id: 3,
      name: "Điện máy - Gia dụng",
    },
    {
      id: 4,
      name: "Thủ thuật",
    },
    {
      id: 5,
      name: "For Gamers",
    },
  ];
  // ẩn hiện ô search
  const [show, setShow] = useState(false);
  const search = useRef(null);

  const handleClick = () => {
    setShow(true);
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (search.current && !search.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div>
      {/* header 1 */}
      <div className="wrap-header">
        <div className="header">
          <div className="img">
            <Link to="/trang-chu">
              <img
                className="img"
                src="https://oss.couponkirin.com/merchants/original/fpt-shop.jpg"
              />
            </Link>
          </div>
          <div className="search">
            <input
              onClick={handleClick}
              className="search-bar"
              type="text"
              placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
            />

            <div className="search-icon">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            {show && <div className="government"></div>}
            {show && (
              <div className="search-trends" ref={search}>
                <p>Xu hướng tìm kiếm</p>
                <ul>
                  <li>iphone 14</li>
                  <li>iphone</li>
                  <li>iphone 13</li>
                  <li>iphone 11 </li>
                  <li>xiaomi redmi note 12 series</li>
                </ul>
              </div>
            )}
          </div>
          <div className="list">
            <ul>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a>
                  <i className="fa-regular fa-file"></i>
                  <span>Thông tin hay</span>
                </a>
                {isVisible && (
                  <div className="list-option">
                    <ul>
                      {listOption.map((c) => (
                        <li key={c.id}>{c.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a>
                  <i className="fa-solid fa-file-contract"></i>
                  <span>Thanh toán & tiện ích</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-solid fa-circle-user"></i>
                  <span>Tài khoản của tôi</span>
                </a>
              </li>
              <li>
                <Link to="/cart" style={{textDecoration:"none"}}>
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "#f5a623",
                      width: "15px",
                      height: "13px",
                      top: "7%",
                      right: "11.5%",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                    }}
                  >
                    {cart.length}
                  </div>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Giỏ hàng</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* header 2 */}
      <div className="list-category">
        <ul>
          {listCategory.map((e) => (
            <li key={e.id} onMouseEnter={() => handleCategoryHover(e.id)}>
              <i className={e.iconName}></i>
              {e.name}
            </li>
          ))}
          <div onMouseLeave={() => handleCategoryHover(null)}>
            {hoveredCategory === 1 && (
              <div className="box-container">
                <div className="box-option">
                  <div className="box-1">
                    <h3>{listCategory[0].metaData.p1}</h3>
                    <ul className="list-option2">
                      {listCategory[0].metaData.brand.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                    <h3>{listCategory[0].metaData.p2}</h3>
                    <ul className="list-option2">
                      {listCategory[0].metaData.watch.map((watch, index2) => (
                        <li key={index2}>{watch}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-2">
                    <h3>{listCategory[0].metaData.p3}</h3>
                    <ul className="list-option3">
                      {listCategory[0].metaData.price.map((price, index3) => (
                        <li key={index3}>
                          {new Intl.NumberFormat("vi-VN").format(price)} đ
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-3">
                    <h3>{listCategory[0].bestSeller.p4}</h3>
                    <ul>
                      {listCategory[0].bestSeller.name.map((item, index) => (
                        <li key={index}>
                          <img src={listCategory[0].bestSeller.img[index]} />
                          <div className="test">
                            <p>{item}</p>
                            <span>
                              {listCategory[0].bestSeller.price[index]}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-4">
                    <img src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211497964235671_H4_248x248%20(3).png" />
                  </div>
                </div>
              </div>
            )}
            {/* lap top */}
            {hoveredCategory === 2 && (
              <div className="box-container">
                <div className="box-option">
                  <div className="box-1">
                    <h3>{listCategory[1].metaData.p1}</h3>
                    <ul className="list-option2">
                      {listCategory[1].metaData.brand.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                    <h3>{listCategory[1].metaData.p2}</h3>
                    <ul className="list-option2">
                      {listCategory[1].metaData.software.map(
                        (software, index2) => (
                          <li key={index2}>{software}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="box-2">
                    <h3>{listCategory[1].metaData.p3}</h3>
                    <ul className="list-option3">
                      {listCategory[1].metaData.price.map((price, index3) => (
                        <li key={index3}>{price}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-4">
                    <img src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211497964235671_H4_248x248%20(3).png" />
                  </div>
                </div>
              </div>
            )}
            {/* máy tính bảng */}
            {hoveredCategory === 3 && (
              <div className="box-container">
                <div className="box-option">
                  <div className="box-1">
                    <h3>{listCategory[2].metaData.p1}</h3>
                    <ul className="list-option2">
                      {listCategory[2].metaData.brand.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-2">
                    <h3>{listCategory[2].metaData.p3}</h3>
                    <ul className="list-option3">
                      {listCategory[2].metaData.price.map((price, index3) => (
                        <li key={index3}>{price}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-3">
                    <h3>{listCategory[2].bestSeller.p4}</h3>
                    <ul>
                      {listCategory[2].bestSeller.name.map((item, index) => (
                        <li key={index}>
                          <img src={listCategory[2].bestSeller.img[index]} />
                          <div className="test">
                            <p>{item}</p>
                            <span>
                              {listCategory[2].bestSeller.price[index]}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-4">
                    <img src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211497964235671_H4_248x248%20(3).png" />
                  </div>
                </div>
              </div>
            )}
            {/* Apple */}
            {hoveredCategory === 4 && (
              <div className="box-container">
                <div className="box-option">
                  <div className="box-1">
                    <h3>{listCategory[3].metaData.p1}</h3>
                    <ul className="list-option2">
                      {listCategory[3].metaData.brand.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-3">
                    <h3>{listCategory[3].bestSeller.p4}</h3>
                    <ul>
                      {listCategory[3].bestSeller.name.map((item, index) => (
                        <li key={index}>
                          <img src={listCategory[3].bestSeller.img[index]} />
                          <div className="test">
                            <p>{item}</p>
                            <span>
                              {listCategory[3].bestSeller.price[index]}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-4">
                    <img src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211497964235671_H4_248x248%20(3).png" />
                  </div>
                </div>
              </div>
            )}
            {hoveredCategory === 5 && (
              <div className="list-option" style={{ top: "162%", left: "36%" }}>
                <ul>
                  <li>PC</li>
                  <li>Linh kiện</li>
                  <li>Màn hình</li>
                  <li>Xây dựng PC</li>
                </ul>
              </div>
            )}
            {/* Phụ kiện */}
            {hoveredCategory === 6 && (
              <div className="box-container">
                <div className="box-option">
                  <div className="box-1">
                    <h3>{listCategory[5].metaData.p1}</h3>
                    <ul className="list-option2">
                      {listCategory[5].metaData.brand.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-3">
                    <h3>{listCategory[5].bestSeller.p4}</h3>
                    <ul>
                      {listCategory[5].bestSeller.name.map((item, index) => (
                        <li key={index}>
                          <img src={listCategory[5].bestSeller.img[index]} />
                          <div className="test">
                            <p>{item}</p>
                            <span>
                              {listCategory[5].bestSeller.price[index]}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-4">
                    <img src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211497964235671_H4_248x248%20(3).png" />
                  </div>
                </div>
              </div>
            )}
            {hoveredCategory === 10 && (
              <div className="list-option" style={{ top: "162%", left: "89%" }}>
                <ul>
                  <li>Thông tin trao thưởng</li>
                  <li>Tất cả khuyến mãi</li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
