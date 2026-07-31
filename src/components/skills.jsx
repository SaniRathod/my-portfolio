import React, { useState } from "react";
import { Code, Server, Database, Wrench, Search, Cpu } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CATEGORY_METADATA = {
  "Front End Technologies": { icon: Code, color: "from-blue-500 to-cyan-500" },
  "Backend Technologies": { icon: Server, color: "from-purple-500 to-indigo-500" },
  "Database Architecture": { icon: Database, color: "from-emerald-500 to-teal-500" },
  "Tools & Methodologies": { icon: Wrench, color: "from-amber-500 to-orange-500" },
};

export default function Skills() {
  const { skillsList } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Group skills by category
  const categoriesMap = skillsList.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(categoriesMap).map(([name, skills]) => ({
    name,
    icon: CATEGORY_METADATA[name]?.icon || Code,
    color: CATEGORY_METADATA[name]?.color || "from-emerald-500 to-teal-500",
    skills,
  }));

  const filteredCategories = categories.map((cat) => {
    const isCategoryMatch = selectedCategory === "All" || cat.name === selectedCategory;
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isCategoryMatch && matchingSkills.length > 0) {
      return { ...cat, skills: matchingSkills };
    }
    return null;
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Tech Stack</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "All"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.name
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Next.js, Java, Postgres)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                          {skill.level} ({skill.percent}%)
                        </span>
                      </div>
                      
                      {/* Animated Skill Progress Meter */}
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
