import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/ContactComponent.css";

const ContactComponent = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          {/* KOLOM KIRI: Teks & Info Kontak */}
          <Col lg={5} md={12}>
            <div className="text-start text-white pe-lg-4" data-aos="fade-up">
              <div className="d-flex align-items-center mb-2">
                <span className="contact-badge-line me-3"></span>
                <span className=" fw-semibold contact-subtitle">Contact</span>
              </div>
              <h2 className="get-in-touch display-5 fw-bold mt-2 mb-4">
                Get in touch
              </h2>
              <p className="text-muted mb-5 pe-lg-4 contact-desc">
                Have a project in mind or just want to say hi? Feel free to
                reach out. I'm always open to discussing new projects, creative
                ideas or opportunities to be part of your visions.
              </p>

              <div
                className="contact-info-wrapper d-flex flex-column gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {/* Email Info */}
                <div className="d-flex align-items-center gap-3">
                  <div className="contact-icon-box">
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="teks-email mb-1 fw-bold">Email</h6>
                    {/* Silakan ganti email ini dengan milikmu */}
                    <a
                      href="mailto:juliananjas0707@gmail.com"
                      className="text-muted text-decoration-none contact-link"
                    >
                      juliananjas0707@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="d-flex align-items-center gap-3">
                  <div className="contact-icon-box">
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="teks-phone mb-1 fw-bold">Phone</h6>
                    {/* Silakan ganti nomor ini dengan milikmu */}
                    <a
                      href="tel:+6282334747896"
                      className="text-muted text-decoration-none contact-link"
                    >
                      +62 823 3474 7896
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* KOLOM KANAN: Formulir Pesan */}
          <Col lg={7} md={12}>
            <div
              className="contact-form-wrapper p-4 p-md-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Form>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="your-name small mb-2 tracking-wider text-uppercase">
                        Your Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="your-email small mb-2 tracking-wider text-uppercase">
                        Your Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="your-message small mb-2 tracking-wider text-uppercase">
                        Your Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Let's talk about..."
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="mt-4">
                    <Button className="btn-send-message w-100 py-3 rounded-4 fw-semibold d-flex justify-content-center align-items-center gap-2">
                      Send Message <i className="bi bi-send-fill"></i>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactComponent;
