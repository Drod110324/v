import React from 'react'
import Slider from "react-slick";
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { WrapperSlider } from './style';

const SliderComponent = ({arrImage}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%'
    }}>
      <WrapperSlider style={{ width: '80%' }} {...settings}>
          {arrImage.map((image, index) => {
              return (
                  <div key={index}>
                    <Image 
                      src={image} 
                      alt="slider" 
                      preview={false} 
                      style={{ 
                        width: '100%', 
                        height: '400px', 
                        objectFit: 'cover',
                        margin: '0 auto', 
                        display: 'block' 
                      }} 
                    />
                  </div>
              )
          })}
      </WrapperSlider>
    </div>
  )
}

export default SliderComponent
