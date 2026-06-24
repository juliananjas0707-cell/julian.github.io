import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/AboutComponent.css";

const AboutComponent = () => {
  return (
    <div>
      <section
        id="about"
        className="about-section d-flex align-items-center bg-white position-relative"
        style={{ zIndex: 10 }}
      >
        <Container>
          <Row className="about-container align-items-center">
            <Col lg={6} md={12} className="text-start mb-5 mb-lg-0">
              <div className="wrapper-image-about" data-aos="fade-up">
                <img
                  src="public/about.svg"
                  alt="About Image"
                  className="about-photo "
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
            </Col>

            <Col lg={6} md={12} className="about-contanier">
              <div
                className="text-wrapper-about"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h1>About Me</h1>
                <p className="about-text">
                  A Visual Communication Designgraduate who has taken a
                  competency test and received a competency certificate. With a
                  background in visual content, experienced in producing
                  creative visual content, from concept development and image
                  caрture to editing. Proficient in Adobe Illustrator, Adobe
                  Photoshop, Adobe Premiere Pro, CapCut, and CorelDRAW.
                </p>

                <Button
                  className="about-btn rounded-5"
                  href="/cv-julian.pdf"
                  download="CV_Julian_Portfolio.pdf"
                >
                  Download CV
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutComponent;
