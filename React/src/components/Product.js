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
import product3 from "../img/c03.jpg";
import Fuck from "./Fuck";
import Datatest from "./Datatest";

export default function Product() {
  const [productList, setProductList] = useState([]);
  let history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const { products } = Datatest;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/products").then((data) => {
      // console.log(data.data);
      setProductList(data.data);
    });
  }, []);

  function addcart(){
    cart.reverse();
    setCart([...cart, 
    { title: $(".productsBuyTitleh3")[0].innerText, 
      price: $(".productsBuyTitlePrice")[0].innerText,
      size: $('.selectSize')[0].value,
      qty: $('.selectQty')[0].value,
    }]);
    console.log($('.selectQty')[0].value)
    console.log($(".productsBuyTitleh3")[0].innerText)
    $(".cartItemProductsText").html($(".productsBuyTitleh3").innerText);
  };

  const deleteCart = (val) => {
    console.log(cart[0])
    console.log(val)
    setCart(cart.filter((x) => x != val).reverse())
  }

  function shit(Id, Name, Price) {
    console.log($('.selectSize option')[0].disabled);
    $(".productsBuyTitleh3").html(Name);
    $(".productsBuyTitlePrice").html(Price);

    console.log(Name)
    if(Name.substring(Name.length - 1) == '裝'){
      $('.selectSize option')[0].selected = true;
      $('.selectSize option')[0].disabled = false;
      $('.selectSize option')[1].disabled = false;
      $('.selectSize option')[2].disabled = false;
      $('.selectSize option')[3].disabled = false;
      $('.selectSize option')[4].disabled = true;
    }else if(Name.substring(Name.length - 1) == 'P'){
      $('.selectSize option')[0].disabled = true;
      $('.selectSize option')[1].disabled = true;
      $('.selectSize option')[2].disabled = true;
      $('.selectSize option')[3].disabled = true;
      $('.selectSize option')[4].selected = true;
      $('.selectSize option')[4].disabled = false;
    }else if(Name.substring(Name.length - 1) == '板'){
      $('.selectSize option')[0].disabled = true;
      $('.selectSize option')[1].disabled = true;
      $('.selectSize option')[2].disabled = true;
      $('.selectSize option')[3].disabled = true;
      $('.selectSize option')[4].selected = true;
      $('.selectSize option')[4].disabled = false;
    }else if(Name == '友善海洋防曬乳'){
      $('.selectSize option')[0].disabled = true;
      $('.selectSize option')[1].disabled = true;
      $('.selectSize option')[2].disabled = true;
      $('.selectSize option')[3].disabled = true;
      $('.selectSize option')[4].selected = true;
      $('.selectSize option')[4].disabled = false;
    }

    $(document).ready(function () {
      $(".fa-cart-plus").on("click", function () {
        $(".productsBuy").css("display", "flex");
        $(".productsBuyItem").css("display", "block");
      });
      $(".productsItemCart").on("click", function () {
        $(".productsBuy").css("display", "flex");
        $(".productsBuyItem").css("display", "block");
      });
      $(".productsBuyClose").on("click", function () {
        $(".productsBuy").css("display", "none");
      });
      $(".addToCart").on("click", function () {
        console.log("shit");
        $(".productsBuyItem").css("display", "none");
        $(".productsCart").css("display", "block");
        $(".cartItem").css("display", "flex");
      });
      $(".cartExit").on("click", function () {
        $(".productsCart").css("display", "none");
        $(".productsBuy").css("display", "none");
      });
      $(".cartCheckout").on("click", function () {
        setTimeout(function () {
          window.location.replace("/marian/member");
        }, 1000);
      });
      $(window).scroll(function () {
        let cartStickTop = 50 - $(window).scrollTop();
        if ($(window).scrollTop() <= 50) {
          $(".productsCart").css("top", cartStickTop);
        } else {
          $(".productsCart").css("top", 0);
        }
      });
    });
  }

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
                <React.Fragment >
                  <div className="productsItem">
                    <div className="productsItemPic">
                      <Link to={{
                        pathname:`/marian/productinside/${val.productId}`,
                        productProps: {cart}
                      }} >
                        <img
                          src={`https://picsum.photos/200/280/?random=${val.productId}`}
                        />
                      </Link>
                      <i
                        onClick={() => {
                          shit(
                            val.productId,
                            val.productName,
                            val.productPrice
                          );
                        }}
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
                </React.Fragment>
              );
            })}
          </div>

          <div className="productsBuy" id="productsBuy">
            <div className="productsBuyItem" id="productsBuyItem">
              <div className="productsBuyPic">
                <img src="https://picsum.photos/150/150/?random=1" />
              </div>
              <div className="productsBuyTitle">
                <h3 className="productsBuyTitleh3"></h3>
                <p>
                  NT$<span className="productsBuyTitlePrice"></span>
                </p>
              </div>
              <div className="productsBuyNum">
                <div>
                  <p>Size</p>
                  <select className="selectSize">
                    <option value="L" disabled>L</option>
                    <option value="M" disabled>M</option>
                    <option value="S" disabled>S</option>
                    <option value="XS" disabled>XS</option>
                    <option value="F" disabled>F</option>
                  </select>
                </div>
                <div>
                  <p>Quantity</p>
                  <select className="selectQty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <button
                  onClick={() => {
                    addcart();
                  }}
                  className="addToCart"
                >
                  Add to cart
                </button>
              </div>
              <div className="productsBuyClose">x</div>
            </div>
            <div className="productsCart">
              <div className="productsCartTitle">
                <p>Shopping Cart</p> <span className="cartExit">x</span>
              </div>

              {cart.reverse().map((val) => {
                return (
                  <div className="cartItem">
                    <div className="cartItemPic">
                      <img src={`https://picsum.photos/100/100/?random=${val.price}`} />
                    </div>
                    <div className="cartItemProducts">
                      <p className="cartItemProductsText">{val.title}</p>
                      <div 
                        className="cartItemProductsDelete"
                        onClick={() => deleteCart(val)}
                      >x</div>
                      <p>{val.size}</p>
                      <p>{val.qty} x NT${val.price}</p>
                      <p>NT${val.qty * val.price}</p>
                    </div>
                  </div>
                );
              })}

              <button class="cartCheckout">
                <Link to="/marian/member">Order Checkout</Link>
              </button>
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
