import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { clickLike } from "../../../actions/postActions";
import PostContentImage from "../posts/PostContentImage";

class MomentPostItem extends Component {
  onClickLike(postId) {
    this.props.clickLike(postId);
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div className="postContent">
        <div className="postContentHeader">
          <div className="avatar">
            <img src={post.avatar} alt="avatar" />
          </div>

          <div className="nameTime">
            <p className="name">{post.name}</p>
            <p className="postTime">
              <Moment format="YYYY/MM/DD HH:mm">{post.createdAt}</Moment>
            </p>
          </div>
        </div>

        <div className="postContentText">
          <Link to={`/moments/${post.id}`}>
            <p>
              {post.text.length < 120 ? post.text : post.text.slice(0, 120)}
              {post.text.length < 120 ? null : <span>...More...</span>}
            </p>
          </Link>
        </div>

        <div className="postContentImage">
          <PostContentImage post={post} />
        </div>

        <div className="postContentFooter">
          <div
            className="postLikes"
            onClick={this.onClickLike.bind(this, post.id)}
          >
            {post.postLikes.filter((like) => like.userId === auth.user.id)
              .length > 0 ? (
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
            <Link to={`/moments/${post.id}`}>Comments</Link>
          </div>
        </div>
      </div>
    );
  }
}

MomentPostItem.propTypes = {
  clickLike: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { clickLike })(MomentPostItem);
