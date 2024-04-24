import React from 'react';
import './Login.css';
import {BiSolidLockAlt} from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <section>
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
      </section>
      <div className='login-container'>
          <div className="login-form">
              <h1 className='login-title'>Đăng nhập</h1>
              <div className="input-container">
                <div className='user-box login-box'>
                  <MdEmail className='user-icon'></MdEmail>
                  <input className='login-input' type="text" placeholder='Email'/>
                </div>
                  <div className="password-box login-box">
                  <BiSolidLockAlt className='password-icon'/>
                <input className='login-input' type="password" placeholder='Mật khẩu'/>
                </div>
              </div>
              <div className="text-container">
                <span>
                <input type="checkbox" id="remember" name="remember" value="remember"/>
                <label for="vehicle1">Lưu tài khoản</label> 
                </span>
                <a href="" className='forget-link'>Quên mật khẩu ?</a>
              </div>
              <button className='login-btn'>Đăng nhập</button>
              <p className='to-register'>Chưa có tài khoản ? <Link to='/register' className='register-link' style={{textDecoration: 'none'}}><b>Tạo tài khoản</b></Link></p>
          </div>   
      </div> 
    </div>
  )
}

export default Login