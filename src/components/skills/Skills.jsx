import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-plugin-datalabels";
Chart.register(...registerables);

const Skills = () => {
  return (
    <section id="skills">
      <Doughnut
        datasetIdKey="id"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Programming Language Proficiency",
            },
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
  );
};

export default Skills;
