import React from 'react';
import { FaHeart, FaStar, FaUsers, FaAward, FaCertificate, FaHandHoldingHeart } from 'react-icons/fa';
import { MdSpa, MdCleanHands, MdColorLens } from 'react-icons/md';
import './AboutUs.css';

function AboutUs() {
    const teamMembers = [
        {
            name: "Nguyễn Thị Hân",
            role: "Founder & Master Nail Artist",
            experience: "8+ năm kinh nghiệm",
            specialty: "Nail Art & Design",
            image: "/images/team/han.jpg"
        },
        {
            name: "Trần Thị Linh",
            role: "Senior Nail Technician",
            experience: "5+ năm kinh nghiệm",
            specialty: "Gel & Acrylic",
            image: "/images/team/linh.jpg"
        },
        {
            name: "Lê Thị Mai",
            role: "Nail Artist",
            experience: "3+ năm kinh nghiệm",
            specialty: "Manicure & Pedicure",
            image: "/images/team/mai.jpg"
        }
    ];

    const achievements = [
        { icon: <FaUsers />, number: "1000+", text: "Khách hàng hài lòng" },
        { icon: <FaStar />, number: "4.9/5", text: "Đánh giá trung bình" },
        { icon: <FaAward />, number: "5+", text: "Năm kinh nghiệm" },
        { icon: <FaCertificate />, number: "100%", text: "Sản phẩm chính hãng" }
    ];

    const values = [
        {
            icon: <MdSpa />,
            title: "Chất lượng hàng đầu",
            description: "Chúng tôi cam kết sử dụng những sản phẩm và công nghệ tốt nhất để mang đến dịch vụ chất lượng cao nhất."
        },
        {
            icon: <MdCleanHands />,
            title: "An toàn & Vệ sinh",
            description: "Tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh và an toàn, đảm bảo môi trường sạch sẽ và an toàn cho khách hàng."
        },
        {
            icon: <MdColorLens />,
            title: "Sáng tạo & Cá nhân hóa",
            description: "Mỗi thiết kế nail đều được tùy chỉnh theo phong cách và sở thích riêng của từng khách hàng."
        },
        {
            icon: <FaHandHoldingHeart />,
            title: "Dịch vụ tận tâm",
            description: "Đội ngũ nhân viên chuyên nghiệp, tận tâm và luôn lắng nghe để mang đến trải nghiệm tuyệt vời nhất."
        }
    ];

    return (
        <div className="about-us">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Về <span className="highlight">HanHan Nails</span>
                        </h1>
                        <p className="hero-subtitle">
                            Nơi nghệ thuật nail gặp gỡ sự chăm sóc tận tâm
                        </p>
                        <div className="hero-decoration">
                            <FaHeart className="heart-icon" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2 className="section-title">
                                Câu chuyện của chúng tôi
                            </h2>
                            <p className="story-paragraph">
                                HanHan Nails được thành lập với niềm đam mê mang đến những trải nghiệm làm đẹp 
                                tuyệt vời nhất cho phụ nữ Việt Nam. Bắt đầu từ một studio nhỏ, chúng tôi đã không 
                                ngừng phát triển và hoàn thiện để trở thành một trong những địa chỉ nail uy tín 
                                và được yêu thích nhất.
                            </p>
                            <p className="story-paragraph">
                                Với đội ngũ nghệ nhân nail chuyên nghiệp và tâm huyết, chúng tôi luôn cập nhật 
                                những xu hướng mới nhất, sử dụng sản phẩm chất lượng cao và công nghệ hiện đại 
                                để mang đến cho khách hàng những bộ nail hoàn hảo nhất.
                            </p>
                            <div className="story-highlight">
                                <FaHeart className="highlight-icon" />
                                <span>"Mỗi bộ nail là một tác phẩm nghệ thuật, mỗi khách hàng là một câu chuyện đặc biệt"</span>
                            </div>
                        </div>
                        <div className="story-image">
                            <div className="image-placeholder">
                                <MdSpa className="placeholder-icon" />
                                <span>Hình ảnh salon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements-section">
                <div className="container">
                    <h2 className="section-title center">
                        Thành tựu của chúng tôi
                    </h2>
                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="achievement-card">
                                <div className="achievement-icon">
                                    {achievement.icon}
                                </div>
                                <div className="achievement-number">
                                    {achievement.number}
                                </div>
                                <div className="achievement-text">
                                    {achievement.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title center">
                        Giá trị cốt lõi
                    </h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    {value.icon}
                                </div>
                                <h3 className="value-title">
                                    {value.title}
                                </h3>
                                <p className="value-description">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title center">
                        Đội ngũ chuyên nghiệp
                    </h2>
                    <p className="team-subtitle">
                        Gặp gỡ những nghệ nhân nail tài năng của chúng tôi
                    </p>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="member-image">
                                    <div className="image-placeholder">
                                        <FaUsers className="placeholder-icon" />
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-experience">{member.experience}</p>
                                    <p className="member-specialty">
                                        <strong>Chuyên môn:</strong> {member.specialty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">
                            Sẵn sàng trải nghiệm dịch vụ tuyệt vời?
                        </h2>
                        <p className="cta-subtitle">
                            Hãy để chúng tôi mang đến cho bạn những bộ nail hoàn hảo nhất
                        </p>
                        <div className="cta-buttons">
                            <a href="/booking" className="cta-button primary">
                                Đặt lịch ngay
                            </a>
                            <a href="/services" className="cta-button secondary">
                                Xem dịch vụ
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;