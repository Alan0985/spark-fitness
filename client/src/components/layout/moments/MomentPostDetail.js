import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostDetailMain from "../posts/postDetail/PostDetailMain";
import Spinner from "../../common/Spinner";
import { getPost, deletePost } from "../../../actions/postActions";

import "../posts/postDetail/PostDetail.css";

class MomentPostDetail extends Component {
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

  onDeletePost(postId) {
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.props.deletePost(postId);
      window.location.replace("/moments");
    }
  }

  render() {
    const { post, loading } = this.props.post;
    const { auth } = this.props;

    return (
      <section id="postDetail">
        <div className="postDetailHeader">
          <Link to="/moments">
            <div className="backToMyPosts">
              <i className="fas fa-chevron-left" />
              <p>Post Detail</p>
            </div>
          </Link>
          {post.user === auth.user.id ? (
            <div className="deletePost">
              <i
                className="fas fa-trash-alt"
                onClick={this.onDeletePost.bind(this, post._id)}
              />
            </div>
          ) : null}
        </div>
        {Object.keys(post).length < 1 || loading ? (
          <Spinner />
        ) : (
          <PostDetailMain />
        )}
      </section>
    );
  }
}

MomentPostDetail.propTypes = {
  getPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
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
  { getPost, deletePost }
)(MomentPostDetail);
