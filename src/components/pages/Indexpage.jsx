import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination,Navigation } from 'swiper/modules';

import "../../App.css";
const Indexpage = () => {
  return (
            <div>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide><div className='sliderImg'><img src='https://images.moviesanywhere.com/9903bad44ad5cea782c6ce82a1920467/b5215ed8-cc16-4b1b-a143-bd9e4a4bbb9e.jpg'/></div></SwiperSlide>
      <SwiperSlide><div className='sliderImg'><img src='https://flxt.tmsimg.com/assets/p8884_p_v8_ae.jpg' /></div></SwiperSlide>
      <SwiperSlide><div className='sliderImg'><img src='https://flxt.tmsimg.com/assets/p8890_p_v8_be.jpg' /></div></SwiperSlide>
      <SwiperSlide><div className='sliderImg'><img src='https://m.media-amazon.com/images/I/91NrqPMwWqL._RI_.jpg' /></div></SwiperSlide>
      <SwiperSlide><div className='sliderImg'><img src='https://musicart.xboxlive.com/7/5e325100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080' /></div></SwiperSlide>
      <SwiperSlide><div className='sliderImg'><img src='https://images.moviesanywhere.com/ae548928d15ceddbb6e1a6d16707fafd/8f079b10-aff5-4f2b-82f0-789ae7fedaea.jpg' /></div></SwiperSlide>
    </Swiper>
    </div>
      
  )
}

export default Indexpage
