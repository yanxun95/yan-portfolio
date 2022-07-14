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
        <li>Contact</li>
      </a>
      <a
        href="https://drive.google.com/file/d/16L3-j-rFDovGvq3m5Ke3MyJN8bdT8eiI/view?usp=sharing"
        target={"_blank"}
        rel="noreferrer"
        className="navbar-link"
      >
        <li>Resume</li>
      </a>
    </ul>
  );
};

export default Navbar;
