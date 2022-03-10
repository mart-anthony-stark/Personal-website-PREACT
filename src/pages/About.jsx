import "./styles/about.css";
import { route } from "preact-router";

const About = () => {
  return (
    <>
      <div className="about flex center-items">
        <div className="intro">
          &emsp; Hello! I am <strong>Mart Anthony A. Salazar</strong>. I am
          currently taking Bachelor of Science in Information Technology at the
          University of Camarines Norte. I have a diverse set of skills ranging
          from web and graphic design, HTML, CSS, JavaScript, including SEO
          optimization all the way to node.js and its frameworks for backend and
          fullstack development. I am very passionate in learning different
          programming languages and technologies that I know I can use for my
          future work and projects. I have experience in freelancing in web
          development and still learning things to grow in the tech industry.
        </div>
        <div className="profile">
          <img src="/assets/SALAZAR.png" alt="Mart Anthony A. Salazar" />
        </div>
      </div>
      <section></section>
    </>
  );
};

export default About;
