import React, { Suspense, useState } from 'react';
import { FaSearch, FaClock, FaStar, FaFilter, FaTh, FaList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Sample services data - replace with your actual data
  const services = [
    {
      id: 1,
      title: "Classic Manicure",
      category: "manicure",
      description: "Dịch vụ làm móng tay cơ bản với chăm sóc móng và da",
      duration: "45 phút",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      title: "Gel Polish",
      category: "gel",
      description: "Sơn gel bền màu, giữ được 2-3 tuần",
      duration: "60 phút",
      image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400",
      rating: 4.9,
      popular: true
    },
    {
      id: 3,
      title: "Nail Art Design",
      category: "nail-art",
      description: "Vẽ móng nghệ thuật với nhiều mẫu độc đáo",
      duration: "90 phút",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400",
      rating: 5.0,
      popular: false
    },
    {
      id: 4,
      title: "Spa Pedicure",
      category: "pedicure",
      description: "Chăm sóc móng chân với liệu trình spa thư giãn",
      duration: "75 phút",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
      rating: 4.7,
      popular: false
    },
    {
      id: 5,
      title: "Nail Extension",
      category: "extension",
      description: "Nối móng với gel hoặc acrylic",
      duration: "120 phút",
      image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=400",
      rating: 4.8,
      popular: true
    },
    {
      id: 6,
      title: "Dipping Powder",
      category: "dipping",
      description: "Phủ bột nhúng bền chắc, tự nhiên",
      duration: "60 phút",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400",
      rating: 4.6,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '💅' },
    { id: 'manicure', name: 'Manicure', icon: '✋' },
    { id: 'pedicure', name: 'Pedicure', icon: '👣' },
    { id: 'gel', name: 'Gel Polish', icon: '✨' },
    { id: 'nail-art', name: 'Nail Art', icon: '🎨' },
    { id: 'extension', name: 'Extension', icon: '💎' },
    { id: 'dipping', name: 'Dipping', icon: '🌟' }
  ];

  const filteredServices = services.filter(service => {
    const matchCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="services-main-title">Dịch Vụ Của Chúng Tôi</h1>
          <p className="services-subtitle">
            Khám phá bộ sưu tập dịch vụ nail chuyên nghiệp với đội ngũ nghệ nhân tài năng
          </p>
        </div>
      </div>

      <div className="services-container">
        {/* Search and Filter Bar */}
        <div className="services-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="view-controls">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <FaTh />
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid/List */}
        <Suspense fallback={
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Đang tải dịch vụ...</p>
          </div>
        }>
          <div className={`services-${viewMode}`}>
            {filteredServices.length === 0 ? (
              <div className="no-results">
                <p>Không tìm thấy dịch vụ phù hợp</p>
              </div>
            ) : (
              filteredServices.map(service => (
                <div 
                  key={service.id} 
                  className={`service-card ${viewMode}`}
                  onClick={() => navigate(`/service/${service.id}`)}
                >
                  {service.popular && (
                    <div className="popular-badge">
                      <span>Phổ biến</span>
                    </div>
                  )}
                  
                  <div className="service-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image"
                    />
                    <div className="service-overlay">
                      <button className="view-detail-btn">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>

                  <div className="service-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-meta">
                      <div className="duration">
                        <FaClock className="meta-icon" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="rating">
                        <FaStar className="star-icon" />
                        <span>{service.rating}</span>
                      </div>
                    </div>

                    <button className="book-service-btn">
                      Đặt lịch ngay
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Services;