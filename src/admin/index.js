import React from 'react';
import HomePage from './homePage/homePage';
import Header from './header/header';
import Navbar from './navbar/navbar';
import UnfinishedOrder from './order/unfinishedOrder/unfinishedOrder';
import OrderCompleted from './order/orderCompleted/orderCompleted';
import AllOrder from './order/allOrder/allOrder';

function Index() {
    return (
        <div>
            <Header />
            <div style={{display:'flex'}}>
            <Navbar />
            {/* <HomePage /> */}
            <UnfinishedOrder />
            {/* <OrderCompleted /> */}
            {/* <AllOrder/> */}
            </div>
        </div>
    );
}

export default Index;