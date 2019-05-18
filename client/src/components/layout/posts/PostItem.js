import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { clickLike } from "../../../actions/postActions";

class PostItem extends Component {
  onClickLike(postId) {
    this.props.clickLike(postId);
  }

  render() {
    const { post, auth } = this.props;

    let postContentImage;

    postContentImage = post.images.map((image, i) => {
      return (
        <div key={i} className="postImage">
          <img src={image} alt="postImage" />
        </div>
      );
    });

    return (
      <div className="postContent">
        <div className="postContentHeader">
          <div className="avatar">
            <img src={post.avatar} alt="avatar" />
          </div>

          <div className="nameTime">
            <p className="name">{post.name}</p>
            <p className="postTime">
              <Moment format="YYYY/MM/DD HH:mm">{post.date}</Moment>
            </p>
          </div>
        </div>

        <div className="postContentText">
          <p>
            {post.text.length < 120 ? post.text : post.text.slice(0, 120)}
            {post.text.length < 120 ? null : (
              <Link to={`/me/myPosts/${post._id}`}> ...More...</Link>
            )}
          </p>
        </div>

        <div className="postContentImage">{postContentImage}</div>

        <div className="postContentFooter">
          <div
            className="postLikes"
            onClick={this.onClickLike.bind(this, post._id)}
          >
            {post.postLikes.filter(like => like.user === auth.user.id).length >
            0 ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="far fa-heart" />
            )}
            <p className="likesQty">{post.postLikes.length}</p>
          </div>
          <div className="postComments">
            <i className="far fa-comment-dots" />
            <p className="commentsQty">{post.comments.length}</p>
          </div>
          <div className="allComments">
            <Link to={`/me/myPosts/${post._id}`}>Comments</Link>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  clickLike: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { clickLike }
)(PostItem);
