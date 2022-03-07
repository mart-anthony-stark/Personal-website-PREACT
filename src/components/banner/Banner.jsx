import "./banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner center-items col">
        <h2>Hello there! I'm</h2>
        <h1 class="logo" data-text="Mart_Anthony">
          Mart<span>_Anthony</span>
        </h1>
        <h2 class="desc">
          I am <span></span>
        </h2>
        <div className="center-items">
          <a
            href="https://github.com/mart-anthony-stark"
            target="_blank"
            class="social-link"
          >
            <i class="fa fa-github-square" aria-hidden="true"></i>
            GitHub
          </a>
          <a
            href="https://github.com/mart-anthony-stark"
            target="_blank"
            class="social-link"
          >
            <i class="fa fa-github-square" aria-hidden="true"></i>
            GitHub
          </a>
        </div>
        <a href="#profile" class="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </>
  );
}
