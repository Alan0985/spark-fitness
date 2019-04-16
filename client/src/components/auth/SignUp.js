import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

import "./SignUp.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/signUp", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;

    return (
      <section id="signUp">
        <div className="signUpHeader">
          <h1>Sign Up</h1>
          <p>Sign Up To Keep Fit</p>
        </div>

        <form noValidate onSubmit={this.onSubmit}>
          <div className="inputGroup">
            <input
              type="text"
              className={classnames("", {
                "is-invalid": errors.name
              })}
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <div className="errorText">
              {errors.name && <p className="invalidMsg">{errors.name}</p>}
            </div>
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
            <input
              type="password"
              className={classnames("", {
                "is-invalid": errors.password2
              })}
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            <div className="errorText">
              {errors.password2 && (
                <p className="invalidMsg">{errors.password2}</p>
              )}
            </div>
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
