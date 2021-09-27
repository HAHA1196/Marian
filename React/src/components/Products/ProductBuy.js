import React from 'react'
import '../../css/font-awesome-4.7.0/css/font-awesome.css'
import '../../css/Product.css'
import { Link } from "react-router-dom";

export default function ProductBuy() {
    return (
        <div className="productsBuy">
                <div className="productsBuyItem">
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
    )
}
