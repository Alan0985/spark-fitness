import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../../../actions/postActions";

import PostContent from "./PostContent";
import Spinner from "../../common/Spinner";

import "./MyPosts.css";

class MyPosts extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }
    this.props.getPosts();
  }

  render() {
    const { user } = this.props.auth;
    const { posts, loading } = this.props.post;
    let myPostMain;

    if (loading) {
      myPostMain = <Spinner />;
    } else {
      let filteredPosts;
      filteredPosts = posts.filter((post) => post.userId === user.id);
      myPostMain = <PostContent posts={filteredPosts} />;
    }

    return (
      <section id="myPosts">
        <div className="myPostsHeader">
          <Link to="/me">
            <div className="backToMyPosts">
              <i className="fas fa-chevron-left" />
              <p>My Posts</p>
            </div>
          </Link>
          <Link to="/me/newPost">
            <div className="newPost">
              <p>New</p>
            </div>
          </Link>
        </div>

        <div className="myPostMain">{myPostMain}</div>
      </section>
    );
  }
}

MyPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(MyPosts);
