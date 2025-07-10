import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Rohit Zore
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            AI & Data Science Student & Web Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about artificial intelligence, data science, and creating innovative web solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/zore1803" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/rohit-zore-455b862b5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:rzore430@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
