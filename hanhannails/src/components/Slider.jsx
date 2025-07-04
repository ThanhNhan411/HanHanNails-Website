import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

function Slider() {
  const navigate = useNavigate();

  const sliderData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1920&h=800&fit=crop",
      title: "Nail Art Collection 2024",
      subtitle: "Xu hướng mới nhất",
      description: "Khám phá BST nail art độc đáo với hơn 500+ mẫu thiết kế từ đội ngũ chuyên gia hàng đầu",
      buttonText: "Xem bộ sưu tập",
      buttonLink: "/gallery",
      align: "left"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=800&fit=crop",
      title: "Ưu đãi đặc biệt",
      subtitle: "Giảm đến 30%",
      description: "Chương trình khuyến mãi cho khách hàng mới và thành viên VIP trong tháng này",
      buttonText: "Đặt lịch ngay",
      buttonLink: "/booking",
      align: "center"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1920&h=800&fit=crop",
      title: "Luxury Spa Experience",
      subtitle: "Trải nghiệm đẳng cấp",
      description: "Dịch vụ nail spa cao cấp với không gian sang trọng và sản phẩm nhập khẩu",
      buttonText: "Tìm hiểu thêm",
      buttonLink: "/services",
      align: "right"
    }
  ];

  return (
    <div className="slider-container">
      <Carousel 
        fade 
        indicators 
        controls
        interval={3000}
        pause="hover"
        className="main-slider"
      >
        {sliderData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="slider-image-wrapper">
              <img
                className="d-block w-100 slider-image"
                src={slide.image}
                alt={slide.title}
              />
              <div className="slider-overlay"></div>
            </div>
            
            <Carousel.Caption className={`slider-caption caption-${slide.align}`}>
              <div className="caption-content">
                <span className="slide-subtitle">{slide.subtitle}</span>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                
                <div className="slide-actions">
                  <button 
                    className="btn-primary-slider"
                    onClick={() => navigate(slide.buttonLink)}
                  >
                    <span>{slide.buttonText}</span>
                    <FaArrowRight className="btn-icon" />
                  </button>
                  
                  <button 
                    className="btn-secondary-slider"
                    onClick={() => navigate('/contact')}
                  >
                    <FaPhone className="btn-icon" />
                    <span>Liên hệ ngay</span>
                  </button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

    </div>
  );
}

export default Slider;