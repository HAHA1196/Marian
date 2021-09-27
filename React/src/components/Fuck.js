import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";

function shit() {
  console.log(this)
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
    $(".cartItemProductsDelete").on("click", function () {
      $(".cartItem").css("display", "none");
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

function Fuck(props) {
  const{productList} = props;
  console.log(productList);

  return (
    <>
     {productList.map((val) => {
              return (
                <React.Fragment>
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
                 
                </React.Fragment>
              );
            })}
    </>
  );
}

export default Fuck;
