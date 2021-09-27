import React from 'react'
import '../../css/font-awesome-4.7.0/css/font-awesome.css'
import '../../css/Product.css'
import '../../js/productcart'
import { Link } from "react-router-dom";

export default function ProductItem(onAdd) {
    return (
        <div className="productsBuyItem" id="productsBuyItem">
                      <div className="productsBuyPic">
                        <img src="https://picsum.photos/150/150/?random=1" />
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
                        <button
                          onClick={onAdd}
                          className="addToCart"
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="productsBuyClose">x</div>
                    </div>
    )
}
