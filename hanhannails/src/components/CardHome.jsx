import React from "react";
import { Link } from "react-router-dom";
import './CardHome.css';

function CardHome () {
    return (
        <div className="cardhome-container">
        <div className="cards-container">
            <div className="card-wrapper first-card">
                <img className="card-img-home" src="https://i0.wp.com/lilianbeauty.vn/wp-content/uploads/2022/04/nail-xinh-don-gian-7.jpg?fit=800%2C450&ssl=1" alt="" />
                <h2 className="card-title-home">Nails Art</h2>
                <p className="card-text">
                Dịch vụ sơn móng tay của chúng tôi mang đến cho bạn trải nghiệm làm đẹp tuyệt vời nhất. Với một loạt các màu sắc và thiết kế để lựa chọn, bạn có thể tự do thể hiện cá nhân hóa và sáng tạo của mình.... 
                </p>
                <button className="card-button">Đặt lịch</button>
            </div>
            <div className="card-wrapper">
                <img className="card-img-home" src="" alt="" />
                <h2 className="card-title-home">Gội đầu</h2>
                <p className="card-text">
                Dịch vụ gội đầu của chúng tôi mang đến cho bạn một trải nghiệm thư giãn tuyệt vời. Chúng tôi sử dụng các sản phẩm chăm sóc tóc chất lượng cao, giúp bạn cảm thấy thoải mái và thư giãn...
                </p>
                <button className="card-button">Đặt lịch</button>
            </div>
            <div className="card-wrapper">
            <img className="card-img-home" src="" alt="" />
            <h2 className="card-title-home">Chăm sóc da</h2>
                <p className="card-text">
                Dịch vụ chăm sóc da mặt cơ bản của chúng tôi bao gồm các bước sau:
                Làm sạch da: Sử dụng sữa rửa mặt phù hợp với loại da của bạn để loại bỏ bụi bẩn, dầu thừa và lớp trang điểm trên da....
                </p>
                <button className="card-button">Đặt lịch</button>
            </div>
            <div className="card-wrapper last-card">
            <img className="card-img-home" src="" alt="" />
            <h2 className="card-title-home">Massage mặt</h2>
                <p className="card-text">
                Dịch vụ massage mặt của chúng tôi mang đến cho bạn một trải nghiệm thư giãn tuyệt vời. Đây không chỉ là một dịch vụ làm đẹp, mà còn là một cách tuyệt vời để giảm bớt căng thẳng sau một ngày dài....
                </p>
                <button className="card-button">Đặt lịch</button>
            </div>
            
        </div>
            <div className="morelink">
            <Link id="more-link" to='/services'>Xem thêm...</Link>
            </div>
        </div>
    )
};

export default CardHome;