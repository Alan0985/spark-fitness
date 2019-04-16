import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";

import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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

    axios
      .post("/api/users/signIn", user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    return (
      <section id="signIn">
        <div className="signInHeader">
          <h1>Sign In</h1>
          <p>Sign In To Keep Fit</p>
        </div>

        <form noValidate onSubmit={this.onSubmit}>
          <div className="inputGroup">
            <input
              type="email"
              className={classnames("", {
                "is-invalid": errors.email
              })}
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <div className="errorText">
              {errors.email && <p className="invalidMsg">{errors.email}</p>}
            </div>
            <input
              type="password"
              className={classnames("", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <div className="errorText">
              {errors.password && (
                <p className="invalidMsg">{errors.password}</p>
              )}
            </div>
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
