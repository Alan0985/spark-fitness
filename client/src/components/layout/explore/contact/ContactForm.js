import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createNewMessage } from "../../../../actions/exploreActions";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      text: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      text: this.state.text
    };

    this.props.createNewMessage(newMessage);
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="contactForm">
        <form noValidate onSubmit={this.onSubmit}>
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

          <textarea
            type="text"
            className={classnames("", {
              "is-invalid": errors.text
            })}
            name="text"
            placeholder="Please leave a message"
            value={this.state.text}
            onChange={this.onChange}
          />
          <div className="errorText">
            {errors.text && <p className="invalidMsg">{errors.text}</p>}
          </div>

          {this.state.name === "" ||
          this.state.email === "" ||
          this.state.text === "" ? (
            <input
              className="disabledSubmit"
              type="submit"
              name="submit"
              value="Submit"
              disabled
            />
          ) : (
            <input
              className="submit"
              type="submit"
              name="submit"
              value="Submit"
            />
          )}
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  createNewMessage: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  explore: state.explore,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createNewMessage }
)(ContactForm);
