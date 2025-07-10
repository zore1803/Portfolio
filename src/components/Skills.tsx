
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", level: 85, icon: "💛" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "C#", level: 75, icon: "💜" },
        { name: "HTML", level: 90, icon: "🧡" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 82, icon: "🗄️" },
        { name: "Git", level: 85, icon: "📦" },
        { name: "GitHub", level: 85, icon: "🐙" },
        { name: "MS-Office", level: 88, icon: "📊" },
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "MS-Excel", level: 85, icon: "📈" },
        { name: "Google Gen AI", level: 75, icon: "🤖" },
        { name: "Prompt Design", level: 70, icon: "💭" },
        { name: "Vertex AI", level: 70, icon: "🧠" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-8">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Node.js", "MongoDB", "Machine Learning", "Cloud Computing"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                Currently Learning: {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
