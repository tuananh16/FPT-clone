import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

function AddProduct() {
  const [productData, setProductData] = useState({
    type: "",
    name: "",
    color: "",
    price: 0,
    olePrice: 0,
    cpu: "",
    ram: "",
    rom: "",
    screen: "",
    weight: "",
    quantity: 0,
  });
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("lỗi");
        setData(error);
      });
  }, []);
  if (!data) return null;

  const handleChange = (e) => {
    const {name,value} = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  };

  console.log(productData)
  const handleSubmit = (event) => {
    const config = {
      // headers: { Authorization: `Bearer ${token}` }
    };
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/addProduct", {
        config,
      })
      .then((response) => {})
      .catch((error) => {});
  };
  return (
    <div className="ad-home">
      <h2>Thêm sản phẩm</h2>
      <form className="abc">
        <div className="ad-wrap">
          <p>Loại sản phẩm</p>
          <select value={productData.type} name="type" onChange={handleChange}>
            <option value=''>
              --Chọn--
              {/* <i className="fa-solid fa-caret-down"></i> */}
            </option>
            <option value='option1'>Điện Thoại</option>
            <option value='option2'>Laptop</option>
            <option value='option3'>Tablet</option>
          </select>
          <p>Tên sản phẩm</p>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm"
            required
          />
          <p>Màu sản phẩm</p>
          <select>
            <option>
              --Chọn--
              {/* <i className="fa-solid fa-caret-down"></i> */}
            </option>
            {data.map((e, index) => (
              <option key={index}>{e.name}</option>
            ))}
            <option>Đen</option>
            <option>Đỏ</option>
            <option>Hồng</option>
          </select>
          <p>Giá sản phẩm</p>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Nhập giá sản phẩm"
            required
          />
          <p>Giá cũ sản phẩm</p>
          <input
            type="number"
            name=""
            value={productData.olePrice}
            onChange={handleChange}
            placeholder="Nhập giá cũ sản phẩm"
            required
          />
          <p>CPU</p>
          <input
            required
            type="text"
            name="cpu"
            value={productData.cpu}
            onChange={handleChange}
            placeholder="Nhập tên CPU"
          />
          <p>Ram</p>
          <input
            required
            type="text"
            name="ram"
            value={productData.ram}
            onChange={handleChange}
            placeholder="Nhập tên Ram"
          />
          <p>Rom</p>
          <input
            required
            type="text"
            name="rom"
            value={productData.rom}
            onChange={handleChange}
            placeholder="Nhập tên Rom"
          />
          <p>Màn hình</p>
          <input
            required
            type="text"
            name="screen"
            value={productData.screen}
            onChange={handleChange}
            placeholder="Nhập tên màn hình"
          />
          <p>Trọng lượng</p>
          <input
            required
            type="text"
            name="weight"
            value={productData.weight}
            onChange={handleChange}
            placeholder="Nhập tên Trọng lượng"
          />
          <p>Số lượng</p>
          <input
            required
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            placeholder="Nhập số lượng"
          />
          <p>Ảnh đại diện</p>
          <input required type="file" />
          <p>Ảnh sản phẩm</p>
          <input required type="file" multiple />
        </div>
        <button name="submit" type="submit">
          Gửi
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
