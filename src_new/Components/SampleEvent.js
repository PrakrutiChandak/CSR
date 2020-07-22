import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Img1 from '../Components/images/Tree1.jpg'
import Img2 from '../Components/images/Tree2.jpg'
import Img3 from '../Components/images/Tree3.jpg'
import Img4 from '../Components/images/Tree4.jpg'
import '../Components/PastEventsStyle.css'
import NavSample from './NavSample';
import '../Components/NavStyle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <div>
        <div className="slideContain">
                <p id="EventDescPara">
                <h1 id="headEvent">Tree Plantation Event</h1>
                <b>Organisation name :</b>TIAA Global Business Services<br/>
                <b>Description :</b>Not Mentioned yet<br/>
                <b>Date :</b>01/01/2020<br/>
                <b>No. of Participants :</b>100<br/>
                <b>Gallery:</b>
                </p>
     </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1.05}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide><img id="slideImg" src={Img1} alt="Image 3"/>
           </SwiperSlide>
      <SwiperSlide><img id="slideImg" src={Img2} alt="Image 3"/>
      </SwiperSlide>
      <SwiperSlide><img id="slideImg" src={Img3} alt="Image 3"/>
         </SwiperSlide>
      <SwiperSlide><img id="slideImg" src={Img4} alt="Image 3"/>
           </SwiperSlide>
         </Swiper>
    </div>
  );
};
