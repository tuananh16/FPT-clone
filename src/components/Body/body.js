import { useState } from "react";
import "./body.scss";
import CountdownTimer from "./countdownTimer";
import Slideshow from "../slideShow/slideShow2";
import Example from "../slideShow/slideShow";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

export const highlightsPhones = [
  {
    id: 1,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/23/638151666817188867_realme-c30s-dd.jpg",
    name: "Xiaomi 13 Lite 8GB-128GB",
    price: 8790000,
    oldPrice: 10690000,
    chip: "Snapdragon 7 Gen 1",
    screen: "6.55 inch",
    ram: "8 GB",
    memory: "128 GB",
  },
  {
    id: 2,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/15/637699137820447063_oppo-a55-dd.jpg",
    name: "OPPO A55 4GB-64GB",
    price: 3690000,
    oldPrice: 3990000,
    chip: "Helio G35",
    screen: "6.55 inch",
    ram: "4 GB",
    memory: "64 GB",
  },
  {
    id: 3,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/24/638152739283440892_xiaomi-redmi-note-12-dd-bh.jpg",
    name: "Xiaomi Redmi Note 12 4GB-128GB",
    price: 4590000,
    oldPrice: 4990000,
    chip: "Snapdragon 685",
    screen: "6.67 inch",
    ram: "4 GB",
    memory: "128 GB",
  },
  {
    id: 4,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846050335072_iphone-13-dd-1.jpg",
    name: "realme C30s 3GB-64GB",
    price: 2390000,
    oldPrice: 2690000,
    chip: "Unisoc SC9863A1",
    screen: "6.5 inch",
    ram: "3 GB",
    memory: "64 GB",
  },
  {
    id: 5,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846050335072_iphone-13-dd-1.jpg",
    name: "iPhone 13 128GB",
    price: 16790000,
    oldPrice: 18990000,
    chip: "Apple A15 Bionic",
    screen: "6.1 inch",
    ram: "4 GB",
    memory: "128 GB",
  },
  {
    id: 6,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/14/638170656722725117_samsung-galaxy-z-fold4-do-dd-1.jpg",
    name: "Samsung Galaxy Z Fold4 5G 256GB",
    price: 31990000,
    oldPrice: 40990000,
    chip: "Snapdragon 8+ Gen 1",
    screen: "Phụ: 6.2 inch, Chính: 7.6 inch",
    ram: "12 GB",
    memory: "256 GB",
  },
  {
    id: 7,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/17/638173197260604063_iphone-11-dd.jpg",
    name: "iPhone 11 64GB",
    price: 10380000,
    oldPrice: 11990000,
    chip: "Apple A13 Bionic",
    screen: "6.1 inch",
    ram: "4 GB",
    memory: "64 GB",
  },
  {
    id: 8,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/21/638019662510255991_samsung-galaxy-a23-5g-xanh-dd-moi.jpg",
    name: "Samsung Galaxy A23 5G",
    price: 4990000,
    oldPrice: 5990000,
    chip: "Snapdragon 695 5G",
    screen: "6.6 inch",
    ram: "4 GB",
    memory: "128 GB",
  },
];

export const laptopHot = [
  {
    id: 1,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/12/637407970062806725_mba-2020-gold-dd.png",
    name: 'MacBook Air 13" 2020 M1 256GB',
    price: 18390000,
    oldPrice: 22990000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 2,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/19/638175171985162982_asus-vivobook-e1404fa-nk186w-r5-7520u-den-dd-moi.jpg",
    name: "Laptop Asus Vivobook E1404FA-NK186W R5-7520U",
    price: 13490000,
    oldPrice: 14990000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 3,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/1/637817445615604035_asus-zenbook-um5401-den-dd.jpg",
    name: "Asus Zenbook UM5401QA-KN209W R5 5600H",
    price: 18490000,
    oldPrice: 25990000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 4,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140613270669684_acer-nitro-gaming-an515-57-den-rtx3050-dd.jpg",
    name: "Acer Nitro Gaming AN515-57-54MV i5 11400H",
    price: 19990000,
    oldPrice: 24990000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 5,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/2/638109603688014236_hp-15s-fq-vang-dd.jpg",
    name: "HP 15s-fq2711TU i3-1115G4/7C0R6PA",
    price: 10290000,
    oldPrice: 12690000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 6,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/15/637961542143431053_lenovo-ideapad-gaming-3-15arh7-r7-xam-dd.jpg",
    name: "Lenovo Ideapad Gaming 3 15ARH7 R7 6800H (82SB007KVN)",
    price: 18999000,
    oldPrice: 28490000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 7,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/23/638151643297943497_lenovo-gaming-legion-5-15iah7h-xam-dam-dd.jpg",
    name: "Lenovo Gaming Legion 5 15IAH7H i5-12500H (82RB0048VN)",
    price: 26990000,
    oldPrice: 42990000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
  {
    id: 8,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/16/638121568991277911_msi-gaming-gf63-thin-11-den-dd.jpg",
    name: "MSI Gaming GF63 Thin 11SC-664VN i5-11400H",
    price: 15990000,
    oldPrice: 16490000,
    screen: "13.3 inch",
    cpu: "M1",
    ram: "8 GB",
    memory: "SSD 128 GB",
    card: "Apple M1",
    weight: "1.29 kg",
  },
];

export const tabletHot = [
  {
    id: 1,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059452014421919_ipad-gen-9-wifi-dd.jpg",
    name: "iPad Gen 9 2021 10.2 inch WiFi 64GB",
    price: 7490000,
    oldPrice: 10690000,
    cpu: "Apple A13 Bionic",
    screen: "10,2 inch",
    ram: "3 GB",
    memory: "64 GB",
  },
  {
    id: 2,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059452014421919_ipad-gen-9-wifi-dd.jpg",
    name: "iPad Gen 9 2021 10.2 inch WiFi 64GB",
    price: 7490000,
    oldPrice: 10690000,
    cpu: "Apple A13 Bionic",
    screen: "10,2 inch",
    ram: "3 GB",
    memory: "64 GB",
  },
  {
    id: 3,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059452014421919_ipad-gen-9-wifi-dd.jpg",
    name: "iPad Gen 9 2021 10.2 inch WiFi 64GB",
    price: 7490000,
    oldPrice: 10690000,
    cpu: "Apple A13 Bionic",
    screen: "10,2 inch",
    ram: "3 GB",
    memory: "64 GB",
  },
  {
    id: 4,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059452014421919_ipad-gen-9-wifi-dd.jpg",
    name: "iPad Gen 9 2021 10.2 inch WiFi 64GB",
    price: 7490000,
    oldPrice: 10690000,
    cpu: "Apple A13 Bionic",
    screen: "10,2 inch",
    ram: "3 GB",
    memory: "64 GB",
  },
];

function Body({ 
  cart, onChangeCart }) {

  const handleClickAdd = (item) => {
    let newCart = [...cart];
    const index = newCart.findIndex(
      (x) => x.id === item.id && x.name === item.name
    );
    if (index === -1) {
      item.quantity = 1;
      newCart.push(item);
    } else {
      ++newCart[index].quantity;
    }
    onChangeCart(newCart);
  };
  


  const saleOption = [
    {
      id: 1,
      name: "Điện thoại",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png",
    },
    {
      id: 2,
      name: "Laptop",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png",
    },
    {
      id: 3,
      name: "PC - Lắp ráp",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png",
    },
    {
      id: 4,
      name: "Máy tính bảng",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/icon-mtb-desk.png",
    },
    {
      id: 5,
      name: "Thiết bị thông minh",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smart.png",
    },
    {
      id: 6,
      name: "Gia dụng",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-houseware.png",
    },
    {
      id: 7,
      name: "Apple",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-apple-desk.png",
    },
    {
      id: 8,
      name: "Samsung",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/Other/icon-samsung.png",
    },
    {
      id: 9,
      name: "Đồng hồ thông minh",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smartwatch.png",
    },
    {
      id: 10,
      name: "Phụ kiện",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-accessories.png",
    },
    {
      id: 11,
      name: "Màn hình",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-screen.png",
    },
    {
      id: 12,
      name: "Máy cũ",
      img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tcdm.png",
    },
  ];
  //  giờ vàng
  const [activeGoldTime, setActiveGoldTime] = useState(1);

  const handleClickGoldTime1 = () => {
    setActiveGoldTime(1);
  };

  const handleClickGoldTime2 = () => {
    setActiveGoldTime(2);
  };

  const handleClickGoldTime3 = () => {
    setActiveGoldTime(3);
  };

  const handleClickGoldTime4 = () => {
    setActiveGoldTime(4);
  };
  const goldTimeNow = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/14/638119821705863715_may-ep-cham-magic-eco-ac-137-2.jpg",
      name: "Máy ép chậm Magic Eco AC-137",
      price: 2000000,
      oldPrice: 5590000,
      discount: "Giảm 59%",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/17/637727396594995001_00781330-noi-chien-khong-dau-unie-8-lit-ue-800-1.jpg",
      name: "Nồi chiên không dầu Unie 8 lít UE-800",
      price: 1649000,
      oldPrice: 2990000,
      discount: "Giảm 57%",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/26/637997855385807526_bep-lau-nuong-da-nang-kangaroo-kg2500eh-1.jpg",
      name: "Bếp lẩu nướng đa năng Kangaroo KG2500EH",
      price: 1149000,
      oldPrice: 2590000,
      discount: "Giảm 56%",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/19/637832825652640675_XBOOM-PN1-1.jpg",
      name: "Máy xay sinh tố đa năng 4 cối Kangaroo  KG4B3",
      price: 649000,
      oldPrice: 1590000,
      discount: "Giảm 50%",
    },
    {
      id: 5,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/27/637577064561995165_ss-tab-a7-lite-xam-1.jpg",
      name: "Samsung Galaxy Tab A7 Lite",
      price: 2649000,
      oldPrice: 4590000,
      discount: "Giảm 30%",
    },
    {
      id: 6,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/19/637965278642056643_op-lung-samsung-galaxy-z-fold4-kem-s-pen-xanh-1.jpg",
      name: "Ốp lưng Samsung Galaxy Z Fold4 kèm S Pen",
      price: 1649000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 7,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/28/638182695695772153_noi-chien-khong-dau-sharp-5-2-lit-kf-af55ev-bk-den-2.jpg",
      name: "Nồi chiên không dầu Sharp 5.2 lít KF-AF55EV-BK",
      price: 1549000,
      oldPrice: 2590000,
      discount: "Giảm 60%",
    },
    {
      id: 8,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606865586488830_sunhouse-mama-shd5353w-1.jpg",
      name: "Máy xay sinh tố Sunhouse Mama SHD5353W",
      price: 1249000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 9,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/23/637995527130626579_bep-gas-doi-kangaroo-kg516m-1.jpg",
      name: "Bếp gas đôi Kangaroo KG516M",
      price: 849000,
      oldPrice: 1390000,
      discount: "Giảm 36%",
    },
    {
      id: 10,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/16/637726804271246157_00780836-bep-dien-tu-toshiba-ic-20s3pv-kem-noi-1.jpg",
      name: "Bếp điện từ đơn Toshiba IC-20S3PV (Kèm nồi)",
      price: 1149000,
      oldPrice: 1790000,
      discount: "Giảm 34%",
    },
  ];
  const goldTime2h = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155087366308927_hop-dung-apple-airpods-1-airpods-2-1.jpg",
      name: "Máy xay sinh tố Sunhouse Mama SHD5353W",
      price: 1249000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/23/637995527130626579_bep-gas-doi-kangaroo-kg516m-1.jpg",
      name: "Bếp gas đôi Kangaroo KG516M",
      price: 849000,
      oldPrice: 1390000,
      discount: "Giảm 36%",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/16/637726804271246157_00780836-bep-dien-tu-toshiba-ic-20s3pv-kem-noi-1.jpg",
      name: "Bếp điện từ đơn Toshiba IC-20S3PV (Kèm nồi)",
      price: 1149000,
      oldPrice: 1790000,
      discount: "Giảm 34%",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/14/638119821705863715_may-ep-cham-magic-eco-ac-137-2.jpg",
      name: "Máy ép chậm Magic Eco AC-137",
      price: 2000000,
      oldPrice: 5590000,
      discount: "Giảm 59%",
    },
    {
      id: 5,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/17/637727396594995001_00781330-noi-chien-khong-dau-unie-8-lit-ue-800-1.jpg",
      name: "Nồi chiên không dầu Unie 8 lít UE-800",
      price: 1649000,
      oldPrice: 2990000,
      discount: "Giảm 57%",
    },
    {
      id: 6,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/26/637997855385807526_bep-lau-nuong-da-nang-kangaroo-kg2500eh-1.jpg",
      name: "Bếp lẩu nướng đa năng Kangaroo KG2500EH",
      price: 1149000,
      oldPrice: 2590000,
      discount: "Giảm 56%",
    },
    {
      id: 7,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/19/637832825652640675_XBOOM-PN1-1.jpg",
      name: "Máy xay sinh tố đa năng 4 cối Kangaroo  KG4B3",
      price: 649000,
      oldPrice: 1590000,
      discount: "Giảm 50%",
    },
    {
      id: 8,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/27/637577064561995165_ss-tab-a7-lite-xam-1.jpg",
      name: "Samsung Galaxy Tab A7 Lite",
      price: 2649000,
      oldPrice: 4590000,
      discount: "Giảm 30%",
    },
    {
      id: 9,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/19/637965278642056643_op-lung-samsung-galaxy-z-fold4-kem-s-pen-xanh-1.jpg",
      name: "Ốp lưng Samsung Galaxy Z Fold4 kèm S Pen",
      price: 1649000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 10,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/28/638182695695772153_noi-chien-khong-dau-sharp-5-2-lit-kf-af55ev-bk-den-2.jpg",
      name: "Nồi chiên không dầu Sharp 5.2 lít KF-AF55EV-BK",
      price: 1549000,
      oldPrice: 2590000,
      discount: "Giảm 60%",
    },
  ];
  const goldTime4h = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/26/637997855385807526_bep-lau-nuong-da-nang-kangaroo-kg2500eh-1.jpg",
      name: "Bếp lẩu nướng đa năng Kangaroo KG2500EH",
      price: 1149000,
      oldPrice: 2590000,
      discount: "Giảm 56%",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/19/637832825652640675_XBOOM-PN1-1.jpg",
      name: "Máy xay sinh tố đa năng 4 cối Kangaroo  KG4B3",
      price: 649000,
      oldPrice: 1590000,
      discount: "Giảm 50%",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/27/637577064561995165_ss-tab-a7-lite-xam-1.jpg",
      name: "Samsung Galaxy Tab A7 Lite",
      price: 2649000,
      oldPrice: 4590000,
      discount: "Giảm 30%",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/19/637965278642056643_op-lung-samsung-galaxy-z-fold4-kem-s-pen-xanh-1.jpg",
      name: "Ốp lưng Samsung Galaxy Z Fold4 kèm S Pen",
      price: 1649000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 5,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/14/638119821705863715_may-ep-cham-magic-eco-ac-137-2.jpg",
      name: "Máy ép chậm Magic Eco AC-137",
      price: 2000000,
      oldPrice: 5590000,
      discount: "Giảm 59%",
    },
    {
      id: 6,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/17/637727396594995001_00781330-noi-chien-khong-dau-unie-8-lit-ue-800-1.jpg",
      name: "Nồi chiên không dầu Unie 8 lít UE-800",
      price: 1649000,
      oldPrice: 2990000,
      discount: "Giảm 57%",
    },

    {
      id: 7,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/28/638182695695772153_noi-chien-khong-dau-sharp-5-2-lit-kf-af55ev-bk-den-2.jpg",
      name: "Nồi chiên không dầu Sharp 5.2 lít KF-AF55EV-BK",
      price: 1549000,
      oldPrice: 2590000,
      discount: "Giảm 60%",
    },
    {
      id: 8,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606865586488830_sunhouse-mama-shd5353w-1.jpg",
      name: "Máy xay sinh tố Sunhouse Mama SHD5353W",
      price: 1249000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 9,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/23/637995527130626579_bep-gas-doi-kangaroo-kg516m-1.jpg",
      name: "Bếp gas đôi Kangaroo KG516M",
      price: 849000,
      oldPrice: 1390000,
      discount: "Giảm 36%",
    },
    {
      id: 10,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/16/637726804271246157_00780836-bep-dien-tu-toshiba-ic-20s3pv-kem-noi-1.jpg",
      name: "Bếp điện từ đơn Toshiba IC-20S3PV (Kèm nồi)",
      price: 1149000,
      oldPrice: 1790000,
      discount: "Giảm 34%",
    },
  ];
  const goldTime6h = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/27/637577064561995165_ss-tab-a7-lite-xam-1.jpg",
      name: "Samsung Galaxy Tab A7 Lite",
      price: 2649000,
      oldPrice: 4590000,
      discount: "Giảm 30%",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/19/637965278642056643_op-lung-samsung-galaxy-z-fold4-kem-s-pen-xanh-1.jpg",
      name: "Ốp lưng Samsung Galaxy Z Fold4 kèm S Pen",
      price: 1649000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/28/638182695695772153_noi-chien-khong-dau-sharp-5-2-lit-kf-af55ev-bk-den-2.jpg",
      name: "Nồi chiên không dầu Sharp 5.2 lít KF-AF55EV-BK",
      price: 1549000,
      oldPrice: 2590000,
      discount: "Giảm 60%",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/14/638119821705863715_may-ep-cham-magic-eco-ac-137-2.jpg",
      name: "Máy ép chậm Magic Eco AC-137",
      price: 2000000,
      oldPrice: 5590000,
      discount: "Giảm 59%",
    },
    {
      id: 5,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/17/637727396594995001_00781330-noi-chien-khong-dau-unie-8-lit-ue-800-1.jpg",
      name: "Nồi chiên không dầu Unie 8 lít UE-800",
      price: 1649000,
      oldPrice: 2990000,
      discount: "Giảm 57%",
    },
    {
      id: 6,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/26/637997855385807526_bep-lau-nuong-da-nang-kangaroo-kg2500eh-1.jpg",
      name: "Bếp lẩu nướng đa năng Kangaroo KG2500EH",
      price: 1149000,
      oldPrice: 2590000,
      discount: "Giảm 56%",
    },
    {
      id: 7,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/19/637832825652640675_XBOOM-PN1-1.jpg",
      name: "Máy xay sinh tố đa năng 4 cối Kangaroo  KG4B3",
      price: 649000,
      oldPrice: 1590000,
      discount: "Giảm 50%",
    },
    {
      id: 8,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606865586488830_sunhouse-mama-shd5353w-1.jpg",
      name: "Máy xay sinh tố Sunhouse Mama SHD5353W",
      price: 1249000,
      oldPrice: 2590000,
      discount: "Giảm 50%",
    },
    {
      id: 9,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/23/637995527130626579_bep-gas-doi-kangaroo-kg516m-1.jpg",
      name: "Bếp gas đôi Kangaroo KG516M",
      price: 849000,
      oldPrice: 1390000,
      discount: "Giảm 36%",
    },
    {
      id: 10,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/16/637726804271246157_00780836-bep-dien-tu-toshiba-ic-20s3pv-kem-noi-1.jpg",
      name: "Bếp điện từ đơn Toshiba IC-20S3PV (Kèm nồi)",
      price: 1149000,
      oldPrice: 1790000,
      discount: "Giảm 34%",
    },
  ];
  //
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  const listHotPromotion = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858632184994_iphone-14-pro-dd-1.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/15/637961786361557520_acer-nitro-gaming-5-an515-45-den-dd.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/20/638071497063030667_oppo-reno8-4g-dd.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
    {
      id: 5,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
    {
      id: 6,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
    {
      id: 7,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
    {
      id: 8,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
    {
      id: 9,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
    {
      id: 10,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "iPhone 14 Pro 128GB",
      price: 24880000,
      oldPrice: 27990000,
      logo: [
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      ],
    },
  ];
  const handleClick = () => {
    if (count <= 9) {
      setCount((prevCount) => prevCount + 1);
    }
    setProgress((prevProgess) => prevProgess + 10);
  };
  const img = [
    {
      src: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png",
      caption: "Giảm đến 1 triệu khi mở thẻ TPBANK EVO",
    },
    {
      src: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/1/638159442854755781_zalopay.jpg",
      caption: "Giảm ngay 200.000Đ qua ZaloPay-QR",
    },
    {
      src: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
      caption: "Giảm ngay 5% qua Kredivo",
    },
  ];
  const [caption, setCaption] = useState(
    "Giảm đến 1 triệu khi mở thẻ TPBANK EVO"
  );

  const handleMouseEnter = (newCaption) => {
    setCaption(newCaption);
  };

  const handleMouseLeave = () => {
    setCaption("Giảm đến 1 triệu khi mở thẻ TPBANK EVO");
  };

  // gợi ý hôm nay
  const [activeSuggest, setActiveSuggest] = useState(1);

  const handleClickSuggest1 = () => {
    setActiveSuggest(1);
  };

  const handleClickSuggest2 = () => {
    setActiveSuggest(2);
  };

  const handleClickSuggest3 = () => {
    setActiveSuggest(3);
  };

  const handleClickSuggest4 = () => {
    setActiveSuggest(4);
  };
  const handleClickSuggest5 = () => {
    setActiveSuggest(5);
  };
  const handleClickSuggest6 = () => {
    setActiveSuggest(6);
  };
  const handleClickSuggest7 = () => {
    setActiveSuggest(7);
  };
  //  gợi ý hôm nay
  const Monopoly = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/10/638167465484591506_samsung-galaxy-z-flip4-xanh-dd.jpg",
      name: "Samsung Galaxy Z Flip4 5G 256GB Bespoke Edition",
      price: 16990000,
      oldPrice: 25990000,
      cpu: "Snapdragon 8+ Gen 1",
      screen: "6.7 inchChính: 6.7 inch, Phụ: 1.9 inch",
      ram: "8 GB",
      memory: "256 GB",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/24/638074782811199183_xiaomi-redmi-10a-dd-bh-docquyen.jpg",
      name: "Xiaomi Redmi 10A 3GB-64GB",
      price: 2590000,
      oldPrice: 3290000,
      cpu: "Helio G25",
      screen: "6.35 inch",
      ram: "3 GB",
      memory: "64 GB",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/24/638152728715036708_xiaomi-13-lite-dd-docquyen-bh.jpg",
      name: "Xiaomi 13 Lite 8GB-128GB",
      price: 8790000,
      oldPrice: 10690000,
      cpu: "Snapdragon 7 Gen 1",
      screen: "6.55 inch",
      ram: "8 GB",
      memory: "128 GB",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
      name: "Samsung Galaxy S22 5G 128GB",
      price: 12990000,
      oldPrice: 21990000,
      cpu: "Snapdragon 8 Gen 1",
      screen: "6.1 inch",
      ram: "8 GB",
      memory: "128 GB",
    },
  ];
  const topSearch = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/16/638067823694050310_asus-rog6-diablo-dd-docquyen.jpg",
      name: "Asus ROG 6 DIABLO 16GB-512GB",
      price: 19990000,
      oldPrice: 29990000,
      cpu: "Snapdragon 8 Gen 1",
      screen: "6.78 inch",
      ram: "16 GB",
      memory: "512 GB",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/19/638174908829566756_samsung-galaxy-tab-a8-wifi-dd.jpg",
      name: "Samsung Galaxy Tab A8 WiFi",
      price: 4790000,
      oldPrice: 5990000,
      cpu: "Unisoc T618",
      screen: "10.5 inch",
      ram: "4 GB",
      memory: "64 GB",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/6/638006465857672321_coolpad-tab-tasker-10-dd-docquyen-bh.jpg",
      name: "Coolpad Tab Tasker 10 Wifi 3GB-32GB",
      price: 2990000,
      oldPrice: 4000000,
      cpu: "Snapdragon 215",
      screen: "10.0 inch",
      ram: "3 GB",
      memory: "32 GB",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/22/637994560710957944_samsung-galaxy-tab-s6-lite-2022--dd-docquyen.jpg",
      name: "Samsung Galaxy Tab S6 Lite 2022",
      price: 6990000,
      oldPrice: 9990000,
      cpu: "Snapdragon 720G",
      screen: "10.4 inch",
      ram: "4 GB",
      memory: "64 GB",
    },
  ];
  const coolSummer = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/14/637908224540661459_quat-sac-cam-tay-comet-crf0804-xam-dd.jpg",
      name: "Quạt sạc cầm tay Comet CRF0804",
      price: 16000,
      oldPrice: 249000,
      wattage: "3w",
      propellerDiameter: "30.5cm",
      propellerNumber: "3 cánh",
      guarantee: "12 tháng",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/15/637908818266082834_quat-hop-ac-abf01a125-dd.jpg",
      name: "Quạt hộp AC ABF01A125",
      price: 44000,
      oldPrice: 690000,
      wattage: "40w",
      propellerDiameter: "30.5cm",
      propellerNumber: "5 cánh",
      guarantee: "24 tháng",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/23/637600624151060261_xiaomi-smart-fan-2-lite-pyv4007gl-trang-dd.jpg",
      name: "Quạt máy đứng Xiaomi Smart Fan 2 Lite (PYV4007GL)",
      price: 99000,
      oldPrice: 1600000,
      wattage: "38w",
      propellerDiameter: "35.56cm",
      propellerNumber: "7 cánh",
      guarantee: "12 tháng",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/17/637595454308041794_quat-dieu-hoa-kangaroo-kg50f62-dd.jpg",
      name: "Quạt điều hoà Kangaroo KG50F62",
      price: 1990000,
      oldPrice: 4249000,
      wattage: "110w",
      propellerDiameter: "50cm",
      propellerNumber: "5 cánh",
      guarantee: "24 tháng",
    },
  ];
  const homeSmart = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/2/638133724896891529_robot-hut-bui-lau-nha-ecovacs-deebot-n10-trang-dd.jpg",
      name: "Robot hút bụi lau nhà Ecovacs Deebot N10",
      price: 7990000,
      oldPrice: 11990000,
      wattage: "Lực hút mạnh mẽ 4000 Pa",
      battery: "Dung lượng pin 5200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/14/637987444372274059_robot-hut-bui-lau-nha-ecovacs-deebot-t8-max-plus-trang-dlx11-61-dd.jpg",
      name: "Robot hút bụi lau nhà Ecovacs Deebot Ozmo T8 Max Plus (DLX11-61+)",
      price: 8990000,
      oldPrice: 11990000,
      wattage: "Lực hút 1600 Pa",
      battery: "Dung lượng pin 5200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/14/638066075479015696_robot-hut-bui-35-kg-kyvol-s31-dd.jpg",
      name: "Robot hút bụi 3.5 kg Kyvol S31",
      price: 8490000,
      oldPrice: 12490000,
      wattage: "Lực hút mạnh mẽ 3000 Pa",
      battery: "Dung lượng pin 5200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/26/637971105369152280_00783653-dd.jpg",
      name: "Robot hút bụi lau nhà Ecovacs Deebot U2 Pro",
      price: 5990000,
      oldPrice: 6990000,
      wattage: "Lực hút mạnh mẽ 1500 Pa",
      battery: "Dung lượng pin 3200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
  ];
  const sale50 = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/6/29/636973993659949003_Untitled-1.jpg",
      name: "Gậy chụp ảnh có dây ivalue MT-S002",
      price: 765000,
      oldPrice: 1530000,
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146115923142739_Trip10C_Black.jpg",
      name: "Pin sạc dự phòng UmeTravel 10000mAH TRIP10C",
      price: 299000,
      oldPrice: 599000,
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/1/18/636834206204347887_00529898-daidien.png",
      name: "Loa bluetooth i.value BT117",
      price: 300000,
      oldPrice: 590000,
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/8/637745678587759167_AVT.jpg",
      name: "Tai nghe Bluetooth TWS UmeTravel SoundMate",
      price: 745000,
      oldPrice: 1.49,
    },
  ];
  const speakerKaraoke = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/10/17/637069016192174919_6.5m.jpg",
      name: "Combo Loa Bluetooth Karaoke kèm Mic không dây ivalue 6.5 inch Gỗ",
      price: 1845000,
      oldPrice: 3690000,
      speaker: "loa Karaoke, Bluetooth",
      wattage: "20W",
      feature: "Nghe nhạc, Tích hợp Micro, Nghe đài FM, Hát Karaoke",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/23/637968458856440391_HASP-LOA-BLUETOOTH-KARAOKE-SOUNDMAX-M22-AVT.jpg",
      name: "Combo Loa Bluetooth Karaoke Soundmax M22 + Mic không dây",
      price: 1845000,
      oldPrice: 3690000,
      speaker: "loa Karaoke",
      wattage: "40W",
      feature: "Nghe nhạc, Tích hợp Micro, Nghe đài FM, Hát Karaoke",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2016/12/17/636175657355625981_00303385-1o.jpg",
      name: "Loa Bluetooth Soundmax Speaker System M6",
      price: 2000000,
      oldPrice: 2495000,
      speaker: "loa Karaoke",
      wattage: "20W",
      feature: "Nghe nhạc, Tích hợp Micro, Nghe đài FM, Hát Karaoke",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/12/638064464181711096_HASP-MIC-KARAOKE-BLUETOOTH-ICORE-M99-PRO-DEN-AVT.jpg",
      name: "Mic Karaoke kèm loa Bluetooth iCore M99 Pro",
      price: 850000,
      oldPrice: 1290000,
      speaker: "mic Karaoke",
      wattage: "20W",
      feature: "Nghe nhạc, Tích hợp Micro, Nghe đài FM, Hát Karaoke",
    },
  ];
  const TVXiaomi = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/13/638222661356566356_600-A2-32.jpg",
      name: "Tivi Xiaomi Mi TV A2 32 inch",
      price: 3890000,
      oldPrice: 5990000,
      type: "Android TV",
      screen: "LED, 32inch, HD, 60HZ",
      speaker: "20W, Dolby Audio",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/13/638222661356566356_600-A2-32.jpg",
      name: "Tivi Xiaomi Mi TV P1 43 inch",
      price: 5990000,
      oldPrice: 9990000,
      type: "Android TV",
      screen: "LED, 43inch, 4K, 60HZ",
      speaker: "20W, Dolby Audio,DTS HD",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/13/638222661356566356_600-A2-32.jpg",
      name: "Tivi Xiaomi Mi TV P1 55 inch",
      price: 7890000,
      oldPrice: 11990000,
      type: "Android TV",
      screen: "LED, 55inch, 4K, 60HZ",
      speaker: "20W, Dolby Audio,DTS HD",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/13/638222661356566356_600-A2-32.jpg",
      name: "Tivi Xiaomi Mi TV A2 58 inch",
      price: 8490000,
      oldPrice: 13990000,
      type: "Android TV",
      screen: "LED, 58nch,4K, 60HZ",
      speaker: "20W, Dolby Audio,DTS HD",
    },
  ];
  //điện máy gia dụng
  const onlineDeals = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/19/638017922433416991_may-loc-nuoc-ro-sunhouse-7-loi-sha8868k-dd.jpg",
      name: "Máy lọc nước RO Sunhouse 7 lõi SHA8868K",
      price: 3680000,
      oldPrice: 6290000,
      wattage: "RO thường",
      bottle: "Điện tiêu thụ 0.03 kW/h",
      acreage: "7 lõi lọc",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155278345399476_noi-chien-khong-dau-unie-8-lit-ue-800-dd.jpg",
      name: "Nồi chiên không dầu Unie 8 lít UE-800",
      price: 1900000,
      oldPrice: 2990000,
      wattage: "Công suất 1800 W",
      bottle: "Dung tích 8 lít",
      acreage: "Điều khiển cảm ứng",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/24/637601553013155386_noi-lau-dien-sunhouse-3-lit-shd4521-dd.jpg",
      name: "Nồi lẩu điện Sunhouse 3 lít SHD4521",
      price: 599000,
      oldPrice: 740000,
      wattage: "Công suất 1300 W",
      bottle: "Hợp kim nhôm phủ chống dính",
      acreage: "Dung tích 3 lít",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/14/638013619734584209_quat-dieu-hoa-kangaroo-kg50f64-dd.jpg",
      name: "Quạt điều hoà Kangaroo KG50F64",
      price: 2790000,
      oldPrice: 4990000,
      wattage: "Công suất 90 W",
      bottle: "Bình chứa 42 lít",
      acreage: "Diện tích làm mát: 20-25 m²",
    },
  ];
  const fan = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/14/638013619734584209_quat-dieu-hoa-kangaroo-kg50f64-dd.jpg",
      name: "Quạt điều hoà Kangaroo KG50F64",
      price: 2790000,
      oldPrice: 4990000,
      wattage: "Công suất 90 W",
      bottle: "Bình chứa 42 lít",
      acreage: "Diện tích làm mát: 20-25 m²",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/17/637595454308041794_quat-dieu-hoa-kangaroo-kg50f62-dd.jpg",
      name: "Quạt điều hoà Kangaroo KG50F62",
      price: 1990000,
      oldPrice: 4490000,
      wattage: "Công suất 90 W",
      bottle: "Bình chứa 42 lít",
      acreage: "Diện tích làm mát: 20-25 m²",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/5/638163044778964467_quat-dieu-hoa-kangaroo-kg50f69-dd.jpg",
      name: "Quạt điều hoà Kangaroo KG50F69",
      price: 3990000,
      oldPrice: 6990000,
      wattage: "Công suất 90 W",
      bottle: "Bình chứa 42 lít",
      acreage: "Diện tích làm mát: 20-25 m²",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/2/637818298405935030_quat-dieu-hoa-sunhouse-shd7723-trang-dd.jpg",
      name: "Quạt điều hoà Sunhouse SHD7723",
      price: 3990000,
      oldPrice: 4590000,
      wattage: "Công suất 90 W",
      bottle: "Bình chứa 42 lít",
      acreage: "Diện tích làm mát: 20-25 m²",
    },
  ];
  const noOil = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155277105812870_noi-chien-khong-dau-unie-10-lit-ue-1000-bac-dd.jpg",
      name: "Nồi chiên không dầu Unie 12 lít UE-1000",
      price: 2390000,
      oldPrice: 3590000,
      wattage: "Công suất 1800 W",
      bottle: "Dung tích 12 lít",
      control: "Điều khiển cảm ứng",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/26/637997970144675612_noi-chien-khong-dau-kalite-10-lit-q10-dd.jpg",
      name: "Nồi chiên không dầu Kalite 10 lít Q10",
      price: 2190000,
      oldPrice: 3289000,
      wattage: "Công suất 1800 W",
      bottle: "Dung tích 10 lít",
      control: "Điều khiển cảm ứng",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/11/638168223711148607_noi-chien-khong-dau-kangaroo-125-lit-kg12af6a-dd.jpg",
      name: "Nồi chiên không dầu Kangaroo 12.5 lít KG12AF6A",
      price: 2390000,
      oldPrice: 4590000,
      wattage: "Công suất 1800 W",
      bottle: "Dung tích 12.5 lít",
      control: "Điều khiển cảm ứng",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/18/638016824861342736_noi-chien-khong-dau-hafele-11-lit-af-602a-dd.jpg",
      name: "Nồi chiên không dầu Hafele 11 lít AF-602A (535.43.711)",
      price: 2390000,
      oldPrice: 5190000,
      wattage: "Công suất 2000 W",
      bottle: "Dung tích 11 lít",
      control: "Điều khiển cảm ứng",
    },
  ];
  const robotVacuumCleaner = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/2/638133724896891529_robot-hut-bui-lau-nha-ecovacs-deebot-n10-trang-dd.jpg",
      name: "Robot hút bụi lau nhà Ecovacs Deebot N10",
      price: 7990000,
      oldPrice: 11990000,
      wattage: "Lực hút mạnh mẽ 4000 Pa",
      battery: "Dung lượng pin 5200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/14/637987444372274059_robot-hut-bui-lau-nha-ecovacs-deebot-t8-max-plus-trang-dlx11-61-dd.jpg",
      name: "Robot hút bụi lau nhà Ecovacs Deebot Ozmo T8 Max Plus (DLX11-61+)",
      price: 8990000,
      oldPrice: 11990000,
      wattage: "Lực hút 1600 Pa",
      battery: "Dung lượng pin 5200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/14/638066075479015696_robot-hut-bui-35-kg-kyvol-s31-dd.jpg",
      name: "Robot hút bụi 3.5 kg Kyvol S31",
      price: 8490000,
      oldPrice: 12490000,
      wattage: "Lực hút mạnh mẽ 3000 Pa",
      battery: "Dung lượng pin 5200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/26/637971105369152280_00783653-dd.jpg",
      name: "Robot hút bụi lau nhà Ecovacs Deebot U2 Pro",
      price: 5990000,
      oldPrice: 6990000,
      wattage: "Lực hút mạnh mẽ 1500 Pa",
      battery: "Dung lượng pin 3200 mAh",
      uses: "Vừa hút bụi, vừa lau sàn",
    },
  ];
  const electricCooker = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/28/637578172067081252_kangaroo-1-8-lit-kg18rc3-dd.jpg",
      name: "Nồi cơm điện nắp gài Kangaroo 1.8 lít KG18RC3",
      price: 490000,
      oldPrice: 790000,
      wattage: "Công suất 700 W",
      bottle: "Dung tích 1.8 lít",
      regime: "2 chế độ nấu",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/19/637649885764016903_noi-com-dien-kalite-1-8-lit-kl-619-den-dd.jpg",
      name: "Nồi cơm điện Kalite 1.8 lít KL-619",
      price: 979000,
      oldPrice: 1144000,
      wattage: "Công suất 700 W",
      bottle: "Dung tích 1.8 lít",
      regime: "2 chế độ nấu",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/18/637596347192439085_noi-com-dien-sunhouse-1-8-lit-shd8602-dd.jpg",
      name: "Nồi cơm điện Sunhouse 1.8 lít SHD8602",
      price: 490000,
      oldPrice: 790000,
      wattage: "Công suất 700 W",
      bottle: "Dung tích 1.8 lít",
      regime: "2 chế độ nấu",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/7/638007560482931510_noi-com-dien-cao-tan-tefal-15-lit-rk762168-dd.jpg",
      name: "Nồi cơm điện cao tần Tefal 1.5 lít RK762168",
      price: 2649000,
      oldPrice: 3534000,
      wattage: "Công suất 700 W",
      bottle: "Dung tích 1.8 lít",
      regime: "2 chế độ nấu",
    },
  ];
  const waterPurifier = [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/15/638014252633580754_ro-hydrogen-kangaroo-10-loi-kg10a5-vtu-dd.jpg",
      name: "Máy lọc nước nóng lạnh RO Hydrogen Kangaroo 10 lõi KG10A5 VTU",
      price: 8490000,
      oldPrice: 12990000,
      RO: "RO Hydrogen nóng lạnh",
      wattage: "Điện tiêu thụ 0.036 kW/h",
      waterFilter: "10 lõi lọc",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/19/638017922433416991_may-loc-nuoc-ro-sunhouse-7-loi-sha8868k-dd.jpg",
      name: "Máy lọc nước RO Sunhouse 7 lõi SHA8868K",
      price: 3680000,
      oldPrice: 6290000,
      RO: "RO thường",
      wattage: "Điện tiêu thụ 0.03 kW/h",
      waterFilter: "7 lõi lọc",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/26/637603031208599488_may-loc-nuoc-karofi-ero100-dd.jpg",
      name: "Máy lọc nước Karofi 10 lõi ERO100",
      price: 5590000,
      oldPrice: 7690000,
      RO: "RO Hydrogen",
      wattage: "Điện tiêu thụ 0.03 kW/h",
      waterFilter: "10 lõi lọc",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/29/637763732954610327_may-loc-nuoc-ro-kangaroo-9-loi-kgph66-khong-tu-dd.jpg",
      name: "Máy lọc nước R.O Kangaroo 9 lõi KGHP66 ( Không tủ)",
      price: 5190000,
      oldPrice: 7990000,
      RO: "RO thường",
      wattage: "Điện tiêu thụ 0.035 kW/h",
      waterFilter: "9 lõi lọc",
    },
  ];
  //
  const hotAccessories = [
    {
      id: 1,
      name: "Phụ kiện nổi bật",
      icon: "fa-solid fa-medal fa-rotate-180",
    },
    {
      id: 2,
      name: "Bao da ốp lưng",
      icon: "fa-solid fa-clipboard",
    },
    {
      id: 3,
      name: "Sạc dự phòng",
      icon: "fa-solid fa-battery-three-quarters fa-rotate-270",
    },
    {
      id: 4,
      name: "Thẻ nhớ",
      icon: "fa-solid fa-sd-card",
    },
    {
      id: 5,
      name: "Phụ kiện Apple",
      icon: "fa-brands fa-apple",
    },
    {
      id: 6,
      name: "Miếng dán màn hình",
      icon: "fa-solid fa-mobile-button",
    },
    {
      id: 7,
      name: "Tai nghe",
      icon: "fa-solid fa-headphones",
    },
    {
      id: 8,
      name: "Mực in",
      icon: "fa-solid fa-print",
    },
    {
      id: 9,
      name: "Loa",
      icon: "fa-solid fa-bullhorn",
    },
    {
      id: 10,
      name: "USB - Ổ cứng",
      icon: "fa-solid fa-hard-drive",
    },
    {
      id: 11,
      name: "Sạc cáp",
      icon: "fa-solid fa-charging-station",
    },
    {
      id: 12,
      name: "Chuột",
      icon: "fa-solid fa-computer-mouse",
    },
    {
      id: 13,
      name: "Bàn phím",
      icon: "fa-regular fa-keyboard",
    },
    {
      id: 14,
      name: "Balo - túi xách",
      icon: "fa-solid fa-briefcase",
    },
    {
      id: 15,
      name: "TV BOX",
      icon: "fa-solid fa-tv",
    },
    {
      id: 16,
      name: "Phụ kiện khác",
      icon: "fa-regular fa-clock",
    },
  ];

  // Điện máy gia dụng
  const [activeMang, setActiveMang] = useState(1);

  const handleClickMang1 = () => {
    setActiveMang(1);
  };

  const handleClickMang2 = () => {
    setActiveMang(2);
  };

  const handleClickMang3 = () => {
    setActiveMang(3);
  };

  const handleClickMang4 = () => {
    setActiveMang(4);
  };

  const handleClickMang5 = () => {
    setActiveMang(5);
  };

  const handleClickMang6 = () => {
    setActiveMang(6);
  };
  return (
    <div className="body-total">
      {/* test ================================================================================= */}
      {/* <Header test ={ amount} /> */}
      {/* ---------sale----- */}
      <div className="body-small">
        <div className="sale-img">
          <img src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211284855136698_desk-header.png" />
        </div>
        {/* slide show quảng cáo */}
        <div className="slide-show">
          <Example />
          <div className="box-right">
            <div>
              <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/5/638216046150312315_F-H2_385x100.png" />
              <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/8/638191457114237037_F-H2_385x100.png" />
            </div>
            <div className="promotion-information">
              <p
                style={{
                  margin: "0px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#6c757d",
                }}
              >
                Tin khuyến mãi
              </p>
              <div className="slide-information">
                <img src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Tin%20KM%20main(6).png" />
                <p>Samsung giảm đến 200k qua ZaloPay</p>
              </div>
              <div className="slide-information">
                <img src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Tin%20KM%20main(7).png" />
                <p>Gia dụng: Giá rẻ hơn lại có quà</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sale-option">
          {saleOption.map((c) => (
            <div className="sale-option-box" key={c.id}>
              <div className="box-wrap">
                <img src={c.img} />
              </div>
              <p>{c.name}</p>
            </div>
          ))}
        </div>

        {/* Giờ vàng */}
        <div className="gold-time">
          <div className="gold-time-upper">
            <h2>GIỜ VÀNG GIÁ SỐC</h2>
            <div className="jamb"></div>
            <a href="/">Xem thể lệ</a>
            <img src="https://fptshop.com.vn/Content/v5d/sale-special/images/ic-right.png" />
          </div>

          {/* giờ vàng dưới */}
          <div className="gold-time-bottom">
            <div className="row">
              <div
                className={`row-children ${
                  activeGoldTime === 1 ? "active3" : ""
                }`}
                onClick={handleClickGoldTime1}
              >
                <div className="row-children2 ">
                  <p>Hôm nay</p>
                  <div className="countdown-time">
                    <CountdownTimer />
                  </div>
                </div>
                <p>Đang diễn ra </p>
              </div>
              <div
                className={`row-children ${
                  activeGoldTime === 2 ? "active3" : ""
                }`}
                onClick={handleClickGoldTime2}
              >
                <div className="row-children2">
                  <p>Hôm nay</p>
                  <div className="countdown-time">14:00 -16:00</div>
                </div>
                <p>Sắp diễn ra </p>
              </div>
              <div
                className={`row-children ${
                  activeGoldTime === 3 ? "active3" : ""
                }`}
                onClick={handleClickGoldTime3}
              >
                <div className="row-children2">
                  <p>Hôm nay</p>
                  <div className="countdown-time">16:00 -18:00</div>
                </div>
                <p>Sắp diễn ra </p>
              </div>
              <div
                className={`row-children ${
                  activeGoldTime === 4 ? "active3" : ""
                }`}
                onClick={handleClickGoldTime4}
              >
                <div className="row-children2">
                  <p>Hôm nay</p>
                  <div className="countdown-time">18:00 -20:00</div>
                </div>
                <p>Sắp diễn ra </p>
              </div>
            </div>
            {/* sản phẩm giờ vàng */}
            {activeGoldTime === 1 && (
              <div className="product">
                <div style={{ width: "1200px", height: "auto" }}>
                  <Slide
                    slidesToScroll={4}
                    slidesToShow={4}
                    indicators={false}
                    duration={50000000}
                  >
                    {goldTimeNow.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span className="discount">{product.discount}</span>
                          </div>
                        </div>
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <span className="price">
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ{" "}
                          </span>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                          <div className="progress-bar">
                            {" "}
                            <div className="sold">Đã bán {count}/10 suất</div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: `${progress}%`,
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                              }}
                            >
                              {" "}
                            </div>
                          </div>

                          <div className="price-shock" onClick={handleClick}>
                            MUA GIÁ SỐC
                          </div>
                          <div className="watch-product">
                            <a href="/">Xem sản phẩm</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>
            )}
            {activeGoldTime === 2 && (
              <div className="product">
                <div style={{ width: "1200px", height: "auto" }}>
                  <Slide
                    slidesToScroll={4}
                    slidesToShow={4}
                    indicators={false}
                    duration={50000000}
                  >
                    {goldTime2h.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span className="discount">{product.discount}</span>
                          </div>
                        </div>
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <span className="price">{product.price} </span>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                          <div className="progress-bar">
                            {" "}
                            <div className="sold">Đã bán {count}/10 suất</div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: `${progress}%`,
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                              }}
                            >
                              {" "}
                            </div>
                          </div>

                          <div className="price-shock" onClick={handleClick}>
                            MUA GIÁ SỐC
                          </div>
                          <div className="watch-product">
                            <a href="/">Xem sản phẩm</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>
            )}
            {activeGoldTime === 3 && (
              <div className="product">
                <div style={{ width: "1200px", height: "auto" }}>
                  <Slide
                    slidesToScroll={4}
                    slidesToShow={4}
                    indicators={false}
                    duration={50000000}
                  >
                    {goldTime4h.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span className="discount">{product.discount}</span>
                          </div>
                        </div>
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <span className="price">{product.price} </span>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                          <div className="progress-bar">
                            {" "}
                            <div className="sold">Đã bán {count}/10 suất</div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: `${progress}%`,
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                              }}
                            >
                              {" "}
                            </div>
                          </div>

                          <div className="price-shock" onClick={handleClick}>
                            MUA GIÁ SỐC
                          </div>
                          <div className="watch-product">
                            <a href="/">Xem sản phẩm</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>
            )}
            {activeGoldTime === 4 && (
              <div className="product">
                <div style={{ width: "1200px", height: "auto" }}>
                  <Slide
                    slidesToScroll={4}
                    slidesToShow={4}
                    indicators={false}
                    duration={50000000}
                  >
                    {goldTime6h.map((product) => (
                      <div key={product.id} className="product-box">
                        <div className="product-box-up2">
                          <div className="product-box-up">
                            <img src={product.img} />
                            <span className="discount">{product.discount}</span>
                          </div>
                        </div>
                        <div className="product-box-bottom">
                          <h3>{product.name}</h3>
                          <span className="price">{product.price} </span>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                          <div className="progress-bar">
                            {" "}
                            <div className="sold">Đã bán {count}/10 suất</div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: `${progress}%`,
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                              }}
                            >
                              {" "}
                            </div>
                          </div>

                          <div className="price-shock" onClick={handleClick}>
                            MUA GIÁ SỐC
                          </div>
                          <div className="watch-product">
                            <a href="/">Xem sản phẩm</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ảnh sale2 */}
        <div className="sale-img2">
          <img src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/10/638193055015899862_H7_1200x100.png" />
        </div>

        {/* khuyến mãi hot */}
        <div className="hot-promotion">
          <div className="promotion-header">
            <i
              className="fa-brands fa-gripfire"
              style={{ color: "#cd1817" }}
            ></i>
            <h2>KHUYẾN MÃI HOT</h2>
          </div>
          <div className="promotion-body">
            <div className="product">
              <div style={{ width: "1200px", paddingTop: "20px" }}>
                <Slide
                  slidesToScroll={4}
                  slidesToShow={4}
                  indicators={false}
                  duration={50000000}
                >
                  {listHotPromotion.map((product) => (
                    <div key={product.id} className="product-box">
                      <div className="product-box-up2">
                        <div className="product-box-up">
                          <img src={product.img} />
                          <span
                            className="discount "
                            style={{ top: "60%", backgroundColor: "#ea9d02" }}
                          >
                            Trả góp 0%
                          </span>
                          <span className="discount">giảm 10.000 ₫</span>
                        </div>
                      </div>
                      <div className="product-box-bottom">
                        <h3>{product.name}</h3>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "130px",
                              position: "relative",
                              width: "130px",
                              backgroundColor: "#ef8573",
                              borderRadius: "14px",
                              height: "28px",
                            }}
                          >
                            {" "}
                            <div className="sold" style={{ color: "#fff" }}>
                              {new Intl.NumberFormat("vi-VN").format(
                                product.price
                              )}{" "}
                              đ
                            </div>
                            <div
                              className="progress-bar2 "
                              style={{
                                width: "90%",
                                height: "100%",
                                backgroundColor: "#cb1c22",
                                transition: "width 0.5s",
                                borderBottomLeftRadius: "14px",
                                borderTopLeftRadius: "14px",
                              }}
                            >
                              {" "}
                            </div>
                          </div>
                          <span
                            className="old-price"
                            style={{
                              textDecoration: "line-through",
                              zIndex: 1,
                            }}
                          >
                            {new Intl.NumberFormat("vi-VN").format(
                              product.oldPrice
                            )}{" "}
                            đ
                          </span>
                        </div>
                      </div>
                      <div
                        className="wrap-logo"
                        style={{
                          height: "94px",
                          padding: "9px 10px 0px",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "5px",
                          display: "flex",
                        }}
                      >
                        {img.map((image, index) => (
                          <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <img className="icon-img" src={image.src} />
                            <div style={{ display: "flex" }}>
                              {caption === index && (
                                <p
                                  style={{
                                    fontSize: "12px",
                                    position: "absolute",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
          </div>
        </div>

        {/* banner cảm ơn */}
        <div className="banner-thanks" style={{ margin: "24px 0px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: "176px 0px 84px 0px",
            }}
          >
            <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/19/638200932754566946_desk-html-banner.png " />
            <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765465980266_desk-html-banner-1.png" />
            <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765466589284_desk-html-banner-2.png" />
            <img src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765466492700_desk-html-banner-3.png" />

            <img
              style={{ height: "52px", width: "480px", marginTop: "20px" }}
              src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/13/638195765464794390_desk-html-sub-cate@2x.png"
            />
          </div>
        </div>
        {/* Tuần lễ sam sung giá sốc */}
        <div
          style={{
            width: "1200px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            padding: "20px 16px",
          }}
        >
          <div>
            <h2>TUẦN LỄ SAMSUNG GIÁ SỐC</h2>
            <img src="https://images.fpt.shop/unsafe/fit-in/1168x97/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418271334821_H7-%201200x100_2.png" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418265291454_Desk%20(1).png" />
            <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418265740186_Desk%20(2).png" />
            <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418265740186_Desk%20(3).png" />
            <img src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/31/638211418266452655_Desk%20(5).png" />
          </div>
        </div>
        {/* banner tiếp */}
        <div>
          <img
            style={{
              padding: "24px 0px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/30/638210391350005936_F-H5_1200x200.png"
          />
        </div>
        {/* Điện thoại nổi bật */}
        <div className="list-of-products">
          <div className="header-list">
            <h2>ĐIỆN THOẠI NỔI BẬT</h2>
            <Link to="/dien-thoai">Xem tất cả</Link>
          </div>
          <div className="promotion-body">
            <div className="product2">
              {highlightsPhones.map((product) => (
                <div key={product.id} className="product-box">
                  <div className="product-box-up2">
                    {/* phần trên sp */}
                    <div className="product-box-up">
                      <Link to={`/dien-thoai/${product.id}`}>
                        <img src={product.img} />
                      </Link>
                      <span
                        className="discount "
                        style={{ top: "60%", backgroundColor: "#ea9d02" }}
                      >
                        Trả góp 0%
                      </span>
                      <span className="discount">giảm 10.000 ₫</span>
                    </div>
                  </div>
                  {/* phần dưới sp */}
                  <div className="product-box-bottom">
                    <Link to={`/dien-thoai/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "130px",
                          position: "relative",
                          width: "130px",
                          backgroundColor: "#ef8573",
                          borderRadius: "14px",
                          height: "28px",
                        }}
                      >
                        {" "}
                        <div className="sold" style={{ color: "#fff" }}>
                          {new Intl.NumberFormat("vi-VN").format(product.price)}{" "}
                          đ
                        </div>
                        <div
                          className="progress-bar2 "
                          style={{
                            width: "90%",
                            height: "100%",
                            backgroundColor: "#cb1c22",
                            transition: "width 0.5s",
                            borderBottomLeftRadius: "14px",
                            borderTopLeftRadius: "14px",
                          }}
                        >
                          {" "}
                        </div>
                      </div>
                      <span
                        className="old-price"
                        style={{ textDecoration: "line-through", zIndex: 1 }}
                      >
                        {new Intl.NumberFormat("vi-VN").format(
                          product.oldPrice
                        )}{" "}
                        đ
                      </span>
                    </div>
                  </div>
                  {/* Phần chân*/}
                  <div className="footer-product">
                    <div className="param">
                      <i className="fa-solid fa-microchip" />
                      {product.chip}
                      <i className="fa-solid fa-mobile-screen" />
                      {product.screen}
                      <i className="fa-solid fa-memory" />
                      {product.ram}
                      <i className="fa-solid fa-hard-drive" />
                      {product.memory}
                    </div>
                    <div className="icon-img2">
                      <div className="logo-img1">
                        <img
                          className="logo-img"
                          src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                        />
                        <div className="voucher1">
                          <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                        </div>
                      </div>
                      <div className="logo-img2">
                        <img
                          className="logo-img"
                          src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                        />
                        <div className="voucher2">
                          <p>Giảm ngay 5% qua Kredivo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <Link to={`/dien-thoai/${product.id}`}>
                      <button className="cartBtn" 
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                    </Link>
                    <button className="cartBtn"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        textAlign: "center",
                        padding: "10px 4px",
                        backgroundColor: "#99a2aa",
                        borderRadius: "4px",

                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                handleClickAdd(product);
              }}
                    >
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
                // </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
        {/* banner tiếp */}
        <div
          style={{
            margin: "0px 0px 24px 0px",
            cursor: "pointer",
          }}
        >
          <img
            style={{ borderRadius: "5px" }}
            src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/22/638203754274592025_F-H5_1200x200.png"
          />
        </div>
        {/* Laptop bán chạy */}
        <div className="list-of-products">
          <div className="header-list">
            <h2>Laptop bán chạy</h2>
            <a href="/">Xem tất cả</a>
          </div>
          <div className="promotion-body">
            <div className="product2">
              {laptopHot.map((product) => (
                <div key={product.id} className="product-box">
                  <div className="product-box-up2">
                    {/* phần trên sp */}
                    <div className="product-box-up">
                      <Link to={`/Laptop/${product.id}`}>
                        <img src={product.img} />
                      </Link>
                      <span
                        className="discount "
                        style={{ top: "60%", backgroundColor: "#ea9d02" }}
                      >
                        Trả góp 0%
                      </span>
                      <span className="discount">giảm 10.000 ₫</span>
                    </div>
                  </div>
                  {/* phần dưới sp */}
                  <div className="product-box-bottom">
                    <Link to={`/Laptop/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "130px",
                          position: "relative",
                          width: "130px",
                          backgroundColor: "#ef8573",
                          borderRadius: "14px",
                          height: "28px",
                        }}
                      >
                        {" "}
                        <div className="sold" style={{ color: "#fff" }}>
                          {new Intl.NumberFormat("vi-VN").format(product.price)}{" "}
                          đ
                        </div>
                        <div
                          className="progress-bar2 "
                          style={{
                            width: "90%",
                            height: "100%",
                            backgroundColor: "#cb1c22",
                            transition: "width 0.5s",
                            borderBottomLeftRadius: "14px",
                            borderTopLeftRadius: "14px",
                          }}
                        >
                          {" "}
                        </div>
                      </div>
                      <span
                        className="old-price"
                        style={{ textDecoration: "line-through", zIndex: 1 }}
                      >
                        {new Intl.NumberFormat("vi-VN").format(
                          product.oldPrice
                        )}{" "}
                        đ
                      </span>
                    </div>
                  </div>
                  {/* Phần chân*/}
                  <div className="footer-product">
                    <div className="param">
                      <i className="fa-solid fa-mobile-screen" />
                      {product.screen}
                      <i className="fa-solid fa-microchip" />
                      {product.cpu}
                      <i className="fa-solid fa-memory" />
                      {product.ram}
                      <i className="fa-solid fa-hard-drive" />
                      {product.memory}
                      <i className="fa-solid fa-fax" />
                      {product.card}
                      <i className="fa-solid fa-weight-hanging" />
                      {product.weight}
                    </div>
                    <div className="icon-img2">
                      <div className="logo-img1">
                        <img
                          className="logo-img"
                          src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                        />
                        <div className="voucher1">
                          <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                        </div>
                      </div>
                      <div className="logo-img2">
                        <img
                          className="logo-img"
                          src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                        />
                        <div className="voucher2">
                          <p>Giảm ngay 5% qua Kredivo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <Link to={`/Laptop/${product.id}`}>
                      <button className="cartBtn" 
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                    </Link>
                    <button className="cartBtn"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        textAlign: "center",
                        padding: "10px 4px",
                        backgroundColor: "#99a2aa",
                        borderRadius: "4px",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                handleClickAdd(product);
              }}
                    >
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
                // </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
        {/* lại banner tiếp */}
        <div
          style={{
            margin: "0px 0px 24px 0px",
            cursor: "pointer",
          }}
        >
          <img
            style={{ borderRadius: "5px" }}
            src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/1/638212173977917545_F-H5_1200x200@2x.png"
          />
        </div>
        {/* TABLET BÁN CHẠY */}
        <div className="list-of-products">
          <div className="header-list">
            <h2>TABLET BÁN CHẠY</h2>
            <a href="/">Xem tất cả</a>
          </div>
          <div className="promotion-body">
            <div className="product2">
              {tabletHot.map((product) => (
                <div key={product.id} className="product-box">
                  <div className="product-box-up2">
                    {/* phần trên sp */}
                    <div className="product-box-up">
                      <Link to={`/Tablet/${product.id}`}>
                        <img src={product.img} />
                      </Link>
                      <span
                        className="discount "
                        style={{ top: "60%", backgroundColor: "#ea9d02" }}
                      >
                        Trả góp 0%
                      </span>
                      <span className="discount">giảm 10.000 ₫</span>
                    </div>
                  </div>
                  {/* phần dưới sp */}
                  <div className="product-box-bottom">
                    <Link to={`/Tablet/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "130px",
                          position: "relative",
                          width: "130px",
                          backgroundColor: "#ef8573",
                          borderRadius: "14px",
                          height: "28px",
                        }}
                      >
                        {" "}
                        <div className="sold" style={{ color: "#fff" }}>
                          {new Intl.NumberFormat("vi-VN").format(product.price)}{" "}
                          đ
                        </div>
                        <div
                          className="progress-bar2 "
                          style={{
                            width: "90%",
                            height: "100%",
                            backgroundColor: "#cb1c22",
                            transition: "width 0.5s",
                            borderBottomLeftRadius: "14px",
                            borderTopLeftRadius: "14px",
                          }}
                        >
                          {" "}
                        </div>
                      </div>
                      <span
                        className="old-price"
                        style={{ textDecoration: "line-through", zIndex: 1 }}
                      >
                        {new Intl.NumberFormat("vi-VN").format(
                          product.oldPrice
                        )}{" "}
                        đ
                      </span>
                    </div>
                  </div>
                  {/* Phần chân*/}
                  <div className="footer-product">
                    <div className="param">
                      <i className="fa-solid fa-microchip" />
                      {product.cpu}
                      <i className="fa-solid fa-mobile-screen" />
                      {product.screen}
                      <i className="fa-solid fa-memory" />
                      {product.ram}
                      <i className="fa-solid fa-hard-drive" />
                      {product.memory}
                    </div>
                    <div className="icon-img2">
                      <div className="logo-img1">
                        <img
                          className="logo-img"
                          src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                        />
                        <div className="voucher1">
                          <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                        </div>
                      </div>
                      <div className="logo-img2">
                        <img
                          className="logo-img"
                          src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                        />
                        <div className="voucher2">
                          <p>Giảm ngay 5% qua Kredivo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <Link to={`/Tablet/${product.id}`}>
                      {" "}
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                    </Link>
                    <button className="cartBtn"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        textAlign: "center",
                        padding: "10px 4px",
                        backgroundColor: "#99a2aa",
                        borderRadius: "4px",

                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                handleClickAdd(product);
              }}
                    >
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
                // </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
        {/* lại banner tiếp */}
        <div
          style={{
            margin: "0px 0px 24px 0px",
            cursor: "pointer",
          }}
        >
          <img
            style={{ borderRadius: "5px" }}
            src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/26/638206902344418886_H5_1200X200.png"
          />
        </div>
        {/* GỢI Ý HÔM NAY */}
        <div className="list-of-products">
          <div className="header-list">
            <h2>GỢI Ý HÔM NAY</h2>
          </div>
          <ul className="option2">
            <li
              className={activeSuggest === 1 ? "active3" : ""}
              onClick={handleClickSuggest1}
            >
              Độc Quyền
            </li>
            <li
              className={activeSuggest === 2 ? "active3" : ""}
              onClick={handleClickSuggest2}
            >
              Top Tìm Kiếm
            </li>
            <li
              className={activeSuggest === 3 ? "active3" : ""}
              onClick={handleClickSuggest3}
            >
              Hè Mát Lạnh
            </li>
            <li
              className={activeSuggest === 4 ? "active3" : ""}
              onClick={handleClickSuggest4}
            >
              Nhà Thông Minh
            </li>
            <li
              className={activeSuggest === 5 ? "active3" : ""}
              onClick={handleClickSuggest5}
            >
              Phụ Kiện -50%
            </li>
            <li
              className={activeSuggest === 6 ? "active3" : ""}
              onClick={handleClickSuggest6}
            >
              Loa Karaoke
            </li>
            <li
              className={activeSuggest === 7 ? "active3" : ""}
              onClick={handleClickSuggest7}
            >
              TV Xiaomi
            </li>
          </ul>
          {activeSuggest === 1 && (
            <div className="promotion-body">
              <div className="product2">
                {Monopoly.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-microchip" />
                        {product.cpu}
                        <i className="fa-solid fa-mobile-screen" />
                        {product.screen}
                        <i className="fa-solid fa-memory" />
                        {product.ram}
                        <i className="fa-solid fa-hard-drive" />
                        {product.memory}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeSuggest === 2 && (
            <div className="promotion-body">
              <div className="product2">
                {topSearch.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-microchip" />
                        {product.cpu}
                        <i className="fa-solid fa-mobile-screen" />
                        {product.screen}
                        <i className="fa-solid fa-memory" />
                        {product.ram}
                        <i className="fa-solid fa-hard-drive" />
                        {product.memory}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeSuggest === 3 && (
            <div className="promotion-body">
              <div className="product2">
                {coolSummer.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-microchip" />
                        {product.cpu}
                        <i className="fa-solid fa-mobile-screen" />
                        {product.screen}
                        <i className="fa-solid fa-memory" />
                        {product.ram}
                        <i className="fa-solid fa-hard-drive" />
                        {product.memory}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeSuggest === 4 && (
            <div className="promotion-body">
              <div className="product2">
                {homeSmart.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeSuggest === 5 && (
            <div className="promotion-body">
              <div className="product2">
                {sale50.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-microchip" />
                        {product.cpu}
                        <i className="fa-solid fa-mobile-screen" />
                        {product.screen}
                        <i className="fa-solid fa-memory" />
                        {product.ram}
                        <i className="fa-solid fa-hard-drive" />
                        {product.memory}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeSuggest === 6 && (
            <div className="promotion-body">
              <div className="product2">
                {speakerKaraoke.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-microchip" />
                        {product.cpu}
                        <i className="fa-solid fa-mobile-screen" />
                        {product.screen}
                        <i className="fa-solid fa-memory" />
                        {product.ram}
                        <i className="fa-solid fa-hard-drive" />
                        {product.memory}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeSuggest === 7 && (
            <div className="promotion-body">
              <div className="product2">
                {TVXiaomi.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-microchip" />
                        {product.cpu}
                        <i className="fa-solid fa-mobile-screen" />
                        {product.screen}
                        <i className="fa-solid fa-memory" />
                        {product.ram}
                        <i className="fa-solid fa-hard-drive" />
                        {product.memory}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* ĐIỆN MÁY - GIA DỤNG*/}
        <div className="list-of-products">
          <div className="header-list">
            <h2>ĐIỆN MÁY - GIA DỤNG</h2>
            <a href="/">Xem tất cả</a>
          </div>
          <div className="option3">
            <div
              className={`option-appliances ${
                activeMang === 1 ? "active2" : ""
              }`}
              onClick={handleClickMang1}
            >
              <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209730365932396_ic-star.png" />
              <p>Ưu đãi online</p>
            </div>
            <div
              className={`option-appliances ${
                activeMang === 2 ? "active2" : ""
              }`}
              onClick={handleClickMang2}
            >
              <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209713467489005_img-quat-dieu-hoa.png" />
              <p>Quạt điều hòa</p>
            </div>
            <div
              className={`option-appliances ${
                activeMang === 3 ? "active2" : ""
              }`}
              onClick={handleClickMang3}
            >
              <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209713467646952_img-noi-chien.png" />
              <p>Nồi chiên không dầu</p>
            </div>
            <div
              className={`option-appliances ${
                activeMang === 4 ? "active2" : ""
              }`}
              onClick={handleClickMang4}
            >
              <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209812502023224_img-may-hut-bui.png" />
              <p>Robot hút bụi</p>
            </div>
            <div
              className={`option-appliances ${
                activeMang === 5 ? "active2" : ""
              }`}
              onClick={handleClickMang5}
            >
              <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209812905717511_img-noi-com-dien.png" />
              <p>Nồi cơm điện</p>
            </div>
            <div
              className={`option-appliances ${
                activeMang === 6 ? "active2" : ""
              }`}
              onClick={handleClickMang6}
            >
              <img src="https://images.fpt.shop/unsafe/fit-in/32x32/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2023/5/29/638209812903746667_img-may-loc-nuoc.png" />
              <p>Máy lọc nước</p>
            </div>
          </div>
          {activeMang === 1 && (
            <div className="promotion-body">
              <div className="product2">
                {onlineDeals.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-bolt" />
                        {product.wattage}
                        <i className="fa-solid fa-glass-water" />
                        {product.bottle}
                        <i className="fa-solid fa-house" />
                        {product.acreage}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeMang === 2 && (
            <div className="promotion-body">
              <div className="product2">
                {fan.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-bolt" />
                        {product.wattage}
                        <i className="fa-solid fa-glass-water" />
                        {product.bottle}
                        <i className="fa-solid fa-house" />
                        {product.acreage}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeMang === 3 && (
            <div className="promotion-body">
              <div className="product2">
                {noOil.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-bolt" />
                        {product.wattage}
                        <i className="fa-solid fa-glass-water" />
                        {product.bottle}
                        <i className="fa-solid fa-compass" />
                        {product.control}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeMang === 4 && (
            <div className="promotion-body">
              <div className="product2">
                {robotVacuumCleaner.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-bolt" />
                        {product.wattage}
                        <i className="fa-solid fa-battery-three-quarters" />
                        {product.battery}
                        <i className="fa-solid fa-house" />
                        {product.uses}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeMang === 5 && (
            <div className="promotion-body">
              <div className="product2">
                {electricCooker.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-bolt" />
                        {product.wattage}
                        <i className="fa-solid fa-glass-water" />
                        {product.bottle}
                        <i className="fa-solid fa-house" />
                        {product.regime}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",

                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
          {activeMang === 6 && (
            <div className="promotion-body">
              <div className="product2">
                {waterPurifier.map((product) => (
                  <div key={product.id} className="product-box">
                    <div className="product-box-up2">
                      {/* phần trên sp */}
                      <div className="product-box-up">
                        <img src={product.img} />
                        <span
                          className="discount "
                          style={{ top: "60%", backgroundColor: "#ea9d02" }}
                        >
                          Trả góp 0%
                        </span>
                        <span className="discount">giảm 10.000 ₫</span>
                      </div>
                    </div>
                    {/* phần dưới sp */}
                    <div className="product-box-bottom">
                      <h3>{product.name}</h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "130px",
                            position: "relative",
                            width: "130px",
                            backgroundColor: "#ef8573",
                            borderRadius: "14px",
                            height: "28px",
                          }}
                        >
                          {" "}
                          <div className="sold" style={{ color: "#fff" }}>
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            đ
                          </div>
                          <div
                            className="progress-bar2 "
                            style={{
                              width: "90%",
                              height: "100%",
                              backgroundColor: "#cb1c22",
                              transition: "width 0.5s",
                              borderBottomLeftRadius: "14px",
                              borderTopLeftRadius: "14px",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span
                          className="old-price"
                          style={{ textDecoration: "line-through", zIndex: 1 }}
                        >
                          {new Intl.NumberFormat("vi-VN").format(
                            product.oldPrice
                          )}{" "}
                          đ
                        </span>
                      </div>
                    </div>
                    {/* Phần chân*/}
                    <div className="footer-product">
                      <div className="param">
                        <i className="fa-solid fa-bolt" />
                        {product.wattage}
                        <i className="fa-solid fa-glass-water" />
                        {product.RO}
                        <i className="fa-solid fa-vials" />
                        {product.waterFilter}
                      </div>
                      <div className="icon-img2">
                        <div className="logo-img1">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
                          />
                          <div className="voucher1">
                            <p>Giảm đến 1 triệu khi mở thẻ TPBANK EVO</p>{" "}
                          </div>
                        </div>
                        <div className="logo-img2">
                          <img
                            className="logo-img"
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
                          />
                          <div className="voucher2">
                            <p>Giảm ngay 5% qua Kredivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#cb1c22",
                          borderRadius: "4px",
                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        MUA NGAY
                      </button>
                      <button className="cartBtn"
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "10px 4px",
                          backgroundColor: "#99a2aa",
                          borderRadius: "4px",
                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                handleClickAdd(product);
              }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  // </div>
                  // </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Ưu đãi khi thanh toán onl */}
        <div
          style={{
            width: "1200px",
            height: "240px",
            backgroundColor: "#ffffff",
            marginBottom: "24px",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <h2 style={{ margin: "0px 0px 10px 0px" }}>
            ƯU ĐÃI KHI THANH TOÁN ONLINE
          </h2>
          <Slideshow />
        </div>
        {/* Dịch vụ tiện ích */}
        <div className="service">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h2>DỊCH VỤ TIỆN ÍCH</h2>
            <a href="/">Xem tất cả</a>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="warp-service">
              <img src="https://fptshop.com.vn/Content/v5d/images/ic-water.png" />
              <div>
                <strong>Thanh toán tiền nước</strong>
                <p>Thanh toán nhanh chóng và tiện lợi</p>
              </div>
            </div>
            <div
              className="warp-service"
              style={{
                backgroundColor: "#fefae8",
                border: "1px solid #fdf1ba",
              }}
            >
              <img src="https://fptshop.com.vn/Content/v5d/images/service-item2.png" />
              <div>
                <strong>Thanh toán tiền điện</strong>
                <p>Thanh toán nhanh chóng và tiện lợi</p>
              </div>
            </div>
            <div
              className="warp-service"
              style={{
                backgroundColor: "#ebf8ff",
                border: "1px solid #bee3f8",
              }}
            >
              <img src="https://fptshop.com.vn/Content/v5d/images/service-item3.png" />
              <div>
                <strong>Thẻ cào điện thoại</strong>
                <p>Giảm 2% cho thẻ mệnh giá từ 100.000đ</p>
              </div>
            </div>
            <div
              className="warp-service"
              style={{
                backgroundColor: "#ffebeb",
                border: "1px solid #f9c7c9",
              }}
            >
              <img src="https://fptshop.com.vn/Content/v5d/images/ic-credit-card.png" />
              <div>
                <strong>Thẻ game</strong>
                <p>Giảm 2% cho thẻ mệnh giá từ 100.000đ</p>
              </div>
            </div>
          </div>
        </div>
        {/* phụ kiện hot */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{ fontWeight: 700, fontSize: "21px", padding: "0px 15px" }}
          >
            PHỤ KIỆN HOT
          </h2>
          <div className="sale-option" style={{ height: "280px" }}>
            {hotAccessories.map((c) => (
              <div
                className="sale-option-box"
                style={{
                  width: "149px",
                  height: "139px",
                  justifyContent: "normal",
                }}
                key={c.id}
              >
                <div
                  style={{ height: "80px", fontSize: "45px", color: "#777" }}
                >
                  <i className={c.icon} />
                </div>
                <p>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* suýt cuối */}
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <img
            style={{ borderRadius: "10px", cursor: "pointer" }}
            src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199039669299_icon-desktop-1.png"
          />
          <img
            style={{ borderRadius: "10px", cursor: "pointer" }}
            src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199040294624_icon-desktop.png"
          />
          <img
            style={{ borderRadius: "10px", cursor: "pointer" }}
            src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/24/638128430158696737_img-1.png"
          />
        </div>
      </div>
    </div>
  );
}
//  test 2 ===========================================-----
export default Body;
