import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Faq from './Faq'
import News from './News'
import NewsInside from './News/NewsInside'
import Product from './Product';
import ProductInside from './Products/ProductInside';
import Contact from './Contact'
import Member from './Member';
import MemberInside from './MemberInside'
import Cart from './Cart'
import Footer from './Footer';
import '../css/reset.css'
import '../css/all.css'
import '../css/font-awesome-4.7.0/css/font-awesome.min.css'
import { Route} from "react-router-dom";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/marian' component={Home} />
            <Route exact path='/marian/about' component={About} />
            <Route exact path='/marian/faq' component={Faq} />
            <Route exact path='/marian/news' component={News} />
            {/* <Route exact path='/marian/newsinside' component={NewsInside} /> */}
            <Route exact path='/marian/news/:newsId' component={NewsInside} />
            <Route exact path='/marian/product' component={Product} />
            <Route exact path='/marian/product/productinside' component={ProductInside} />
            <Route exact path='/marian/contact' component={Contact} />
            <Route exact path='/marian/member' component={Member} />
            <Route exact path='/marian/memberinside' component={MemberInside} />
            <Route exact path='/marian/cart' component={Cart} />
            <Footer />
        </React.Fragment>
    )
}
