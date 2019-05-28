import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addPost } from "../../../../actions/postActions";

import NewPostImages from "./NewPostImages";
import Plus from "./Plus";
import Spinner from "../../../common/Spinner";

import "./NewPost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      images: [],
      uploading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUploadImages = this.onUploadImages.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onUploadImages(e) {
    const files = Array.from(e.target.files);

    if (files.length > 9) {
      //Check if more than 9 images selected once
      alert("Sorry, please upload 9 images at most");
      return false;
    } else if (files.length + this.state.images.length > 9) {
      //Check if total image quantity is over 9 or not, when more images added
      alert("Sorry, please upload 9 images at most");
      return false;
    }

    let formData = new FormData();
    files.forEach((file, i) => {
      if (file.size > 1048576) {
        alert(
          `${file.name} is too large. Please upload images smaller than 1M`
        );
      } else {
        formData.append(i, file);
      }
    });

    this.setState({
      uploading: true
    });

    fetch("/image-upload", {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(images => {
        this.setState({
          images: this.state.images.concat(images),
          uploading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id);
  };

  removeImage = id => {
    this.setState({ images: this.filter(id) });
  };

  onSubmit(e) {
    e.preventDefault();
    const { images } = this.state;
    const imagesURL = Array.from(images.map(image => image.secure_url));

    const newPost = {
      text: this.state.text,
      images: imagesURL
    };
    this.props.addPost(newPost);
    window.location.replace("/me/myPosts");
  }

  render() {
    const { images, uploading } = this.state;
    const { loading } = this.props.post;

    const newPostImages = () => {
      switch (true) {
        case uploading:
          return <Spinner />;

        case images.length > 0 && images.length < 9:
          return (
            <div className="imagesWrapper">
              <NewPostImages images={images} removeImage={this.removeImage} />
              <Plus onChange={this.onUploadImages} />
            </div>
          );

        case images.length === 9:
          return (
            <div className="imagesWrapper">
              <NewPostImages images={images} removeImage={this.removeImage} />
            </div>
          );
        default:
          return <Plus onChange={this.onUploadImages} />;
      }
    };

    let newPost;
    if (loading) {
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

              {this.state.text === "" && this.state.images.length === 0 ? (
                <input
                  type="submit"
                  value="Post"
                  className="disabledPost"
                  disabled
                />
              ) : (
                <input type="submit" value="Post" className="post" />
              )}
            </div>

            <div className="newPostContent">
              <textarea
                type="text"
                placeholder="Say Something..."
                name="text"
                value={this.state.text}
                onChange={this.onChange}
              />

              <div className="newPostImages">{newPostImages()}</div>
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { addPost }
)(NewPost);
