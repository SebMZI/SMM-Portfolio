import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import variants from "../utils/variants";
import { useParams } from "react-router";
import { useProjectQuery } from "../features/projects/projectsApiSlice";

const Blog = () => {
  const { id } = useParams();
  const { data: project, isFetching, isSuccess } = useProjectQuery(id);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (project && project?.techused) {
      const techString = project.techused[0];
      const techNames = techString
        .replace(/["[\]]/g, "")
        .split(",")
        .map((item) => item.trim());
      setTech(techNames);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  return isFetching ? (
    <div className="loader-container">
      <div className="blog-loading"></div>
    </div>
  ) : (
    isSuccess && (
      <motion.main
        className="blog"
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        <img src={project.image} alt="test" className="blog-img" />
        <div className="blog-author">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/smm-portfolio.appspot.com/o/sebastian-morazzani.webp?alt=media&token=33f68ac5-0ef0-4443-b96d-337789c25642"
            alt="author Sebastian Morazzani"
          />
          <p>Sebastian Morazzani</p>
        </div>
        <div className="blog-content">
          <h1 className="blog-title">{project.title}</h1>
          <p className="blog-text">{project.content}</p>
        </div>
        <div className="tech-content">
          <h2>Technologies used</h2>
          <ul>
            {tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="btn-container">
          <a
            className="btn-solid"
            href={project.linkwebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit webiste
          </a>
          <div className="separation">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <a
            className="btn-light"
            href={project.linkgithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            See code
          </a>
        </div>
      </motion.main>
    )
  );
};

export default Blog;
