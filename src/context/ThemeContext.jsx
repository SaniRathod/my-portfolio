import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ThemeContext = createContext();

const DEFAULT_EXPERIENCES = [
  {
    id: "exp-1",
    title: "Software Developer",
    company: "Varnilix Pvt Ltd",
    location: "Hinjewadi Phase 1, Pune, India",
    duration: "May 2026 – Present",
    type: "Full-Time",
    badge: "Current Role",
    description:
      "Developing UWMS (Unified Wage Management System), a multi-project enterprise payroll management application for contractual workforce across client sites (Saint Gobain, Dana, United Breweries, L&L Products).",
    achievements: [
      "Architected Next.js 16 (App Router) & TypeScript payroll calculation engine.",
      "Integrated Supabase & PostgreSQL database schemas for payroll ledgers and audit logs.",
      "Engineered attendance Excel sheet parser, leave encashments, and Full & Final (F&F) settlements.",
      "Deployed scalable microservices on AWS App Runner with Docker containers.",
    ],
    skills: ["Next.js 16", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS App Runner", "REST APIs"],
  },
  {
    id: "exp-2",
    title: "Jr Software Developer",
    company: "The Data Tech Labs",
    location: "Pune, Maharashtra, India",
    duration: "Oct 2024 – May 2026",
    type: "Full-Time / Internship",
    badge: "Former Role",
    description:
      "Developed IMSG application for Bank, a proprietary Property Sourcing Application digitizing property evaluation workflows for banking institutions.",
    achievements: [
      "Architected secure backend REST APIs using Java, Spring Boot, and Spring Security.",
      "Implemented authorization rules and data access layers with JPA & Hibernate.",
      "Engineered responsive dashboards leveraging FlutterFlow & React.js.",
    ],
    skills: ["Java", "Spring Boot", "Spring Security", "FlutterFlow", "React.js", "MySQL", "Jira"],
  },
  {
    id: "exp-3",
    title: "Software Developer Intern",
    company: "HulkHire Tech",
    location: "Remote / Hybrid",
    duration: "Sep 2024 – Oct 2024",
    type: "Internship",
    badge: "Completed",
    description:
      "Worked on a project involving the development and implementation of a robust PayPal integration system within an e-commerce application.",
    achievements: [
      "Built direct PayPal checkout gateway with transaction initiation and IPN webhooks.",
      "Handled payment confirmation, security validations, and error fallbacks.",
    ],
    skills: ["Java", "Spring Boot", "PayPal API", "MySQL", "REST APIs"],
  },
];

const DEFAULT_PROJECTS = [
  {
    id: "uwms",
    category: "Full Stack",
    title: "UWMS — Unified Wage Management System",
    organization: "Varnilix Pvt Ltd",
    duration: "2026 - Present",
    tagline: "Enterprise Multi-Project Payroll & Workforce Engine",
    description:
      "Multi-project payroll management application for contractual workforce across client sites (Saint Gobain, Dana, United Breweries, etc.).",
    fullDescription:
      "The UWMS platform manages complex contractual payroll, automated OT calculations, PTAX slabs, leave accruals, F&F settlements, and uniform ledgers built with Next.js 16, TypeScript, Supabase, PostgreSQL, and AWS deployment.",
    highlights: [
      "Next.js 16 App Router & pure-function TypeScript payroll engine.",
      "Supabase PostgreSQL database & NextAuth credentials authentication.",
      "Excel sheet attendance parsing and audit log mutation tracking.",
    ],
    gradient: "from-emerald-600 to-teal-600",
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/SaniRathod",
  },
  {
    id: "imsg",
    category: "Full Stack",
    title: "IMSG Bank Property Sourcing App",
    organization: "The Data Tech Labs",
    duration: "2024 - 2026",
    tagline: "Proprietary Banking Property Digitization System",
    description:
      "Automates and digitizes property sourcing, evaluation, and approval workflows for bank operations.",
    fullDescription:
      "The IMSG (Information Management & Property Sourcing System) is an enterprise banking application designed for financial institutions.",
    highlights: [
      "Engineered Spring Boot backend REST APIs and microservices.",
      "Integrated Spring Security authentication for multi-level bank role access.",
    ],
    gradient: "from-blue-600 to-cyan-600",
    tech: ["Java", "Spring Boot", "Spring Security", "FlutterFlow", "MySQL"],
  },
  {
    id: "kpi",
    category: "Frontend",
    title: "KPI Business Analytics Dashboard",
    organization: "The Data Tech Labs",
    duration: "2024",
    tagline: "Interactive Real-Time Key Performance Indicator System",
    description:
      "Built interactive metric dashboards using React.js and Redux allowing decision-makers to track key metrics in real time.",
    fullDescription: "Real-time enterprise dashboard featuring custom metric filters and charts.",
    highlights: ["Developed modular React components.", "Managed dynamic state with Redux Toolkit."],
    gradient: "from-indigo-600 to-purple-600",
    tech: ["React.js", "Redux", "Tailwind CSS", "JavaScript ES6+"],
  },
  {
    id: "paypal",
    category: "Full Stack",
    title: "PayPal Checkout Integration System",
    organization: "HulkHire Tech",
    duration: "2024",
    tagline: "Secure E-Commerce Payment Gateway Engine",
    description: "PayPal checkout integration handling transaction captures, webhooks, and error logs.",
    fullDescription: "A complete payment gateway solution handling payment captures and webhook triggers.",
    highlights: ["Integrated PayPal REST SDK.", "Built Spring Boot WebHook listener."],
    gradient: "from-purple-600 to-pink-600",
    tech: ["Java", "Spring Boot", "MySQL", "PayPal REST API"],
  },
];

const DEFAULT_SKILLS = [
  { name: "Next.js 16", category: "Front End Technologies", level: "Expert", percent: 92 },
  { name: "TypeScript", category: "Front End Technologies", level: "Advanced", percent: 90 },
  { name: "React.js", category: "Front End Technologies", level: "Advanced", percent: 90 },
  { name: "Tailwind CSS", category: "Front End Technologies", level: "Expert", percent: 95 },
  { name: "FlutterFlow", category: "Front End Technologies", level: "Intermediate", percent: 75 },
  
  { name: "Core JAVA", category: "Backend Technologies", level: "Expert", percent: 92 },
  { name: "Spring Boot", category: "Backend Technologies", level: "Advanced", percent: 88 },
  { name: "Spring Security", category: "Backend Technologies", level: "Proficient", percent: 82 },
  { name: "RESTful APIs", category: "Backend Technologies", level: "Expert", percent: 92 },
  { name: "Python", category: "Backend Technologies", level: "Intermediate", percent: 70 },

  { name: "PostgreSQL", category: "Database Architecture", level: "Advanced", percent: 90 },
  { name: "Supabase DB", category: "Database Architecture", level: "Advanced", percent: 88 },
  { name: "MySQL", category: "Database Architecture", level: "Advanced", percent: 88 },
  { name: "MS SQL Server", category: "Database Architecture", level: "Proficient", percent: 85 },

  { name: "Git / GitHub", category: "Tools & Methodologies", level: "Advanced", percent: 90 },
  { name: "AWS App Runner", category: "Tools & Methodologies", level: "Proficient", percent: 80 },
  { name: "Jira / Scrum", category: "Tools & Methodologies", level: "Advanced", percent: 88 },
  { name: "Postman API", category: "Tools & Methodologies", level: "Advanced", percent: 90 },
];

const DEFAULT_EDUCATION = [
  {
    degree: "B.E (Computer Engineering)",
    scoreLabel: "CGPA",
    score: "7.64 / 10.0",
    institution: "Jagadambha College Of Engineering and Technology",
    duration: "2020 – 2024",
    location: "Yavatmal, Maharashtra, India",
    badge: "Graduated",
    highlights: [
      "Core CS curriculum: Data Structures, Algorithms, DBMS, OOP, Web Engineering.",
      "Engineered major final year software project with distinction.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    scoreLabel: "Percentage",
    score: "71.08%",
    institution: "Atahar Mirza Jr College Kali (DK)",
    duration: "2018 – 2019",
    location: "Kali (DK), Maharashtra, India",
    badge: "Completed",
    highlights: ["Science stream with Higher Mathematics & Physics."],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    scoreLabel: "Percentage",
    score: "80.00%",
    institution: "Vasantrao Naik School Kali (DK)",
    duration: "2016 – 2017",
    location: "Kali (DK), Maharashtra, India",
    badge: "Completed",
    highlights: ["Distinction in Mathematics and Science."],
  },
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Persistent States (localStorage + Supabase)
  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem('portfolio-experiences');
    return saved ? JSON.parse(saved) : DEFAULT_EXPERIENCES;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolio-projects');
    return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
  });

  const [skillsList, setSkillsList] = useState(() => {
    const saved = localStorage.getItem('portfolio-skills');
    return saved ? JSON.parse(saved) : DEFAULT_SKILLS;
  });

  const [educationList, setEducationList] = useState(() => {
    const saved = localStorage.getItem('portfolio-education');
    return saved ? JSON.parse(saved) : DEFAULT_EDUCATION;
  });

  const [messagesList, setMessagesList] = useState(() => {
    const saved = localStorage.getItem('portfolio-messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [siteSettings, setSiteSettings] = useState(() => {
    const saved = localStorage.getItem('portfolio-settings');
    return saved
      ? JSON.parse(saved)
      : {
          name: "Sani Rathod",
          headline: "Software Developer @ Varnilix Pvt Ltd",
          location: "Hinjewadi Phase 1, Pune, Maharashtra",
          availabilityStatus: "Working at Varnilix Pvt Ltd — Open for Projects",
          bio: "Software Developer specializing in Next.js 16, TypeScript, PostgreSQL, Supabase, Java, Spring Boot, and modern Web Engines.",
        };
  });

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-experiences', JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio-skills', JSON.stringify(skillsList));
  }, [skillsList]);

  useEffect(() => {
    localStorage.setItem('portfolio-education', JSON.stringify(educationList));
  }, [educationList]);

  useEffect(() => {
    localStorage.setItem('portfolio-messages', JSON.stringify(messagesList));
  }, [messagesList]);

  useEffect(() => {
    localStorage.setItem('portfolio-settings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  // Sync with Supabase if configured
  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      async function syncSupabase() {
        try {
          const { data: expData } = await supabase.from('experiences').select('*').order('created_at', { ascending: false });
          if (expData && expData.length > 0) setExperiences(expData);

          const { data: projData } = await supabase.from('projects').select('*');
          if (projData && projData.length > 0) setProjects(projData);

          const { data: msgData } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
          if (msgData) setMessagesList(msgData);
        } catch (err) {
          console.warn('Supabase sync notice:', err);
        }
      }
      syncSupabase();
    }
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const toggleTerminal = () => setIsTerminalOpen((prev) => !prev);
  const toggleResume = () => setIsResumeOpen((prev) => !prev);
  const toggleAdmin = () => setIsAdminOpen((prev) => !prev);

  const addContactMessage = (msg) => {
    setMessagesList((prev) => [msg, ...prev]);
    if (isSupabaseConfigured && supabase) {
      supabase.from('contact_messages').insert([msg]).then(() => {});
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isTerminalOpen,
        setIsTerminalOpen,
        toggleTerminal,
        isResumeOpen,
        setIsResumeOpen,
        toggleResume,
        isAdminOpen,
        setIsAdminOpen,
        toggleAdmin,
        selectedProject,
        setSelectedProject,
        experiences,
        setExperiences,
        projects,
        setProjects,
        skillsList,
        setSkillsList,
        educationList,
        setEducationList,
        messagesList,
        setMessagesList,
        addContactMessage,
        siteSettings,
        setSiteSettings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
