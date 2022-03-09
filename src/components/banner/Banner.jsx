import "./banner.css";

function Banner() {
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
        <div className="cv">Download CV</div>
      </div>
    </>
  );
}

export default Banner;
