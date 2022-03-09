import lazy from "preact-lazy";
import Router from "preact-router";
import { useEffect } from "preact/hooks";
import Navbar from "./components/navbar/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export function App(props) {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    function followCursor(e) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    }
    function parallax(e) {
      document.querySelectorAll(".parallax-layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px,${y}px)`;
      });
    }

    function snap() {
      cursor.classList.add("snap");

      setTimeout(() => {
        cursor.classList.remove("snap");
      }, 500);
    }

    window.addEventListener("mousemove", followCursor);
    window.addEventListener("mousemove", parallax);
    window.addEventListener("click", snap);

    return () => {
      window.removeEventListener("mousemove", followCursor);
      window.removeEventListener("mousemove", parallax);
      window.removeEventListener("click", snap);
    };
  }, []);
  return (
    <>
      <div id="cursor"></div>
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </>
  );
}
