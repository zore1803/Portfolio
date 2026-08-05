import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, LockKeyhole, Mail, Radar, Server, Terminal, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroCards = [
    { title: 'DataCircles', text: 'Full Stack Intern building a MERN CRM and client portal', icon: Server, status: 'Jun 2026-now' },
    { title: 'LOQIT', text: 'Web app + Android APK security product', icon: Wifi, status: 'Oct 2025-now' },
    { title: 'AIIPLTech', text: 'Security+ and PenTest+ instructor-led training', icon: Terminal, status: 'May 2026-now' },
    { title: 'TryHackMe', text: 'Top 5% globally across 100+ rooms', icon: Radar, status: '77+ hrs' },
  ];

  return (
    <section id="hero" className="section-wrap hero-section flex min-h-screen items-center pt-24">
      <div className="soft-glow left-[8%] top-[18%] h-56 w-56 rounded-full bg-[var(--c-accent)]" />
      <div className="soft-glow right-[22%] top-[4%] h-72 w-72 rounded-full bg-[var(--c-accent-2)]" />

      <div
        className="section-inner grid w-full gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[var(--c-text)]">
            ROHIT ZORE <span className="text-[var(--c-accent-2)]">//</span>{' '}
            <span className="text-[var(--c-text-muted)]">Cybersecurity Analyst & Full Stack Developer</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h1 className="font-display text-4xl font-black uppercase leading-none text-[var(--c-text)] sm:text-5xl lg:text-6xl">
              ROHIT ZORE
            </h1>
          </motion.div>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--c-text-muted)] md:text-lg">
            B.E. AI & Data Science student building secure full-stack products. I work across React Native, Supabase, REST APIs, OAuth/JWT, RBAC, vulnerability assessment, and network security labs.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects <ArrowUpRight size={16} />
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>
              Start a Conversation <Mail size={16} />
            </button>
          </div>

          <div className="hero-avatar-cloud relative mt-8 flex min-h-[250px] flex-col items-center justify-center gap-4 sm:block">
            <div className="hero-avatar-frame">
              <div className="avatar-ring sm:absolute sm:left-20 sm:top-2">
                <img src="/lovable-uploads/dca1d829-b131-45a7-8d52-3cf6cd1550d2.png" alt="Rohit Zore" />
              </div>
            </div>

            {[
              { text: 'React Native', cls: 'sm:left-0 sm:top-14' },
              { text: 'Supabase', cls: 'sm:left-4 sm:top-28' },
              { text: 'OAuth/JWT', cls: 'sm:left-[23.5rem] sm:top-6' },
              { text: 'RBAC', cls: 'sm:left-[24.5rem] sm:top-[5.4rem]' },
              { text: 'Wireshark', cls: 'sm:left-[23.5rem] sm:top-[9.7rem]' },
              { text: 'Python', cls: 'sm:left-[22.5rem] sm:top-[14rem]' },
            ].map((chip) => (
              <span key={chip.text} className={`tag skill-chip static sm:absolute ${chip.cls}`}>
                {chip.text}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual-stack relative">
          <div className="circuit-line left-[5%] top-[21%] h-24 w-28 border-l border-t after:right-[-4px] after:top-[-4px]" />
          <div className="circuit-line right-[7%] top-[43%] h-28 w-36 border-r border-t after:left-[-4px] after:top-[-4px]" />

          <div className="glass-panel hero-visual-card hero-ui-card overflow-hidden p-0">
            <div className="hero-term-bar">
              <span className="hero-term-dot" />
              <span className="hero-term-dot" />
              <span className="hero-term-dot" />
              <span className="hero-term-title">rohit@portfolio&nbsp;:&nbsp;~</span>
            </div>
            <div className="hero-term-body">
              <p><span className="ht-prompt">$</span> whoami</p>
              <p className="ht-out">cybersecurity-analyst // full-stack-dev</p>
              <p><span className="ht-prompt">$</span> stack --core</p>
              <p className="ht-out">React Native · Supabase · Node · REST</p>
              <p><span className="ht-prompt">$</span> status</p>
              <p className="ht-out ht-live-line">
                <span className="ht-live" /> building LOQIT &amp; DataCircles CRM
              </p>
            </div>
          </div>

          <div className="glass-panel hero-visual-card hero-security-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--c-accent-2)]">Featured Build</p>
              <span className="hero-spot-live">
                <span className="hero-avail-dot" />
                Live
              </span>
            </div>

            <div className="mt-2.5 flex items-center gap-3">
              <span className="hero-spot-icon">
                <LockKeyhole size={20} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-black uppercase leading-none text-[var(--c-text)]">LOQIT</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">
                  Anti-Theft BLE Platform
                </p>
              </div>
            </div>

            <p className="mt-2.5 text-sm leading-5 text-[var(--c-text-muted)]">
              Web app + Android APK for device recovery — BLE proximity, GIS tracking, and secure user workflows.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['React Native', 'Supabase', 'BLE', 'GIS'].map((t) => (
                <span key={t} className="hero-spot-tag">{t}</span>
              ))}
            </div>

            <button className="hero-spot-link" onClick={() => scrollToSection('projects')}>
              View project <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="hero-card-row grid grid-cols-2 gap-4 lg:grid-cols-4">
            {heroCards.map((card) => (
              <div key={card.title} className="hud-card p-4">
                <card.icon size={20} className="mb-4 text-[var(--c-accent)]" />
                <p className="font-display text-lg font-black uppercase leading-none text-[var(--c-text)]">{card.title}</p>
                <p className="mt-2 min-h-10 text-[13px] leading-5 text-[var(--c-text-muted)]">{card.text}</p>
                <span className="hud-status mt-3 inline-flex rounded px-2 py-1 text-[10px] font-black uppercase tracking-wider">
                  {card.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <button onClick={() => scrollToSection('about')} className="text-[var(--c-text-muted)] transition hover:text-[var(--c-accent)]" aria-label="Scroll to about">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 z-40 hidden gap-3 lg:flex">
        {[
          { href: 'https://github.com/zore1803', icon: Github, label: 'GitHub' },
          { href: 'https://linkedin.com/in/rzore430', icon: Linkedin, label: 'LinkedIn' },
          { href: 'mailto:rzore430@gmail.com', icon: Mail, label: 'Email' },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-white/10 text-[var(--c-text-muted)] backdrop-blur-xl transition hover:-translate-y-1 hover:text-[var(--c-accent)]"
            aria-label={social.label}
          >
            <social.icon size={17} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
