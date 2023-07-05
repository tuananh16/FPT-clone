import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideShow2.scss";

const Slideshow = () => {
  const images = [
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/20/637939260761612196_F_384x180-4.png",
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211671546940055_384x180vib.png",
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211671554959158_F_H3_384x180zalopay.png",
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/4/638162050899556607_TPBANK%20Evo%20-%20F_384x180-1.png",
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108072834735811_F_384x180.png",
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/4/638162051306808055_TPBANK%20Evo%20-%20F_384x180-2.png",
    "https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/7/638164575094650371_H3_384x180.png",
  ];

  return (
    <div className="wrap-slide-show">
      <Slide slidesToScroll={3} slidesToShow={3} indicators={false}>
        <div className="wrap-img-1">
          <img src={images[0]} />
        </div>
        <div className="wrap-img-1">
          <img src={images[1]} />
        </div>
        <div className="wrap-img-1">
          <img src={images[2]} />
        </div>
        <div className="wrap-img-1">
          <img src={images[3]} />
        </div>
        <div className="wrap-img-1">
          <img src={images[4]} />
        </div>
        <div className="wrap-img-1">
          <img src={images[5]} />
        </div>
        <div className="wrap-img-1">
          <img src={images[6]} />
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
