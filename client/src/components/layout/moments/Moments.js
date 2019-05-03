import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPosts } from "../../../actions/postActions";

import MomentPostContent from "./MomentPostContent";
import Spinner from "../../common/Spinner";

import "./Moments.css";

class Moments extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let allPosts;

    if (posts === null || loading) {
      allPosts = <Spinner />;
    } else {
      allPosts = <MomentPostContent posts={posts} />;
    }

    return (
      <section id="allPosts">
        <div className="postMain">{allPosts}</div>
      </section>
    );
  }
}

Moments.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Moments);
