import React, { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Lazy, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Events from '../../../data/event.json'
import './Intro.css'

const Intro = () => {
    const [events, setEvents] = useState(Events)
      
    useEffect(() => {
      fetch('http://localhost:3000/event')
        .then((res) => res.json())
        .then(json => setEvents(json))
    },[])

  return (
    <div>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="events"
      >
        {events.map((event) => (
          
          <SwiperSlide
            
          key={event.id}>
            <div className="image" >
            <img src={event.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default Intro