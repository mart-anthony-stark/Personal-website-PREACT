import "./styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        {projects.map((project) => {
          return (
            <div className="project">
              <img src={project.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const projects = [
  {
    img: "/assets/projects/react-os.png",
  },
  {
    img: "/assets/projects/ShoeShop.png",
  },
  {
    img: "/assets/projects/techzen.png",
  },
  {
    img: "/assets/projects/weather.png",
  },
  {
    img: "/assets/projects/covidtracker.png",
  },
  {
    img: "/assets/projects/exotify.png",
  },
  {
    img: "/assets/projects/jaja.png",
  },
  {
    img: "/assets/projects/landingPage.png",
  },
  {
    img: "/assets/projects/News.png",
  },
  {
    img: "/assets/projects/Pizza.png",
  },
];

export default Projects;
