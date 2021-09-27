import React from 'react'
import $ from 'jquery'
import '../css/cart.css'

class Cart extends React.Component {
    cartReact = () => {
        $(document).ready(function(){
            $('.infoCartDetails').slideToggle();
            $('.infoCartOrder').slideToggle();

            //cart
            $('.cartInfoCheckout').on('click',function(){
                $('.cart').css("display","none");
                $('.info').css("display","flex");
                //change color for process 'Infos'
                $('.cartProcessItemInfo').addClass('changeColorInfo').css("background-color","#f77b1c");
            })

            //info 
            $('.infoCartTitle').on('click',function(){
                $('.infoCartDetails').slideToggle();
                $('.infoCartOrder').slideToggle();
                $('.cartTitleArrow').toggleClass('cartTitleArrowRotate');
            })
            $('.cartExpends').on('click',function(){
                $('.infoCartDetails').slideToggle();
                $('.infoCartOrder').slideToggle();
                $('.cartTitleArrow').toggleClass('cartTitleArrowRotate');
            })
            $('.backToCart').on('click',function(){
                $('.cart').css("display","flex");
                $('.info').css("display","none");
            })
            $('.infoSend').on('click',function(){
                $('.info').css("display","none");
                $('.order').css("display","flex");
                $('.cartProcessItemConfirm').addClass('changeColorConfirm').css("background-color","#f77b1c");
            })

            //order
            $('.backToInfo').on('click',function(){
                $('.info').css("display","flex");
                $('.order').css("display","none");
            })
        })
    }
    componentDidMount(){
        this.cartReact();
    }

    render() { 
        return <main className="cartMain">
        <section className="cart cartSection">
            <div className="cartProcess">
                <div className="cartProcessItem">
                    <p>1</p>
                    <p>Cart</p>
                </div>
                <div className="cartProcessItem cartProcessItemMiddle">
                    <p>2</p>
                    <p>Infos</p>
                </div>
                <div className="cartProcessItem">
                    <p>3</p>
                    <p>Confirm</p>
                </div>
            </div>
            <div className="cartItemCart">
                <h3 className="cartTitle">Cart (1 piece)</h3>
                <div className="cartItemInfo">
                    <div className="cartItemInfoTitle">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                    <div className="cartItemInfoItems">
                        <div>
                            <img src="https://picsum.photos/50/50/?random=1"/>
                        </div>
                        <div>
                            <p>MELSIGN - Strap Washed Cargo Shorts - Black</p>
                            <p>S</p>
                        </div>
                        <div>NT$2,380</div>
                        <div>
                            <span>-</span> 
                            <p>2</p> 
                            <span>+</span>
                        </div>
                        <div>NT$4,760</div>
                        <div>x</div>
                    </div>
                </div>
            </div>
            <div className="cartPay">
                <h3 className="cartTitle">Payment & Delivery</h3>
                <div className="cartPayInfo">
                    <p>Delivery location</p>
                    <select>
                        <option value="">Taiwan</option>
                        <option value="">North America</option>
                        <option value="">South America</option>
                        <option value="">Africa</option>
                        <option value="">Europe</option>
                        <option value="">Asia</option>
                        <option value="">Oceania</option>
                    </select>
                    <p>Delivery Methods</p>
                    <select>
                        <option value="">711</option>
                        <option value="">Family Mart</option>
                        <option value="">OK</option>
                    </select>
                    <p>Payments</p>
                    <select>
                        <option value="">Credit Card</option>
                        <option value="">ATM</option>
                        <option value="">Paypal</option>
                    </select>
                </div>
            </div>
            <div className="cartInfo">
                <h3 className="cartTitle">Order Information</h3>
                <div className="cartInfoItem">
                    <p>Price &nbsp;&nbsp;&nbsp;&nbsp; :</p>
                    <p>NT$4,760</p>
                </div>
                <div className="cartInfoItem">
                    <p>Shipping :</p>
                    <p>NT$60</p>
                </div>
                <div className="cartInfoItem">
                    <p>Total &nbsp;&nbsp;&nbsp;&nbsp;:</p>
                    <p>NT$4,820</p>
                </div>
                <button className="cartInfoCheckout">Checkout</button>
            </div>
        </section>
        <section className="info cartSection">
            <div className="cartProcess">
                <div className="cartProcessItem">
                    <p>1</p>
                    <p>Cart</p>
                </div>
                <div className="cartProcessItem cartProcessItemMiddle">
                    <p className="cartProcessItemInfo">2</p>
                    <p>Infos</p>
                </div>
                <div className="cartProcessItem">
                    <p>3</p>
                    <p>Confirm</p>
                </div>
            </div>
            <div className="infoCart">
                <div className="infoCartTitle">
                    <p>Total : NT$4,820</p>
                    <div>Cart (1 piece) &nbsp; <p className="cartTitleArrow">v</p>
                    </div>
                </div>
                <div className="infoCartDetails cartItemInfo">
                    <div className="cartItemInfoTitle">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                    <div className="cartItemInfoItems">
                        <div>
                            <img src="https://picsum.photos/50/50/?random=1"/>
                        </div>
                        <div>
                            <p>MELSIGN - Strap Washed Cargo Shorts - Black</p>
                            <p>S</p>
                        </div>
                        <div>NT$2,380</div>
                        <div>
                            <p>2</p> 
                        </div>
                        <div>NT$4,760</div>
                    </div>
                </div>
                <div className="infoCartOrder">
                    <div className="cartInfo">
                        <div className="cartInfoItem">
                            <p>Price &nbsp;&nbsp;&nbsp;&nbsp; :</p>
                            <p>NT$4,760</p>
                        </div>
                        <div className="cartInfoItem">
                            <p>Shipping :</p>
                            <p>NT$60</p>
                        </div>
                        <div className="cartInfoItem">
                            <p>Total &nbsp;&nbsp;&nbsp;&nbsp;:</p>
                            <p>NT$4,820</p>
                        </div>
                    </div>
                    <div className="cartExpends"><p>V</p></div>
                </div>
            </div>
            <div className="infoShipping">
                <h3 className="cartTitle">Sipping Details</h3>
                <div className="infoShippingItem">
                    <p>Shipping Methods : </p>
                    <p>Name</p> <input type="text"/>
                    <p>Phone</p> <input type="text"/>
                    <p>Address</p> <input type="text"/>
                </div>
            </div>
            <div className="infoPay">
                <h3 className="cartTitle">Payment Details</h3>
                <div className="infoPayContainer">
                    <p>Payment Methods : </p>
                    <div className="infoPayItem">
                        <p>Credit Card</p>
                        <input type="text" placeholder="  Card Number"/>
                    </div>
                    <div className="infoPayItem">
                        <p>Card Holder Name</p>
                        <input type="text" placeholder="  Holder Name"/>
                    </div>
                    <div className="infoPayItem">
                        <p>Card Valid Date</p>
                        <input type="text" placeholder="  MM/YY"/>
                    </div>
                    <div className="infoPayItem">
                        <p>CVC</p>
                        <input type="text" placeholder="  CVC"/>
                    </div>
                </div>
            </div>
            <div className="infoFooter">
                <a href="#" className="backToCart"> Back to Cart</a>
                <button className="infoSend">Order send</button>
                <a href="#"> Back to Cart</a>
            </div>
        </section>
        <section className="order cartSection">
            <div className="cartProcess">
                <div className="cartProcessItem">
                    <p>1</p>
                    <p>Cart</p>
                </div>
                <div className="cartProcessItem cartProcessItemMiddle">
                    <p className="cartProcessItemInfo">2</p>
                    <p>Infos</p>
                </div>
                <div className="cartProcessItem">
                    <p className="cartProcessItemConfirm">3</p>
                    <p>Confirm</p>
                </div>
            </div>
            <div className="infoCart">
                <div className="infoCartTitle">
                    <p>Total : NT$4,820</p>
                    <div>Cart (1 piece) &nbsp; <p className="cartTitleArrow">v</p>
                    </div>
                </div>
                <div className="infoCartDetails cartItemInfo">
                    <div className="cartItemInfoTitle">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                    <div className="cartItemInfoItems">
                        <div>
                            <img src="https://picsum.photos/50/50/?random=1"/>
                        </div>
                        <div>
                            <p>MELSIGN - Strap Washed Cargo Shorts - Black</p>
                            <p>S</p>
                        </div>
                        <div>NT$2,380</div>
                        <div>
                            <p>2</p> 
                        </div>
                        <div>NT$4,760</div>
                    </div>
                </div>
                <div className="infoCartOrder">
                    <div className="cartInfo">
                        <div className="cartInfoItem">
                            <p>Price &nbsp;&nbsp;&nbsp;&nbsp; :</p>
                            <p>NT$4,760</p>
                        </div>
                        <div className="cartInfoItem">
                            <p>Shipping :</p>
                            <p>NT$60</p>
                        </div>
                        <div className="cartInfoItem">
                            <p>Total &nbsp;&nbsp;&nbsp;&nbsp;:</p>
                            <p>NT$4,820</p>
                        </div>
                    </div>
                    <div className="cartExpends"><p>V</p></div>
                </div>
            </div>
            <div className="orderInfo">
                <div className="orderInfoItem">
                    <h4>Order Details</h4>
                    <p>Order Number :</p>
                    <p>20201228041037260</p>
                    <p>Order Email :</p>
                    <p>*********@gmail.com</p>
                    <p>Order date :</p>
                    <p>2020-12-28 12:10PM</p>
                    <p>Order status :</p>
                    <p>Confirm</p>
                </div>
                <div className="orderInfoItem">
                    <h4>Customer Details</h4>
                    <p>Name :</p>
                    <p>xxx</p>
                    <p>Phone :</p>
                    <p>09xxxxxxxx</p>
                </div>
                <div className="orderInfoItem">
                    <h4>Shipping Details</h4>
                    <p>Shipping Methods :</p>
                    <p>7-11</p>
                    <p>Name :</p>
                    <p>xxx</p>
                    <p>Phone :</p>
                    <p>09xxxxxxxx</p>
                </div>
                <div className="orderInfoItem">
                    <h4>Payment Details</h4>
                    <p>Payment Methods :</p>
                    <p>Credit Card</p>
                    <p>Status :</p>
                    <p>paid</p>
                    <p>Order Number :</p>
                    <p>20201228041037260</p>
                </div>
                <div className="orderInfoItem">
                    <h4>Contact Us</h4>
                    <textarea name="" id="" cols="10" rows="5" placeholder="Leave a message !"></textarea>
                </div>
                <div className="orderFooter">
                    <a href="#" className="backToInfo"> Back to Info</a>
                    <button className="orderConfirm">Confirm</button>
                    <a href="#"> Back to Info</a>
                </div>
            </div>
        </section>
    </main>
    }
}
 
export default Cart;