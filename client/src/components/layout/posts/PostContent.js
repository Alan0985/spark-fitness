import React, { Component } from "react";
import PropTypes from "prop-types";

import PostItem from "./PostItem";

class PostContent extends Component {
  render() {
    const { posts } = this.props;

    if (posts.length < 1) {
      return (
        <div className="noPost">
          <div>
            <p>No post yet.</p>
            <p>Please click 'New' to create your first post.</p>
          </div>
        </div>
      );
    } else {
      return posts.map(post => <PostItem key={post._id} post={post} />);
    }
  }
}

PostContent.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContent;
