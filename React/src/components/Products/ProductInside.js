import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import $ from "jquery";
import ProductBuy from './ProductBuy'
import ProductPic from './ProductPic'
import '../../css/Product.css'
import '../../css/Product/ProductInside.css'
import '../../css/reset.css'
import '../../js/productinside'

let flag = 0;
function shipping(){
    $(document).ready(function(){
        let plus = $('.shippingPlus');
        let minus = $('.shippingMinus');
            $('.shippingDetails').slideToggle();
            flag == 0 ? plus.css("display", "none") : plus.css("display", "block");
            flag == 0 ? minus.css("display", "block") : minus.css("display", "none");
            flag == 0 ? flag = 1 : flag = 0; 
    });
}

function shippingPlus(){
    $(document).ready(function(){
        let plus = $('.shippingPlus');
        let minus = $('.shippingMinus');
            $('.shippingDetails').slideToggle();
            flag == 0 ? plus.css("display", "none") : plus.css("display", "block");
            flag == 0 ? minus.css("display", "block") : minus.css("display", "none");
            flag == 0 ? flag = 1 : flag = 0; 
    });
}

function shippingMinus(){
    $(document).ready(function(){
        let plus = $('.shippingPlus');
        let minus = $('.shippingMinus');
            $('.shippingDetails').slideToggle();
            flag == 0 ? plus.css("display", "none") : plus.css("display", "block");
            flag == 0 ? minus.css("display", "block") : minus.css("display", "none");
            flag == 0 ? flag = 1 : flag = 0; 
    });
}

export default function ProductInside(props) {
    let { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(props.location.productProps.cart)

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/id/${productId}`).then((data) => {
          setProducts({
              productName: data.data[0].productName,
              productPrice: data.data[0].productPrice,
              productDescription: data.data[0].productDescription,
          });
        });
    }, [productId]);

    

    const deleteCart = (val) => {
        setProduct(product.filter((x) => x != val).reverse())
    }
      
    function fuck(){
        product.reverse();
        setProduct([...product, 
        { title: $(".productsInsideTitleh1")[0].innerText, 
          price: $(".productsInsideTitlePrice")[0].innerText,
          size: $('.productsBuyNumSize')[0].value,
          qty: $('.productsBuyNumQuantity')[0].value,
        }]);
        $(".cartItemProductsText").html($(".productsInsideTitleh1").innerText);
    
        $(document).ready(function(){
            $('.addToCart').on('click',function(){
                console.log('shit')
                $('.productsBuyCart').css("display","block");
                $('.productsCart').css("display","block");
                $('.cartItem').css("display","flex");
            })
            $('.cartExit').on('click',function(){
                $('.productsBuyCart').css("display","none");
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

    // useEffect(()=>{
    //     fuck();
    // },[]);

    return (
        <main className="productInsideMain">
            <div className="productsInside">
            <div className="productsInfo">
            <ProductPic />
            </div>
            <div className="productsInsideBuy">
                <div className="productsBuyContainer">
                  <div className="productsInsideBuyTitle">
                    <p>Tag</p>
                    <h1 className="productsInsideTitleh1">{products.productName}</h1>
                    <h3>NT$<span className="productsInsideTitlePrice">{products.productPrice}</span></h3>
                  </div>
                  <div className="productsInsideBuyNum">
                    <div>
                      <p>Size</p>
                      <select className="productsBuyNumSize">
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                      </select>
                    </div>
                    <div>
                      <p>Quantity</p>
                      <select className="productsBuyNumQuantity">
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
                      <p className="productsBuyNumSold">SOLD OUT</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                        fuck();
                      }}
                    className="addToCart"
                    >Add to cart
                  </button>
                  <div 
                    onClick={shipping}
                    className="productsShipping">
                    <div className="shipping">Shipping</div>
                    <div className="shippingPlus">+</div>
                    <div className="shippingMinus">-</div>
                  </div>
                  <ul className="shippingDetails">
                    <li>Japan、Korea、Singapore</li>
                    <li>
                      Malaysia、Thailand、Vietnam、Philippines、Indonesia、Myanmar、Brunei、Cambodia
                    </li>
                    <li>United States、Canada</li>
                    <li>Australia、New Zealand、India</li>
                    <li>
                      Germany、France、United Kingdom、Spain、Czech
                      Republic、Sweden、Italy、Portugal、Greece、Netherlands、Switzerland、Romania
                      、Denmark、Norway
                      、Finland、Austria、Belgium、Hungary、Ireland、Monaco、Poland、Cyprus
                    </li>
                    <li>順豐快遞（運費到付）中國、香港、澳門</li>
                    <li>7-11 取貨不付款 (C2C)</li>
                  </ul>
                </div>
            </div>
            <div className="productsDetails">
                <p>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                    soluta facilis quibusdam non laudantium eaque deleniti quae nobis
                    tempora provident commodi consequatur quia minus quasi iusto ipsam,
                    autem enim ratione atque perspiciatis necessitatibus. Corporis
                    cupiditate molestiae quis laborum consequuntur officiis recusandae
                    tempora harum animi aliquid odio quaerat quo veniam illum tempore
                    deleniti autem alias ipsum iste, nemo reprehenderit! Rerum provident
                    harum, blanditiis numquam unde maxime incidunt accusantium, est
                    illum pariatur ex tempore aut! Possimus labore facilis rem
                    perspiciatis nesciunt quisquam! Delectus maxime, reiciendis,
                    accusamus quae a iusto similique natus necessitatibus fuga eos
                    molestiae suscipit magnam sit praesentium quis. Consequuntur
                    quisquam dolorem eligendi possimus optio, nemo odio tempore fuga
                    labore. Facilis facere quae odit architecto error possimus ex illo
                    dignissimos consequuntur velit maiores, aspernatur dolore tenetur.
                    Hic quos ab non officiis? Suscipit, voluptas animi beatae possimus
                    doloremque accusamus ad iste provident ut? Quae qui magni quisquam
                    delectus voluptate incidunt nisi vero ipsa dolor illo! Reiciendis
                    doloremque debitis, porro quod provident minima temporibus possimus
                    ad! Similique quo cum quas pariatur recusandae asperiores autem a
                    explicabo, non aliquam. Tenetur beatae doloribus suscipit tempora
                    nam dignissimos consequuntur ab iste laboriosam consequatur mollitia
                    cumque quis, maiores reprehenderit voluptatum voluptates nemo harum.
                    Necessitatibus optio exercitationem qui. */}
                </p>
                <div className="productsDesc">
                    <h2>Description</h2>
                    <p>
                        {products.productDescription}
                    </p>
                </div>
                <div className="productsSpec">
                    <h2>Specification</h2>
                    <ul>
                      <li>L : Lorem ipsum dolor sit amet.</li>
                      <li>M : Lorem ipsum dolor sit amet.</li>
                      <li>S : Lorem ipsum dolor sit amet.</li>
                      <li>XS : Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="productsBuyCart">
            <div className="productsCart">
                <div className="productsInsideCartTitle"><p>Shopping Cart</p> <span className="cartExit">x</span></div>
                {product.reverse().map((val) => {
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

                {/* <div className="cartItem">
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
                        <img src="https://picsum.photos/100/100/?random=1/"/>
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
                </div> */}
                <button className="cartCheckout">Order Checkout</button>
            </div>
        </div>

        <div className="productsInsidePage">
            <a href="./products.html">Back to list</a>
        </div>
        
        </main>
    )
}
