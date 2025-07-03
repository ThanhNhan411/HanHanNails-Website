import React, { useState, useEffect } from 'react';
import { FaClock, FaStar, FaCheckCircle, FaCalendarAlt, FaShareAlt, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ServiceDisplay.css';

function ServiceDisplay(props) {
  const { service } = props;
  const navigate = useNavigate();
  const [mainImg, setMainImg] = useState(service.img[0]);
  const [imgIndex, setImgIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Auto change image every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prevImgIndex) => (prevImgIndex + 1) % service.img.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [service.img.length]);

  useEffect(() => {
    setMainImg(service.img[imgIndex]);
    setImageLoading(true);
  }, [service.img, imgIndex]);

  const handleClickImg = (img, index) => {
    setMainImg(img);
    setImgIndex(index);
    setImageLoading(true);
  };

  const handleBooking = () => {
    navigate(`/booking?service=${service.id}`);
  };

  const handleShare = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: service.title,
        text: service.description,
        url: window.location.href,
      });
    }
  };

  // Sample additional data - replace with actual data
  const benefits = [
    "Sử dụng sản phẩm cao cấp nhập khẩu",
    "Kỹ thuật viên được đào tạo chuyên nghiệp",
    "Đảm bảo vệ sinh an toàn tuyệt đối",
    "Bảo hành dịch vụ trong 7 ngày"
  ];

  const relatedServices = [
    { id: 2, title: "Gel Polish", image: service.img[0] },
    { id: 3, title: "Nail Art Design", image: service.img[0] },
    { id: 4, title: "Spa Pedicure", image: service.img[0] }
  ];

  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => navigate('/')}>Trang chủ</span>
        <span>/</span>
        <span onClick={() => navigate('/services')}>Dịch vụ</span>
        <span>/</span>
        <span className="current">{service.title}</span>
      </div>

      <div className="service-detail-container">
        {/* Left Section - Images */}
        <div className="service-images-section">
          <div className="main-image-wrapper">
            {imageLoading && <div className="image-loader"></div>}
            <img 
              className="main-image" 
              src={mainImg} 
              alt={service.title}
              onLoad={() => setImageLoading(false)}
            />
            
            {/* Image Navigation Dots */}
            <div className="image-dots">
              {service.img.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === imgIndex ? 'active' : ''}`}
                  onClick={() => handleClickImg(service.img[index], index)}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="thumbnail-gallery">
            {service.img.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${index === imgIndex ? 'active' : ''}`}
                onClick={() => handleClickImg(img, index)}
              >
                <img src={img} alt={`${service.title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Service Info */}
        <div className="service-info-section">
          {/* Header */}
          <div className="service-header">
            <h1 className="service-name">{service.title}</h1>
            <div className="service-actions">
              <button 
                className={`action-btn ${isLiked ? 'liked' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <FaHeart />
              </button>
              <button className="action-btn" onClick={handleShare}>
                <FaShareAlt />
              </button>
            </div>
          </div>

          {/* Rating and Duration */}
          <div className="service-meta">
            <div className="rating">
              <FaStar className="star-icon filled" />
              <FaStar className="star-icon filled" />
              <FaStar className="star-icon filled" />
              <FaStar className="star-icon filled" />
              <FaStar className="star-icon" />
              <span className="rating-text">4.8 (125 đánh giá)</span>
            </div>
            <div className="duration">
              <FaClock />
              <span>{service.duration || "60 phút"}</span>
            </div>
          </div>

          {/* Price */}
          <div className="price-section">
            <span className="price-label">Giá dịch vụ:</span>
            <span className="price-value">{service.price}</span>
            <span className="price-note">*Giá có thể thay đổi theo yêu cầu</span>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3 className="section-title">Mô tả dịch vụ</h3>
            <p className="description-text">{service.description}</p>
          </div>

          {/* Benefits */}
          <div className="benefits-section">
            <h3 className="section-title">Lợi ích</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Actions */}
          <div className="booking-actions">
            <button className="book-now-btn" onClick={handleBooking}>
              <FaCalendarAlt />
              <span>Đặt lịch ngay</span>
            </button>
            <button className="consult-btn" onClick={() => navigate('/contact')}>
              Tư vấn miễn phí
            </button>
          </div>

          {/* Service Notes */}
          <div className="service-notes">
            <p><strong>Lưu ý:</strong> Vui lòng đặt lịch trước ít nhất 2 giờ</p>
            <p><strong>Chính sách hủy:</strong> Miễn phí hủy trước 24 giờ</p>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="related-services">
        <h2 className="related-title">Dịch vụ liên quan</h2>
        <div className="related-grid">
          {relatedServices.map((related) => (
            <div 
              key={related.id} 
              className="related-card"
              onClick={() => navigate(`/service/${related.id}`)}
            >
              <img src={related.image} alt={related.title} />
              <h4>{related.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceDisplay;