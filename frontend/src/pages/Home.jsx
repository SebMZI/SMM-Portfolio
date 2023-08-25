import React from "react";
import circle from "../assets/circle.svg";
import mouse from "../assets/mouse.svg";
import aboutPic from "../assets/about-pic.jpg";
import Post from "../components/Post";
import { motion } from "framer-motion";
import variants from "../utils/variants";

const Home = () => {
  return (
    <motion.main
      variants={variants}
      initial="out"
      animate="in"
      exit="out"
      className=""
    >
      <section id="hero">
        <div>
          <h1 className="hero-title">FRONTEND DEVELOPER</h1>
          <p className="hero-subtitle">
            Morazzani Sebastian, 20 years old. A passionate young web developer
            that loves creating, imaginating and coding things to make them
            real, accessible.
          </p>
        </div>
        <div className="hero-illustrations">
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="rounded-scroll">
            <img src={circle} alt="circle text" className="rotate" />
            <img src={mouse} alt="mouse" className="mouse" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-content">
          <h2 about="title">Hi, welcome here !</h2>
          <div className="delimitation"></div>
          <p className="text">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
            <br /> <br />
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
          </p>
        </div>
        <img src={aboutPic} alt="Morazzani Sebastian" className="about-pic" />
      </section>

      <section id="realizations">
        <div className="realizations-header">
          <h2 className="title">REALIZATIONS</h2>
          <div className="line"></div>
        </div>
        <Post />
        <Post />
        <Post />
      </section>
    </motion.main>
  );
};

export default Home;
