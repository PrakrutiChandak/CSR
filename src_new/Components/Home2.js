import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Img1 from '../Components/images/BloodDonation.jpg'
import Img2 from '../Components/images/BookDonation.jpg'
import Img3 from '../Components/images/TreePlantation.jpg'
import Img4 from '../Components/images/Workshop.jpg'
import './NavPages/SliderCss.css'
import NavSample from './NavSample';
import '../Components/NavStyle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <div>
      <div className="navbar">
        <br/>
        <marquee id="Notice">Notice :No notices yet.</marquee>
      </div>
    <div className="slideContain">
    <Swiper
      spaceBetween={50}
      slidesPerView={1.05}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img id="slideImg" src={Img1} alt="Image 1"/>
      <h2 id="slideCaption">Blood Donation Camp organised on the occasion of TIAA's Foundation Day</h2>
      </SwiperSlide>
      <SwiperSlide><img id="slideImg" src={Img2} alt="Image 2"/>
      <h2 id="slideCaption">Books donated to the students By TIAA Team</h2>
      </SwiperSlide>
      <SwiperSlide><img id="slideImg" src={Img3} alt="Image 3"/>
      <h2 id="slideCaption">Tree Plantation at the TIAA Campus on 1st Jaunuary 2019</h2>
      </SwiperSlide>
      <SwiperSlide><img id="slideImg" src={Img4} alt="Image 4"/>
      <h2 id="slideCaption">Industrial Workshop held by TIAA team</h2>
      </SwiperSlide><br/>
         </Swiper>
    </div>
    </div>
  );
};