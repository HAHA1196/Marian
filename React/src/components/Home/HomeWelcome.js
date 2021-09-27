import React from 'react';
import '../../css/Home/HomeWelcome.css';
import '../../js/home';
import slide1 from '../../img/B04.jpg'
import slide2 from '../../img/B05.jpg'
import slide3 from '../../img/cover02.jpg'

export default function HomeWelcome() {
    return (
        <div id="welcome" >
                <div id="welcomeInner">
                    <div className="welcomeContainer" >
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className="w-carousel wCarousel">
                        <div className="slide">
                            <img src={slide1} alt="slide1"/>
                        </div>
                        <div className="slide">
                            <img src={slide2} alt="slide2"/>
                        </div>
                        <div className="slide">
                            <img src={slide3} alt="slide3"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
