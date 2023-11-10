import React, { useState, useEffect } from 'react';
import './ServiceDisplay.css';

function ServiceDisplay(props) {
  const {service} = props;
  const [mainImg, setMainImg] = useState(service.img[0]); // Set the first image as the main image initially
  const [imgIndex, setImgIndex] = useState(0); // Keep track of the current image index

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prevImgIndex) => (prevImgIndex + 1) % service.img.length); // Move to the next image in the array every 3 seconds
    }, 10000);

    return () => clearInterval(timer); // Clear the timer when the component is unmounted
  }, [service.img.length]);

  useEffect(() => {
    setMainImg(service.img[imgIndex]); // Update the main image when imgIndex changes
  }, [service.img, imgIndex]);
  const handleClickImg = (img, index) => {
    setMainImg(img);
    setImgIndex(index);
  }
  return (
    <div className='service-wrapper'>
        <img className='service-img' src={mainImg} alt="" />
        <div className="service-text">
          <h1 className='service-title'>{service.title}</h1>
          <h2 className='service-price'>{service.price}</h2>
          <h2 className="service-des">Mô tả:</h2>
          <p className='service-des-text'>{service.description}</p>
          <button className='service-btn'>Đặt lịch</button>
        </div>
        <div className="service-img-container">
            {service.img.map((img, index) => (
                <img key={index} className={index === imgIndex ? 'service-sub-img service-sub-img-selected' : 'service-sub-img' } src={img} alt="" onClick={() => handleClickImg(img, index)}/>
            ))}
        </div>
    </div>
  )
}

export default ServiceDisplay;
