import React from 'react'
import '../../css/font-awesome-4.7.0/css/font-awesome.css'
import '../../css/Product.css'
import '../../js/productcart'
import { Link } from "react-router-dom";

export default function ProductItem({number}) {
    return (
        <div className="productsItem">
                <div className="productsItemPic">
                    <Link to="/marian/product/productinside">
                        <img src="https://picsum.photos/200/280/?random=1"/>
                    </Link>
                    <i id="productsItemCart" className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
                </div>
                <h3><Link to="/marian/product/productinside">Products Item</Link></h3>
                <p>NT1000</p>
                <div className="productsItemCart">
                    <i id="productsItemCart" className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
                </div>
        </div>
    )
}
