import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <section id="newPost">
        <form noValidate>
          <div className="newPostHeader">
            <Link to="/me/myPosts">
              <div className="cancel">
                <i className="fas fa-chevron-left" />
                <p>Cancel</p>
              </div>
            </Link>

            <input type="submit" value="Post" className="post" />
          </div>
        </form>
      </section>
    );
  }
}

NewPost.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(NewPost);
