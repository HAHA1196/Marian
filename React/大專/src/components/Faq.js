import React from "react";
import "../css/Faq.css";
//import '../js/faq';
import $ from 'jquery';
import '../css/font-awesome-4.7.0/css/font-awesome.css'
import Faq1 from "../img/Faq圖片.png";

class Faq extends React.Component {
  iconRotate = () => {
    document.getElementById('faqButton').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  document.getElementById('faqButtonOne').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  document.getElementById('faqButtonTwo').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  document.getElementById('faqButtonThree').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  document.getElementById('faqButtonFour').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  document.getElementById('faqButtonFive').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  document.getElementById('faqButtonSix').addEventListener('click', function () {
      var icon = this.querySelector('.iconRight i.fa-arrow-down');
      icon.classList.toggle('rotate');
  });
  }
  componentDidMount(){
    this. iconRotate();
  }

  //以下為原版
  faqMove = () => {
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
  }
  componentDidMount(){
    this.faqMove();
  }

  render() {
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
                        <p>1.About Products:</p>
                        <button id="faqButton" type="button" class="collapsible">
                            Is there a physical store to display products?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                You can see the products at the MARIAN direct store "FACTORY BRANCH". <br />
                                The address is as follows: 408, 18th Floor, No. 51, Section 2, Gongyi Road, Nantun
                                District, Taichung City.
                            </p>
                        </div>
                        <button id="faqButtonOne" type="button" class="collapsible">
                            How to learn about new product information?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                New product information will be announced on SNS etc ,at any time. <br />
                                <a href=""> Instagram's </a><br />
                                <a href=""> Facebook's </a><br />
                            </p>
                        </div>
                    </div>

                    <div class="faqTwo">
                        <p>2.About the online store:</p>
                        <button id="faqButtonTwo" type="button" class="collapsible">
                            Is gift wrapping possible?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                Based on the company's demand for environmental protection, <br />
                                we do not provide additional gift packaging services。
                            </p>
                        </div>
                        <button id="faqButtonThree" type="button" class="collapsible">
                            Is it possible to change the size and color of the purchased product?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                We only accept exchanges and returns of unused items. <br />
                                Please attach the delivery note sent with the product. <br />
                                Please note that the freight will be borne by the customer. <br />
                                As for items purchased in our physical store, please contact the store where you
                                purchased the product. <br />
                                Please note that we cannot accept returns or exchanges in the following cases. <br />
                                ・Products used by customers <br />
                                ・Customers scratched, damaged or soiled products<br />
                                ・Customer repaired or processed products<br />
                                ・Accessories such as product packaging boxes and labels are dirty <br />
                            </p>
                        </div>
                    </div>
                    <div class="faqThree">
                        <p>3.About maintenance:</p>
                        <button id="faqButtonFour" type="button" class="collapsible">
                            Do you provide maintenance services?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                Yes, maintenance services are currently available<br />
                                However, if the damage is too severe, repair assistance may not be provided. <br />
                            </p>
                        </div>
                    </div>

                    <div class="faqFour">
                        <p>4.About welfare products:</p>
                        <button id="faqButtonFive" type="button" class="collapsible">What are welfare goods?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                ・Products that cannot be sold as new products due to unpacking after customers request
                                to return or exchange products during the appreciation period. <br />
                                ・Physical sales of products exhibited, opened, and used in exhibition venues, exhibition
                                activities, or manufacturers' public relations promotion needs. <br />
                                ・Out-of-season items in inventory that have not been sold out after the channel has
                                expired, and are not hot-selling items in the current season. <br />
                            </p>
                        </div>
                    </div>
                    <div class="faqFive">
                        <p>5.About returns:</p>
                        <button id="faqButtonSix" type="button" class="collapsible">
                            How to handle the return if the product is not satisfied?
                            <div class="iconRight">
                                <i class="animate-icon fa fa-arrow-down" aria-hidden="true"></i>
                            </div>
                        </button>
                        <div class="content">
                            <p>
                                It is processed within the "seven-day appreciation period". According to the provisions
                                of the Consumer Protection Law,<br />
                                MARIAN provides you with the right to enjoy the seven-day appreciation period for the
                                arrival of the goods,<br />
                                It is calculated from the next day after the consumer completes the receipt of the
                                package and ends on the 7th day<br />
                                (If your receiving address is collected by the administrator, it will be calculated from
                                the day the administrator signs for it. Please also pay attention), which is the
                                seven-day appreciation period. <br />
                                ex: The time to complete the receipt is 12/20, and the start and end of the seven-day
                                appreciation period is 12/21~12/27. <br />
                                If you want to apply for a return, you need to submit a return application before
                                "12/27" to "Member Login", and process the return within 3 days to 7-11. <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="contactUs">
                    <p>
                        If you have any questions about our products or services,<br />
                        Please use the inquiry form to contact us.
                    </p>
                    <button type="button" class="contactUsBtn">
                        <a href="#apple">Contact us </a>
                    </button>
                </div>
            </div>
        </div>
    </section>
      </React.Fragment>
    );
  }
}

export default Faq;
