import React from 'react';
import HomePage from './homePage/homePage';
import Header from './header/header';
import Navbar from './navbar/navbar';
import UnfinishedOrder from './order/unfinishedOrder/unfinishedOrder';
import OrderCompleted from './order/orderCompleted/orderCompleted';
import AllOrder from './order/allOrder/allOrder';
import ListProductType from './productType/listProductType/listProductType';
import { Routes, Route } from "react-router-dom";
import AddProductType from './productType/addProductType/addProductType';


function Index() {
    return (
        <div>
            <Header />
            <div style={{display:'flex'}}>
            <Navbar />
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chua-hoan-thanh" element={<UnfinishedOrder />} />
            <Route path="/da-hoan-thanh" element={<OrderCompleted />} />
            <Route path="/all-don-hang" element={<AllOrder/>} />
            <Route path="/loai-san-pham/danh-sach" element={<ListProductType />} />
            <Route path="/loai-san-pham/them" element={<AddProductType />} />
            
            </Routes>
            </div>
        </div>
    );
}

export default Index;