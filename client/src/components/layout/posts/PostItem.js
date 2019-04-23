import React, { Component } from "react";
import { Link } from "react-router-dom";

import avatarPath from "../../../img/avatar_500.jpg";
import postImage_1 from "../../../img/postImages/postImage_1.jpg";
import postImage_2 from "../../../img/postImages/postImage_2.jpg";
import postImage_3 from "../../../img/postImages/postImage_3.jpg";
import postImage_4 from "../../../img/postImages/postImage_4.jpg";
import postImage_5 from "../../../img/postImages/postImage_5.jpg";
import postImage_6 from "../../../img/postImages/postImage_6.jpg";
import postImage_7 from "../../../img/postImages/postImage_7.jpg";
import postImage_8 from "../../../img/postImages/postImage_8.jpg";
import postImage_9 from "../../../img/postImages/postImage_9.jpg";

class PostItem extends Component {
  render() {
    return (
      <div className="postContent">
        <div className="postContentHeader">
          <div className="avatar">
            <img src={avatarPath} alt="avatar" />
          </div>

          <div className="nameTime">
            <p className="name">Julie</p>
            <p className="postTime">2019/04/17 22:14</p>
          </div>
        </div>

        <div className="postContentText">
          <p>
            I find myself with way more energy than I've ever had, with no signs
            of ever wanting to slow down! Don't give up! It's a wonderful
            journey!
            <Link to="/me/myPosts/postDetail">...More...</Link>
          </p>
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

        <div className="postContentFooter">
          <div className="postLikes">
            <i className="fas fa-heart" />
            <p className="likesQty">232</p>
          </div>
          <div className="postComments">
            <i className="far fa-comment-dots" />
            <p className="commentsQty">58</p>
          </div>
          <div className="allComments">
            <Link to="/me/myPosts/postDetail">All Comments</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
