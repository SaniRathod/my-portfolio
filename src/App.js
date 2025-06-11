import Navbar from "../src/components/navbar"
import Hero from "../src/components/hero"
import About from "../src/components/about"
import Skills from "../src/components/skills"
import Education from "../src/components/education"
import Work from "../src/components/work"
import Contact from "../src/components/contact"
import Experience from "./components/experience"



function App() {
  return (
    <main className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Education />
    <Experience/>
    <Work />
    <Contact />
   
  </main>
  );
}

export default App;
