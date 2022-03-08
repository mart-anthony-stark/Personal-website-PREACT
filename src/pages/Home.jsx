import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Socials from "../components/socials/Socials";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <main className="center-items">
        <div className="particles-js"></div>
        <Banner />
        <Socials />
      </main>
    </>
  );
}
