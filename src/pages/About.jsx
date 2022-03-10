import "./styles/about.css";
import { route } from "preact-router";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

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
      <section>
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 1],
              },
            ],
          }}
        />
      </section>
    </>
  );
};

export default About;
