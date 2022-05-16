import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './New.css'

// Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import newPs from '../../../data/hots.json'
import Product from '../Product/Product';
import Title from '../../Title/Title';

const New = () => {
  const [items, setItems] = useState(() => {
    let width = window.innerWidth
    if(width < 600 ) return 1
    else if(width < 992) return 2
    else return 3
  })
  window.onresize = () => {
    let width = window.innerWidth
    if(width < 768 ) setItems(1)
    else if(width < 992) setItems(2)
    else setItems(3)

  }
  
  return (
    <div className="new">
      <Title text="Sản phẩm mới"/>

      <div className="list-p">
      <Swiper
        spaceBetween={20}
        slidesPerView={items}
        modules={[Autoplay, Pagination, Navigation]}
        className="news"
      >
        {newPs.map((newP) => (
          
          <SwiperSlide
          key={newP.id}>
            <Product
              title={newP.title}
              image1={newP.image1}
              image2={newP.image2}
              price={newP.price}
            />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}

export default New