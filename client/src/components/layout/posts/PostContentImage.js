import React, { Component } from "react";
import "./PostContentImage.css";

class PostContentImage extends Component {
  state = {
    showModal: false,
    imageURL: ""
  };

  toggleModal(e) {
    if (this.state.showModal) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    this.setState({
      showModal: !this.state.showModal,
      imageURL: e.target.src
    });
  }

  render() {
    const { post } = this.props;
    let postImages = post.images.map((image, i) => {
      return (
        <div key={i} className="postImage">
          <img
            onClick={this.toggleModal.bind(this)}
            src={image}
            alt="postImage"
          />
        </div>
      );
    });

    let imageModal;
    this.state.showModal
      ? (imageModal = (
          <div
            key={post._id}
            onClick={this.toggleModal.bind(this)}
            className="imageModal"
          >
            <img src={this.state.imageURL} alt="modalImage" />
          </div>
        ))
      : (imageModal = null);

    let PostContentImage = postImages.concat(imageModal);

    return PostContentImage;
  }
}
export default PostContentImage;
