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
    <p>Loading...</p>
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
            src="https://firebasestorage.googleapis.com/v0/b/smm-portfolio.appspot.com/o/69670075724__9BDD47C6-2257-4C34-B8A2-AE6898244CBD.jpeg?alt=media&token=ed59685a-b075-4a52-b9a6-c8f2c07d8c01"
            alt="user"
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
