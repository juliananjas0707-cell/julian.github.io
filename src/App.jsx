import NavbarComponent from "./components/NavbarComponent";
import DarkVeil from "./components/DarkVeil";
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import WhatIDo from "./components/WhatIDo";
import SkillsComponent from "./components/SkillsComponent";
import ProjectComponent from "./components/ProjectComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
const App = () => {
  return (
    <div>
      {/* Hero Background - Mengunci di dasar layar (zIndex: 1) */}
      <div
        className="position-fixed top-0 start-0 w-100 vh-100"
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

      {/* Navbar - Melayang di paling atas */}
      <NavbarComponent />

      {/* Hero Section */}
      <HeroComponent />

      {/* About Me Section - Sudah aman karena punya bg-white dan zIndex: 10 */}
      <AboutComponent />

      {/* What I Do? - PERBAIKAN DI SINI */}
      {/* Kita tambahkan position: "relative" agar zIndex: 30 bisa dibaca oleh browser */}
      <div
        className="container-whatido"
        style={{ position: "relative", zIndex: 30 }}
      >
        <WhatIDo />
      </div>
      <SkillsComponent />
      <ProjectComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
