import "../css/sidebar.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const LeftBar = () => {
  return (
    <div className="left-side-bar-container">
      <ul className="left-side-bar-ul">
        <li>
          <a
            href="https://github.com/yanxun95"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="li-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yan-xun-chang-328615181/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="li-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default LeftBar;
