import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import TextType from "./TextType.jsx";
import DarkVeil from "./DarkVeil";
import "../styles/HeroComponent.css";

const HeroComponent = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      {/* PEMBUNGKUS DARKVEIL: Dipaksa mengunci penuh di dalam area section */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-block"
        style={{ zIndex: 1, pointerEvents: "none" }}
      >
        <DarkVeil
          hueShift={19}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.3}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* KONTEN UTAMA: Diberi zIndex 2 agar berada di depan canvas DarkVeil */}
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-start text-white mb-5 mb-lg-0">
            <div className="animasi-wrapper animate__animated animate__fadeInLeft">
              <div className="text-wrapper">
                <h1 className="display-4 fw-bold heavy-typography">
                  Hi, Im <span> </span>
                  <TextType
                    text={["Julian", "Anjas"]}
                    typingSpeed={200}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="█"
                    texts={["Julian", "Anjas"]}
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                  />
                </h1>
                <h2 className="lead mb-4 fs-7 ">Web Developer & Designer</h2>
              </div>
              <div className="paragraft">
                <p>
                  About portfolio and experience <br />
                  in design and web development
                </p>
              </div>

              <Button
                className="rounded-pill px-3 py-2 my-4 d-inline-flex align-items-center gap-3 custom-portfolio-btn"
                href="#project"
              >
                <span className="fw-medium text-dark-blue">
                  Check Portfolio
                </span>
                <BsArrowRightCircleFill className="icon-arrow" />
              </Button>
            </div>
          </Col>

          <Col lg={6} md={12} className="text-center position-relative">
            <div className="hero-image-wrapper animate__animated animate__fadeInRight">
              <img
                src="/char1.svg"
                alt="Julian Portfolio Hero"
                className="img-fluid hero-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroComponent;
