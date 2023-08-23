import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./style.scss";
// console.log("Run")
let deletedImgUrl = "";
let deletedCoverImg = "";
function FixProduct() {
  const token = localStorage.getItem("token");
  const path = window.location.href;
  const id = path.split("/").pop(7);
  // console.log("Run");
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    oldprice: 0,
    categoryId: "",
    cpu: "",
    ram: 0,
    rom: 0,
    screen: 0,
    weight: 0,
    coverImage: null,
    Images: [],
  });
  const [data, setData] = useState(null);
  // console.log(productData)
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`http://localhost:3000/product/update?id=${id}`, config)
      .then((response) => {
        const updatedData = {
          ...response.data.data,
          coverImg: response.data.data.coverImg,
          imgList: response.data.data.imgList.map((imgPath) => imgPath),
        };
        setData(response.data);
        setProductData(updatedData);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData(null);
      });
  }, []);
  if (!data) return <div>Loading...</div>;

  // ============== post =====================
  const deleteImg = (index) => {
    deletedImgUrl += productData.imgList[index] + "||";

    //đoạn này là xóa 1 giá trị
    const updatedVisibleImages = productData.imgList.filter(
      (_, i) => i !== index
    );
    const updatedProductData = {
      ...productData,
      imgList: updatedVisibleImages,
    };
    setProductData(updatedProductData);
  };
  // xóa ảnh đại diện
  const deleteImg2 = () => {
    deletedCoverImg = productData.coverImg;
    const updatedProductData = {
      ...productData,
      coverImg: "",
    };
    setProductData(updatedProductData);
  };
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
  console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (productData.categoryId === 0) {
      toast.error("Chưa chọn loại sản phẩm");
    } else {
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
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      try {
        formData.append("deletedImgUrl", deletedImgUrl);
        formData.append("deletedCoverImg", deletedCoverImg);
        const response = await axios.post(
          "http://localhost:3000/product/update",
          formData,
          config
        );
        console.log(response);
        if (response.data.status === true) {
          toast.success("🦄 update sản phẩm thành công!");
        } else if (
          response.data.message ===
          "If you delete all image, you must add atlease a new one. "
        ) {
          toast.error("Không thể xóa tất cả ảnh sản phẩm");
        } else if (
          response.data.message ===
          "If you delete cover image, you must add a new one. If you delete all image, you must add atlease a new one. "
        ) {
          toast.error('Không bỏ trống ảnh đại diện và sản phẩm');
        } else if (
          response.data.message ===
          "If you delete cover image, you must add a new one. "
        ) {
          toast.error("Bạn xóa ảnh đại diện cần thêm ảnh mới");
        } else if (
          response.data.message ===
          "If you want to add new cover image, you must delete the old one. "
        ) {
          toast.error("Nếu bạn muốn thêm ảnh đại diện mới cần xóa ảnh cũ");
        }
        else{
          toast.error("Lỗi")
        }
      } catch (error) {
        if (error.response.data === 401) {
          toast.error("Lỗi ");
        } else {
          console.log(1111);
          console.error(
            "Đã xảy ra lỗi:",
            error.response ? error.response.data : error.message
          );
        }
        //
      }
    }
  };
  return (
    <div className="ad-home">
      <h2>Thay Đổi Thông Tin Sản Phẩm</h2>
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
            min="1"
            step="1"
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
          <p>Ảnh đại diện</p>
          <div className="picture-frame">
            <i className="fa-solid fa-x" onClick={deleteImg2}></i>
            <img
              style={{ width: "100px", height: "100px" }}
              src={`http://localhost:3000/${productData.coverImg}`}
            />
          </div>
          <input
            // required
            name="coverImage"
            type="file"
            onChange={handleChange}
            style={{ width: "300px" }}
          />

          <p>Ảnh sản phẩm</p>
          <div style={{ display: "flex" }}>
            {productData.imgList.map((e, index) => (
              <div className="picture-frame" key={index}>
                <i
                  className="fa-solid fa-x"
                  onClick={() => deleteImg(index)}
                ></i>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={`http://localhost:3000/${e}`}
                />
              </div>
            ))}
          </div>
          <input
            // required
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

export default FixProduct;
