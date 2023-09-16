import React from "react";
import { Link } from "react-router-dom";

const Post = ({ props }) => {
  return (
    <Link to={`/blog/${props.id}`} className="post-container">
      <article className="post">
        <img src={props.image} alt={props.title} className="post-img" />
        <div className="post-content">
          <div className="title">
            <h3>{props.title}</h3>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <p className="text">{props.shortdesc}</p>
        </div>
      </article>
    </Link>
  );
};

export default Post;
