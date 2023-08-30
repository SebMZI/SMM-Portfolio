import circle from "../assets/circle.svg";
import mouse from "../assets/mouse.svg";
import Post from "../components/Post";
import { motion } from "framer-motion";
import variants from "../utils/variants";
import { useProjectsQuery } from "../features/projects/projectsApiSlice";

const Home = () => {
  const { data: projects, isLoading, isSuccess } = useProjectsQuery();

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
            Morazzani Sebastian, 20 years old. A passionate young web developer
            that loves creating, imaginating and coding things to make them
            real, accessible.
            <br /> <br />
            I did an OpenClassrooms online course where I learned how to code
            websites. It was a 9 months course, I learned Html, Css at first,
            then JavaScript and React. But I wanted to know more, so I went on
            youtube to learn ExpressJS, NodeJS, and MongoDB to create my own
            REST API which runs my portfolio. The entire Porfolio has been
            designed by myself on Figma.
            <br />
            Talking about my soft skills: I'm creative, autodidact and
            independent.
            <br /> <br />
            At the end of this course, I had a BTEC Higher National Diploma or
            Bac +2 in France.
          </p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/smm-portfolio.appspot.com/o/69670075724__9BDD47C6-2257-4C34-B8A2-AE6898244CBD.jpeg?alt=media&token=ed59685a-b075-4a52-b9a6-c8f2c07d8c01"
          alt="Morazzani Sebastian"
          className="about-pic"
        />
      </section>

      <section id="realizations">
        <div className="realizations-header">
          <h2 className="title">REALIZATIONS</h2>
          <div className="line"></div>
        </div>

        {isLoading ? (
          <p>Loading projects...</p>
        ) : (
          isSuccess &&
          projects.map((project) => (
            <Post
              key={project._id}
              props={{
                id: project._id,
                title: project.title,
                shortdesc: project.shortdesc,
                image: project.image,
              }}
            />
          ))
        )}
      </section>
    </motion.main>
  );
};

export default Home;
