import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "./orderDetails.scss";
import { muahang } from "../detail page/buyNow/buyNow";

function OrderDetails({ cart,props }) {


  const product = { /* object with product info */ }

const result = muahang(product)
  // const { test1Array } = props.location.state;
  // console.log(cart);
  // function test() {
  //   const purchasedProduct = test1Array;
  //   console.log(purchasedProduct);

  //   let orderDetails = [...cart];
  //   if (purchasedProduct.name !== undefined) {
  //     orderDetails = cart.concat(purchasedProduct)
  //   }
  //   console.log(orderDetails);

  //   return orderDetails;
  // }

  // const orderDetails = test();

  const totalPrice = cart.reduce(
    (total, item) => total + item.oldPrice * item.quantity,
    0
  );
  const needToPay = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function xoa() {
    localStorage.removeItem("fullName");
    localStorage.removeItem("numberPhone");
    localStorage.removeItem("address");
    localStorage.removeItem("email");
  }

  return (
    <div className="order-details">
      <div>
        {cart.length > 0 ? (
          <div className="wrap-order-details">
            <h2>Chi Tiết Đơn Hàng</h2>
            <div className="body-oder-details">
              <div className="order-details-left">
                <h3>
                  Mã đơn hàng: <span style={{ color: "blue" }}>vwfas213</span>
                </h3>
                <b>Thông tin giao hàng:</b>
                <div>
                  <p>
                    {" "}
                    Tên người nhận: <b>
                      {localStorage.getItem("fullName")}
                    </b>{" "}
                  </p>
                  <p>
                    {" "}
                    Số điện thoại : <b>
                      {localStorage.getItem("numberPhone")}
                    </b>{" "}
                  </p>
                  <p>
                    {" "}
                    Email : <b>{localStorage.getItem("email")}</b>{" "}
                  </p>
                  <p>
                    {" "}
                    Địa chỉ : <b>{localStorage.getItem("address")}</b>{" "}
                  </p>
                  <p>
                    {" "}
                    Ghi chú:<b>{localStorage.getItem("note")}</b>{" "}
                  </p>
                </div>
                <p>Phương thức thanh toán: Giao hàng tận nơi</p>
                <p>Phương thức thu tiền: Thu tiền tận nơi</p>
              </div>
              <div className="order-details-right">
                <div>
                  <b>Thông tin đơn hàng:</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      borderBottom: "1px solid #99a2aa",
                    }}
                  >
                    <p>Sản phẩm </p>
                    <p>Tên sản phẩm</p>
                    <p> Số Lượng</p>
                    <p>Giá</p>
                  </div>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 40px",
                        borderBottom: "1px solid #99a2aa",
                      }}
                    >
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={item.img}
                      />
                      <p>{item.name}</p>
                      <p>{item.quantity}</p>
                      <p>
                        {new Intl.NumberFormat("vi-VN").format(
                          item.oldPrice * item.quantity
                        )}
                      </p>
                    </div>
                  ))}
                  <div
                    style={{
                      margin: "10px 0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <b style={{ margin: "10px 0 20px 0px" }}>
                      Tổng tiền giỏ hàng
                    </b>
                    <div
                      style={{
                        width: "350px",
                      }}
                    >
                      <div className="pay">
                        <p>Tổng sản phẩm:</p>
                        <p>1</p>
                      </div>
                      <div className="pay">
                        <p>Tổng tiền hàng: </p>
                        <p>
                          {new Intl.NumberFormat("vi-VN").format(totalPrice)}
                        </p>
                      </div>
                      <div
                        className="pay"
                        style={{
                          borderBottom: "1px solid #99a2aa",
                        }}
                      >
                        <p>Giảm: </p>
                        <p>
                          {new Intl.NumberFormat("vi-VN").format(
                            totalPrice - needToPay
                          )}
                        </p>
                      </div>
                      <div className="pay" style={{ margin: "20px 0" }}>
                        <b>Cần thanh toán: </b>
                        <span>
                          {new Intl.NumberFormat("vi-VN").format(needToPay)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to="/trang-chu">
                <button
                  onClick={xoa}
                  style={{
                    padding: "15px 23px",
                    backgroundColor: "#cb1c22",
                    border: " 1px solid #cbd1d6",
                    borderRadius: "5px",
                    color: "#edeeef",
                    fontSize: "20px",
                    marginBottom: "16px",
                    cursor: "pointer",
                  }}
                >
                  Tiếp tục mua sắm
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                width: "1200px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                padding: "24px 0px",
              }}
            >
              <img
                style={{ width: "108px" }}
                src="https://fptshop.com.vn/Content/v5d/account/images/img-no-result.png"
              />
              <h2>Chưa có sản phẩm nào đã mua</h2>
              <Link to="/trang-chu">
                <button
                  style={{
                    padding: "15px 23px",
                    backgroundColor: "#cb1c22",
                    border: "1px solid #cbd1d6",
                    borderRadius: "5px",
                    color: "#edeeef",
                    fontSize: "20px",
                    marginBottom: "16px",
                    cursor: "pointer",
                  }}
                >
                  Tiếp tục mua hàng
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
