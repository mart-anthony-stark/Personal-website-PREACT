import Banner from "../components/banner/Banner";
import Socials from "../components/socials/Socials";
import Particles from "preact-particles";
import { route } from "preact-router";

const Home = (props) => {
  return (
    <>
      <main className="center-items">
        <Particles id="tsparticles" url="/assets/js/particlesjs-config.json" />
        <Banner />
        <Socials />
      </main>
    </>
  );
};

export default Home;
