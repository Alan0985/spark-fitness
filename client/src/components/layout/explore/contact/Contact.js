import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createNewMessage } from "../../../../actions/exploreActions";

import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      text: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    return (
      <div className="contactForm">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <textarea
            type="text"
            name="text"
            placeholder="Please leave a message"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
Contact.propTypes = {
  createNewMessage: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  explore: state.explore
});

export default connect(
  mapStateToProps,
  { createNewMessage }
)(Contact);
