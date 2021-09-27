import React from 'react'
import '../../css/Home/HomeReviews.css'
import review from '../../img/0003.jpg'

export default function Reviews() {
    return (
        <div id="sns" >
            <div   class="snsInner">
                <div class="snsTxt"> 
                    <span>Reviews</span>
                </div> 
                <div class="snsContianer" >
                   <div  class="snsCard">
                       <div>
                           <img src={review} alt=""/>
                       </div>
                       <h1>欣賞美麗的海洋生態嗎</h1>
                       <p>
                        您可有機會潛進大海，欣賞美麗的海洋生態嗎？澄藍的海下面，覆蓋著地球80%的生物，
                        海浪推動水流，供給氧氣、營養與能量，平衡氣候，孕育地球的生命
                       </p>
                       <h3>cora zhan</h3>


                   </div>
                   <div  class="snsCard">
                        <div>
                            <img src={review} alt=""/>
                        </div>
                        <h1>欣賞美麗的海洋生態嗎</h1>
                        <p>
                        您可有機會潛進大海，欣賞美麗的海洋生態嗎？澄藍的海下面，覆蓋著地球80%的生物，
                        海浪推動水流，供給氧氣、營養與能量，平衡氣候，孕育地球的生命
                        </p>
                        <h3>cora zhan</h3>
                    </div>
                    <div  class="snsCard">
                        <div>
                            <img src={review} alt=""/>
                        </div>
                        <h1>欣賞美麗的海洋生態嗎</h1>
                        <p>
                        您可有機會潛進大海，欣賞美麗的海洋生態嗎？澄藍的海下面，覆蓋著地球80%的生物，
                        海浪推動水流，供給氧氣、營養與能量，平衡氣候，孕育地球的生命
                        </p>
                        <h3>cora zhan</h3>
                    </div>
                </div>
            </div>
            <div class="snsMore">
                <a class="snsBtn" href="../html/project.html">MORE</a>
            </div>
        </div>
    )
}
