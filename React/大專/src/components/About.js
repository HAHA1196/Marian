import React from 'react'
import '../css/About.css'
import About1 from "../img/鯨魚.jpg";
import About2 from "../img/元件1.png";
import About3 from "../img/元件2.png";
import About4 from "../img/元件3.png";
import About5 from "../img/元件4.png";
import About6 from "../img/元件5.png";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <React.Fragment>
<section class="aboutSection">
    <div class="allContainer">
      <div class="conceptTitle">
        {/* <span>公司理念</span> */}
        <span>BRAND CONCEPT</span>

      </div>

      <div class="conceptLeft">
        <div class="imgRectangle">
          <div class="roundedRectangle"></div>
          <img src={About1} alt="" />
        </div>
        <div class="conceptRight">
          {/* <p>
            Marian有限公司 自創立於1989年以來，專注於環境保護的使命，<br />
            建立專業資源再造的事業體系。<br />
            以零排放為終極的目標，誠信公平為<br />
            在事業體系中專注三大項目。
          </p> */}
          <p>
            Marian CO.Ltd foundation since 1989，focuse on the protection of nature，<br />
            establish a professional resource reengineering business system。<br />
            "ZERO-emission" is our subject，include Integrity and Fairness<br />
            
          </p>
          <br />
          {/* <p>
            REUSE 再生使用<br />
            經過專業的分類與妥當的處理，再生使用和處理<br />
            都可以將以無用處的東西，發掘嶄新的生命與善加使用的另種方式。
          </p> */}
          <p>
            REUSE<br />
            with our professional with the dehydration and recycle,<br />
            we can discover another pure way to reuse it .
            都可以將以無用處的東西，發掘嶄新的生命與善加使用的另種方式。
          </p>
          <br /><br />
          {/* <p>
            REDUCE 減少浪費<br />
            不斷被丟棄的垃圾，一再的製造，複雜的加工。<br />
            這些都是關於處理廢棄物相當的重要的問題。<br />
            在有限的空間與資源狀況下，<br />
            唯有減少浪費，才能達到減少廢棄物的製造的循環。
          </p> */}
          <p>
            REDUCE<br />

            The issue about Garbage repeated manufacturing, complicated processing。<br />
            always be the top of our task。<br />
            With limited resources,<br />
            Only by reducing waste can be the soulation.
          </p>
          <br />

        </div>
      </div>
    </div>

    <div class="conceptBottom">
      <div class="conceptBottomLeft"></div>
      <div class="conceptBottomRight">
        {/* <p>
          RECYCLE 回收循環<br />
          廢衝浪板、廢潛水衣、廢滑桿無論是什麼樣的資源廢棄物，<br />
          唯有利用有效的資源回收行動。透過專業的處理。<br />
          基於在這種專業循環的環境使命下，竭誠的為客戶服務與環境保護努力。
        </p> */}
        <p>
          RECYCLE<br />
          No matter what kind of resource waste,<br />
          Through professional treatment can use effective resource recovery actions. <br />
          we are dedicated to serving customers and working hard on environmental protection.
        </p>
      </div>
      <div class="materialTitle">
        <div class="roundedRectangle2"></div>
        <span>Material selection</span>
      </div>
    </div>

    <div class="materialContainer">

      <div class="materialOne">
        <div class="materialOneLeft">
          <img src={About2} alt="" />
        </div>

        <div class="materialOneRight">
          <div class="materialOneRightText">
            <div class="eleTwo">
              <img src={About3} alt="" />
            </div>
            {/* <h3>Bioepoxy</h3> */}
            <h3>Bioepoxy</h3>
            <br /><br /><br />
            {/* <p>
              一般的衝浪板是由聚酯樹脂和聚氨酯泡沫組合而成的，<br />
              並稱它們為PE / PU，而這兩樣物質都有很高的毒性。<br />
              我們則是使用生物環氧樹脂和聚苯乙烯，<br />
              這兩者的組合比起一般的材質來說，<br />
              所排放的VOC(揮發性有機化合物)差了50倍之多<br />
              <br />
              多年下來，<br />
              我們也透過了回收原材料使每塊衝浪板的資源浪費減少了95％。<br />
              與傳統的製作衝浪板的有毒方式相比之下。<br />
            </p> */}
            <p>
              Surfboards are commonly made of polyester resin and polyurethane foam,<br />
              calls "PE / PU"，Both of these substances are highly toxic。<br />
              We use bio-epoxy resin and polystyrene,<br />
              The combination of  two ,<br />
              The VOC emitted is 50 times worse<br />
              <br />
              Years down,<br />
              We have also reduced the waste by 95%。<br />
              {/* 與傳統的製作衝浪板的有毒方式相比之下。<br /> */}
            </p>
          </div>
        </div>
      </div>

      <div class="materialTwo">
        <div class="materialTwoLeft">
          <div class="roundedRectangle3"></div>
          <div class="eleThree">
            <img src={About4} alt="" />
          </div>
          <div class="materialTwoLeftText">
            {/* <h3>Vegetable rubber</h3> */}
            <h3>Vegetable rubber</h3>

            <br /><br /><br />
            {/* <p>
             Traditional wetsuits use petrochemical synthetic rubber，<br />
              製造過程中會產生許多有害毒物汙染環境，<br />
              植物性橡膠是從灌木提煉而來，<br />
              且灌木的種植過程中沒有使用農藥，<br />
              使用環保材質，<br />
              藉由提升需求產量而使成本降低；<br />
              同時也讓整個產業轉向，<br />
              發揮對環境友善的更大影響力。<br />
            </p> */}
            <p>
              Traditional wetsuits use petrochemical synthetic rubber，<br />
              Many harmful poisons will be produced during the manufacturing process to pollute the environment，<br />
              Plant rubber is extracted from shrubs,<br />
              And no pesticides were used in the bush planting process,<br />
              Use environmentally friendly materials，<br />
              Cost reduction by increasing demand output<br />
              At the same time, it also makes the whole industry turn,<br />
              To exert greater influence on environmental friendliness.<br />
            </p>
          </div>
        </div>

        <div class="materialTwoRight">
          <div class="eleFour">
            <img src={About5} alt="" />
          </div>
        </div>
      </div>

      <div class="materialThree">
        <div class="materialThreeLeft">
          <div class="roundedRectangle4"></div>
          <img src={About6} alt="" />
        </div>
        <div class="materialThreeRight">
          <div class="materialThreeRightText">
            {/* <h3>海洋友善防曬乳</h3> */}
            <h3>Ocean-friendly sunscreen</h3>
            <br />
            {/* <p>
              The ocean is our home。 <br />
              因此對於我們來說，<br />
              推出海洋友善防曬並非為討好市場需求，<br />
              <br />
              生態環境遭破壞的消息層出不窮，<br />
              但我們希望大家都能對環境多一份在乎，<br />
              因為那是我們的家，關於環境保護， <br />
              也許永遠都沒有一個一百分的選項，<br />
              但是我們可以做出一個最接近「善」的選擇，並且不放棄、不冷漠。<br />
              <br />
              禁用化學成份「毒害珊瑚」的防曬產品，<br />
              主要是羥苯甲酮（Oxybenzone）和<br />
              甲氧基肉桂酸辛酯（Octinoxate/Octyl Methoxycinnamate）<br />
              這兩種化學防曬物質<br />
            </p> */}
            <p>
              The ocean is our home. <br />
              for us,<br />
              The introduction of ocean-friendly sunscreen is not to please the market demand.<br />
              <br />
              News of the destruction of the ecological environment is endless,<br />
              But we hope everyone can care more about the environment，<br />
              Because that is our home, regarding environmental protection, <br />
              Maybe there will never be a 100-point option，<br />
              But we can make a choice that is closest to "goodness" without giving up or being indifferent.<br />
              <br />
              Banning sunscreen products with chemical ingredients that "poison corals",<br />
              Oxybenzone,<br />
              Octinoxate/Octyl Methoxycinnamate<br />
              These two chemical sunscreen substances<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </React.Fragment>
    )
}