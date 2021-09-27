import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../css/Swiper.css";
import'../css/Home.css';
import '../css/swiper/swiper-bundle.css';

import new06 from '../img/we06.jpg'



// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

function Fuck() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
         <SwiperSlide>
                <div class="swiper-slide ">
                    <a class="nThumbnail" href="">
                        <img src={new06} alt=""/>
                    </a>
                    <a class="ntxtName">
                        <span>Vol.02 【Toorak River.】</span>
                    </a>
                    <a class="ntxt">
                        <span>Xitun DistrictTaichung CityXitun DistrictTaichung City</span>
                    </a>
                    <div class="nHr"></div>
                    <div class="nBot">
                        <a  class="N-bot-a" href="">Read More
                        </a>
                        <div class="nSmall">
                            <a>Information</a>
                            <span>|</span>
                            <span>2021.7 up</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="swiper-slide ">
                    <a class="nThumbnail" href="">
                        <img src={new06} alt=""/>
                    </a>
                    <a class="ntxtName">
                        <span>Vol.02 【Toorak River.】</span>
                    </a>
                    <a class="ntxt">
                        <span>Xitun DistrictTaichung CityXitun DistrictTaichung City</span>
                    </a>
                    <div class="nHr"></div>
                    <div class="nBot">
                        <a  class="N-bot-a" href="">Read More
                        </a>
                        <div class="nSmall">
                            <a>Information</a>
                            <span>|</span>
                            <span>2021.7 up</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="swiper-slide ">
                    <a class="nThumbnail" href="">
                        <img src={new06} alt=""/>
                    </a>
                    <a class="ntxtName">
                        <span>Vol.02 【Toorak River.】</span>
                    </a>
                    <a class="ntxt">
                        <span>Xitun DistrictTaichung CityXitun DistrictTaichung City</span>
                    </a>
                    <div class="nHr"></div>
                    <div class="nBot">
                        <a  class="N-bot-a" href="">Read More
                        </a>
                        <div class="nSmall">
                            <a>Information</a>
                            <span>|</span>
                            <span>2021.7 up</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="swiper-slide ">
                    <a class="nThumbnail" href="">
                        <img src={new06} alt=""/>
                    </a>
                    <a class="ntxtName">
                        <span>Vol.02 【Toorak River.】</span>
                    </a>
                    <a class="ntxt">
                        <span>Xitun DistrictTaichung CityXitun DistrictTaichung City</span>
                    </a>
                    <div class="nHr"></div>
                    <div class="nBot">
                        <a  class="N-bot-a" href="">Read More
                        </a>
                        <div class="nSmall">
                            <a>Information</a>
                            <span>|</span>
                            <span>2021.7 up</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="swiper-slide ">
                    <a class="nThumbnail" href="">
                        <img src={new06} alt=""/>
                    </a>
                    <a class="ntxtName">
                        <span>Vol.02 【Toorak River.】</span>
                    </a>
                    <a class="ntxt">
                        <span>Xitun DistrictTaichung CityXitun DistrictTaichung City</span>
                    </a>
                    <div class="nHr"></div>
                    <div class="nBot">
                        <a  class="N-bot-a" href="">Read More
                        </a>
                        <div class="nSmall">
                            <a>Information</a>
                            <span>|</span>
                            <span>2021.7 up</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="swiper-slide ">
                    <a class="nThumbnail" href="">
                        <img src={new06} alt=""/>
                    </a>
                    <a class="ntxtName">
                        <span>Vol.02 【Toorak River.】</span>
                    </a>
                    <a class="ntxt">
                        <span>Xitun DistrictTaichung CityXitun DistrictTaichung City</span>
                    </a>
                    <div class="nHr"></div>
                    <div class="nBot">
                        <a  class="N-bot-a" href="">Read More
                        </a>
                        <div class="nSmall">
                            <a>Information</a>
                            <span>|</span>
                            <span>2021.7 up</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Fuck;
