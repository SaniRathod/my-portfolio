import { Code2, ShoppingCart, Globe, Smartphone } from "lucide-react"

export default function Work() {
  const projects = [
    {
      title: "IMSG app for Bank",
      organization: "The Data Tech Labs",
      description:
        "Currently Working on IMSG application for Bank, it's proprietary Property Sourcing Application. It digitizes and automates the process of identifying and evaluating properties. This significantly improves operational efficiency and resource utilization for the bank.",
      duration: "Present",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      tech: ["Java", "Spring Boot", "FlutterFlow"],
    },
    {
      title: "KPI",
      organization: "The Data Tech Labs",
      description:
        "I worked on a KPI (Key Performance Indicator) project leveraging React.js for the frontend. This involved developing interactive dashboards and data visualizations that allowed users to monitor critical business metrics in real-time. My role focused on building a responsive and user-friendly interface to present complex data clearly and effectively, contributing to better data-driven decision-making.",
      duration: "2024",
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      tech: ["React.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "Paypal Integration System",
      organization: "HulkHire",
      description:
        "Worked on a project involving the development and implementation of a robust PayPal integration system within an e-commerce application. This system enables users to securely process payments directly through their PayPal accounts or linked credit/debit cards, offering a familiar and trusted checkout experience. It handles transaction initiation, payment confirmation, and error management, ensuring a seamless and reliable payment gateway for customers.",
      duration: "2024",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      tech: ["React.js", "CSS3", "JavaScript"],
    },
    {
      title: "PortFolio",
      organization: "Self",
      description:
        "This project involved developing a responsive personal portfolio website to showcase my technical skills and projects. I built the interactive front-end using React and integrated a content management system for easy updates. It serves as a dynamic platform to effectively present my capabilities to potential employers.",
      duration: "2024",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      tech: ["React.js", "Tailwind CSS"],
    },
  ]

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                {project.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-blue-600 font-medium">{project.organization}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

