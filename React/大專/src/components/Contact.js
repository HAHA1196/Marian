import React from 'react'
import '../css/Contact.css'
import contact1 from '../img/c01.jpg'
import contact2 from '../img/c02.jpg'
import contact3 from '../img/C05.jpg'

export default function Contact() {
    return (
        <article className="contact">
        <div id="welcomeC" >
                <div id="welcomecInner">
                    <div className="welcomecCont" >
                        <h2>Contacts Us</h2>
                    </div>
                    <div className="wCarousel">
                        <div className="slide">
                            <img src={contact1} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={contact2} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={contact3} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
        <section id="contactus">
            <div id="contactusInner" class="contactusInner">
                <p class="contactusTit">Online Consultation</p>
                <div class="contusContain">
                    <div class="contusTxt">
                         <p>Also open for new cooperation</p>
                            <br/><br/><br/>
                        <a href="" target="_blank" class="uslocLink">
                            <span class="uslocIcon">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <span class="uslocName">
                                Marian0917@gmail.com
                            </span>
                        </a>
                        <a href="" target="_blank" class="uslocLink">
                            <span class="uslocIcon">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                            <span class="uslocName">
                                Marian
                            </span>
                        </a>
                        <a href="" target="_blank" class="uslocLink">
                            <span class="uslocIcon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                            <span class="uslocName">
                                Marian
                            </span>
                        </a>
                        <div  class="mapInner">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29124.70202536522!2d120.63379083955077!3d24.15111159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d96f8b80ab9%3A0xd12124495c6cba64!2sTripod%20King%20(Gong%20Yi%20Rd.%20Store)!5e0!3m2!1sen!2stw!4v1626414817375!5m2!1sen!2stw" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                        </div> 
                    </div>
                    <div class="contusForm">
                        <form action=""/>
                         <div class="formGroup" >
                            <label for="name">姓名 Name*</label>
                            <input type="text" class="formControl" name="person" id="name" value=""/>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                         <div class="formGroup" >
                            <label for="Phone">聯絡電話 Phone Number*</label><br/>
                            <input type="text" class="formControl" name="person" id="Phone" value=""/>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        
                         <div class="formGroup" >
                            <label for="Addr">地址 Address*</label>
                            <input type="text" class="formControl" name="person" id="address" value=""/>
                            <i class="fa fa-map" aria-hidden="true"></i>
                        </div>
                         <div class="formGroup" >
                            <label for="Email">電子信箱 Email*</label><br/>
                            <input type="text" class="formControl" name="person" id="Email" value=""/>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                         <div class="formGroup">
                            <label for="message">訊息 Message*</label><br/>
                            <textarea class="formControl" id="message" name="message" placeholder=""></textarea>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </div>
                    </div>     
                </div>              
            </div>
        </section>
        <section id="quote" >
            <div id="quoteInner">
                    <div class="quoteCont" >
                        <h2>If you love something, it will work. That's the only real rule.</h2>
                        <p>Bunny Williams</p>
                    </div>
            </div>
    </section>
    </article> 
    )
}
