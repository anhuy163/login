import React from "react";
import reactDom from "react-dom";
import "./Login.css";

const LoginPage = () => {
  // var _modalId = document.getElementById("modalId");
  // var loginForm = document.getElementById("loginForm");
  // var loginForm_1 = document.getElementById("loginForm");
  // var accept = document.getElementById("accept");
  // var signupBtn = document.getElementById("signupBtn");
  // var readlabel = document.getElementById("readlabel");
  const clickBtn = () => {
    var x = document.getElementById("modalId");
    var y = document.getElementById("loginForm");
    x.style.display = "block";
    y.style.display = "block";
  };
  const closeBtn = () => {
    var x = document.getElementById("modalId");
    var y = document.getElementById("loginForm_1");
    var z = document.getElementById("accept");
    var t = document.getElementById("signupBtn");
    var u = document.getElementById("readlabel");
    z.checked = false;
    x.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
    u.style.color = "#949191";
  };
  const signUp = () => {
    var x = document.getElementById("loginForm");
    var y = document.getElementById("loginForm_1");
    x.style.display = "none";
    y.style.display = "block";
  };
  const accFn = () => {
    var x = document.getElementById("accept");
    var y = document.getElementById("signupBtn");
    var z = document.getElementById("readlabel");
    if (x.checked === true) {
      y.style.display = "block";
      z.style.color = "black";
    } else {
      y.style.display = "none";
      z.style.color = "#949191";
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* <img src={logo} alt='' style={{ height: "200px", width: "200px" }} /> */}
      <p id='welcome'>
        STUDENT <span id='welcome_1'>MANAGEMENT</span>
      </p>
      <button onClick={clickBtn} className='loginBtn'>
        LOGIN OR SIGN UP
      </button>
      <p
        style={{
          lineHeight: "0.1rem",
          fontSize: "0.8rem",
          color: "#949191",
          marginTop: "40px",
        }}>
        Made by Gr3 - INT3306 22
      </p>
      <p style={{ lineHeight: "0.1rem", fontSize: "0.8rem", color: "#949191" }}>
        University of Engineering & Technology
      </p>
      <p style={{ lineHeight: "0.1rem", fontSize: "0.8rem", color: "#949191" }}>
        Contact: +84 964 692582
      </p>
      <div id='modalId' className='_modal'>
        <form
          className='_loginForm'
          id='loginForm'
          style={{ border: "3px solid rgba(0, 0, 0, 0.2)", display: "block" }}>
          <span id='close' onClick={closeBtn}>
            X
          </span>
          <div className='_formElm form'>
            <h3>LOGIN</h3>
          </div>
          <div className='_formElm'>
            <label
              className='_account'
              style={{ lineHeight: "20px", marginLeft: "-120px" }}>
              Account
            </label>
            <input
              type='text'
              id='accInput'
              className='_account'
              placeholder='Enter your username'
            />
          </div>
          <br />
          <div className='_formElm'>
            <label
              className='_password'
              style={{ lineHeight: "20px", marginLeft: "-120px" }}>
              Password
            </label>
            <input
              type='text'
              id='passInput'
              className='_password'
              name='lastname'
              placeholder='Enter your password'
            />
          </div>
          <div className='_formElm form'>
            <p>
              By signing up you accept our{" "}
              <span className='_note'>Terms of use</span>
            </p>
            <button className='_button'>LOGIN</button>
          </div>
          <div className='_formElm'>
            <br />
            <hr></hr>
            <span className='span-or'>or</span>
          </div>
          <p className='form'>
            Don't have account?{" "}
            <span className='_note' onClick={signUp}>
              Sign up here
            </span>
          </p>
        </form>
        {/* SIGN UP FORM */}
        <form
          className='_loginForm'
          id='loginForm_1'
          style={{
            border: "3px solid rgba(0, 0, 0, 0.2)",
            display: "none",
            height: "460px",
            marginTop: "90px",
          }}>
          <span id='close' onClick={closeBtn}>
            X
          </span>
          <div className='_formElm form'>
            <h3>SIGN UP</h3>
          </div>
          <div className='_formElm'>
            <label
              className='_account'
              style={{ lineHeight: "20px", marginLeft: "-120px" }}>
              Account
            </label>
            <input
              type='text'
              id='accInput_1'
              className='_account'
              placeholder='Enter your username'
            />
          </div>
          <br />
          <div className='_formElm'>
            <label
              className='_password'
              style={{ lineHeight: "20px", marginLeft: "-120px" }}>
              Password
            </label>
            <input
              type='text'
              id='passInput_1'
              className='_password'
              name='lastname'
              placeholder='Enter your password'
            />
          </div>
          <br />
          <div className='_formElm'>
            <label
              className='_password'
              style={{ lineHeight: "20px", marginLeft: "-90px" }}>
              Confirm Password
            </label>
            <input
              type='text'
              id='rePassInput_1'
              className='_password'
              name='lastname'
              placeholder='Enter your password'
            />
          </div>
          <div className='_formElm form'>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              By signing up you accept our{" "}
              <span className='_note'>Terms of use</span>
            </p>
            <input
              style={{ marginTop: "5px" }}
              type='checkbox'
              id='accept'
              onClick={accFn}
            />
            <label
              id='readlabel'
              style={{ fontSize: "0.9rem", color: "#949191" }}>
              I have read and accepted this term of use
            </label>
            <button
              className='_button'
              id='signupBtn'
              style={{ display: "none", marginTop: "20px" }}>
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
