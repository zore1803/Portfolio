import React, { useState } from 'react';
import { ArrowUpRight, Bluetooth, Briefcase, Github, Globe, ScanSearch, Shield, Workflow } from 'lucide-react';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'LOQIT',
      subtitle: 'Full Stack Anti-Theft Platform',
      description:
        'A cross-platform security product with a web app, Android APK, BLE device binding, OAuth 2.0/JWT authentication, RBAC, Supabase PostgreSQL, encrypted APIs, and a Law Enforcement Command Center with GIS-based real-time tracking.',
      tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'REST APIs', 'RBAC'],
      github: 'https://github.com/zore1803',
      live: 'https://loqit-psi.vercel.app/',
      period: 'Oct 2025 - Present',
      icon: Bluetooth,
      featured: true,
      accent: 'var(--c-accent)',
    },
    {
      id: 5,
      title: 'Copper Studio CRM',
      subtitle: 'DataCircles CRM & Client Portal (Internship)',
      description:
        "DataCircles Technology's production MERN CRM and Client Portal (thecopperstudio.com). I work across front-end and backend modules on admin and client features: package purchasing, Razorpay payments, invoice generation, project tracking with Kanban and Gantt timelines, document management, and meeting scheduling, secured with role-based auth and JWT.",
      tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT'],
      live: 'https://thecopperstudio.com',
      period: 'Jun 2026 - Present',
      icon: Briefcase,
      accent: 'var(--c-accent-3)',
    },
    {
      id: 2,
      title: 'E-Guruji',
      subtitle: 'Full Stack Puja Booking Platform',
      description:
        'A multi-role service booking web app built from scratch with user, priest, and admin roles, JWT authentication, RBAC, Razorpay payment validation, admin management, and normalized MySQL tables for users, priests, services, bookings, and payments.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'JWT', 'Razorpay', 'MySQL'],
      github: 'https://github.com/zore1803/guruji-pooja-seva-portal',
      live: 'https://seva-profile-scribe.vercel.app/',
      period: 'Sep - Oct 2024',
      icon: Workflow,
      accent: 'var(--c-accent-2)',
    },
    {
      id: 3,
      title: 'Security Training',
      subtitle: 'Assessment Tools & Analyst Labs',
      description:
        'Hands-on cybersecurity work across AIIPLTech training and Elevate Labs internship: vulnerability assessment, Python keylogger and scanner development, Wireshark traffic analysis, firewall review, password policy analysis, and structured risk reporting.',
      tech: ['Python', 'Wireshark', 'Risk Reports', 'Firewalls', 'CIA Triad'],
      github: 'https://github.com/zore1803',
      period: 'Jan 2026 - Present',
      icon: ScanSearch,
      accent: 'var(--c-violet)',
    },
    {
      id: 4,
      title: 'Portfolio v2',
      subtitle: 'This Website',
      description:
        'A cinematic portfolio interface with orbital navigation, glass panels, responsive command surfaces, and custom visual language.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      github: 'https://github.com/zore1803/Portfolio',
      period: '2025',
      icon: Globe,
      accent: 'var(--c-accent-3)',
    },
  ];

  const activeProject = projects.find((project) => project.id === selectedId) ?? projects[0];

  return (
    <section id="projects" className="section-wrap">
      <div className="soft-glow left-[-6rem] top-32 h-72 w-72 rounded-full bg-[var(--c-accent-2)]" />
      <div className="section-inner">
        <div className="mb-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Selected Work</p>
            <h2 className="section-heading">
              <span className="warm-text">Projects</span>
            </h2>
          </div>
          <p className="section-desc lg:justify-self-end">
            Production-grade web and mobile builds shaped around authentication, database ownership, secure payments, device recovery, and practical security analysis.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <article
            className="glass-panel project-feature-panel flex flex-col justify-center p-6 md:p-8"
            style={{ boxShadow: `0 0 48px color-mix(in srgb, ${activeProject.accent} 24%, transparent)` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: `${activeProject.accent}22`, color: activeProject.accent }}>
                    <activeProject.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-black uppercase leading-none text-[var(--c-text)]">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-[var(--c-text-muted)]">{activeProject.subtitle}</p>
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-[var(--c-text-muted)]">{activeProject.description}</p>
              </div>
              <span className="tag">{activeProject.period}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Github size={16} /> Code
                </a>
              )}
              {activeProject.live && (
                <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ArrowUpRight size={16} /> Live Demo
                </a>
              )}
            </div>
          </article>

          <div className="space-y-4">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`glass-panel project-selector w-full p-4 text-left transition ${
                  activeProject.id === project.id ? 'border-[var(--c-accent-2)]' : ''
                }`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style={{ background: `${project.accent}22`, color: project.accent }}>
                    <project.icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="truncate font-display text-lg font-black uppercase leading-none text-[var(--c-text)]">{project.title}</h4>
                      {project.featured && (
                        <span className="rounded bg-[var(--c-accent-2)]/20 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[var(--c-accent-3)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-[var(--c-text-muted)]">{project.subtitle}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[var(--c-text-muted)]">
                      <Shield size={13} style={{ color: project.accent }} />
                      {project.tech.slice(0, 3).join(' / ')}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
