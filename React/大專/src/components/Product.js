import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import $ from "jquery";
import ProductItem from "./Products/ProductItem";
import ProductBuy from "./Products/ProductBuy";
import "../css/Product.css";
import "../css/reset.css";
import "../js/productcart";
import product1 from "../img/c01.jpg";
import product2 from "../img/c02.jpg";
import product3 from "../img/C05.jpg";

function shit() {
  $(document).ready(function(){
    $('.fa-cart-plus').on('click',function(){
        $('.productsBuy').css("display","flex");
        $('.productsBuyItem').css("display","block");
    })
    $('.productsItemCart').on('click',function(){
        $('.productsBuy').css("display","flex");
        $('.productsBuyItem').css("display","block");
    })
    $('.productsBuyClose').on('click',function(){
        $('.productsBuy').css("display","none");
    })
    $('.addToCart').on('click',function(){
        console.log('shit')
        $('.productsBuyItem').css("display","none");
        $('.productsCart').css("display","block");
        $('.cartItem').css("display","flex");
    })
    $('.cartItemProductsDelete').on('click',function(){
        $('.cartItem').css("display","none");
    })
    $('.cartExit').on('click',function(){
        $('.productsCart').css("display","none");
        $('.productsBuy').css("display","none");
    })
    $('.cartCheckout').on('click',function(){
        setTimeout(function(){
            window.location.replace('/marian/member'); 
        }, 1000);
    })
    $(window).scroll(function(){
        let cartStickTop = 50 - $(window).scrollTop();
        if($(window).scrollTop() <= 50){
            $('.productsCart').css("top",cartStickTop);
        }else{
            $('.productsCart').css("top",0);
        }
    })
})
}

export default function Product() {
  const [productList, setProductList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/products").then((data) => {
      console.log(data.data);
      setProductList(data.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div id="welcomeC">
        <div id="welcomecInner">
          <div className="welcomecCont">
            <h2>All Products</h2>
          </div>
          <div className="wCarousel">
            <div className="slide">
              <img src={product1} alt="" />
            </div>
            <div className="slide">
              <img src={product2} alt="" />
            </div>
            <div className="slide">
              <img src={product3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <main className="productMain">
        <div className="products">
          <div className="productsSection">
            {productList.map((val) => {
              return (
                <div className="productsItem">
                  <div className="productsItemPic">
                    <Link to={`/marian/productinside/${val.productId}`}>
                      <img
                        src={`https://picsum.photos/200/280/?random=${val.productId}`}
                      />
                    </Link>
                    <i
                      onClick={shit}
                      id="productsItemCart"
                      className="fa fa-cart-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3>
                    <Link to={`/marian/productinside/${val.productId}`}>
                      {val.productName}
                    </Link>
                  </h3>
                  <p>NT{val.productPrice}</p>
                  <div className="productsItemCart">
                    <i
                      id="productsItemCart"
                      className="fa fa-cart-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="productsBuy" id="productsBuy">
                <div className="productsBuyItem" id="productsBuyItem">
                    <div className="productsBuyPic">
                        <img src="https://picsum.photos/150/150/?random=1"/>
                    </div>
                    <div className="productsBuyTitle">
                        <h3>“TYPE-X” 3D L/S Pocket Tee - L-Gray</h3>
                        <p>NT$1,580</p>
                    </div>
                    <div className="productsBuyNum">
                        <div>
                              <p>Size</p>
                              <select>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="XS">XS</option>
                              </select>
                        </div>
                        <div>
                              <p>Quantity</p>
                              <select>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10+">10+</option>
                              </select>
                        </div>
                        <button className="addToCart">Add to cart</button>
                    </div>
                    <div className="productsBuyClose">x</div>
                </div>
                <div className="productsCart">
                    <div className="productsCartTitle"><p>Shopping Cart</p> <span className="cartExit">x</span></div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=2"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=3"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="cartItemPic">
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                        <div className="cartItemProducts">
                            <p>“TYPE-X” 3D L/S Pocket Tee - Iron</p>
                            <div className="cartItemProductsDelete">x</div>
                            <p>M</p>
                            <p>1 x NT$1580</p>
                        </div>
                    </div>
                    <button class="cartCheckout"><Link to="/marian/member">Order Checkout</Link></button>
                </div>
            </div>

          <div className="productsFooter">
            <div className="productsPagePrev">Prev</div>
            <div className="productsPage">
              <a href="#" className="productsPageNum">
                1
              </a>
              <a href="#" className="productsPageNum">
                2
              </a>
              <a href="#" className="productsPageNum">
                3
              </a>
              <a href="#" className="productsPageNum">
                ...
              </a>
              <a href="#" className="productsPageNum">
                7
              </a>
            </div>
            <div className="productsPageNext">Next</div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
