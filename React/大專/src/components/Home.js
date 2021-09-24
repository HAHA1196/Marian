import React from 'react'
import Aos from 'aos'
import Material from './Material'
import "aos/dist/aos.css"
import "../css/Home.css"
// import "../js/home";
import {Link} from "react-router-dom"
import slide01 from '../img/B04.jpg' 
import slide02 from '../img/b10.jpeg' 
import slide03 from '../img/b05.jpeg' 

import mat01 from '../img/m04.jpg'
import mat02 from '../img/m102.jpg'
import mat03 from '../img/m201.jpg'

import new01 from '../img/we06.jpg'
import new02 from '../img/we07.jpg'
import new03 from '../img/出荷業務休止インフォメーション.jpeg'
import new04 from '../img/we07.jpg'
import new05 from '../img/we06.jpg'
import new06 from '../img/we06.jpg'

// import { Swiper, SwiperSlide } from 'swiper/react';


import p01 from '../img/p12.jpg'
import p02 from '../img/p07.jpg'
import p03 from '../img/p10.jpg'
import p04 from '../img/p05.jpg'
import p05 from '../img/p11.jpg'
import p06 from '../img/p08.jpg'

import sns01 from '../img/0003.jpg'
import sns02 from '../img/0003.jpg'
import sns03 from '../img/0003.jpg'











// import slide03 from '../img/b05.jpeg' ;




export default function Home() {
    return (
        <React.Fragment>
    <article>
       {/* <section id="welcomeI" >
                 <div id="welcomeInner">
                   <div class="welcomeContainer" >
                        <h2></h2>
                        <p></p>
                    </div>
                   <div class="w-carousel wCarousel">
                         <div class="slide">
                             <img src={slide01} alt=""/>
                         </div>
                         <div class="slide">
                             <img src={slide02} alt=""/>
                         </div>
                         <div class="slide">
                             <img src={slide03}  alt=""/>
                         </div>
                     </div>
                 </div>
         </section> */}
        <section id="cover" class="main">
            <div class="main_img-container">
                <div>
                    <img class="main_img" src={slide01} alt=""/>
                </div>
                <div>
                    <img class="main_img " src={slide02} alt=""/>
                </div>
                <div>
                    <img class="main_img " src={slide03} alt=""/>
                </div> 
                <div>
                    <img class="main_img "src={slide01}  alt=""/>
                </div>
                <div>
                    <img class="main_img " src={slide02} alt=""/>
                </div>  
            </div>
        </section>
         <section id="concept" data-aos="fade-up">
            <div id="conceptInner">
                 <div class="conceptTxt"> 
                     <span>CONCEPT</span>
                 </div>
                 <div class="conceptF">
                    <div id="conceptImg" class="conceptImg"></div>
                    <div id="conceptBg" class="conceptBg"></div>
                    <div class="conceptLine">
                        <span>Less</span><br/>
                        <span>is</span><br/>
                        <span>More</span><br/>
                    </div>
                 </div>
            </div>
            <div class="conceptContent">
               <div>
                   <h1>Brand Concept</h1>
                   <p>Marian, Mar,represent the ocean,Marian
                        also means the preciousness of origin, Whales are associated with compassion and solitude, 
                       and knowledge of both life and death. remind us the sustainable environmental protection.
                   </p>
               </div>
           </div>
            <div class="btnContainer"> 
                <div class="btnMore btnCenter">
                     <span>Read&nbsp;More</span>
                     <div  class="btn">
                         <Link to="/marian/product"></Link>
                     </div>
                 </div>
             </div> 
         </section>
         <Material/>
        {/* <section id="material" >
            <div id="materialInner">
                <div data-aos="fade-up"  class="materialTxt"> 
                    <span>MATERIAL</span>
                </div>
                    <div class="matF">
                        <div data-aos="fade-up" data-aos-duration="3000"  class="matfLeft">
                            <div>
                                <img src={mat01} alt=""/>
                            </div>
                        </div>
                        <div   data-aos="fade-up-right" data-aos-duration="2500"  class="matfRight">
                            <h1>Ethoxyline Resin</h1>
                            <p>Firewire, which is ECOBOARD-certified
                                 by the watchdog Sustainable Surf, 
                                is the only major brand to use all bio-boards</p>
                        </div>
                    </div>
                    <div  class="matS">
                        <div data-aos="fade-up" data-aos-duration="3000" class="matsLeft">
                            <h1>guayule plant</h1>
                            <p> We makes plant-based bio-rubbers derived from the guayule plant,
                                and compsed it with  60% guayule rubber and 40% neoprene.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000"  class="matsRight">
                            <div>
                                <img src={mat02} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div  class="matT">
                        <div data-aos="fade-down" data-aos-duration="3000"  class="mattLeft">
                            <div>
                                <img src={mat03} alt=""/>
                            </div>
                        </div>
                        <div  data-aos="fade-up-right" data-aos-duration="3000"  class="mattRight">
                            <h1>Coconut Oil</h1>
                            <p> Coconut oil  can  block around 20 percent of the sun's damaging rays. 
                            which also block 97 percent of the sun rays.</p>
                        </div>
                    </div>
               <div class="btnContainer">
                    <div class="btnMore btnCenter">
                        <span>Read&nbsp;More</span>
                        <div  class="btn">
                            <a href="../html/project.html"></a>
                        </div>
                    </div>
                </div> 
            </div>
        </section> */}
        <section id="news">
            <div id="newsInner" class="newsInner">
                <div data-aos="fade-right" data-aos-duration="1500" class="newsTxt"> 
                    <span>NEWS</span>
                </div>
            </div>
            <div class="swiper mySwiper">
                <div class=" swiper-wrapper ">
                    <div class=" swiper-slide ">
                        <a class="nThumbnail" href="">
                            <img src={new01} alt=""/>
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
                            <img src={new02} alt=""/>
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
                            <img src={new03} alt=""/>
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
                            <img src={new04} alt=""/>
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
                            <img src={new05} alt=""/>
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
                </div>
            </div>
            {/* <div class="btnContainer btnCenter">
                <div class="btnMore">
                    <span>Read&nbsp;More</span>
                    <div  class="btn">
                        <Link to="/marian/product"></Link>
                    </div>
                </div>
            </div>  */}
        </section>
        <section id="product" >
            <div class="productInner">
                <div data-aos="fade" data-aos-duration="1500"  class="productTxt"> 
                    <span>PRODUCT</span>
                    <span></span> 
                </div>
                <div class="productImgC">
                    <div class="item">
                        <p>Marian. </p>
                    </div>
                    <div class="item">
                        <a href="">
                            <div>
                                <img src={p01} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <div>
                                <img src={p02} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div class="item">
                       
                        <a href="">
                            <div>
                                <img src={p03} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <div>
                                <img src={p04} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div class="item">
                        <p>Nature all around you. </p>
                     
                    </div>
                    <div class="item">
                        <a href="">
                            <div>
                                <img src={p05} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div class="item">
                      
                        <a href="">
                            <div>
                                <img src={p06} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div class="item btnMore" >
                        <div class="btnMore">
                            <span>Read&nbsp;More</span>
                            <div  class="btn">
                                <a href="../html/project.html"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
       <section id="sns" >
            <div    class="snsInner">
                <div data-aos-duration="1500"  class="snsTxt"> 
                    <span>REVIEWS</span>
                </div> 
                <div class="snsContianer" >
                   <div  class="snsCard">
                       <div>
                           <img src={sns01} alt=""/>
                       </div>
                       <h2>Our lover in that summer</h2>
                       <p>
                        The texture of sunscreen was really softly and it have the pure favor of coconut
                        with no chemical composition in it,it still can prevent me from Sunburn!
                       </p>
                       <h3>cora zhan</h3>
                   </div>
                   <div  class="snsCard">
                        <div>
                            <img src={sns02} alt=""/>
                        </div>
                        <h2>Our lover in that summer</h2>
                        <p>
                            The texture of sunscreen was really softly and it have the pure favor of coconut
                            with no chemical composition in it,it still can prevent me from Sunburn!
                        </p>
                        <h3>cora zhan</h3>
                    </div>
                    <div  class="snsCard">
                        <div>
                            <img src={sns03} alt=""/>
                        </div>
                        <h2>Our lover in that summer</h2>
                        <p>
                            The texture of sunscreen was really softly and it have the pure favor of coconut
                            with no chemical composition in it,it still can prevent me from Sunburn!
                        </p>
                        <h3>cora zhan</h3>
                    </div>
                </div>
                <div class="btnMore">
                    <span>Read&nbsp;More</span>
                    <div  class="btn">
                        <a href="../html/project.html"></a>
                    </div>
                </div>
            </div>
        </section>
    </article>    
    {/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>  
    <script src="../js/all.js"></script>    
    <script src="../js/home.js"></script> */}
    
     </React.Fragment>
    )
}

