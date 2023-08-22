import React from "react";
import { useEffect } from "react";
import HomePage from "./homePage/homePage";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import UnfinishedOrder from "./order/unfinishedOrder/unfinishedOrder";
import OrderCompleted from "./order/orderCompleted/orderCompleted";
import AllOrder from "./order/allOrder/allOrder";
import ListProductType from "./productType/listProductType/listProductType";
import { Routes, Route } from "react-router-dom";
import AddProductType from "./productType/addProductType/addProductType";
import ListProduct from "./product/listProduct/listProduct";
import AddProduct from "./product/addProduct/addProduct";
import ColorAdd from "./colorType/colorAdd/colorAdd";
import ColorList from "./colorType/colorList/colorList";
import DetailProduct from "./product/detailProduct/detailProduct";
import AddColorProduct from "./product/addColorProduct/addColorProduct";
import FixProduct from "./product/fixProduct/fixProduct";
import FixColor from "./product/detailProduct/fixColor/fixColor";

function Index({ role }) {
  useEffect(() => {
    if (role !== "1") {
      console.log(111111);
      window.location.href = "/";
      return;
    }
  }, [role]);

  if (role !== "1") {
    return null; // Không hiển thị bất kỳ nội dung nào nếu không có quyền truy cập
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{width:'80%'}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="admin/trang-chu" element={<HomePage />} />
            <Route path="admin/chua-hoan-thanh" element={<UnfinishedOrder />} />
            <Route path="admin/da-hoan-thanh" element={<OrderCompleted />} />
            <Route path="admin/all-don-hang" element={<AllOrder />} />
            <Route
              path="admin/loai-san-pham/danh-sach"
              element={<ListProductType />}
            />
            <Route
              path="admin/loai-san-pham/them"
              element={<AddProductType />}
            />
            <Route
              path="admin/loai-mau/danh-sach"
              element={<ColorList/>}
            />
            <Route path="admin/loai-mau/them" element={<ColorAdd/>} />
            <Route path="admin/san-pham/danh-sach" element={<ListProduct />} />
            <Route path="admin/san-pham/chi-tiet-san-pham/:id" element={<DetailProduct />} />
            <Route path="admin/san-pham/chi-tiet-san-pham/sua/:id" element={<FixColor />} />
            <Route path="admin/san-pham/sua/:id" element={<FixProduct />} />
            <Route path="admin/san-pham/them" element={<AddProduct />} />
            <Route path="admin/san-pham/mau-san-pham" element={<AddColorProduct/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Index;
