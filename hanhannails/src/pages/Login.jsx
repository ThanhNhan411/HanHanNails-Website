import React, { useState } from 'react';
import './Login.css';
import { BiSolidLockAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/components/assets/images/hanhannails.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password, rememberMe });
  };

  return (
    <div className="login-page-container">
      {/* Background decoration */}
      <div className="login-decoration">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="login-container">
        {/* Left side - Welcome */}
        <div className="login-welcome">
          <div className="welcome-content">
            <img src={logo} alt="HanHan Nails" className="login-logo" />
            <h2>Chào mừng trở lại!</h2>
            <p>Đăng nhập để trải nghiệm dịch vụ làm đẹp tuyệt vời của chúng tôi</p>
            
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Đặt lịch online 24/7</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎁</span>
                <span>Ưu đãi độc quyền cho thành viên</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💅</span>
                <span>Lưu lại lịch sử dịch vụ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="login-form-wrapper">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h1 className="login-title">Đăng nhập</h1>
              <p className="login-subtitle">Vui lòng nhập thông tin tài khoản của bạn</p>
            </div>

            <div className="form-body">
              {/* Email Input */}
              <div className="input-group">
                <label className="input-label">Email</label>
                <div className="input-wrapper">
                  <MdEmail className="input-icon" />
                  <input
                    type="email"
                    className="form-input"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label className="input-label">Mật khẩu</label>
                <div className="input-wrapper">
                  <BiSolidLockAlt className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkbox-custom"></span>
                  <span>Lưu tài khoản</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Quên mật khẩu?
                </Link>
              </div>

              {/* Submit Button */}
              <button type="submit" className="login-button">
                <span>Đăng nhập</span>
              </button>

              {/* Divider */}
              <div className="divider">
                <span>hoặc</span>
              </div>

              {/* Social Login */}
              <div className="social-login">
                <button type="button" className="social-button google">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                  <span>Đăng nhập với Google</span>
                </button>
                <button type="button" className="social-button facebook">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
                  <span>Đăng nhập với Facebook</span>
                </button>
              </div>

              {/* Register Link */}
              <p className="register-prompt">
                Chưa có tài khoản? 
                <Link to="/register" className="register-link">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;