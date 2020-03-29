import React, {Fragment, Component } from 'react';
import './signup.css';
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';

class Home extends Component {
  signup = () =>{
    document.getElementById("background").style.transform = "translate(-100%,0)";
    document.getElementById("background").style.borderRadius = "40px 0px 0px 40px";
    document.getElementById("background").style.transition = "0.5s";
    document.getElementById("signin").style.display = "none";
    document.getElementById("hello").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("signup").style.display = "block";
  }
  signin = () =>{
    document.getElementById("background").style.transform = "translate(0%,0)";
    document.getElementById("background").style.borderRadius = "0px 40px 40px 0px";
    document.getElementById("background").style.transition = "0.5s";
    document.getElementById("signin").style.display = "block";
    document.getElementById("hello").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("signup").style.display = "none";
  }
  responseGoogle = (response) => {
    console.log(response.accessToken);
  };

  componentClicked = () =>{
    console.log('logging in');
  }

  responseFacebook = (response) =>{
    console.log(response.accessToken);
  }
  render(){
      return (
      <Fragment>
          <div className="outer">
              <div className="middle">
                  <div id="main">
                      <div id="background"></div>
                      <div className="part" id="signin">
                          <p id="head" style={{color:"black", marginBottom: "1.8rem"}} >Sign in</p>
                          <GoogleLogin
                            clientId="1004316542361-h56kuqs619bkjjt2ti4m1qll28t703jp.apps.googleusercontent.com"
                            render={renderProps => (
                                <a className="fa fa-google"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                />
                            )}
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={"single_host_origin"}
                          />
                          <FacebookLogin
                            textButton=""
                            appId = "505495360359430"
                            size = "small"
                            autoLoad = {false}
                            fields = "name,email,picture"
                            onClick = {this.componentClicked}
                            callback = {this.responseFacebook} 
                            cssClass="fa fa-facebook"
                            />
                          <p>or use your account</p>
                          <form style={{paddingLeft: "12%", paddingRight: "12%"}}>
                              <input type="email" placeholder="Email" className="email" name = "email" />
                              <input type="password" placeholder="Password" className="password" name = "password"/>
                              <p style={{margin:"1.5rem 0rem 1rem 0rem"}}>Forgot your password?</p>
                              <button id="b1">Sign In</button>
                          </form>
                      </div>
                      <div className="part" id="hello">
                          <p id="h">Hello, Friend!</p>
                          <p id="info">Enter your personal details<br /> and start your journey with us</p>
                          <br /><br /><br /><br /><br /><br /><br />
                          <button id="b2" onClick ={this.signup}>Sign Up</button>
                      </div>
                      <div className="part" id="welcome">
                          <p id="w">Welcome Back!</p>
                          <p id="note">To keep connected with please connect with us with your personal info.</p>
                          <br /><br /><br /><br /><br /><br /><br /><br />
                          <button id="b3" onClick= {this.signin}>Sign In</button>
                      </div>
                      <div className="part" id="signup">
                          <p id="create" style={{color:"black", marginBottom: "1.8rem"}}>Create Account</p>
                          <GoogleLogin
                            clientId="1004316542361-h56kuqs619bkjjt2ti4m1qll28t703jp.apps.googleusercontent.com"
                            render={renderProps => (
                                <a className="fa fa-google"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                />
                            )}
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={"single_host_origin"}
                          />
                          <FacebookLogin
                            textButton = ""
                            appId = "505495360359430"
                            size = "small"
                            autoLoad = {false}
                            fields = "name,email,picture"
                            onClick = {this.componentClicked}
                            callback = {this.responseFacebook}
                            cssClass = "fa fa-facebook"
                            icon = ""
                            />
                          <p>or use your account</p>
                          <form method="POST" style={{paddingLeft: "12%", paddingRight: "12%"}}>

                              <input type="text" placeholder="Name" id="name" name="name" />
                              <input type="email" placeholder="Email" className="email" name="email" />
                              <input type="password" placeholder="Password" className="password" name="password" />
                              <input type="text" placeholder="Number" className="number" name="number" maxlength="10" />
                              <p>Forgot your password?</p>
                              <button id="b4"><a href="/otp" id="opt" style={{color: "white", textDecoration: "none"}}>Sign Up</a></button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <script src="signup.js" type="text/javascript"></script>
      </Fragment>
    )
  }
  
}

export default Home;
