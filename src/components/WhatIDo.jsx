import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/WhatIDo.css"; // Kita akan buat file CSS ini di langkah 2

const WhatIDo = () => {
  // Data array untuk mempermudah render card
  const services = [
    {
      icon: "bi-pen-fill", // Ganti dengan class icon yang kamu pakai
      title: "Design Graphic",
      desc: "We create stunning visual concepts that communicate your brand message and captivate your audience.",
    },
    {
      icon: "bi-code-slash",
      title: "HTML CSS JS",
      desc: "We craft responsive, modern website that looks great and perform flawlessly across all device.",
    },
    {
      icon: "bi-window-sidebar",
      title: "UI / UX Design",
      desc: "We design clean, friendly interfaces that enhance user experience and drive result.",
    },
  ];

  return (
    <section className="what-i-do-section py-5" id="skills">
      <div className="container py-5">
        {/* Bagian Header */}
        <div className="text-start text-white mb-5" data-aos="fade-up">
          <div className="d-flex align-items-center mb-2">
            <span className="badge-line me-3"></span>
            <h2 className="fw-semibold section-subtitle">
              My <span>Services</span>
            </h2>
          </div>
          <h2 className="display-5 fw-bold mt-2">What I Do</h2>
        </div>

        {/* Bagian Cards */}
        <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
          {services.map((service, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card service-card border-0 p-4 text-center ">
                <div className="icon-wrapper mx-auto mt-2">
                  <i className={`bi ${service.icon} fs-2 text-white`}></i>
                </div>
                <div className="card-body p-0">
                  <h4 className="card-title fw-bold service-title">
                    {service.title}
                  </h4>
                  <p className="card-text text-muted service-desc">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
