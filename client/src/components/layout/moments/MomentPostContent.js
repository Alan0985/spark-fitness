import React, { Component } from "react";
import PropTypes from "prop-types";
import MomentPostItem from "./MomentPostItem";

class MomentPostContent extends Component {
  render() {
    const { posts } = this.props;
    return posts.map((post) => <MomentPostItem key={post.id} post={post} />);
  }
}

MomentPostContent.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default MomentPostContent;
