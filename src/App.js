import Header from "./common/HeaderComponent/header";
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Body from "./components/Body/body";
import Footer from "./common/FooterComponent/footer";
import BodyDetail from "./components/detail page/bodyDetail";
import Cart from "./components/cart/cart";
import {useState} from 'react'



function App() {
  const [amout, setAmout] = useState(0)
  return (
    <div className="App">
      <Header TotalAmout={amout} />
      
      <Routes>
        <Route path ="/trang-chu" element={<Body onChangeAmount={(amout) => setAmout(amout)} />}/>
        <Route path ="/" element={<Body />}/>
        <Route path ="/dien-thoai/:id" element={<BodyDetail/>}/>
        <Route path ="/Laptop/:id" element={<BodyDetail/>}/>
        <Route path ="/Tablet/:id" element={<BodyDetail/>}/> 
        <Route path ="/cart" element={<Cart/>}/> 
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
