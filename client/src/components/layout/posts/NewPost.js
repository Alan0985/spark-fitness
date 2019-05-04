import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { addPost } from "../../../actions/postActions";

import Spinner from "../../common/Spinner";

import "./NewPost.css";

class NewPost extends Component {
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPost = {
      text: this.state.text
    };

    this.props.addPost(newPost);
    this.props.history.push("/me/myPosts");
  }

  render() {
    const { errors } = this.state;
    const { post, loading } = this.props.post;
    let newPost;

    if (post === null || loading) {
      newPost = <Spinner />;
    } else {
      newPost = (
        <section id="newPost">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="newPostHeader">
              <Link to="/me/myPosts">
                <div className="cancel">
                  <i className="fas fa-chevron-left" />
                  <p>Cancel</p>
                </div>
              </Link>
              <input type="submit" value="Post" className="post" />
            </div>

            <div className="newPostContent">
              <textarea
                type="text"
                className={classnames("", {
                  "is-invalid": errors.text
                })}
                placeholder="Say Something..."
                name="text"
                value={this.state.text}
                onChange={this.onChange}
              />
              <div className="errorText">
                {errors.text && <p className="invalidMsg">{errors.text}</p>}
              </div>
            </div>
          </form>
        </section>
      );
    }

    return newPost;
  }
}

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(NewPost);
