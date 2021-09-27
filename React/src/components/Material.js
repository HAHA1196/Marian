import React ,{ useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import"../css/Home.css"
import mat01 from '../img/m04.jpg'
import mat02 from '../img/m102.jpg'
import mat03 from '../img/m201.jpg'

export const Material=()=>{
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
    <section id="material" >
        <div id="materialInner">
            <div data-aos="fade-up"  className="materialTxt"> 
                <span>MATERIAL</span>
            </div>
                <div  className="matF">
                    <div data-aos="fade-up" data-aos-duration="3000"   className="matfLeft">
                        <div>
                            <img src={mat01} alt=""/>
                        </div>
                    </div>
                    <div   data-aos="fade-up-right" data-aos-duration="2500"   className="matfRight">
                        <h1>Ethoxyline Resin</h1>
                        <p>Firewire, which is ECOBOARD-certified
                            by the watchdog Sustainable Surf, 
                            is the only major brand to use all bio-boards</p>
                    </div>
                </div>
                <div   className="matS">
                    <div data-aos="fade-up" data-aos-duration="3000"  className="matsLeft">
                        <h1>guayule plant</h1>
                        <p> We makes plant-based bio-rubbers derived from the guayule plant,
                            and compsed it with  60% guayule rubber and 40% neoprene.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000"   className="matsRight">
                        <div>
                            <img src={mat02} alt=""/>
                        </div>
                        
                    </div>
                </div>
                <div   className="matT">
                    <div data-aos="fade-down" data-aos-duration="3000"   className="mattLeft">
                        <div>
                            <img src={mat03} alt=""/>
                        </div>
                    </div>
                    <div  data-aos="fade-up-right" data-aos-duration="3000"   className="mattRight">
                        <h1>Coconut Oil</h1>
                        <p> Coconut oil  can  block around 20 percent of the sun's damaging rays. 
                        which also block 97 percent of the sun rays.</p>
                    </div>
                </div>
        <div  className="btnContainer">
                <div  className="btnMore btnCenter">
                    <span>Read&nbsp;More</span>
                    <div   className="btn">
                        <a href="../html/project.html"></a>
                    </div>
                </div>
            </div> 
        </div>
    </section>
    );
};

export default Material;