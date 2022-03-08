import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Socials from "../components/socials/Socials";
import Particles from "preact-particles";

export default function Home(props) {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {};
  return (
    <>
      <Navbar />
      <main className="center-items">
        <Particles
          id="tsparticles"
          url="/assets/js/particlesjs-config.json"
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <Banner />
        <Socials />
      </main>
    </>
  );
}
