import "./socials.css";

const Socials = () => {
  return (
    <div className="socials align-left col gap-2">
      <a
        href="https://github.com/mart-anthony-stark"
        target="_blank"
        class="social-link center-items gap-2"
      >
        <i class="fa fa-github-square" aria-hidden="true"></i>
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/mart-anthony-salazar-420ba81b6/"
        target="_blank"
        class="social-link center-items gap-2"
      >
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        LinkedIn
      </a>
      <a
        href="https://www.facebook.com/martanthony.abanosalazar/"
        target="_blank"
        class="social-link center-items gap-2"
      >
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
        Facebook
      </a>
    </div>
  );
};
export default Socials;
