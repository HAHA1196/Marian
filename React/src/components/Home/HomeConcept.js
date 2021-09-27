import React from 'react'
import '../../css/Home/HomeConcept.css'
import concept from '../../img/a02.jpg'

export default function HomeConcept() {
    return (
        <div id="concept" >
            <div id="conceptInner">
                <div class="conceptTxt"> 
                    <span>CONCEPT</span>
                </div>
                <div class="conceptF">
                    <div  class="conceptBg"></div>
                    <div class="conceptImg">
                        <img src={concept} alt=""/>
                    </div>
                    <span class="line">
                        <span class="c">
                            <span class="o">A</span>
                        </span>
                        <span class="c">
                            <span class="o">Z</span>
                        </span>
                    </span>
                    <span class="line">
                        <span class="c">
                            <span class="o">Y</span>
                        </span>
                        <span class="c">
                            <span class="o">A</span>
                        </span>
                    </span>
                   
                </div>
            </div>
            <div class="conceptMore">
                <a class="conceptBtn" href="../html/project.html">MORE</a>
            </div>
        </div>
    )
}
