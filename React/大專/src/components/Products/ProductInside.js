import React from 'react'
import ProductBuy from './ProductBuy'
import '../../css/Product.css'
import '../../css/Product/ProductInside.css'
import '../../css/reset.css'
import '../../js/productinside'
//import Fotorama from 'fotorama-react-wrapper'

export default function ProductInside() {
    return (
        <main className="productInsideMain">
            <div className="productsInside">
            <div className="productsInfo">
                <div data-width="450" data-height="450" data-nav="thumbs" data-loop="true" data-thumbwidth="100" data-thumbheight="100" data-thumbmargin="10"> 
                    <img className="smallPic" src="https://picsum.photos/500/500/?random=1"/>
                    <img className="smallPic" src="https://picsum.photos/500/500/?random=2"/>
                    <img className="smallPic" src="https://picsum.photos/500/500/?random=3"/>
                    <img className="smallPic" src="https://picsum.photos/500/500/?random=4"/>
                    <img className="smallPic" src="https://picsum.photos/500/500/?random=5"/>
                </div>
            </div>
            <div className="productsInsideBuy">
                <div className="productsBuyContainer">
                  <div className="productsInsideBuyTitle">
                    <p>Tag</p>
                    <h1>PRODUCT TITLE</h1>
                    <h3>NT$2,000</h3>
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
                  <button className="addToCart">Add to cart</button>
                  <div className="productsShipping">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
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
                    Necessitatibus optio exercitationem qui.
                </p>
                <div className="productsDesc">
                    <h2>Description</h2>
                    <p>
                      Lorem ipsum dolor sit, <br />
                      amet consectetur adipisicing elit. <br />
                      Beatae officia repellendus perferendis <br />
                      cumque omnis fugiat consequuntur! <br />
                      Ea, maxime dolore dolorum provident, <br />
                      esse minus beatae, <br />
                      at corporis repellat doloremque nisi alias.
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
                <div className="cartTitle"><p>Shopping Cart</p> <span className="cartExit">x</span></div>
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
                </div>
                <button className="cartCheckout">Order Checkout</button>
            </div>
        </div>

        <div className="productsInsidePage">
            <a href="./products.html">Back to list</a>
        </div>
        
        </main>
    )
}
