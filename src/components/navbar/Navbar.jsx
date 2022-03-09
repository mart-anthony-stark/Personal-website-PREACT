import "./navbar.css";
import { Link } from "preact-router/match";

export default function Navbar() {
  return (
    <nav>
      <h2 className="logo">Mart</h2>
      <div className="menu">
        <Link activeClassName="active" href="/">
          Home
        </Link>
        <Link activeClassName="active" href="/about">
          About
        </Link>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
