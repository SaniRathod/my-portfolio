import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Work from "./components/work";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import TerminalModal from "./components/TerminalModal";
import ResumeModal from "./components/ResumeModal";
import ProjectModal from "./components/ProjectModal";
import AdminModal from "./components/AdminModal";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        <Footer />
        <TerminalModal />
        <ResumeModal />
        <ProjectModal />
        <AdminModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
