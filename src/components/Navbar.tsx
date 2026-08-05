import React, { useEffect, useState } from 'react';
import { Calendar, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/hooks/useThemeContext';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'career' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;
      for (const section of [...navItems].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 170) {
          setActiveSection((current) => (current === section.id ? current : section.id));
          break;
        }
      }
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu overlay */}
      <div className={`copper-mobile-overlay ${isOpen ? 'open' : ''}`}>
        <div className="copper-mobile-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
          <button className="copper-talk-btn mobile" onClick={() => scrollToSection('contact')}>
            <span className="copper-talk-icon">
              <Calendar size={13} />
            </span>
            Let&rsquo;s Talk &rsaquo;
          </button>
        </div>
      </div>

      {/* Floating pill navbar */}
      <nav className="copper-navbar">
        <button className="copper-nav-logo" onClick={() => scrollToSection('hero')} aria-label="Home">
          <span className="copper-nav-mark">RZ</span>
        </button>

        <span className="copper-nav-divider desktop-only" />

        <div className="copper-nav-links desktop-only">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </div>

        <span className="copper-nav-divider desktop-only" />

        <div className="copper-nav-action desktop-only">
          <button className="copper-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="copper-talk-link" onClick={() => scrollToSection('contact')}>
            <span className="copper-talk-icon">
              <Calendar size={13} />
            </span>
            Let&rsquo;s Talk
          </button>
        </div>

        <button
          className="copper-mobile-btn"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
