import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
  }

  render() {
    return (
      <section id="signUp">
        <div className="signUpHeader">
          <h1>Sign Up</h1>
          <p>Sign Up To Keep Fit</p>
        </div>

        <form onSubmit={this.onSubmit}>
          <div className="inputGroup">
            <input
              type="text"
              className=""
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />

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

            <input
              type="password"
              className=""
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />

            <input type="submit" value="Sign Up" className="signUpBtn" />
          </div>
          <p className="or">or</p>
          <Link to="/signIn">Sign In</Link>
        </form>
      </section>
    );
  }
}
export default SignUp;
