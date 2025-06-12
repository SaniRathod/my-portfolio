export default function Education() {
    const education = [
      {
        degree: "B.E(Computer Engineering)",
        CGPA: 7.64,
        institution: "Jagadambha College Of Engineering and Technology, Yavatmal",
        duration: "2020 – 2024",
        location: "Yavatmal, India",
      },
      {
        Stream : "HSC",
        Percentage: 71.08,
        institution: "Atahar Mirza Jr College Kali (DK)",
        duration: "2018 – 2019",
        location: "kali (DK), India",
      },
      {
        Stream : "SSC",
        Percentage: 80.00,
        institution: "Vasantarao Naik School Kali (DK)",
        duration: "2016 – 2017",
        location: "kali (DK), India",
      },
    ]
  
    return (
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{edu.degree}{(edu.CGPA)}</h3>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{edu.Stream}</h3>
                <p className="text-gray-800 font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{edu.duration}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  