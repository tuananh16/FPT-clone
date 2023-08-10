// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./admin/index";
import Layout from "./components/layout/layout";

function App() {
  const role = localStorage.getItem("role");
 
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
