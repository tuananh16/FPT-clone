import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./style.scss";

function AddProduct() {
  const token = localStorage.getItem("token");

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    oldprice: 0,
    categoryId: 0,
    cpu: "",
    ram: 0,
    rom: 0,
    screen: 0,
    weight: 0,
    colorId: 0,
    quantity: 1,
    coverImage: null,
    Images: [],
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/product/create", config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData(null);
      });
  }, []);
  if (!data) return <div>Loading...</div>;

  // ============== post =====================
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (name === "coverImage") {
        setProductData((prevData) => ({
          ...prevData,
          coverImage: files[0],
        }));
      } else if (name === "Images") {
        setProductData((prevData) => ({
          ...prevData,
          Images: Array.from(files),
        }));
      }
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const key in productData) {
      if (key === "Images") {
        productData.Images.forEach((image) => {
          formData.append("Images", image);
        });
      } else {
        formData.append(key, productData[key]);
      }
    }

    if (productData.categoryId === 0 || productData.colorId === 0) {
      toast.error("chưa nhập đủ thông tin");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/product/create",
          formData,
          config
        );
        toast.success("🦄 Tạo sản phẩm thành công!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setProductData({
          name: "",
          price: 0,
          oldprice: 0,
          categoryId: 0,
          cpu: "",
          ram: 0,
          rom: 0,
          screen: 0,
          weight: 0,
          colorId: 0,
          quantity: 1,
          coverImage: "",
          Images: [""],
        });
      } catch (error) {
        console.error(
          "Đã xảy ra lỗi:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };
  // console.log(colorId)
  return (
    <div className="ad-home">
      <h2>Thêm sản phẩm</h2>
      <form className="abc" onSubmit={handleSubmit}>
        <div className="ad-wrap">
          <p>Loại sản phẩm</p>
          <select
            value={productData.categoryId}
            name="categoryId"
            onChange={handleChange}
            required
          >
            <option>--Chọn--</option>
            {data.categories.map((e, index) => (
              <option key={index} value={e.id}>
                {e.categoryName}
              </option>
            ))}
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
          <select
            value={productData.colorId}
            name="colorId"
            onChange={handleChange}
            required
          >
            <option>--Chọn--</option>
            {data.colors.map((e, index) => (
              <option
                key={index}
                value={e.id}
                style={{ backgroundColor: e.name, color: "#fff" }}
              >
                {e.name}
              </option>
            ))}
          </select>
          <p>Giá sản phẩm</p>
          <input
            type="number"
            name="price"
            min="1000"
            step="1000"
            value={productData.price}
            onChange={handleChange}
            placeholder="Nhập giá sản phẩm"
            required
          />
          <p>Giá cũ sản phẩm</p>
          <input
            type="number"
            name="oldprice"
            min="1000"
            step="1000"
            value={productData.oldprice}
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
            type="number"
            name="ram"
            min="8"
            step="4"
            value={productData.ram}
            onChange={handleChange}
            placeholder="Nhập tên Ram"
          />
          <p>Rom</p>
          <input
            required
            type="number"
            name="rom"
            min="0"
            value={productData.rom}
            onChange={handleChange}
            placeholder="Nhập tên Rom"
          />
          <p>Màn hình</p>
          <input
            required
            type="number"
            name="screen"
            value={productData.screen}
            min="0"
            step="0.1"
            onChange={handleChange}
            placeholder="Nhập tên màn hình"
          />
          <p>Trọng lượng</p>
          <input
            required
            type="number"
            name="weight"
            min="0"
            step="0.01"
            value={productData.weight}
            onChange={handleChange}
            placeholder="Nhập tên Trọng lượng"
          />
          <p>Số lượng</p>
          <input
            required
            type="number"
            name="quantity"
            min="0"
            value={productData.quantity}
            onChange={handleChange}
            placeholder="Nhập số lượng"
          />
          <p>Ảnh đại diện</p>
          <input
            required
            name="coverImage"
            type="file"
            onChange={handleChange}
          />
          <p>Ảnh sản phẩm</p>
          <input
            required
            name="Images"
            type="file"
            onChange={handleChange}
            multiple
          />
        </div>
        <button name="submit" type="submit">
          Gửi
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddProduct;
