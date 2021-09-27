import React from 'react'
import '../../css/Home/HomeMaterial.css'
import material1 from '../../img/m07.jpg'
import material2 from '../../img/m102.jpg'
import material3 from '../../img/m201.jpg'

export default function Material() {
    return (
        <div id="material" >
            <div id="materialInner">
                <div class="materialTxt"> 
                    <span>MATERIAL</span>
                </div>
                    <div class="matF">
                        <div class="matfLeft">
                                <img src={material1} alt=""/>
                                <div></div>
                        </div>
                        <div class="matfRight">
                            <h1>Ethoxyline Resin</h1>
                            <p>Firewire, which is ECOBOARD-certified
                                 by the watchdog Sustainable Surf, 
                                is the only major brand to use all bio-boards</p>
                        </div>
                    </div>
                    <div class="matS">
                        <div class="matsLeft">
                            <h1>Ethoxyline Resin</h1>
                            <p>Firewire, which is ECOBOARD-certified
                                 by the watchdog Sustainable Surf, 
                                is the only major brand to use all bio-boards
                            </p>
                        </div>
                        <div class="matsRight">
                            <img src={material2} alt=""/>
                        </div>
                    </div>
                    <div class="matF">
                        <div class="matfLeft">
                                <img src={material3} alt=""/>
                                <div></div>
                        </div>
                        <div class="matfRight">
                            <h1>Ethoxyline Resin</h1>
                            <p>Firewire, which is ECOBOARD-certified
                                 by the watchdog Sustainable Surf, 
                                is the only major brand to use all bio-boards</p>
                        </div>
                    </div>
                    <div>
                    </div>
            </div>
            <div class="sns_more">
                <a class="sns-btn" href="../html/project.html">MORE</a>
            </div>
        </div>
    )
}
