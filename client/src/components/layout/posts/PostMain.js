import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import CommentList from "../comments/CommentList";
import { addComment } from "../../../actions/postActions";

import postImage_1 from "../../../img/postImages/postImage_1.jpg";
import postImage_2 from "../../../img/postImages/postImage_2.jpg";
import postImage_3 from "../../../img/postImages/postImage_3.jpg";

class PostMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { _id } = this.props.post.post;

    const newComment = {
      name: user.name,
      avatar: user.avatar,
      text: this.state.text
    };

    this.props.addComment(_id, newComment);
    this.setState({ text: "" });
  };

  render() {
    const { post } = this.props.post;
    const { auth } = this.props;

    return (
      <div className="postMain">
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

            <div className="postLikes">
              <i className="fas fa-heart" />
              <p className="likesQty">{post.postLikes.length}</p>
            </div>
          </div>

          <div className="postContentText">
            <p>{post.text}</p>
          </div>

          <div className="postContentImage">
            <div className="postImage">
              <img src={postImage_1} alt="postImage_1" />
            </div>

            <div className="postImage">
              <img src={postImage_2} alt="postImage_2" />
            </div>

            <div className="postImage">
              <img src={postImage_3} alt="postImage_3" />
            </div>
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
            <input type="submit" value="Send" className="send" />
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

PostMain.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(PostMain);
