import { useEffect, useState } from "react";
import "./buyNow.scss";
import { Link } from "react-router-dom";
import { highlightsPhones,laptopHot, tabletHot } from "../../Body/data";
// import OrderDetail from '../../cart/orderDetails';

export function muahang(sp) {
  const test1 = {
    name: sp.name,
    price: sp.price,
    img: sp.img,
    oldPrice: sp.oldPrice,
    quantity: 1
  }
  // const test1Array = [test1]
  console.log(sp)
  console.log(test1)

  return test1
}


function BuyNow({ onHandleClose, sp }) {


  useEffect(() => {
    const path = window.location.href;
    let arrDevice = null;
    if (path.indexOf("dien-thoai") != -1) {
      arrDevice = highlightsPhones.filter(
        (items) => items.id == path.split("/")[path.split("/").length - 1]
      )[0];
      setProductDetail(arrDevice);
    } else if (path.indexOf("tablet") != -1) {
      arrDevice = tabletHot.filter(
        (items) => items.id == path.split("/")[path.split("/").length - 1]
      )[0];
      setProductDetail(arrDevice);
    } else {
      arrDevice = laptopHot.filter(
        (items) => items.id == path.split("/")[path.split("/").length - 1]
      )[0];
      setProductDetail(arrDevice);
    }
  }, []);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClose = () => {
    onHandleClose(false);
  };
  const [productDetail, setProductDetail] = useState("");
  // lấy tên và các thứ 
  const [order, setOrder] = useState(false);
  const [fullName, setFullName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");


  const [isNumberPhoneValid, setIsNumberPhoneValid] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberPhone(value);

    // Validate lại số điện thoại khi input thay đổi
    const isValid = /^\d{10}$/.test(value); // Số điện thoại là một chuỗi 10 chữ số
    setIsNumberPhoneValid(isValid);
  };
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleInputChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Email phải có dạng example@domain.com
    setIsEmailValid(isValid);
  };

  // click order
  const handleClickOrder = (e) => {
    e.preventDefault();
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("numberPhone", numberPhone);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
    localStorage.setItem("note", note);

    if (!isNumberPhoneValid) {
      alert("Số điện thoại không hợp lệ!");
      return;
    }
    if (!isEmailValid) {
      alert("Email không hợp lệ!");
      return;
    }
    setOrder(true);
  };

  return (
    <div className="wrap-all2 ">
      {productDetail && (
        <div className="wrap-child1">
          <div className="box-buy">
            <div className="header-buy">
              <h2> Có {quantity} sản phẩm trong giỏ hàng </h2>
              <i onClick={handleClose} className="fa-solid fa-x" />
            </div>
            <div className="body-buy">
              <div className="product-cart">
                <div className="product-cart-img">
                  <img src={productDetail.img} />
                </div>
                <div className="product-cart-info">
                  <div className="product-cart-inside">
                    <b>{productDetail.name}</b>
                    <select className="option-color">
                      <option>Đen</option>
                      <option>Đỏ</option>
                    </select>
                    <select className="option-sale">
                      <option>Giảm ngay 1.900.000đ</option>
                      <option>Giảm ngay 1.700.000đ + Trả góp 0%</option>
                    </select>
                    <ul>
                      <li>
                        Thu cũ đổi mới trợ giá ngay đến 2 triệu (SmartExchange)
                      </li>
                      <li>Tặng 18 triệu phần quà 100% trúng</li>
                      <li>Bảo hành 18 tháng</li>
                    </ul>
                    <a href="/">
                      Thu gọn khuyến mãi{" "}
                      <i className="fa-solid fa-chevron-up" />
                    </a>
                    <ul style={{ width: "340px" }}>
                      <li style={{ display: "flex" }}>
                        <div className="check-discount">
                          <img
                            style={{}}
                            src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/4/637846629514363952_ic-tp-bank.jpg"
                          />
                          <input
                            type="checkbox"
                            name="check"
                            style={{ position: "absolute" }}
                          />
                        </div>
                        <div>
                          <span>
                            Giảm ngay 600.000đ và hoàn tiền đến 500.000đ khi mở
                            thẻ đồng thương hiệu TPBANK EVO
                          </span>
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="check-discount">
                          <img
                            style={{}}
                            src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/4/637846629514363952_ic-tp-bank.jpg"
                          />
                          <input
                            type="checkbox"
                            name="check"
                            style={{ position: "absolute" }}
                          />
                        </div>
                        <div>
                          <span>
                            Giảm ngay 5% tối đa 500.000 đồng khi thanh toán trả
                            góp 6/12 tháng qua Kredivo
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-quantity">
                  <span
                    className="minus"
                    onClick={handleDecrease}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span
                    className="plus"
                    onClick={handleIncrease}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </span>
                </div>
                <div className="price-product">
                  <p>
                    {new Intl.NumberFormat("vi-VN").format(
                      productDetail.price * quantity
                    )}{" "}
                    đ
                  </p>
                  <span>
                    {new Intl.NumberFormat("vi-VN").format(
                      productDetail.oldPrice * quantity
                    )}{" "}
                    đ
                  </span>
                </div>
              </div>
            </div>
            <div className="change-point">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <i className="fa-brands fa-facebook" />
              <p>Đổi điểm thành Voucher thanh toán</p>
            </div>
            <div className="discount-code">
              <div className="insert-code">
                <b>Mã giảm giá</b>
                <div>
                  <input type="text" placeholder="Nhập mã giảm giá" />
                  <button className="cartBtn">Áp dụng</button>
                </div>
              </div>
              <div className="pay-product">
                <div className="pay">
                  <p>tổng tiền:</p>
                  <p>
                    {new Intl.NumberFormat("vi-VN").format(
                      productDetail.oldPrice * quantity
                    )}{" "}
                    đ
                  </p>
                </div>
                <div className="pay">
                  <p>Giảm:</p>
                  <p>
                    {new Intl.NumberFormat("vi-VN").format(
                      (productDetail.oldPrice - productDetail.price) * quantity
                    )}{" "}
                    đ
                  </p>
                </div>
                <div className="pay">
                  <b>Cần thanh toán:</b>
                  <span>
                    {new Intl.NumberFormat("vi-VN").format(
                      productDetail.price * quantity
                    )}{" "}
                    đ
                  </span>
                </div>
              </div>
            </div>
            <div className="buy-together">
              <h3>Bạn có thể mua cùng</h3>
              <div className="box-product">
                <div className="box-produc-child">
                  <div style={{ padding: "5px" }}>
                    <img src="https://fptshop.com.vn/Uploads/Originals/2023/4/12/638169032453951195_eset-mobile-security-dd-docquyen.jpg" />
                  </div>
                  <div>
                    <p>
                      Phần mềm diệt virus Eset Mobile Security (1u/18 tháng)
                    </p>
                    <div style={{ margin: "4px 0px" }}>
                      <b>101.490 ₫</b>
                      <span>199.000 ₫</span>
                    </div>
                    <button className="cartBtn">Thêm vào giỏ hàng</button>
                  </div>
                </div>
                <div className="box-produc-child">
                  <div style={{ padding: "5px" }}>
                    <img src="https://fptshop.com.vn/Uploads/Originals/2022/9/28/637999818303080769_ava.jpg" />
                  </div>
                  <div>
                    <p>
                      Ốp lưng chống sốc iPhone 14 Plus UNIQ COMBAT trong suốt
                      viền đen
                    </p>
                    <div style={{ margin: "4px 0px" }}>
                      <b>539.100 ₫</b>
                      <span>599.000 ₫</span>
                    </div>
                    <button className="cartBtn">Thêm vào giỏ hàng</button>
                  </div>
                </div>
                <div className="box-produc-child">
                  <div style={{ padding: "5px" }}>
                    <img src="https://fptshop.com.vn/Uploads/Originals/2022/9/28/637999854129902499_ava%20xanh.jpg" />
                  </div>
                  <div>
                    <p>Ốp bảo vệ camera iPhone 14 / 14 Plus Mipow</p>
                    <div style={{ margin: "4px 0px" }}>
                      <b>101.490 ₫</b>
                      <span>199.000 ₫</span>
                    </div>
                    <button className="cartBtn">Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            </div>
            <form className="customer-information" onSubmit={handleClickOrder}>
              <h3>Thông tin khách hàng</h3>
              <div className="information">
                <div>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    onChange={(event) => setFullName(event.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    onChange={handleInputChange}
                    required
                  />
                  {!isNumberPhoneValid && (
                  <span style={{ color: "red" }}>
                    Số điện thoại không hợp lệ!
                  </span>
                )}
                </div>
                <input
                  style={{ width: "380px" }}
                  type="text"
                  onChange={handleInputChangeEmail}
                  placeholder="Nhập email (không bắt buộc)"
                  required
                />
                {!isEmailValid && (
                  <span style={{ color: "red" }}>
                    Email không hợp lệ!
                  </span>
                )}
              </div>
              <h3>Chọn hình thức nhận hàng</h3>
              <div className="delivery-method">
                <p>
                  <input type="radio" defaultChecked name="address" required />
                  Giao hàng tận nơi
                </p>
                <p>
                  <input type="radio" name="address" />
                  Nhận tại cửa hàng
                </p>
              </div>
              <div className="delivery-address">
                <div
                  style={{
                    width: "490px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <select>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>Bắc Ninh</option>
                    <option>Cà Mau</option>
                    <option>Bắc Kạn</option>
                  </select>
                  <select>
                    <option>Quận Ba Đình</option>
                    <option>Quận Bắc Từ Liên</option>
                    <option>Quận Cầu Giấy</option>
                    <option>Quận Đống Đa</option>
                    <option>Quận Hà Đông</option>
                    <option>Quận Hà Bà Trưng</option>
                    <option>Quận Hoàn Kiếm</option>
                    <option>Quận Hoàng Mai</option>
                    <option>Quận Long Biên</option>
                    <option>Quận Nam Từ Liêm</option>
                    <option>Quận Tây Hồ</option>
                    <option>Quận Thanh Xuân</option>
                    <option>Thị Xã Sơn Tây</option>
                    <option>Huyện Ba Vì</option>
                    <option>Huyện Chương Mỹ</option>
                    <option>Huyện Đan Phượng</option>
                    <option>Huyện Đông Anh</option>
                    <option>Huyện Gia Lâm</option>
                    <option>Huyện Hòa Đức</option>
                    <option>Huyện Mê Linh</option>
                  </select>
                </div>
                <div>
                  <select style={{ width: "490px" }}>
                    <option>Phường Cống Vị</option>
                    <option>Phường Đội Cấn</option>
                    <option>Phường Điện Biên</option>
                    <option>Phường Kim Mã</option>
                    <option>Phường Giảng Võ</option>
                    <option>Phường Liễu Giai</option>
                    <option>Phường Ngọc Hà</option>
                    <option>Phường Ngọc Khánh</option>
                    <option>Phường Nguyễn Trung Trực</option>
                    <option>Phường Phúc Xá</option>
                    <option>Phường Quán Thánh</option>
                    <option>Phường Thành Công</option>
                    <option>Phường Trúc Bạch</option>
                    <option>Phường Vĩnh Phúc</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  onChange={(event) => setAddress(event.target.value)}
                  required
                />
              </div>
              <div className="receive">
                <b>Thời gian giao hàng:</b>
                <select>
                  <option>Chỉ giao hàng giờ hành chính</option>
                  <option>Tất cả các ngày trong tuần</option>
                </select>
              </div>
              <input
                style={{
                  width: "490px",
                  padding: "5px 8px",
                  height: "48px",
                }}
                type="text"
                placeholder="Ghi chú"
                onChange={(event) => setNote(event.target.value)}
              />
              <div className="service">
                <p>Chọn thêm các dịch vụ/yêu cầu</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    <input type="checkbox" /> Hỗ trợ kỹ thuật
                  </span>
                  <span>
                    <input type="checkbox" /> Xuất hóa đơn
                  </span>
                </div>
              </div>
              <h3>Chọn hình thức thanh toán</h3>
              <ul>
                <li>
                  <input type="radio" name="thanh toan" defaultChecked />
                  Trả tiền mặt khi nhận hàng/Trả góp lãi suất thường
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  ATM nội địa/QR CODE/Internet Banking (Thanh toán qua VNPAY)
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Thanh toán bằng thẻ quốc tế Visa, Mastercard, JCB, AMEX
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Thanh toán qua Kredivo
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Thanh toán ví Moca trên ứng dụng Grab
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Thanh toán qua ví điện tử FoxPay
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Trả góp 0%
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Thanh toán qua thẻ tín dụng VIB
                </li>
                <li>
                  <input type="radio" name="thanh toan" />
                  Thanh toán qua ví ZaloPay
                </li>
              </ul>
              <div className="complete">
                <button
                  className="cartBtn"
                  type="submit"
                  value="Hoàn tất đặt hàng"
                  onClick={() => muahang(productDetail)}
                >
                  HOÀN TẤT ĐẶT HÀNG
                </button>
                <p>
                  Bằng cách đặt hàng, quý khách đồng ý với Điều khoản sử dụng
                  của FPT Shop
                </p>
              </div>
            </form>
            {order && (
              <div className="order-success">
                <div className="test2">
                  <div className="success">
                    <i className="fa-solid fa-check fa-beat-fade" />
                    <h3>Đặt hàng thành công</h3>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link to="/trang-chu">
                        <button className="cartBtn">Tiếp tục mua sắm</button>
                      </Link>
                      <Link to="/chi-tiet">
                        <button className="cartBtn">Chi tiết đơn hàng</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="test2" onClick={handleClose}></div>
    </div>
  );
}

export default BuyNow;
