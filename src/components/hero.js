import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import "./hero.css"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-8 items-center relative">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hi There,
            <br />
            I'm <span className="text-orange-500">Sani Rathod</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-700 animate-slide-up">
            I Am Into <span className="text-red-700">Full Stack Development</span>
          </p>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about")
              aboutSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg animate-bounce-in"
          >
            About Me
          </button>

          <div className="flex space-x-4 mt-8 animate-fade-in-up">
            <a
              href="https://in.linkedin.com/in/sani-rathod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full p-3 hover:bg-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="htthttps://github.com/SaniRathod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full p-3 hover:bg-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:avishkarkabadi3444@gmail.com"
              className="bg-black rounded-full p-3 hover:bg-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="bg-black rounded-full p-3 hover:bg-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="profile-container w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto relative">
            <div className="profile-background absolute inset-0 bg-yellow-400 rounded-full animate-rotate"></div>
            <div className="profile-image-wrapper relative w-full h-full rounded-full overflow-hidden border-4 border-white">
              <img
                src="/Avtar.jpeg"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

