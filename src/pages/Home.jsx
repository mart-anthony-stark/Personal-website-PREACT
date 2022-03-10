import Banner from "../components/banner/Banner";
import Socials from "../components/socials/Socials";
import Particles from "preact-particles";
import { route } from "preact-router";

const Home = (props) => {
  const handleMouseWheel = (e) => {
    if (e.wheelDeltaY == -120) {
      route("/about");
    }
  };

  return (
    <>
      <main className="center-items" onWheel={handleMouseWheel}>
        <Particles id="tsparticles" url="/assets/js/particlesjs-config.json" />
        <Banner />
        <Socials />
      </main>
    </>
  );
};

export default Home;
