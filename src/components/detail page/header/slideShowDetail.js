import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideShowDetail.scss";


function SlideShowDetail({ data }) {
  // Kiểm tra nếu data không được định nghĩa trước khi truy cập thuộc tính của nó
  if (!data) {
    return (
      <div className="sharingon">
        <div className="ring">
          <div className="to"></div>
          <div className="to"></div>
          <div className="to"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }
console.log(data.coverImg)
  return (
    <div className="wrap">
      <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
        <div className="test">
          <img src={`http://localhost:3000/${data.coverImg}`} alt="Cover" />
        </div>
        {data.imagesList.map((e, index) => (
          <div className="test" key={index}>
            <img src={`http://localhost:3000/${e}`} alt={`Image ${index}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default SlideShowDetail;
