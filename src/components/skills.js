const skills = {
    "Front End Technologies": ["React.js", "Bootstrap", "Tailwind CSS", "FlutterFlow"],
    "Backend Technologies": ["Core JAVA", "Spring Boot", "Hibernate", "Spring Security", "Python"],
    Database: ["MS SQL Server", "MySQL", "Oracle"],
    Other: ["Jira", "Scrum", "Git", "BitBucket"],
  }
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  