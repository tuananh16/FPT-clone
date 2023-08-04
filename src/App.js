import Header from "./common/HeaderComponent/header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/body";
import Footer from "./common/FooterComponent/footer";
import BodyDetail from "./components/detail page/bodyDetail";
import Cart from "./components/cart/cart";
import OrderDetails from "./components/cart/orderDetails";
import { useState } from "react";
import Index from "./admin";

function App() {
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
    setPurchasedItems(cart);
    setCart([]);
    setIsPurchased(true);
  };

  return (
    <div className="App">
      {/* <Index  /> */}
      <Header cart={cart} />
      <Routes>
        <Route
          path="/trang-chu"
          element={<Body cart={cart} onChangeCart={setCart} />}
        />
        <Route path="/" element={<Body />} />
        <Route path="/dien-thoai/:id" element={<BodyDetail />} />
        <Route path="/Laptop/:id" element={<BodyDetail />} />
        <Route path="/Tablet/:id" element={<BodyDetail />} />
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

export default App;
