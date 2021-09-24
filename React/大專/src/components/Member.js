import React from 'react'
import '../css/Member.css'
import '../js/member'

export default function Member() {
    return (
        <main className="memberMain">
        <section className="memberSection">
            <div className="membersCondition">
                <div className="memberConditionRegister">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    <p>Member Register</p>
                </div>
                <div className="memberConditionLogin">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    <p>Member Login</p>
                </div>
            </div>
            <div className="membersRegister">
                <div className="membersRegisterTitle">
                    <p onclick="test()">Register by Email</p>
                </div>
                <div className="membersRegisterInfo">
                    <input type="text"  id="signupName" className="registerName" placeholder="User Name" value="ruby"/>
                    <p className="usernameAlert"></p>
                    <input type="text" id="signupEmail" className="registerEmail" placeholder="Email" value="Q123@gmail.com"/>
                    <p className="emailAlert"></p>
                    <input type="password" id="signupPassword" className="registerPassword" placeholder="Password" value="Qq1234567"/>
                    <p className="passwordAlertCharacters">Enter at least 8 characters</p>
                    <p className="passwordAlertUpper">At least 1 Uppercase</p>
                    <p className="passwordAlertLower">At least 1 Lowercase</p>
                    <p className="passwordAlertNum">At least 1 Number</p>
                </div> 
                <div className="membersRegisterAgreement">
                    <label>
                        <input className="agreeCheckbox" type="checkbox" checked/>
                        <p>I agree....</p>
                    </label>
                </div>
               <div className="membersButton">
                    <button className="membersBtn" onclick="joinNow()" ><i className="fa fa-hand-o-right" aria-hidden="true"></i>Join Now !</button>      
               </div>         
            </div>
            <div className="membersLogin">
                <div className="membersLoginTitle">
                    <p>Login by Email</p>
                </div>
                <div className="memberLoginInfo">
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="membersButton">
                    <button>Shop Now !</button>
                </div>
                <p><a href="#">Forgot Password ?</a></p>
            </div>
        </section>
    </main>
    )
}
