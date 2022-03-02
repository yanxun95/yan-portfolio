import CenterSection from "./CenterSection";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import "../css/homepage.css";

const Homepage = () => {
  return (
    <div className="homapage-main-container">
      <Navbar />
      <div className="homapage-container">
        <CenterSection />
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
};

export default Homepage;
