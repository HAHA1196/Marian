import React from "react";
import { Link } from "react-router-dom";
import "../css/all.css";
import logo from '../img/大專LOGO.png'

export default function Footer() {
  return (
    <React.Fragment>
      <footer id="footer">
            <div id="footerInner" class="footerInner">
                <div class="fLine">
                    <div class="fLogo">
                        <a href="">
                            <img class="footerLogo" src={logo} alt=""/>
                        </a>
                    </div>
                    <div class="fTxt">
                        <span>Be Kind To Everything That Lives.</span><br/><br/>
                        <span>Maria co.ltd/</span>
                    </div>
                    <div class="fIcon">
                        <a href=""><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>  
                <nav class="fNav">
                    <ul >
                        <li>
                            <Link to="/marian/about"><span>ABOUT</span></Link>
                            <ul>
                                <li><Link  to="/marian/f&q">F&Q</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/marian/news"><span>NEWS</span></Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/marian/product"><span>PRODUCT</span></Link>
                            <ul>
                                <li><Link to="">ALL</Link> </li>
                                <li><Link to="">SUP</Link></li>
                                <li><Link to="">BOARD</Link></li>
                                <li><Link to="">ACC</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/marian/contact"><span>CONTACT</span></Link>
                        </li>
                    </ul>
                    <div class="detail">
                        <p>台中市南屯區</p>
                            <span>公益路二段51號18樓</span>
                        <p> 04-12345678</p>
                        <p> 8:30-17:30</p>
                    </div>
                </nav>
                <div class="footerBottom">
                    <small class="copy">© 2021 Marian Co., Ltd.</small>
                </div>     
            </div>     
        </footer > 
    </React.Fragment>
  );
}
