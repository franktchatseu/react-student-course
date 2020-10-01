import React from "react";

import "./fontawesome-all.css";
import "./style.css";
import axios from "axios";

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    //send data to server
    axios.post("auth/login", data).then(
      (resp) => {
        console.log(resp)
        localStorage.setItem("token", resp.data.access_token)
        localStorage.setItem("user",JSON.stringify(resp.data.user) )
        
        console.log( this.props)
    
      }
    ).catch(
      (err) => {
        //save token in the localStorage
        console.log(err)
      }
    )
    console.log(data);
  }

  render() {
    return (
      <div class=" w3l-login-form">
        <h2>Login Here</h2>
        <form onSubmit={this.onSubmit}>

          <div class=" w3l-form-group">
            <label>Email:</label>
            <div class="group">
              <i class="fas fa-user"></i>
              <input type="email" name="email" onChange={this.onChange} class="form-control" placeholder="email" required="required" />
            </div>
          </div>
          <div class=" w3l-form-group">
            <label>Password:</label>
            <div class="group">
              <i class="fas fa-unlock"></i>
              <input type="password" name="password" onChange={this.onChange} class="form-control" placeholder="Password" required="required" />
            </div>
          </div>
          <div class="forgot">
            <a href="#">Forgot Password?</a>
            <p><input type="checkbox" />Remember Me</p>
          </div>
          <button type="submit">Login</button>
        </form>
        <p class=" w3l-register-p">Don't have an account?<a href="#" class="register"> Register</a></p>
      </div>

    )
  }
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
  <div>
    <FormInput description="Username" placeholder="Enter your username" type="text" />
    <FormInput description="Password" placeholder="Enter your password" type="password" />
    <FormButton title="Log in" />
  </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

