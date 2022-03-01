import { Col, Container, Row } from "react-bootstrap";
import "../css/project.css";
import projects from "../data/project-list.json";
import { FiFolder } from "react-icons/fi";

const Project = () => {
  return (
    <div id="projectContainer" className="section-container">
      <div className="section-title">Project</div>
      <Container>
        <Row className="project-list">
          {projects.map((project) => (
            <Col
              className="g-0 project-item"
              // onClick={() => newPage("test")}
              key={project.title}
            >
              <a
                href={project.gitHubLink}
                target="blank"
                className="project-link"
              >
                <div className="project-first-container">
                  <FiFolder className="project-folder-icon" />
                </div>
                <div className="project-title">
                  <h4>{project.title}</h4>
                </div>
                <div className="project-description">{project.description}</div>
                <div className="project-last-container">
                  <ul className="project-tech-list">
                    {project.technology.map((technology, i) => (
                      <li key={"tech" + i}>{technology + " "}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
