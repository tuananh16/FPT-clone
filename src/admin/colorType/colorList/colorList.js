import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
import axios from "axios";

function ColorList() {
  const [colorList, setColorList] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/color/list", config)
      .then((response) => {
        setColorList(response.data);
      })
      .catch((error) => {
        console.log(error, "loi");
      });
  }, []);
  if (!colorList) return null;
  const handleDelete = (id) => {
    confirmAlert({
      title: "Bạn có chắc xóa màu này không",
      buttons: [
        {
          label: "OK",
          onClick: async () => {
            try {
              const config = {
                headers: { Authorization: `Bearer ${token}` },
              };
              const result = await axios.delete(
                `http://localhost:3000/color/delete?id=${id}`,
                config
              );
              if (result.data.status === false) {
                toast.error(
                  "Xóa sản phẩm thất bại do còn sản phẩm dùng màu này",
                  {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  }
                );
                console.log("xóa đéo đc");
              } else {
                setColorList((prevData) =>
                  prevData.filter((item) => item.id !== id)
                );
                toast.success("🦄 Xóa sản phẩm thành công!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }
            } catch (error) {
              console.log("Error deleting product:", error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="ad-home">
      <h2>DANH SÁCH CÁC MÀU </h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Loại Màu</th>
            <th>Tùy chỉnh</th>
          </tr>
        </thead>
        <tbody>
          {colorList.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.id}</td>
              <td>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "80px" }}>{e.name}</div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: e.name,
                      marginLeft: "10px",
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default ColorList;
