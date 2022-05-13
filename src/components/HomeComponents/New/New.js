import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './New.css'

// Import Swiper styles
import { Autoplay, Lazy, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import newPs from '../../../data/hots.json'

const New = () => {
  return (
    <div className="new">
      <div className="n-title">Sản phẩm mới </div>

      <div className="list-p">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        // pagination={{
        //   clickable: true
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="news"
      >
        {newPs.map((newP) => (
          
          <SwiperSlide
            
          key={newP.id}>
            <div className="image" >
            <img src={newP.image1} alt="" />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}

export default New