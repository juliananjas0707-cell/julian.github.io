import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer-section pt-5 pb-3">
      <Container>
        <Row className="gy-4 justify-content-between mb-5">
          {/* KOLOM KIRI: Brand, Deskripsi, dan Sosial Media */}
          <Col lg={5} md={12}>
            <div className="d-flex align-items-center mb-3">
              <img
                src="/logoNavbar.svg"
                alt="Julian Logo"
                height="24"
                className="me-2"
              />
              <h4 className="fw-bold m-0 text-white d-flex align-items-center">
                Julian
                <span className="fst-italic fw-light ms-1 text-white  ">
                  Portfolio
                </span>
              </h4>
            </div>
            <p className="text-muted pe-lg-5 footer-desc">
              Crafting premium digital experiences through minimal design and
              clean code. Feel free to reach out for collaborations or just a
              friendly hello.
            </p>

            {/* Ikon Sosial Media */}
            <div className="social-links d-flex gap-3 mt-4">
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Behance">
                <i className="bi bi-behance"></i>
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>

          {/* KOLOM KANAN: Quick Links */}
          <Col lg={2} md={6} className="col-6">
            <h6 className="text-white fw-bold mb-4 tracking-wider text-uppercase small">
              Quick Links
            </h6>
            <ul className="list-unstyled footer-links d-flex flex-column gap-2">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#Project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Opsional: Kolom Kontak Cepat */}
          <Col lg={3} md={6} className="col-6">
            <h6 className="text-white fw-bold mb-4 tracking-wider text-uppercase small">
              Say Hello
            </h6>
            <ul className="list-unstyled footer-links d-flex flex-column gap-2">
              <li>
                <a href="mailto:juliananjas0707@gmail.com">
                  juliananjas0707@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6282334747896">+62 823 3474 7896</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* GARIS PEMISAH & COPYRIGHT */}
        <div className="footer-divider"></div>
        <div className="copyright-jln text-center pt-4 pb-2">
          <p className=" text-muted small m-0">
            &copy; {new Date().getFullYear()} Julian. All rights reserved. Built
            with React & Bootstrap.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
