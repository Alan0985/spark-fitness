import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  }

  render() {
    return (
      <section id="signIn">
        <div className="signInHeader">
          <h1>Sign In</h1>
          <p>Sign In To Keep Fit</p>
        </div>

        <form onSubmit={this.onSubmit}>
          <div className="inputGroup">
            <input
              type="email"
              className=""
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />

            <input
              type="password"
              className=""
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <input type="submit" value="Sign In" className="signInBtn" />
          </div>
          <p className="or">or</p>
          <Link to="/signUp">Sign Up</Link>
        </form>
      </section>
    );
  }
}
export default SignIn;
