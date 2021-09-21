import React, {useState} from 'react'
import ProductItem from './Products/ProductItem'
import ProductBuy from './Products/ProductBuy'
import '../css/Product.css'
import '../css/reset.css'
import '../js/productcart'
import product1 from '../img/c01.jpg'
import product2 from '../img/c02.jpg'
import product3 from '../img/c03.jpg'

export default function Product() {
    const [product, setProduct] = useState();

    return (
        <React.Fragment>
        <div id="welcomeC" >
            <div id="welcomecInner">
                <div className="welcomecCont" >
                    <h2>All Products</h2>
                </div>
                <div className="wCarousel">
                    <div className="slide">
                        <img src={product1} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={product2} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={product3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
            
        <main className="productMain">
        <div className="products">
            <div className="productsSection">
                {number.map(product => {
                    return(
                        <ProductItem 
                            number={number}
                        />
                    )
                })}
            </div>
            
            <ProductBuy />

            <div className="productsFooter">
                <div className="productsPagePrev">Prev</div>
                <div className="productsPage">
                    <a href="#" className="productsPageNum">1</a>
                    <a href="#" className="productsPageNum">2</a>
                    <a href="#" className="productsPageNum">3</a>
                    <a href="#" className="productsPageNum">...</a>
                    <a href="#" className="productsPageNum">7</a>
                </div>
                <div className="productsPageNext">Next</div>
            </div>
        </div>
        </main>
        </React.Fragment>
    )
}

const number = [
    {
        id:1,
        name:'fuck'
    },
    {
        id:1,
        name:'fuck2'
    },
    {
        id:1,
        name:'fuck3'
    },
    {
        id:1,
        name:'fuck4'
    },
    {
        id:1,
        name:'fuck5'
    },
    {
        id:1,
        name:'fuck6'
    },
    {
        id:1,
        name:'fuck7'
    },
    {
        id:1,
        name:'fuck8'
    },
    {
        id:1,
        name:'fuck9'
    },
    {
        id:1,
        name:'fuck10'
    },
    {
        id:1,
        name:'fuck11'
    },
    {
        id:1,
        name:'fuck12'
    },
]
