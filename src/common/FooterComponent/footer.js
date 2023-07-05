import "./footer.scss";

function Footer() {
  return (
    <div className="footer-total">
      <div className="footer-upper">
        <div className="footer-column1">
          <ul>
            <li>Giới thiệu về công ty</li>
            <li>Chính sách bảo mật</li>
            <li>Quy chế hoạt động</li>
            <li>Kiểm tra hóa đơn điện tử</li>
            <li>Tra cứu thông tin bảo hành</li>
            <li>Câu hỏi thường gặp mua hàng</li>
          </ul>
          <div className="box-img">
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img1.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img2.png" />
          </div>
        </div>
        <div className="footer-column1">
          <ul>
            <li>Tin tuyển dụng</li>
            <li>Tin khuyến mãi</li>
            <li>Hướng dẫn mua online</li>
            <li>Hướng dẫn mua trả góp</li>
            <li>Chính sách trả góp</li>
          </ul>
          <b>Chứng nhận:</b>
          <div className="box-img2">
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img3.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img4.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img5.png" />
          </div>
        </div>
        <div className="footer-column1">
          <ul>
            <li>Hệ thống cửa hàng</li>
            <li>Chính sách đổi trả</li>
            <li>Quy chế hoạt động</li>
            <li>Hệ thống bảo hành</li>
            <li>Giới thiệu máy đổi trả</li>
          </ul>
        </div>
        <div className="footer-column2">
          <ul>
            <li>
              <p>Tư vấn mua hàng(Miễn phí)</p>
              <a href="/">1800 6601</a>
              <span>(nhánh 1)</span>
            </li>
            <li>
              <p>Hỗ trợ kỹ thuật</p>
              <a href="/">1800 6601</a>
              <span>(nhánh 2)</span>
            </li>
            <li>
              <p>Góp ý, kiếu nại (8h00 - 22h00)</p>
              <a href="/">1800 6616</a>
            </li>
          </ul>
          <b>Hỗ trợ thanh toán:</b>
          <div className="box-img3">
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img6.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img7.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img8.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img9.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img10.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img11.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img12.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img13.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img14.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-img15.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/ft-imgamex.png" />
          </div>
        </div>
        <div className="footer-column3">
          <div className="connect-us">
            <b>Kết nối với chúng tôi:</b>
            <img src="https://fptshop.com.vn/Content/v4/images/icon-facebook.png" />
            <img src="https://fptshop.com.vn/Content/v4/images/icon-zalo.png" />
          </div>
          <div className="website-fpt">
            <b style={{}}>Website cùng FPT Retail:</b>
            <ul>
              <li>
                <p>Cửa hàng ủy quyền bởi Apple:</p>
                <img src="https://fptshop.com.vn/Content/v4/images/ft-img16.png" />
              </li>
              <li>
                <p>Trung tâm bảo hành uỷ quyền Apple:</p>
                <img src="https://fptshop.com.vn/Content/v4/images/ft-img17.png" />
              </li>
              <li>
                <p>Chuỗi nhà thuốc:</p>
                <img src="https://fptshop.com.vn/Content/v4/images/ft-img18.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom2">
          <p>
            © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261
            - 263 Khánh Hội, P5, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do
            Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP
            HCM cấp ngày 02/07/2018. Điện thoại: (028) 7302 3456. Email:
            fptshop@fpt.com.vn. Chịu trách nhiệm nội dung: Nguyễn Trịnh Nhật
            Linh.
          </p>
        </div>
      </div>
      <div className="logo-zalo-fix">
        <img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" />
      </div>
    </div>
  );
}

export default Footer;
