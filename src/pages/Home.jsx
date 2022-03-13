import Banner from "../components/banner/Banner";
import Socials from "../components/socials/Socials";
import Particles from "preact-particles";
import About from "../pages/About";
import { route } from "preact-router";

const Home = (props) => {
  return (
    <>
      <main className="center-items">
        <Particles id="tsparticles" url="/assets/js/particlesjs-config.json" />
        <Banner />
        <Socials />
      </main>
      <About />
    </>
  );
};

export default Home;
