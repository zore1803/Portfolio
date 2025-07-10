
import React from 'react';
import { Download, FileText, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const handleDownload = () => {
    // Replace this URL with your actual resume PDF link
    const resumeUrl = 'https://drive.google.com/file/d/1Vs4mg4aLetnsHH3iX0_MzqzyNF-kcyYK/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rohit_Zore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const workExperience = [
    {
      position: "AI Agent Architect",
      company: "IBM SkillsBuild",
      period: "Jul 2025 - Present",
      type: "Internship",
      location: "Virtual",
      description: "Participated in IBM's AI Summer Program focused on building AI Agent Architect skills. Gained hands-on exposure through orientation, PBL approach, and real-world AI applications."
    },
    {
      position: "Cyber Security",
      company: "Elevated Labs",
      period: "Jun 2025 - Present",
      type: "Internship",
      location: "Virtual",
      description: "Pursuing a 30-day internship focused on daily tech tasks and project-based learning. Going to build two major projects, submitted tasks via GitHub, and developed skills in debugging, documentation, and interview readiness."
    }
  ];

  const certifications = [
    {
      title: "Data Analytics",
      provider: "Deloitte Australia",
      date: "Jul 2025",
      type: "Virtual",
      description: "Completed Deloitte's Data Analytics Job Simulation via Forage. Worked on data classification, dashboard creation (Tableau), and forensic data analysis using Excel.",
      certificateUrl: "https://drive.google.com/file/d/19kvsz_WAeQU-jq6IqUpHU8F5yufKLi6e/view?usp=drive_link"
    },
    {
      title: "GCSJ Cloud Computing Program",
      provider: "Global Cloud Skills Jam",
      date: "2025",
      type: "Virtual",
      description: "☁️ Proud to have completed the GCSJ Cloud Computing Program! This journey strengthened my understanding of: ✅ Cloud architecture fundamentals ✅ Storage, compute, and networking concepts ✅ Scalable cloud solutions using modern technologies. This certification adds a valuable cloud dimension to my data and tech skillset!",
      certificateUrl: "https://drive.google.com/file/d/16hVfSbtV4tkaAS9hsEVZRe9K0USgvJ-b/view?usp=drive_link"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.E)",
      school: "Padmabhushan Vasantdada Patil Pratishthan's College Of Engineering",
      period: "2023 - 2027",
      description: "CGPA: 7.50/10. Focusing on Computer Engineering with emphasis on web development and software engineering."
    },
    {
      degree: "Senior Secondary (XII) - Science",
      school: "D. G. Ruparel College Of Arts, Science And Commerce",
      period: "2023",
      description: "Maharashtra State Board Of Secondary And Higher Secondary Education. Percentage: 54.00%"
    },
    {
      degree: "Secondary (X)",
      school: "Little Stars English High School",
      period: "2021",
      description: "Maharashtra State Board Of Secondary And Higher Secondary Education. Percentage: 86.00%"
    }
  ];

  const activities = [
    "Member of AISAC's Technical Team",
    "Member of the Student Council",
    "Organized and participated in workshops & events",
    "Member of the University Volleyball Team"
  ];

  const achievements = [
    "Played Volleyball for University",
    "Completed Google Gen AI",
    "Completed Prompt Design in Vertex AI"
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My educational journey and achievements
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={handleDownload}
          >
            <Download size={20} className="mr-3" />
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FileText className="mr-3 text-blue-600" size={32} />
              Work Experience
            </h3>
            <div className="space-y-8">
              {workExperience.map((work, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 hover:border-blue-400 transition-colors duration-300"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-2"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{work.position} • {work.type}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-blue-600 font-semibold">{work.company}</span>
                      <span className="text-gray-500 text-sm">{work.period}</span>
                    </div>
                    <div className="text-gray-500 text-sm mb-3">{work.location}</div>
                    <p className="text-gray-600 leading-relaxed">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FileText className="mr-3 text-blue-600" size={32} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 hover:border-blue-400 transition-colors duration-300"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-2"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-blue-600 font-semibold">{edu.school}</span>
                      <span className="text-gray-500 text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Trainings */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={32} />
            Trainings / Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <span className="text-blue-600 font-semibold">{cert.provider}</span>
                  <span className="text-gray-500 text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{cert.description}</p>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <FileText size={16} className="mr-2" />
                      View Certificate
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a href={cert.certificateUrl.replace('/view?usp=drive_link', '/export?format=pdf')} target="_blank" rel="noopener noreferrer">
                      <Download size={16} className="mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="mr-3 text-blue-600" size={32} />
              Activities
            </h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Extra Curricular Activities</h4>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="mr-2 text-blue-600" size={20} />
                  Additional Details
                </h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
