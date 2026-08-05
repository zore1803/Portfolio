import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SkeletonLoader from '../components/SkeletonLoader';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Credentials from '../components/Credentials';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useReveal } from '@/hooks/useReveal';

const Index = () => {
  useReveal();
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let mounted = true;
    const start = performance.now();
    let removeTimer: ReturnType<typeof setTimeout>;

    // Hold the skeleton for at least 250ms; if the page is still loading, wait for that too.
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, 250 - elapsed);
      setTimeout(() => {
        if (!mounted) return;
        setHiding(true);
        removeTimer = setTimeout(() => mounted && setLoading(false), 350);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => {
      mounted = false;
      clearTimeout(removeTimer);
      window.removeEventListener('load', finish);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      {loading && <SkeletonLoader hiding={hiding} />}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Credentials />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
