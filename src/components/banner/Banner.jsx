import Button from "../button/Button";
import "./banner.css";

const Banner = () => {
  const downloadCV = () => {
    window.open("assets/Resume-Mart-Anthony-Salazar.pdf");
  };

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
        <Button className="cta" onClick={downloadCV}>
          View CV
        </Button>
      </div>
    </>
  );
};

export default Banner;
