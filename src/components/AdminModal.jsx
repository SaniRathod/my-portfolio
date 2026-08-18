import React, { useState, useEffect } from 'react';
import { X, Lock, Key, Plus, Trash2, Edit3, ShieldCheck, Settings, Eye, EyeOff, MessageSquare, Briefcase, Code, Cpu, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export default function AdminModal() {
  const {
    isAdminOpen,
    setIsAdminOpen,
    experiences,
    setExperiences,
    projects,
    setProjects,
    skillsList,
    setSkillsList,
    messagesList,
    setMessagesList,
    siteSettings,
    setSiteSettings,
  } = useTheme();

  // Remember admin authentication in session storage so password is only entered ONCE per session!
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('sani-admin-auth') === 'true';
  });

  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeAdminTab, setActiveAdminTab] = useState('experience');

  // Inline Edit Tracking
  const [editingExpIndex, setEditingExpIndex] = useState(null);
  const [editingProjId, setEditingProjId] = useState(null);
  const [editingSkillName, setEditingSkillName] = useState(null);

  // Form States
  const [expForm, setExpForm] = useState({
    title: '',
    company: '',
    location: '',
    duration: '',
    badge: 'Full-Time',
    description: '',
    achievements: '',
    skills: '',
  });

  const [projForm, setProjForm] = useState({
    title: '',
    organization: '',
    category: 'Full Stack',
    duration: '',
    tagline: '',
    description: '',
    tech: '',
  });

  const [skillForm, setSkillForm] = useState({
    name: '',
    category: 'Front End Technologies',
    level: 'Advanced',
    percent: 88,
  });

  if (!isAdminOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'Sani@204971' || passcode === 'sani2026' || passcode === 'varnilix') {
      setIsAuthenticated(true);
      sessionStorage.setItem('sani-admin-auth', 'true');
      setAuthError('');
      confetti({ particleCount: 90, spread: 70 });
    } else {
      setAuthError('Incorrect passcode!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sani-admin-auth');
    setPasscode('');
  };

  // EXPERIENCE CRUD
  const handleSaveExperience = (e) => {
    e.preventDefault();
    if (!expForm.title || !expForm.company) return;

    const item = {
      ...expForm,
      achievements: typeof expForm.achievements === 'string' ? expForm.achievements.split('\n').filter(Boolean) : expForm.achievements,
      skills: typeof expForm.skills === 'string' ? expForm.skills.split(',').map((s) => s.trim()) : expForm.skills,
    };

    if (editingExpIndex !== null) {
      const updated = [...experiences];
      updated[editingExpIndex] = item;
      setExperiences(updated);
      setEditingExpIndex(null);
      alert('✅ Work Experience updated live!');
    } else {
      setExperiences([item, ...experiences]);
      alert('✅ Work Experience added live!');
    }

    setExpForm({ title: '', company: '', location: '', duration: '', badge: 'Full-Time', description: '', achievements: '', skills: '' });
  };

  const handleEditExperience = (idx) => {
    const exp = experiences[idx];
    setEditingExpIndex(idx);
    setExpForm({
      title: exp.title || '',
      company: exp.company || '',
      location: exp.location || '',
      duration: exp.duration || '',
      badge: exp.badge || 'Full-Time',
      description: exp.description || '',
      achievements: Array.isArray(exp.achievements) ? exp.achievements.join('\n') : exp.achievements || '',
      skills: Array.isArray(exp.skills) ? exp.skills.join(', ') : exp.skills || '',
    });
  };

  const handleDeleteExperience = (idx) => {
    if (window.confirm('Delete this work experience entry?')) {
      setExperiences(experiences.filter((_, i) => i !== idx));
    }
  };

  // PROJECT CRUD
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projForm.title) return;

    const item = {
      id: editingProjId || 'proj-' + Date.now(),
      ...projForm,
      gradient: projForm.gradient || 'from-emerald-600 to-teal-600',
      tech: typeof projForm.tech === 'string' ? projForm.tech.split(',').map((t) => t.trim()) : projForm.tech,
    };

    if (editingProjId) {
      setProjects(projects.map((p) => (p.id === editingProjId ? item : p)));
      setEditingProjId(null);
      alert('✅ Project updated live!');
    } else {
      setProjects([item, ...projects]);
      alert('✅ Project added live!');
    }

    setProjForm({ title: '', organization: '', category: 'Full Stack', duration: '', tagline: '', description: '', tech: '' });
  };

  const handleEditProject = (proj) => {
    setEditingProjId(proj.id);
    setProjForm({
      title: proj.title || '',
      organization: proj.organization || '',
      category: proj.category || 'Full Stack',
      duration: proj.duration || '',
      tagline: proj.tagline || '',
      description: proj.description || '',
      tech: Array.isArray(proj.tech) ? proj.tech.join(', ') : proj.tech || '',
    });
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Delete this project entry?')) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  // SKILL CRUD
  const handleSaveSkill = (e) => {
    e.preventDefault();
    if (!skillForm.name) return;

    const item = { ...skillForm, percent: Number(skillForm.percent) };

    if (editingSkillName) {
      setSkillsList(skillsList.map((s) => (s.name === editingSkillName ? item : s)));
      setEditingSkillName(null);
      alert('✅ Skill updated live!');
    } else {
      setSkillsList([...skillsList, item]);
      alert('✅ Skill added live!');
    }

    setSkillForm({ name: '', category: 'Front End Technologies', level: 'Advanced', percent: 88 });
  };

  const handleEditSkill = (skill) => {
    setEditingSkillName(skill.name);
    setSkillForm({
      name: skill.name || '',
      category: skill.category || 'Front End Technologies',
      level: skill.level || 'Advanced',
      percent: skill.percent || 88,
    });
  };

  const handleDeleteSkill = (name) => {
    setSkillsList(skillsList.filter((s) => s.name !== name));
  };

  // MESSAGE CRUD
  const handleDeleteMessage = (idx) => {
    setMessagesList(messagesList.filter((_, i) => i !== idx));
  };

  return (
    <div style={{ zIndex: 10000 }} className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-6 flex flex-col max-h-[92dvh]">
        {/* Top Header */}
        <div className="bg-slate-950 text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-2xl shadow-lg">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Sani Rathod — Studio Admin Control Center</h2>
              <p className="text-slate-400 text-xs mt-0.5">
                {isAuthenticated ? "Session Unlocked • Single Password Memory Active" : "Real-Time Dynamic Website Controller & Content Manager"}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                title="Lock / Logout Admin"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-red-950/60 border border-red-800/80 text-red-400 hover:bg-red-900/60 text-xs font-semibold transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock Admin</span>
              </button>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Clean Masked Password Login Gate (Only shown if NOT authenticated in session) */}
        {!isAuthenticated ? (
          <div className="p-10 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Security Authentication</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Enter password once to unlock Admin Panel for your session.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode"
                  className="w-full pl-10 pr-12 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {authError && <p className="text-xs text-red-500 font-semibold">{authError}</p>}

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20"
              >
                Authenticate Admin Panel
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard Studio */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-4 space-y-2 text-sm">
              {[
                { id: 'experience', label: 'Work Experience', count: experiences.length, icon: Briefcase },
                { id: 'projects', label: 'Projects & Work', count: projects.length, icon: Code },
                { id: 'skills', label: 'Skills Matrix', count: skillsList.length, icon: Cpu },
                { id: 'settings', label: 'Site Headlines & Bio', icon: Settings },
                { id: 'messages', label: `Inquiries (${messagesList.length})`, count: messagesList.length, icon: MessageSquare },
              ].map((tab) => {
                const IconComp = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAdminTab(tab.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold transition-all ${
                      activeAdminTab === tab.id
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComp className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </div>
                    {tab.count !== undefined && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        activeAdminTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content Panel Area */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200">
              
              {/* Tab 1: Work Experience Manager */}
              {activeAdminTab === 'experience' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Work Experience Manager</h3>
                      <p className="text-xs text-slate-400">Add or Edit work experience. Updates website dynamically in real time.</p>
                    </div>
                    {editingExpIndex !== null && (
                      <button
                        onClick={() => {
                          setEditingExpIndex(null);
                          setExpForm({ title: '', company: '', location: '', duration: '', badge: 'Full-Time', description: '', achievements: '', skills: '' });
                        }}
                        className="text-xs font-bold text-slate-400 hover:text-slate-200 underline"
                      >
                        Cancel Editing
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Experience Form */}
                  <form onSubmit={handleSaveExperience} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                      {editingExpIndex !== null ? <Edit3 className="w-4 h-4 text-amber-500" /> : <Plus className="w-4 h-4 text-emerald-500" />}
                      <span>{editingExpIndex !== null ? 'Edit Experience Entry' : 'Add Experience Entry'}</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Job Title (e.g. Software Developer)"
                        value={expForm.title}
                        onChange={(e) => setExpForm({ ...expForm, title: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Company (e.g. Varnilix Pvt Ltd)"
                        value={expForm.company}
                        onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Location (e.g. Hinjewadi Phase 1, Pune)"
                        value={expForm.location}
                        onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g. May 2026 - Present)"
                        value={expForm.duration}
                        onChange={(e) => setExpForm({ ...expForm, duration: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Role Description / UWMS Project Overview"
                      value={expForm.description}
                      onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                    ></textarea>

                    <textarea
                      rows={3}
                      placeholder="Achievements (one per line)"
                      value={expForm.achievements}
                      onChange={(e) => setExpForm({ ...expForm, achievements: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                    ></textarea>

                    <input
                      type="text"
                      placeholder="Skills used (comma-separated: Next.js 16, TypeScript, PostgreSQL)"
                      value={expForm.skills}
                      onChange={(e) => setExpForm({ ...expForm, skills: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                    />

                    <button
                      type="submit"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/20"
                    >
                      {editingExpIndex !== null ? 'Save Changes' : 'Add Experience to Dynamic Website'}
                    </button>
                  </form>

                  {/* List Existing Experiences with Edit & Delete */}
                  <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                      <div
                        key={idx}
                        className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start justify-between"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-slate-900 dark:text-white text-base">{exp.title}</span>
                            <span className="text-xs px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full font-semibold">
                              {exp.company}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 font-semibold">{exp.duration} | {exp.location}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">{exp.description}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEditExperience(idx)}
                            className="p-2 text-slate-400 hover:text-emerald-500 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                            title="Edit this entry"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteExperience(idx)}
                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                            title="Delete this entry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Projects Manager */}
              {activeAdminTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Portfolio Projects Manager</h3>
                    {editingProjId && (
                      <button
                        onClick={() => {
                          setEditingProjId(null);
                          setProjForm({ title: '', organization: '', category: 'Full Stack', duration: '', tagline: '', description: '', tech: '' });
                        }}
                        className="text-xs font-bold text-slate-400 hover:text-slate-200 underline"
                      >
                        Cancel Editing
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Project Form */}
                  <form onSubmit={handleSaveProject} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                      {editingProjId ? <Edit3 className="w-4 h-4 text-blue-500" /> : <Plus className="w-4 h-4 text-blue-500" />}
                      <span>{editingProjId ? 'Edit Project Entry' : 'Add New Project'}</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Project Title (e.g. UWMS Payroll System)"
                        value={projForm.title}
                        onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Organization (e.g. Varnilix Pvt Ltd)"
                        value={projForm.organization}
                        onChange={(e) => setProjForm({ ...projForm, organization: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Tagline"
                        value={projForm.tagline}
                        onChange={(e) => setProjForm({ ...projForm, tagline: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Tech Stack (comma-separated: Next.js 16, TypeScript, PostgreSQL)"
                        value={projForm.tech}
                        onChange={(e) => setProjForm({ ...projForm, tech: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                    </div>

                    <textarea
                      rows={3}
                      placeholder="Project Description Overview"
                      value={projForm.description}
                      onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                    ></textarea>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-500/20"
                    >
                      {editingProjId ? 'Save Project Changes' : 'Add Project to Dynamic Website'}
                    </button>
                  </form>

                  {/* Existing Projects */}
                  <div className="space-y-4">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start justify-between"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-slate-900 dark:text-white text-base">{proj.title}</span>
                            <span className="text-xs px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full font-semibold">
                              {proj.organization}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">{proj.description}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEditProject(proj)}
                            className="p-2 text-slate-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Skills Manager */}
              {activeAdminTab === 'skills' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technical Skills Manager</h3>
                    {editingSkillName && (
                      <button
                        onClick={() => {
                          setEditingSkillName(null);
                          setSkillForm({ name: '', category: 'Front End Technologies', level: 'Advanced', percent: 88 });
                        }}
                        className="text-xs font-bold text-slate-400 hover:text-slate-200 underline"
                      >
                        Cancel Editing
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Skill Form */}
                  <form onSubmit={handleSaveSkill} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                      {editingSkillName ? <Edit3 className="w-4 h-4 text-purple-500" /> : <Plus className="w-4 h-4 text-purple-500" />}
                      <span>{editingSkillName ? 'Edit Skill Entry' : 'Add New Skill'}</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Skill Name (e.g. Next.js 16)"
                        value={skillForm.name}
                        onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                      <select
                        value={skillForm.category}
                        onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      >
                        <option value="Front End Technologies">Front End Technologies</option>
                        <option value="Backend Technologies">Backend Technologies</option>
                        <option value="Database Architecture">Database Architecture</option>
                        <option value="Tools & Methodologies">Tools & Methodologies</option>
                      </select>

                      <input
                        type="number"
                        placeholder="Proficiency % (e.g. 92)"
                        value={skillForm.percent}
                        onChange={(e) => setSkillForm({ ...skillForm, percent: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-purple-500/20"
                    >
                      {editingSkillName ? 'Save Skill Changes' : 'Add Skill to Website'}
                    </button>
                  </form>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillsList.map((skill) => (
                      <div key={skill.name} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{skill.name}</p>
                          <p className="text-[10px] text-purple-500 font-semibold">{skill.percent}% • {skill.level}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button onClick={() => handleEditSkill(skill)} className="text-slate-400 hover:text-purple-500 p-1">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => handleDeleteSkill(skill.name)} className="text-slate-400 hover:text-red-500 p-1">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Site Headlines & Settings */}
              {activeAdminTab === 'settings' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Live Site Availability & Headlines</h3>

                  <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Availability Pill Status</label>
                      <input
                        type="text"
                        value={siteSettings.availabilityStatus}
                        onChange={(e) => setSiteSettings({ ...siteSettings, availabilityStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1">Current Company & Title</label>
                      <input
                        type="text"
                        value={siteSettings.headline}
                        onChange={(e) => setSiteSettings({ ...siteSettings, headline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                      />
                    </div>

                    <button
                      onClick={() => alert('✅ Site settings saved! Changes live on website.')}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/20"
                    >
                      Update Live Site Headlines
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 5: Contact Messages Inbox */}
              {activeAdminTab === 'messages' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visitor Inquiry Inbox</h3>

                  {messagesList.length === 0 ? (
                    <div className="p-8 text-center bg-slate-50 dark:bg-slate-950 rounded-2xl text-slate-400 text-sm">
                      No visitor messages received yet.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messagesList.map((msg, idx) => (
                        <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 dark:text-white text-sm">{msg.name} ({msg.email})</span>
                            <button onClick={() => handleDeleteMessage(idx)} className="text-slate-400 hover:text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs font-semibold text-emerald-500">{msg.subject || 'Inquiry'}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
