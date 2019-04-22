import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./postDetail.css";
import avatarPath from "../../img/avatar_500.jpg";
import avatar2 from "../../img/avatar2_500.jpg";
import avatar3 from "../../img/avatar3_500.jpg";
import postImage_1 from "../../img/postImages/postImage_1.jpg";
import postImage_2 from "../../img/postImages/postImage_2.jpg";
import postImage_3 from "../../img/postImages/postImage_3.jpg";
import postImage_4 from "../../img/postImages/postImage_4.jpg";
import postImage_5 from "../../img/postImages/postImage_5.jpg";
import postImage_6 from "../../img/postImages/postImage_6.jpg";
import postImage_7 from "../../img/postImages/postImage_7.jpg";
import postImage_8 from "../../img/postImages/postImage_8.jpg";
import postImage_9 from "../../img/postImages/postImage_9.jpg";

class postDetail extends Component {
  render() {
    return (
      <section id="postDetail">
        <div className="postDetailHeader">
          <Link to="/me/myPosts">
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
                  <p className="name">Julie</p>
                  <p className="postTime">2019/04/17 22:14</p>
                </div>
              </div>

              <div className="postLikes">
                <i className="fas fa-heart" />
                <p className="likesQty">232</p>
              </div>
            </div>

            <div className="postContentText">
              <p>
                I find myself with way more energy than I've ever had, with no
                signs of ever wanting to slow down! Don't give up! It's a
                wonderful journey! I find myself with way more energy than I've
                ever had, with no signs of ever wanting to slow down! Don't give
                up! It's a wonderful journey! I find myself with way more energy
                than I've ever had, with no signs of ever wanting to slow down!
                Don't give up! It's a wonderful journey!
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

              <div className="commentItem">
                <div className="commentItemHeader">
                  <div className="avatarNameTime">
                    <div className="avatar">
                      <img src={avatar3} alt="avatar" />
                    </div>
                    <div className="nameTime">
                      <p className="name">Summer</p>
                      <p className="commentTime">2019/04/17 22:14</p>
                    </div>
                  </div>

                  <div className="thumbsUp">
                    <i className="far fa-thumbs-up" />
                    <p className="thumbsUpQty">8</p>
                  </div>
                </div>

                <div className="commentItemContent">
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>

              <div className="commentItem">
                <div className="commentItemHeader">
                  <div className="avatarNameTime">
                    <div className="avatar">
                      <img src={avatarPath} alt="avatar" />
                    </div>
                    <div className="nameTime">
                      <p className="name">Lily</p>
                      <p className="commentTime">2019/04/17 22:14</p>
                    </div>
                  </div>

                  <div className="thumbsUp">
                    <i className="far fa-thumbs-up" />
                    <p className="thumbsUpQty">4</p>
                  </div>
                </div>

                <div className="commentItemContent">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisi elit. Hic,
                    maiores!
                  </p>
                </div>
              </div>

              <div className="commentItem">
                <div className="commentItemHeader">
                  <div className="avatarNameTime">
                    <div className="avatar">
                      <img src={avatar3} alt="avatar" />
                    </div>
                    <div className="nameTime">
                      <p className="name">Helen</p>
                      <p className="commentTime">2019/04/17 22:14</p>
                    </div>
                  </div>

                  <div className="thumbsUp">
                    <i className="far fa-thumbs-up" />
                    <p className="thumbsUpQty">7</p>
                  </div>
                </div>

                <div className="commentItemContent">
                  <p>Lorem ipsum dolor sit, amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default postDetail;
