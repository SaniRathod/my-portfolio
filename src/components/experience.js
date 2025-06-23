import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Jr Software Developer",
      company: "The Data Tech Labs",
      duration: "Oct 2024 - Present",
      description: "Currently working on IMSG application for Bank, it's proprietary Property Sourcing Application It digitizes and automates the process of identifying and evaluating properties. This significantly improves operational efficiency and resource utilization for the bank.",
    },
    {
      title: "Software Developer Intern",
      company: "HulkHire Tech",
      duration: "Sep 2024 - Oct 2024",
      description: "Worked on a project involving the development and implementation of a robust PayPal integration system within an e-commerce application. This system enables users to securely process payments directly through their PayPal accounts or linked credit/debit cards, offering a familiar and trusted checkout experience. It handles transaction initiation, payment confirmation, and error management, ensuring a seamless and reliable payment gateway for customers.",
    },
    // Add any other internships or experiences from your CV here
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
