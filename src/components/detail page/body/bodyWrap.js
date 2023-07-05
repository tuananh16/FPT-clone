import "./bodyWrap.scss";
import { useState } from "react";
import { highlightsPhones } from "../../Body/body";
import { laptopHot } from "../../Body/body";
import { tabletHot } from "../../Body/body";
import SlideShowDetail from "../header/slideShowDetail";


function BodyWrap() {
  const [showContent, setShowContent] = useState(false);
  const [styleHeight, setStyleHeight] = useState("700px");

  return (
    <div className="body-wrap">
      <div className="dt-container">
        <div className="box-left">
          <h2>Đặc điểm nổi bật của </h2>
          <div className={`body-left ${showContent ? "show" : ""}`} style={{ height: styleHeight }}>
            <div className="slider"><SlideShowDetail/></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Đánh giá chi tiết {highlightsPhones[0].name}</h2>
            </div>
            <div className="box-content"  >
              <b>
                <a href="/">{highlightsPhones[0].name}</a> đem đến những trải nghiệm
                không thể tìm thấy trên mọi thế hệ iPhone trước đó với màu Tím
                Deep Purple sang trọng, camera 48MP lần đầu xuất hiện, chip A16
                Bionic và màn hình “viên thuốc” Dynamic Island linh hoạt, nịnh
                mắt.
              </b>
              <img
                style={{ maxWidth: "665px", marginTop: "5px" }}
                src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/HaoPA/meizu/Mo-ta-san-pham-iphone-14-pro-max-1.jpg"
              />
            </div>
            <div className="content-tsd">
              <h3>Đỉnh cao thiết kế sang trọng và bền bỉ</h3>
              <p>
                Rất khó để tìm ra chiếc điện thoại nào sang trọng như iPhone 14
                Pro Max trên thị trường. Thừa hưởng thiết kế vát phẳng từ thế hệ
                trước, thủ lĩnh iPhone 14 series khoác lên bộ khung vỏ thép, đầm
                tay và chắc chắn. Bạn sẽ lập tức bị lôi cuốn bởi vẻ ngoài cao
                cấp với thân máy bóng bẩy của sản phẩm.
              </p>
              <p>
                Nhờ kỹ nghệ hoàn thiện xuất sắc, thiết kế iPhone 14 Pro Max đạt
                chuẩn chống nước IP68 cao nhất có thể trên smartphone. Apple đã
                phủ lên màn hình thiết bị chất liệu kính Ceramic Shield siêu
                bền, tối ưu khả năng kháng lực và chống xước cực tốt suốt vòng
                đời sử dụng
              </p>
              <img
                style={{ maxWidth: "665px" }}
                src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/HaoPA/meizu/Mo-ta-san-pham-iphone-14-pro-max-2.jpg"
              />
              <p>
                iPhone 14 Pro Max có kiểu dáng tương tự người tiền nhiệm với một
                vẻ ngoài sang trọng làm từ khung thép không gỉ kết hợp hai mặt
                cứng cường lực phủ gốm siêu bền. Tuy nhiên do cụm camera được
                nâng cấp lớn hơn, nên bạn sẽ không thể sử dụng chung ốp lưng với
                dòng iPhone 13 Pro trước đây. Tất nhiên iPhone 14 Pro và iPhone
                14 Pro Max sẽ có khả năng chống nước/chống bụi chuẩn IP68.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!showContent && (
              <button
                onClick={() => {
                  setShowContent(true)
                  setStyleHeight("auto");
                }}
              >
                Xem thêm
              </button>
            )}
          </div>
        </div>
        <div className="box-right"></div>
      </div>
    </div>
  );
}

export default BodyWrap;
