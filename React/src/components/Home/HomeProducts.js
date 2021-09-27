import React from 'react'
import '../../css/Home/HomeProducts.css'
import product1 from '../../img/p02.jpg'
import product2 from '../../img/p03.jpg'

export default function Products() {
    return (
        <div id="product" >
            <div class="productInner">
                <div class="productTxt"> 
                    <span>PRODUCT</span>
                </div>
                <div class="productImgC">
                    <div class="item">
                        <p>Adopt the pace of nature: her secret is patience. </p>
                    </div>
                    <div class="item">
                        B
                    </div>
                    <div class="item">
                        C
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={product1} alt=""/>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={product2} alt=""/>
                        </a>
                    </div>
                    <div class="item">
                       
                    </div>
                    <div class="item">
                        g
                    </div>
                    <div class="item">
                        h
                    </div>
                    <div class="item">
                        <div class="itemMore">
                            <a class="itemBtn" href="../html/project.html">MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
