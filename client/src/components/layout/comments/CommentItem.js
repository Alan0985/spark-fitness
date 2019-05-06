import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import { deleteComment } from "../../../actions/postActions";

import avatar2 from "../../../img/avatar2_500.jpg";

class CommentItem extends Component {
  onDeleteComment(postId, commentId) {
    if (window.confirm("Delete this comment?")) {
      this.props.deleteComment(postId, commentId);
    }
  }

  render() {
    const { comment, post, auth } = this.props;
    return (
      <div className="commentItem">
        <div className="commentItemHeader">
          <div className="avatarNameTime">
            <div className="avatar">
              <img src={avatar2} alt="avatar" />
            </div>
            <div className="nameTime">
              <p className="name">{comment.name}</p>
              <p className="commentTime">
                <Moment format="YYYY/MM/DD HH:mm">{comment.date}</Moment>
              </p>
            </div>
          </div>
          {comment.user === auth.user.id ? (
            <div
              className="trash"
              onClick={this.onDeleteComment.bind(
                this,
                post.post._id,
                comment._id
              )}
            >
              <i className="fas fa-trash-alt" />
            </div>
          ) : null}
        </div>

        <div className="commentItemContent">
          <p>{comment.text}</p>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
