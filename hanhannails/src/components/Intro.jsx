import React from "react";
import './Intro.css';

function Intro () {
    return (
        <div className="w-100">
            <div className="intro-container">
                <p className="opening">Giờ mở cửa 
                <br/> 8:00 - 20:00
                </p>
                <h1 className="title">Giới thiệu</h1>
                <p className="content">Chào mừng bạn đến với trang web chuyên về dịch vụ làm móng của chúng tôi. 
                    Tại đây, chúng tôi cung cấp một loạt các dịch vụ chất lượng cao từ manicure, pedicure, nail art,
                    đến các liệu pháp chăm sóc móng chuyên sâu. Đội ngũ chuyên viên làm móng của chúng tôi luôn 
                    nhật những xu hướng mới nhất và sử dụng các sản phẩm tốt nhất để đảm bảo bạn luôn hài lòng với
                    dịch vụ của chúng tôi. Hãy khám phá các dịch vụ của chúng tôi và đặt lịch hẹn ngay hôm nay để 
                    trải nghiệm sự khác biệt!
                </p>
            </div>
            <div className="slogan-container">
                <p className="slogan">Give your nails a sweet treat.</p>
                <img className="slogan-img" src="https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2023_03_20/421.png" alt="" />
            </div>
        </div>

    )
};

export default Intro;