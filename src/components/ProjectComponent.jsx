import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import "../styles/ProjectComponent.css";

import Project1 from "../assets/project1.svg";
import Project2 from "../assets/project2.svg";
import Project3 from "../assets/project3.svg";

const ProjectComponent = () => {
  // Data dummy proyek - bisa kamu ganti dengan portofolio aslimu nanti
  const projects = [
    {
      title: "Sosial Media Flyer",
      category: "Graphic Design",
      desc: "Visually striking and cohesive social media graphics tailored for digital marketing..",
      image: Project1,
      link: "https://drive.google.com/drive/folders/1shvU7cahvcSD4E6HKdWS_rSYY4juZlVG?usp=drive_link",
    },
    {
      title: "UI/UX Design",
      category: "Web Development",
      desc: "A clean and modern landing page interface designed.",
      image: Project2,
      link: "https://www.figma.com/proto/w0gLUHFvVjKFH1Re2GJaik/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
    },
    {
      title: "Branding",
      category: "Adobe Family",
      desc: "A premium vi sual identity system crafted to build a strong brand presence.",
      image: Project3,
      link: "https://drive.google.com/file/d/1zgVvt1sB2gUpnKXAIBD4xEbD85memwEH/view?usp=drive_link",
    },
  ];

  return (
    <section id="project" className="project-section py-5">
      <Container className="py-5">
        {/* HEADER SECTION */}
        <div className="text-start text-white mb-5" data-aos="fade-up">
          <div className="d-flex align-items-center mb-2">
            <span className="project-badge-line me-3"></span>
            <span className=" fw-semibold project-subtitle">Recent Work</span>
          </div>
          <h2 className="featured-project display-5 fw-bold mt-2">
            Featured Projects
          </h2>
        </div>

        {/* PROJECTS GRID */}
        <Row className="g-4" data-aos="fade-up" data-aos-delay="400">
          {projects.map((project, index) => (
            <Col lg={4} md={6} col={12} key={index}>
              <div className="project-card">
                {/* Image Container */}
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link-btn">
                      <BsArrowUpRight className="fs-4 text-dark" />
                    </a>
                  </div>
                </div>

                {/* Content Container */}
                <div className="project-content p-4">
                  <span className="project-category text-uppercase fw-semibold tracking-wider">
                    {project.category}
                  </span>
                  <h4 className="project-title fw-bold text-white mt-2 mb-3">
                    {project.title}
                  </h4>
                  <p className="project-desc text-muted m-0">{project.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectComponent;
