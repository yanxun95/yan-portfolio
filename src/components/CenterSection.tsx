import "../css/centerSection.css";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const CenterSection = () => {
  return (
    <div className="center-section-container">
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default CenterSection;
