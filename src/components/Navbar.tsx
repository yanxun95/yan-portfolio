import "../css/navbar.css";
const Navbar = () => {
  function about() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <ul className="top-navbar-ul">
      <li onClick={() => about()} className="navbar-link">
        About
      </li>
      <a href="#projectContainer" className="navbar-link">
        <li>Project</li>
      </a>

      <li className="navbar-link">Resume</li>
    </ul>
  );
};

export default Navbar;
