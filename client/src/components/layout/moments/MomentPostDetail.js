import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import CommentList from "../comments/CommentList";
import Spinner from "../../common/Spinner";
import { getPost, deletePost, addComment } from "../../../actions/postActions";

import "./MomentPostDetail.css";

import postImage_1 from "../../../img/postImages/postImage_1.jpg";
import postImage_2 from "../../../img/postImages/postImage_2.jpg";
import postImage_3 from "../../../img/postImages/postImage_3.jpg";
import postImage_4 from "../../../img/postImages/postImage_4.jpg";
import postImage_5 from "../../../img/postImages/postImage_5.jpg";
import postImage_6 from "../../../img/postImages/postImage_6.jpg";
import postImage_7 from "../../../img/postImages/postImage_7.jpg";
import postImage_8 from "../../../img/postImages/postImage_8.jpg";
import postImage_9 from "../../../img/postImages/postImage_9.jpg";

class MomentPostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }
    this.props.getPost(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ errors: nextProps.errors });
    }
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

  onDeletePost(postId) {
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.props.deletePost(postId);
      window.location.replace("/moments");
    }
  }

  render() {
    const { post, loading } = this.props.post;
    const { errors, auth } = this.props;

    let postMain;
    if (Object.keys(post).length < 1 || loading) {
      postMain = <Spinner />;
    } else {
      postMain = (
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

            {post.user === auth.user.id ? (
              <div
                className="deletePost"
                onClick={this.onDeletePost.bind(this, post._id)}
              >
                <i className="fas fa-trash-alt" />
              </div>
            ) : null}
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

    return (
      <section id="postDetail">
        <div className="postDetailHeader">
          <Link to="/moments">
            <div className="backToMyPosts">
              <i className="fas fa-chevron-left" />
              <p>Post Detail</p>
            </div>
          </Link>
        </div>
        {postMain}
      </section>
    );
  }
}

MomentPostDetail.propTypes = {
  getPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
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
  { getPost, deletePost, addComment }
)(MomentPostDetail);
