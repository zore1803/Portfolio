
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-GURUJI",
      description: "Built a web-based platform to connect Pandits with customers for religious services. The system includes user registration, service booking, and schedule management, offering a seamless and intuitive interface for both parties. Deployed on Vercel platform.",
      image: "https://images.unsplash.com/photo-1667670651830-2d5bcd0e4f8f?w=600&h=400&fit=crop",
      tech: ["JavaScript", "HTML", "MySQL", "Git"],
      github: "https://github.com/zore1803/guruji-pooja-seva-portal",
      live: "https://seva-profile-scribe.vercel.app/",
      period: "Jan 2025 - Jun 2025"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance. Built with React and deployed using modern web technologies.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "JavaScript", "HTML", "Git"],
      github: "https://github.com/zore1803/Portfolio",
      live: "https://portfolio-nu-rouge-opzt6ksob6.vercel.app/",
      period: "2025"
    },
    {
      id:3,
      title: "Log File Analyzer for Intrusion Detection",
      description: "LogShield is a modern log file analyzer designed for real-time intrusion detection. It identifies security threats like brute-force attacks, port scanning, and failed authentications using advanced parsing and machine learning. The platform features live dashboards, visual threat analytics, and exportable reports (PDF/CSV). Built with a clean UI and deployed on Vercel, it's ideal for quick, actionable security insights.",
      image : "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      tech : [ "Python","Flask","React","ML"],
      github: "https://github.com/zore1803/log-analyzer",
      live: "https://log-analyzer-black.vercel.app/",
      period : "2025"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-gray-500 font-medium">{project.period}</span>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
