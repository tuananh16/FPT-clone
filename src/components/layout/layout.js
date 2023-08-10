import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../common/HeaderComponent/header";
import Body from "../Body/body";
import Footer from "../../common/FooterComponent/footer";
import BodyDetail from "../detail page/bodyDetail";
import Cart from "../cart/cart";
import OrderDetails from "../cart/orderDetails";
import Login from "../../common/HeaderComponent/login";

function Layout() {
  const [cart, setCart] = useState([]);

  const removeItem = (item) => {
    const newCart = cart.filter(
      (x) => x.id !== item.id || x.name !== item.name
    );
    setCart(newCart);
  };

  const [isPurchased, setIsPurchased] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const handlePurchase = () => {
    console.log(isPurchased)
    setPurchasedItems(cart);
    setCart([]);
    setIsPurchased(true);
  };
  return (
    <div className="Layout">
      <Header cart={cart} />
      <Routes>
        <Route
          path="/trang-chu"
          element={<Body cart={cart} onChangeCart={setCart} exact />}
        />
        <Route path="/" element={<Body cart={cart} onChangeCart={setCart} />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path={"/:product/:id"} element={<BodyDetail />} />
        {/* <Route path="/:product/Laptop/:id" element={<BodyDetail />} />
        <Route path="/:product/Tablet/:id" element={<BodyDetail />} /> */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeItem={removeItem}
              onPurchase={handlePurchase}
            />
          }
        />
        <Route
          path="/chi-tiet"
          element={<OrderDetails cart={purchasedItems} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
