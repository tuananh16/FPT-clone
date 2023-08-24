import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./admin/index";
import Layout from "./components/layout/layout";
import axios from "axios";


function App() {
  
  const role = localStorage.getItem("role");

  setTimeout(() => {
    const storedUsername = localStorage.getItem("username");
    
    if (storedUsername) {
      alert('Phiên đăng nhập đã hết hạn. Mời bạn đăng nhập lại');
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = '/dang-nhap';
    }
  }, 24 * 60 * 60 * 1000);
  
  // console.log(data)
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Layout  />} />
        <Route path="/admin/*" element={<Index role={role}/>} />
      </Routes>
    </div>
  );
}

export default App;
