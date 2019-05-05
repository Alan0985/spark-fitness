import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import { deleteComment } from "../../../actions/postActions";

import avatar2 from "../../../img/avatar2_500.jpg";

class CommentItem extends Component {
  // onClickThumbsUp(postId, commentId) {
  //   // const { comment, post, auth } = this.props;
  //   // if (
  //   //   //Check the signed-in user already liked this comment or not
  //   //   comment.commentLikes.map(like => like.user === auth.user.id).length > 0
  //   // ) {
  //   //   this.props.unThumbsUp(
  //   //     this.props.match.params.postId,
  //   //     this.props.match.params.commentId
  //   //   );
  //   // } else {
  //   this.props.thumbsUp(postId, commentId);
  // }

  onDeleteComment(postId, commentId) {
    this.props.deleteComment(postId, commentId);
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

          {/* <div
            className="thumbsUp"
            onClick={this.onClickThumbsUp.bind(
              this,
              post.post._id,
              comment._id
            )}
          >
            <i className="far fa-thumbs-up" />
            <p className="thumbsUpQty">{comment.commentLikes.length}</p>
          </div> */}
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
