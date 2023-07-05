import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideShow.scss";

const Example = () => {
  const slideRef = useRef(null);
  const selectedIndex = useRef(0);
  const handleGoTo = (event) => {
    const selectedIndex = parseInt(event.currentTarget.value);
    // console.log(selectedIndex.current);
    slideRef.current.goTo(selectedIndex);
  };

  const [indexStorage, setIndexStorage] = useState(
    localStorage.getItem("index_slide")
  );

  useEffect(() => {
    if (!indexStorage) {
      localStorage.setItem('index_slide', 0)
      setIndexStorage(0)
    }
  }, [indexStorage])

  // const [selectedIndex.current, SetSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    // SetSelectedIndex(index);
    selectedIndex.current = index;
  };

  const productAds = [
    {
      id: 1,
      name: "iPhone 14 Pro Max giảm đến 3.4 triệu",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/8/638218583470272212_F-H1_800x300.png",
    },

    {
      id: 2,
      name: "Mua Quạt điều hòa ngay",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/8/638218169148460093_F-H1_800x300.png",
    },
    {
      id: 3,
      name: "Reno8 T Series giảm đến 300.000đ",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211684553746937_F-H1_800x300.png",
    },
    {
      id: 4,
      name: "Redmi Note 12 128GB chỉ từ 4.590.000đ",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/1/638212168854359650_F-H1_800x300.png",
    },
    {
      id: 5,
      name: "Sắm Smartwatch GTR Mini ngay",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/1/638212355299424467_F-H1_800x300.png",
    },
    {
      id: 6,
      name: "Galaxy S23 Ultra giảm đến 12 triệu",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/7/638217528413527318_F-H1_800x300.png",
    },
    {
      id: 7,
      name: "Redmi 10 giảm ngay 500.000đ",
      img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211692224438731_F-H1_800x300.png",
    },
  ];

  const onHandleSlide = (e) => {
    // selectedIndex.current = e;
    // console.log(selectedIndex.current)
    setIndexStorage(e);
    localStorage.setItem("index_slide", e);
  };

  return (
    <div className="wrap-img">
      <Slide
        indicators={false}
        ref={slideRef}
        onChange={(e) => onHandleSlide(e)}
      >
        {productAds.map((produc, index) => (
          <div key={index}>
            <div>
              <img style={{ width: "100%" }} src={produc.img} />
            </div>
          </div>
        ))}
      </Slide>
      <div className="wrap-button ">
        {productAds.map((produc, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(index)}
            onMouseEnter={() => handleItemClick(index)}
            className={` produc ${index-1 === indexStorage ? "active2" : ""}`}
          >
            <button onClick={handleGoTo} value={index}>
              {produc.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
