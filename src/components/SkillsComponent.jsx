import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/SkillsComponent.css";

const SkillsComponent = () => {
  // Data keahlian utama (Skills)
  const coreSkills = [
    { name: "Graphic Design", level: "Expert", icon: "bi-palette2" },
    { name: "UI / UX Design", level: "Advanced", icon: "bi-window-sidebar" },
    { name: "Web Development", level: "Intermediate", icon: "bi-code-slash" },
  ];

  // Data perangkat lunak / tools yang dikuasai
  const tools = [
    {
      name: "Adobe Illustrator",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Adobe Photoshop",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "VS Code",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  return (
    <section id="tools" className="skills-section py-5">
      <Container className="py-5">
        {/* HEADER SECTION */}
        <div className="text-start text-white mb-5" data-aos="fade-up">
          <div className="d-flex align-items-center mb-2">
            <span className="skills-badge-line me-3"></span>
            <span className="fw-semibold skills-subtitle">Expertise</span>
          </div>
          <h2 className="subtitle-skills display-5 fw-bold mt-2">
            Design & Develompent Tools
          </h2>
        </div>

        {/* CORE SKILLS GRID */}
        <Row className="g-4 mb-5">
          {coreSkills.map((skill, index) => (
            <Col lg={4} md={6} col={12} key={index}>
              <div
                className="skill-card p-4 d-flex align-items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="skill-icon-box">
                  <i className={`bi ${skill.icon} fs-3 text-white`}></i>
                </div>
                <div>
                  <h4 className="skills-tittle m-0 fw-bold fs-5">
                    {skill.name}
                  </h4>
                  <p className="m-0 text-muted small mt-1">{skill.level}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* TOOLS GRID (MINIMALIST LOGO GRID) */}
        <div className="tools-wrapper p-5">
          <h5
            className="software-tittle fw-medium mb-4 text-center tracking-wider small"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Software & Technologies I Use
          </h5>
          <Row className="g-4 justify-content-center align-items-center text-center">
            {tools.map((tool, index) => (
              <Col lg={2} md={3} sm={4} className="col-6" key={index}>
                <div
                  className="tool-item-box p-3 d-flex flex-column align-items-center gap-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img src={tool.img} alt={tool.name} className="tool-logo" />
                  <span className="tool-name mt-1">{tool.name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SkillsComponent;
