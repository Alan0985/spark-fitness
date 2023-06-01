import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import PostContentImage from "../PostContentImage";
import CommentList from "../../comments/CommentList";

import {
  getPost,
  clickLike,
  addComment,
} from "../../../../actions/postActions";

class PostDetailMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onClickLike(postId) {
    this.props.clickLike(postId);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { id } = this.props.post.post;

    const newComment = {
      userId: user.id,
      name: user.name,
      avatar: user.avatar,
      text: this.state.text,
      date: new Date(),
    };

    console.log("newComment", newComment);

    this.props.addComment(id, newComment);
    this.setState({ text: "" });
  };

  render() {
    const { post } = this.props.post;
    const { auth } = this.props;

    return (
      <div className="postDetailMain">
        <div className="postContent">
          <div className="postContentHeader">
            <div className="avatarNameTime">
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
          </div>

          <div className="postContentText">
            <p>{post.text}</p>
          </div>

          <div className="postContentImage">
            <PostContentImage post={post} />
          </div>
        </div>

        <div className="addComment">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="avatar">
              <img src={auth.user.avatar} alt="avatar" />
            </div>
            <input
              className="textInput"
              type="text"
              name="comment"
              value={this.state.text}
              placeholder=" Add a comment here"
              onChange={this.onChange}
            />
            {this.state.text === "" ? (
              <input
                type="submit"
                value="Send"
                className="disabledSend"
                disabled
              />
            ) : (
              <input type="submit" value="Send" className="send" />
            )}
          </form>
        </div>

        <div className="postComments">
          <div className="allComments">
            <div>All Comments</div>
          </div>
          <div className="commentList">
            <CommentList comments={post.comments} />
          </div>
        </div>
      </div>
    );
  }
}

PostDetailMain.propTypes = {
  getPost: PropTypes.func.isRequired,
  clickLike: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPost, clickLike, addComment })(
  PostDetailMain
);
