import "./styles/about.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-plugin-datalabels";
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
      <section id="skills">
        <Doughnut
          datasetIdKey="id"
          options={{
            plugins: {
              title: {
                display: true,
                text: "Programming Language Proficiency",
              }
            },
          }}
          data={{
            title: "a",
            labels: ["JavaScript", "Java", "C++", "Python"],
            datasets: [
              {
                label: "Languages",
                data: [98, 70, 60, 80],
                backgroundColor: [
                  "rgb(255, 205, 86)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 99, 132)",
                  "rgb(86, 255, 94)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </section>
    </>
  );
};

export default About;
