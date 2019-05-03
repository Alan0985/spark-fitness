import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import { getPost } from "../../../actions/postActions";

import "./MomentPostDetail.css";
import avatarPath from "../../../img/avatar_500.jpg";
import avatar2 from "../../../img/avatar2_500.jpg";
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
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props.post;

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

        <div className="postMain">
          <div className="postContent">
            <div className="postContentHeader">
              <div className="avatarNameTime">
                <div className="avatar">
                  <img src={avatarPath} alt="avatar" />
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
                <p className="likesQty">32</p>
                {/* <p className="likesQty">{post.postLikes.length}</p> */}
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

              <div className="postImage">
                <img src={postImage_4} alt="postImage_4" />
              </div>

              <div className="postImage">
                <img src={postImage_5} alt="postImage_5" />
              </div>

              <div className="postImage">
                <img src={postImage_6} alt="postImage_6" />
              </div>

              <div className="postImage">
                <img src={postImage_7} alt="postImage_7" />
              </div>
              <div className="postImage">
                <img src={postImage_8} alt="postImage_8" />
              </div>
              <div className="postImage">
                <img src={postImage_9} alt="postImage_9" />
              </div>
            </div>
          </div>

          <div className="postComments">
            <div className="allComments">
              <div>All Comments</div>
            </div>
            <div className="commentsList">
              <div className="commentItem">
                <div className="commentItemHeader">
                  <div className="avatarNameTime">
                    <div className="avatar">
                      <img src={avatar2} alt="avatar" />
                    </div>
                    <div className="nameTime">
                      <p className="name">Jane</p>
                      <p className="commentTime">2019/04/17 22:14</p>
                    </div>
                  </div>

                  <div className="thumbsUp">
                    <i className="far fa-thumbs-up" />
                    <p className="thumbsUpQty">12</p>
                  </div>
                </div>

                <div className="commentItemContent">
                  <p>Lorem ipsum dolor sit, amet consect adipis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MomentPostDetail.propTypes = {
  getPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost }
)(MomentPostDetail);
