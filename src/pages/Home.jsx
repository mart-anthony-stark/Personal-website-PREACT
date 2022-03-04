import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <main className="center-items">
        <Banner />
      </main>
    </>
  );
}
