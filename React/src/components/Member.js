import React, { useState, useEffect } from "react";
import Axios from "axios";
import $ from "jquery";
import "../css/Member.css";
import "../js/member";

export default function Member() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/members").then((data) => {
      console.log(data.data);
      setMember(data.data);
    });
    memberCondition();
  }, []);

  function shit() {
    console.log(member.length);
    console.log(member[0].customerName);
    console.log($(".registerName")[0].value);
    console.log($(".registerEmail")[0].value);
    console.log($(".registerPassword")[0].value);

    const found = member.find(
      (element) => element.customerName == $(".registerName")[0].value
    );
    // console.log(found.customerPassword);
    console.log(found);
    if (found == undefined) {
      Axios.post("http://localhost:8000/api/members", {
        customerName: $(".registerName")[0].value,
        customerPassword: $(".registerPassword")[0].value,
        customerEmail: $(".registerEmail")[0].value,
      });
      $(".emailAlert").html("").css("display", "none");
    } else {
      console.log("fuck");
      $(".emailAlert")
        .html("Fuck!")
        .css("color", "red")
        .css("display", "block");
    }
  }

  function memberCondition() {
    // member register display
    $(".memberConditionRegister").on("click", function () {
      $(".membersCondition").css("background-color", "rgb(149, 169, 201)");
      $(".memberConditionRegister")
        .css("color", "rgb(105, 122, 149)")
        .css("background-color", "rgb(255, 230, 183)");
      $(".memberConditionLogin")
        .css("color", "white")
        .css("background-color", "rgb(149, 169, 201)");
      $(".membersRegister").css("display", "block");
      $(".membersLogin").css("display", "none");
    });

    // member login display
    $(".memberConditionLogin").on("click", function () {
      $(".membersCondition").css("background-color", "rgb(255, 230, 183)");
      $(".memberConditionRegister")
        .css("color", "white")
        .css("background-color", "rgb(149, 169, 201)");
      $(".memberConditionLogin")
        .css("color", "rgb(105, 122, 149)")
        .css("background-color", "rgb(255, 230, 183)");
      $(".membersRegister").css("display", "none");
      $(".membersLogin").css("display", "block");
    });
  }

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
            <p onClick={() => shit()}>Register by Email</p>
          </div>
          <div className="membersRegisterInfo">
            <input
              type="text"
              className="registerName"
              placeholder="User Name"
            />
            <p className="usernameAlert"></p>
            <input type="text" className="registerEmail" placeholder="Email" />
            <p className="emailAlert"></p>
            <input
              type="password"
              className="registerPassword"
              placeholder="Password"
            />
            <p className="passwordAlertCharacters">
              Enter at least 8 characters
            </p>
            <p className="passwordAlertUpper">At least 1 Uppercase</p>
            <p className="passwordAlertLower">At least 1 Lowercase</p>
            <p className="passwordAlertNum">At least 1 Number</p>
          </div>
          <div className="membersRegisterAgreement">
            <label>
              <input className="agreeCheckbox" type="checkbox" />
              <p>I agree....</p>
            </label>
          </div>
          <div className="membersButton">
            <button
              className="membersBtn"
              // onclick="joinNow()"
              onClick={() => shit()}
              disabled
            >
              <i className="fa fa-hand-o-right" aria-hidden="true"></i>Join Now
              !
            </button>
          </div>
        </div>
        <div className="membersLogin">
          <div className="membersLoginTitle">
            <p>Login by Email</p>
          </div>
          <div className="memberLoginInfo">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </div>
          <div className="membersButton">
            <button className="membersBtn">Shop Now !</button>
          </div>
          <p>
            <a href="#">Forgot Password ?</a>
          </p>
        </div>
      </section>
    </main>
  );
}
