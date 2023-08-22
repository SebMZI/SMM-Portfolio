import React from "react";
import imgTest from "../assets/post-text.jpg";

const Blog = () => {
  return (
    <main className="blog">
      <img src={imgTest} alt="test" className="blog-img" />
      <div className="blog-author">
        <img src={imgTest} alt="user" />
        <p>John Doe</p>
      </div>
      <div className="blog-content">
        <h1 className="blog-title">Lorem Ipsum</h1>
        <p className="blog-text">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
      <div className="tech-content">
        <h2>Technologies used</h2>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Firebase</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className="btn-container">
        <button className="btn-solid">Visit webiste</button>
        <div className="separation">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <button className="btn-light">See code</button>
      </div>
    </main>
  );
};

export default Blog;
