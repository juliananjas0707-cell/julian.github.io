import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mengambil nilai scroll dari berbagai kemungkinan browser/elemen induk
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 20) {
        // Diturunkan ke 20px agar efek kaca langsung muncul begitu layar bergeser sedikit
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Daftarkan event listener ke window dan document untuk memastikan transisi terbaca
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      className={`custom-navbar ${isScrolled ? "navbar-glass" : "navbar-transparent"}`}
      // FIX MUTLAK: Kontrol style langsung dari React agar tidak bisa ditimpa oleh Bootstrap
      style={{
        zIndex: 9999,
        transition: "all 0.4s ease-in-out",
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none",
        paddingTop: isScrolled ? "10px" : "20px",
        paddingBottom: isScrolled ? "10px" : "20px",
      }}
    >
      <Container className="d-flex align-items-center justify-content-between">
        {/* BRAND / LOGO */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center m-0" // Hapus col-3
          onClick={closeMenu}
        >
          <img
            src="/logoNavbar.svg"
            alt="Navbar Logo"
            height="20"
            className="me-3"
          />
          <h1 className="fs-4 fw-bold m-0 d-flex align-items-center text-white">
            Julian
            <span className="fst-italic fw-light ms-1">Portfolio</span>
          </h1>
        </Navbar.Brand>

        {/* TOGGLE HAMBURGER */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* KONTEN DROPDOWN */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
          style={
            expanded
              ? {
                  background: "rgba(10, 10, 10, 0.95)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  marginTop: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }
              : {}
          }
        >
          {/* MENU UTAMA */}
          <Nav className="menu-wrapper mx-auto text-center gap-4">
            <Nav.Link className="menu" href="#home" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link className="menu" href="#about" onClick={closeMenu}>
              About
            </Nav.Link>
            <Nav.Link className="menu" href="#skills" onClick={closeMenu}>
              Skills
            </Nav.Link>
            <Nav.Link className="menu" href="#tools" onClick={closeMenu}>
              Tools
            </Nav.Link>
            <Nav.Link className="menu" href="#project" onClick={closeMenu}>
              Project
            </Nav.Link>
          </Nav>

          {/* TOMBOL CONTACT US */}
          <div className="button-nav d-flex align-items-center justify-content-center justify-content-lg-end col-lg-3 mt-4 mt-lg-0">
            {expanded ? (
              <Nav.Link
                href="#contact"
                onClick={closeMenu}
                className="menu text-center text-white-50"
                style={{ fontSize: "1rem" }}
              >
                Contact Us
              </Nav.Link>
            ) : (
              <Button
                variant="light"
                className="btn-btn rounded-3 px-4 fw-medium"
                href="#contact"
                onClick={closeMenu}
              >
                Contact Us
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
