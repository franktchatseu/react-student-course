import React from "react";
import axios from "axios";
import "./style.css"

class LoginForm extends React.Component {

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
        localStorage.setItem("user", JSON.stringify(resp.data.user))
        console.log(this.props)
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
      <div class="auth-form mx-auto my-auto col-md-5 col-lg-3">
        <div className="card">
          <div class="card-body">
            <img class="auth-form__logo d-table mx-auto mb-3" src="./static/media/shards-dashboards-logo.60a85991.svg" alt="Shards Dashboards - Login Template" /><h5 class="auth-form__title text-center mb-4">Access Your Account</h5>
            <form onSubmit={this.onSubmit} action="/child">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" id="exampleInputEmail1" placeholder="Enter email"
                  autocomplete="email" class="form-control"
                  value={this.state.email}
                  name="email"
                  onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" id="exampleInputPassword1" placeholder="Password"
                  autocomplete="current-password" class="form-control"
                  value={this.state.password}
                  name="password"
                  onChange={this.onChange} />
              </div>
              <div class="form-group" >
                <label class="custom-control custom-checkbox">
                  <input id="dr-checkbox-hGvPOJZZX" type="checkbox" class="custom-control-input" />
                  <label id="dr-checkbox-hGvPOJZZX" class="custom-control-label" aria-hidden="true"></label>
                  <span class="custom-control-description">Remember me for 30 days.</span>
                </label>
              </div>
              <button type="submit" class="d-table mx-auto btn btn-accent btn-pill">Access Account</button>
            </form>
          </div>
          <div class="card-footer">
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;