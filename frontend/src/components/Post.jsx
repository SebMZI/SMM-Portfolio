import React from "react";
import { Link } from "react-router-dom";
import postTest from "../assets/post-text.jpg";

const Post = () => {
  return (
    <Link to={"/blog/1"} className="post-container">
      <article className="post">
        <img src={postTest} alt="posttest" className="post-img" />
        <div className="post-content">
          <div className="title">
            <h3>Lorem Ipsum</h3>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <p className="text">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Post;
