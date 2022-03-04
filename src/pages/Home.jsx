import Navbar from "../components/navbar/Navbar";

export default function Home(props) {
  return (
    <>
      <Navbar></Navbar>
      <h2>Hello there! I'm</h2>
      <h1 class="logo" data-text="Mart_Anthony">
        Mart<span>_Anthony</span>
      </h1>
      <h2 class="desc">
        I am <span></span>
      </h2>
      <a
        href="https://github.com/mart-anthony-stark"
        target="_blank"
        class="github"
      >
        <i class="fa fa-github-square" aria-hidden="true"></i>
        GitHub
      </a>
      <a href="#profile" class="scroll-down">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </>
  );
}
