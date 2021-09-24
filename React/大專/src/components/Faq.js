import React, { useState, useEffect } from "react";
import "../css/Faq.css";
//import '../js/faq';
import $ from "jquery";
import "../css/font-awesome-4.7.0/css/font-awesome.css";
import Faq1 from "../img/Faq圖片.png";

function faqMove(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
};

export default function Asshole() {
  useEffect(() => {
    faqMove();
  }, []);

  return (
    <React.Fragment>
      <section class="faqsection">
        <div class="decorateContainer">
          <div class="decorateBoxOne" id="apple"></div>
          <div class="decorateBoxTwo"></div>
        </div>

        <div class="contentBox">
          <div class="contentBoxLeft">
            <div class="contentBoxTitle">
              <h3 class="faqRoundedRectangle">Any</h3>
              <h3>questions?</h3>
            </div>
            <div class="contentBoxImg">
              <img src={Faq1} alt="" />
            </div>
          </div>
          <div class="contentBoxRight">
            <div class="faq">
              <div class="faqOne">
                <p>1.關於產品:</p>
                <button type="button" class="collapsible">
                  有展示商品的實體店面嗎?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    您可以在MARIAN直營店“FACTORY BRANCH”看到商品。
                    <br />
                    地址如下:408台中市南屯區公益路二段51號18樓。
                  </p>
                </div>
                <button type="button" class="collapsible">
                  如何得知新產品訊息?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    新產品信息將隨時在SNS等上公佈。 <br />
                    <a href=""> Instagram的 </a>
                    <br />
                    <a href=""> Facebook的 </a>
                    <br />
                  </p>
                </div>
              </div>

              <div class="faqTwo">
                <p>2.關於網路商店:</p>
                <button type="button" class="collapsible">
                  是否可以進行禮品包裝?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    基於公司對於環保理念訴求，
                    <br />
                    我們不額外提供禮品包裝服務。
                  </p>
                </div>
                <button type="button" class="collapsible">
                  是否可以更改所購買的產品尺寸和顏色?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    我們只接受未使用過的物品換貨和退貨。
                    <br />
                    請附產品一起發送的交貨單。 <br />
                    請注意，運費將由客戶承擔。
                    <br />
                    至於在我們實體商店購買的商品，請聯繫您購買產品的商店。
                    <br />
                    請注意，在以下情況下，我們不能接受退貨或換貨。 <br />
                    ・客戶使用過的產品 <br />
                    ・客戶 劃傷、損壞或弄髒 的產品
                    <br />
                    ・客戶維修或加工過的產品
                    <br />
                    ・產品包裝盒和標籤等配件弄髒了 <br />
                  </p>
                </div>
              </div>
              <div class="faqThree">
                <p>3.關於維修:</p>
                <button type="button" class="collapsible">
                  是否有提供維修服務?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    有，目前有提供維修服務
                    <br />
                    但如果損壞情形過於嚴重，可能無法提供維修幫助。
                    <br />
                  </p>
                </div>
              </div>

              <div class="faqFour">
                <p>4.關於福利品</p>
                <button type="button" class="collapsible">
                  甚麼是福利品?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    ・於鑑賞期內客戶要求退換貨，廠商重新整新後，因拆封而無法以新品方式銷售的產品。
                    <br />
                    ・實體賣展場、展覽活動或是廠商公關宣傳需求而展示與開封、使用過的產品。
                    <br />
                    ・通路過期沒有銷售出去的庫存過季商品，非當季熱銷商品。
                    <br />
                  </p>
                </div>
              </div>
              <div class="faqFive">
                <p>5.關於退貨</p>
                <button type="button" class="collapsible">
                  商品不滿意如何辦理退貨?
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div class="content">
                  <p>
                    於「七天鑑賞期」之內辦理，據消費者保護法之規定，
                    <br />
                    MARIAN提供您享有商品到貨的七日鑑賞期權益，
                    <br />
                    是由消費者完成簽收取件的隔日開始算起至第7天止
                    <br />
                    （如您的收件地址有管理員代收，則以管理員簽收當天開始計算，還請留意），為七日鑑賞期限。
                    <br />
                    ex：完成簽收的時間是12/20，其七天鑑賞期起訖日即為12/21~12/27。
                    <br />
                    您如欲辦理退貨需於「12/27前」至「會員登入」提出退貨申請，並於三日內至7-11辦理退貨。
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="contactUs">
              <p>
                如果您對我們的產品或服務有任何疑問，
                <br />
                請使用諮詢表與我們聯繫。
              </p>
              <button type="button" class="contactUsBtn">
                <a href="#apple">聯絡我們 </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
