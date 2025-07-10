
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Hello! I'm Rohit, a passionate Artificial Intelligence and Data Science student based in Mumbai.
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Currently pursuing Bachelor of Engineering (B.E) in AI & Data Science from Padmabhushan Vasantdada Patil Pratishthan's College Of Engineering (2023-2027) with a CGPA of 7.50/10. I specialize in web development and creating user-friendly platforms.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm passionate about artificial intelligence, data science, and building applications that make a difference. When I'm not coding, you can find me playing volleyball for my university team, participating in technical workshops, or contributing to student council activities.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-blue-600 font-medium">B.E AI & Data Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">University</h4>
                <p className="text-blue-600 font-medium">PVPPCOE</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2">
                <img 
                  src="/lovable-uploads/dca1d829-b131-45a7-8d52-3cf6cd1550d2.png"
                  alt="Rohit Zore"
                  className="w-full h-full rounded-full object-cover shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
