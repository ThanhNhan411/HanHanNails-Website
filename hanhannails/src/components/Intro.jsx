import React from "react";
import { FaClock, FaAward, FaLeaf } from 'react-icons/fa';
import { IoSparklesSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './Intro.css';

function Intro() {
    const navigate = useNavigate();

    const highlights = [
        {
            icon: <FaAward />,
            title: "15+ Năm",
            desc: "Kinh nghiệm"
        },
        {
            icon: <FaLeaf />,
            title: "100%",
            desc: "Organic"
        },
        {
            icon: <IoSparklesSharp />,
            title: "500+",
            desc: "Mẫu nail"
        },
        {
            icon: <FaClock />,
            title: "8:00-20:00",
            desc: "Mở cửa"
        }
    ];

    return (
        <section className="intro-home-section">
            <div className="intro-container">
                <div className="intro-content">
                    <div className="intro-text">
                        <span className="intro-label">Chào mừng đến với</span>
                        <h2 className="intro-heading">
                            Hân Hân Nails - <span className="highlight-text">Nơi Tôn Vinh</span> Vẻ Đẹp Của Bạn
                        </h2>
                        <p className="intro-description">
                            Với hơn 15 năm kinh nghiệm, chúng tôi tự hào mang đến dịch vụ nail chuyên nghiệp 
                            với hơn 500+ mẫu thiết kế độc đáo. Sử dụng 100% sản phẩm organic cao cấp, 
                            đảm bảo an toàn và chất lượng tốt nhất cho khách hàng.
                        </p>
                        
                        <div className="intro-highlights">
                            {highlights.map((item, index) => (
                                <div key={index} className="highlight-item">
                                    <div className="highlight-icon">{item.icon}</div>
                                    <div className="highlight-info">
                                        <strong>{item.title}</strong>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="intro-cta">
                            <button 
                                className="cta-primary"
                                onClick={() => navigate('/booking')}
                            >
                                Đặt lịch ngay
                            </button>
                            <button 
                                className="cta-secondary"
                                onClick={() => navigate('/about')}
                            >
                                Tìm hiểu thêm
                            </button>
                        </div>
                    </div>

                    <div className="intro-visual">
                        <div className="image-stack">
                            <img 
                                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400" 
                                alt="Nail Art 1" 
                                className="stack-image img-1"
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400" 
                                alt="Nail Art 2" 
                                className="stack-image img-2"
                            />
                            <div className="slogan-badge">
                                <p>"Give your nails a sweet treat"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;