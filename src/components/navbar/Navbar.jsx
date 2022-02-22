import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h2 className="logo">Mart</h2>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
