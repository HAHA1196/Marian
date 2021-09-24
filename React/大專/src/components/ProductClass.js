import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import ProductBuy from "./Products/ProductBuy";
import "../css/Product.css";
import "../css/reset.css";
import "../js/productcart";
import product1 from "../img/c01.jpg";
import product2 from "../img/c02.jpg";
import product3 from "../img/c03.jpg";

export default function ProductClass() {
    let { productClass } = useParams();
    const [productList, setProductList] = useState([]);
    let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/products/${productClass}`).then((data) => {
      console.log(data.data);
      console.log(productClass);
      setProductList(data.data);
    });
  }, [productClass]);

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
                    <Link to="/marian/product/productinside">
                      <img src={`https://picsum.photos/200/280/?random=${val.productId}`} />
                    </Link>
                    <i
                      id="productsItemCart"
                      className="fa fa-cart-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3>
                    <Link to="/marian/product/productinside">
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

          <ProductBuy />

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
