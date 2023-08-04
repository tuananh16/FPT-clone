import React from 'react';
import "./style.scss"

function OrderCompleted() {
    return (
        <div className='ad-home'>
            <div className="ad-home">
        <h2>CÁC ĐƠN ĐÃ HOÀN THÀNH</h2>
      <table>
        <tr>
          <th>STT</th>
          <th>Mã đơn hàng</th>
          <th>Ngày đặt hàng</th>
          <th>Tên khách hàng</th>
          <th>SDT</th>
          <th>Địa chỉ</th>
          <th>Giao hàng</th>
          <th>Thanh toán</th>
          <th>Tình trạng đơn hàng</th>
          <th>Tùy chỉnh</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC</td>
          <td>4/8/2023</td>
          <td>Nguyễn Tuấn Anh</td>
          <td>0866666666</td>
          <td>Hà Nội</td>
          <td>Chuyển phát nhanh</td>
          <td>Chuyển khoản</td>
          <td>Chưa hoàn tdành</td>
          <td>xóa</td>
        </tr>
      </table>
    </div>
        </div>
    );
}

export default OrderCompleted;