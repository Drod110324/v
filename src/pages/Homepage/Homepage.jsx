import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct.jsx'
import { WrapperTypeProduct } from './style.js'
import SliderComponent from '../../components/SliderComponent/SliderComponent.jsx'
import Slider1 from '../../assets/images/Slider1.jpg'
import Slider2 from '../../assets/images/Slider2.jpg'
import Slider4 from '../../assets/images/Slider4.png'
import Slider5 from '../../assets/images/Slider5.png'
import CardComponent from '../../components/CardComponent/CardComponent.jsx'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent.jsx'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent.jsx'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.jsx'

const Homepage = () => {
  const arr = ['máy ảnh', 'ống kính', 'phụ kiện', 'gimbal','máy quay']
  return (
    <>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return( <TypeProduct name={item} key={item}  />
          )
        })}
      </WrapperTypeProduct>
      <div style={{backgroundColor: '#F5F5F5', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <SliderComponent arrImage={[Slider1, Slider2, Slider4, Slider5]}/>
        </div>
      </div>
        <div style={{marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center'}}>
          <CardComponent />
        </div>
        <ButtonComponent textButton='Xem thêm' type='outline' styleButton={{
          border: '1px solid rgb(11, 116, 229)',
           color: 'rgb(11, 116, 229)', 
           width: '240px', 
           height: '38px', 
           borderRadius: '4px'
          }} />

        
    </>
  )   
}

export default Homepage
