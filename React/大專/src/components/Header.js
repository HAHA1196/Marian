import React from "react";
import "../css/all.css";
import "../js/headerItem";
import { Link,useLocation } from "react-router-dom";
//import { NavLink, Switch, Route } from "react-router-dom";
import logo from '../img/大專LOGO.png'

export default function Header() {
    let location = useLocation();
    console.log(location);
    
  return (
    <React.Fragment>
      <header id="header" class="indexH">
        <Link to="/" class=" headerLogo" >
            <img class="logo" target="style" src={logo}  alt=""/>
            <span> 
                Marian
            </span>
        </Link>
        <div class="navbar">
            <ul  class="navbarUl">
                <li class="nav-a navAbout" >
                    <Link to="/marian/about">ABOUT
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                    <ul class="navbarMenu">
                        <li><Link to="/marian/faq">F&Q</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/marian/news">NEWS
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                </li>
                <li class="nav-a navProject">
                    <Link to="/marian/product">PRODUCT
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                    <ul class="navbarMenu">
                        <li><Link to="/marian/product">ALL</Link></li>
                        <li><Link to="/marian/product/D">BOARD</Link></li>
                        <li><Link to="/marian/product/SS">SWIMSUIT</Link></li>
                        <li><Link to="/marian/product/ACC">ACC</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/marian/contact">CONTACT
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                </li>
            </ul>
            <div  class="navbarIcon">
                <Link to="/marian/member"><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                <div class="memberIcon">
                    <Link to="/marian/product">PROFILE</Link>
                    <Link to="/marian/product/D">LOG&nbsp;OUT</Link>
                </div>
                </Link>
                <Link to="/marian/memberinside"><i class="fa fa-shopping-bag fa-2x" aria-hidden="true"></i></Link>
                <Link to="/marian/cart"><i class="fa fa-globe fa-2x" aria-hidden="true"></i></Link>
            </div>
            <div class="headerHambur">
                <input id="toggle" type="checkbox"></input>
                <label for="toggle" class="hamburger">
                    <div class="topBun"></div>
                    <div class="meat"></div>
                    <div class="bottomBun"></div>
                </label>
                <div class="toggleContent" >
                    <div>
                        <div class="toggleContentL">
                            <Link to="/marian/home">HOME</Link><br/>
                            <Link to="/marian/about">ABOUT</Link><br/>
                            <Link to="/marian/product">PRODUCT</Link><br/>
                            <Link to="/marian/news">NEWS</Link><br/>
                            <Link to="/marian/contact">CONTACT</Link>
                        </div>
                        {/* <div class="toggleContentR">
                            <Link to="" target="_blank" class="loc_link">
                            </Link> 
                            <Link to="" target="_blank" class="loc_link">
                            </Link> 
                            <Link to="" target="_blank" class="loc_link">
                            </Link> 
                        </div> */}
                        <div class="toggleAddr">
                            <input type="text" class="inputMail " name="fldEmail" maxlength="100" placeholder="Mail Address"/>
                            <div class="toggleBtn">
                                <button type="submit" class="btnSubmit " value="SEND" krydebug="1751">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
    </header>
    </React.Fragment>
  );
}
