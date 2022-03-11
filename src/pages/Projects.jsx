import "./styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        {projects.map((project) => {
          return (
            <div className="project" key={project.id}>
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
    id: 1,
    img: "/assets/projects/react-os.png",
  },
  {
    id: 2,

    img: "/assets/projects/ShoeShop.png",
  },
  {
    id: 3,

    img: "/assets/projects/techzen.png",
  },
  {
    id: 4,

    img: "/assets/projects/weather.png",
  },
  {
    id: 5,

    img: "/assets/projects/covidtracker.png",
  },
  {
    id: 6,

    img: "/assets/projects/exotify.png",
  },
  {
    id: 7,

    img: "/assets/projects/jaja.png",
  },
  {
    id: 8,

    img: "/assets/projects/landingPage.png",
  },
  {
    id: 9,

    img: "/assets/projects/News.png",
  },
  {
    id: 10,

    img: "/assets/projects/Pizza.png",
  },
];

export default Projects;
