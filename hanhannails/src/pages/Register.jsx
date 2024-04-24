import React from 'react';
import './Register.css';
import {FaUserAlt} from 'react-icons/fa';
import {BiSolidLockAlt} from 'react-icons/bi';
import {MdEmail} from 'react-icons/md';

function Register() {
  return (
    <div>
      <section>
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
      </section>
      <div className='register-container'>
          <div className="register-form">
              <h1 className='register-title'>Đăng ký</h1>
              <div className="input-container">
                <div className='user-box register-box'>
                  <FaUserAlt className='user-icon'></FaUserAlt>
                  <input className='register-input' type="text" placeholder='Tên người dùng'/>
                </div>
                <div className='user-box register-box'>
                  <MdEmail className='user-icon'></MdEmail>
                  <input className='register-input' type="text" placeholder='Email'/>
                </div>
                  <div className="password-box register-box">
                  <BiSolidLockAlt className='password-icon'/>
                <input className='register-input' type="password" placeholder='Mật khẩu'/>
                </div>
              </div>
              <div className="text-container">
                <span>
                <input type="checkbox" id="remember" name="remember" value="remember"/>
                <label for="vehicle1">Lưu tài khoản</label> 
                </span>
              </div>
              <button className='register-btn'>Đăng ký</button>
          </div>   
      </div> 
    </div>
  )
}

export default Register;
