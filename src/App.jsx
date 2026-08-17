import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import BootLoader from "./components/BootLoader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Work from "./components/work";
import Skills from "./components/skills";
import Expertise from "./components/expertise";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ResumeModal from "./components/ResumeModal";
import ProjectModal from "./components/ProjectModal";
import TerminalModal from "./components/TerminalModal";
import AdminModal from "./components/AdminModal";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#06080f] text-[#f1f5f9] selection:bg-[#00e5ff]/30 selection:text-white relative">
        {/* Custom Cyber Terminal Boot Sequence */}
        <BootLoader />

        {/* Aurora Mesh Gradient & Subtle Grid Overlay */}
        <div className="aurora-mesh" aria-hidden="true"></div>
        <div className="subtle-grid" aria-hidden="true"></div>

        {/* Floating Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Expertise />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ResumeModal />
        <ProjectModal />
        <TerminalModal />
        <AdminModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
