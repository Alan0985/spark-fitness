import React, { Component } from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    if (comments.length < 1) {
      return (
        <div className="noComment">
          <p>No comment yet.</p>
          <p>Please leave the first comment.</p>
        </div>
      );
    } else {
      return comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} />
      ));
    }
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};
export default CommentList;
