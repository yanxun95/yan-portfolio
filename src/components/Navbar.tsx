import "../css/navbar.css";
const Navbar = () => {
  return (
    <ul className="top-navbar-ul">
      <a href="#aboutContainer" className="navbar-link">
        About
      </a>
      <a href="#projectContainer" className="navbar-link">
        <li>Project</li>
      </a>
      <a href="#contactContainer" className="navbar-link">
        <li>Conact</li>
      </a>
      <li className="navbar-link">Resume</li>
    </ul>
  );
};

export default Navbar;
