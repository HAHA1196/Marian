import React from 'react'
import '../../css/Home/HomeNews.css'
import news1 from '../../img/we06.jpg'
import news2 from '../../img/we07.jpg'
import news3 from '../../img/出荷業務休止インフォメーション.jpeg'

export default function News() {
    return (
        <div id="news">
            <div id="newsInner" class="newsInner">
                <div class="newsTxt"> 
                    <span>NEWS</span>
                    <span class="arrowLeft"></span>
                    <span class="arrowLine"></span>
                    <span class="arrowRight"></span>
                    <span class="arrowLine"></span>
                </div>
            </div>
            {/* <!--swiper　swiper-wrapper swiper-slide是套件專用名稱　請勿修改  --> */}
            <div class="swiper mySwiper">
                <div class=" swiper-wrapper ">
                    <div class=" swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={news1} alt=""/>
                        </a>
                        <a class="ntxtName">
                            <span>Vol.01 【Toorak River.】</span>
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
                    <div class="swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={news2} alt=""/>
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
                    <div class="swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={news3} alt=""/>
                        </a>
                        <a class="ntxtName">
                            <span>Vol.03 【Toorak River.】</span>
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
                    <div class="swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={news2} alt=""/>
                        </a>
                        <a class="ntxtName">
                            <span>Vol.04 【Toorak River.】</span>
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
                    <div class="swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={news1} alt=""/>
                        </a>
                        <a class="ntxtName">
                            <span>Vol.05 【Toorak River.】</span>
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
                    <div class="swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={news2} alt=""/>
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
                    
                </div>
                
            </div>
            <div class="newsMore">
                <a class="newsBtn" href="../html/project.html">MORE</a>
            </div>
        </div>
    )
}
