import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPalette, FaHandSparkles, FaSpa, FaGem } from 'react-icons/fa';
import './CardHome.css';

function CardHome() {
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            title: "Nail Art Design",
            description: "Nghệ thuật vẽ móng độc đáo với hàng trăm mẫu thiết kế trendy. Từ phong cách minimalist đến những họa tiết cầu kỳ, đội ngũ nail artist chuyên nghiệp sẽ biến móng tay của bạn thành tác phẩm nghệ thuật.",
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
            icon: <FaPalette />,
            color: "#FF6B9D",
            price: "Từ 200.000đ"
        },
        {
            id: 2,
            title: "Gel & Extension",
            description: "Dịch vụ nối móng gel chuyên nghiệp, độ bền cao. Sử dụng sản phẩm cao cấp từ Mỹ, Nhật Bản đảm bảo an toàn cho móng tự nhiên. Tạo độ dài và hình dáng hoàn hảo theo ý muốn.",
            image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400",
            icon: <FaHandSparkles />,
            color: "#C44569",
            price: "Từ 350.000đ"
        },
        {
            id: 3,
            title: "Spa Treatment",
            description: "Liệu trình spa cao cấp cho móng tay và móng chân. Massage thư giãn, loại bỏ da chết, dưỡng ẩm sâu với các sản phẩm organic. Mang lại cảm giác thư thái và làn da mềm mịn.",
            image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
            icon: <FaSpa />,
            color: "#F8B195",
            price: "Từ 250.000đ"
        },
        {
            id: 4,
            title: "Luxury Collection",
            description: "Bộ sưu tập nail cao cấp với phụ kiện đá quý, kim tuyến, hologram. Thiết kế độc quyền cho những dịp đặc biệt. Tôn vinh vẻ đẹp sang trọng và đẳng cấp của phái đẹp.",
            image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400",
            icon: <FaGem />,
            color: "#355C7D",
            price: "Từ 500.000đ"
        }
    ];

    const handleBooking = (serviceId) => {
        navigate(`/booking?service=${serviceId}`);
    };

    return (
        <div className="cardhome-section">
            <div className="section-header">
                <h2 className="section-title">
                    Dịch Vụ <span className="highlight">Nổi Bật</span>
                </h2>
                <p className="section-subtitle">
                    Khám phá các dịch vụ làm đẹp móng chuyên nghiệp tại HanHan Nails
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div 
                        key={service.id} 
                        className={`service-card ${index === 0 ? 'featured' : ''}`}
                        style={{'--accent-color': service.color}}
                    >
                        <div className="card-image-wrapper">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="card-image"
                            />
                            <div className="card-overlay">
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                            </div>
                            <span className="price-tag">{service.price}</span>
                        </div>
                        
                        <div className="card-content">
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                            
                            <button 
                                className="booking-button"
                                onClick={() => handleBooking(service.id)}
                            >
                                <span>Đặt lịch ngay</span>
                                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="view-more-wrapper">
                <Link to="/services" className="view-more-link">
                    <span>Xem tất cả dịch vụ</span>
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default CardHome;