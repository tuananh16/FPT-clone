import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideShowDetail.scss";

const slideShowDetail = () => {
  const images = [
    "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/20/638125128408536178_xiaomi-13-lite-den-1.jpg",
    "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/20/638125128406872246_xiaomi-13-lite-den-2.jpg",
    "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/20/638125128407297140_xiaomi-13-lite-den-3.jpg",
    "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/20/638125128406559868_xiaomi-13-lite-den-4.jpg",
    "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/20/638125128407297140_xiaomi-13-lite-den-5.jpg",
  ];

  return (
    <div className="wrap">
      <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
        <div className="test">
          <img src={images[0]} />
        </div>
        <div className="test">
          <img src={images[1]} />
        </div>
        <div className="test">
          <img src={images[2]} />
        </div>
        <div className="test">
          <img src={images[3]} />
        </div>
        <div className="test">
          <img src={images[4]} />
        </div>
      </Slide>
    </div>
  );
};

export default slideShowDetail;
