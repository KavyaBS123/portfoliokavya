import React from 'react';
import { Code, Laptop, Rocket } from 'lucide-react';

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'ReactJS', 'Node.js', 'Python', 'HTML5',
    'CSS3', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js', 'TailwindCSS','Linux','SASS','PostMan','CloudFlare','SQLite',' Next.js','ThreeJS','FireBase','Git','GitHub','Java','C','ViteJS'
  ];
  const journeyData = [
    { year: 2026, text: 'Graduate BE-CSE from The Oxford College of Engineering [Expected]' },
    { year: 2022, text: 'Graduated 12th Grade from Narayana Institutes' },
    { year: 2020, text: 'Graduated 10th Grade from Kroot Memorial School  Actively participated/won in Inter-School Events and Competitions, HouseCaptain-4yrs'},
  ]; 
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-black-400 leading-relaxed mb-6">
                I'm a Full Stack Developer with a passion for building innovative web applications
                and solving complex problems through elegant solutions.
              </p>
              <p className="text-xl text-black-400 leading-relaxed">
                With expertise in modern web technologies and a keen eye for design,
                I create seamless digital experiences that make a difference.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Code className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                  <p className="text-black-400">Writing maintainable and scalable code is my priority</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Laptop className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Modern Tech Stack</h3>
                  <p className="text-black-400">Using the latest technologies to build better solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Rocket className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance First</h3>
                  <p className="text-black-400">Optimizing for the best possible user experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white-900/30 rounded-full text-purple-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
                  

     
        
        {/* <section className="py-20">
          <h2 className="text-3xl font-bold mb-12">Journey</h2>
            <div className="space-y-12">
            {[2026, 2022, 2020].map((year) => ( 
               <div key={year}className="relative pl-8 border-l-2 border-purple-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400" /> 
             
                    <h3 className="text-2xl font-bold mb-4"></h3>
                    <p className="text-black-400">
                      Graduated 10th Grade from Kroot Memorial School {2020}
                    </p>
                    <p className="text-black-400">
                     Graduated 12th Grade from Narayana Institiutes {2022}
                    </p>
                    <p className="text-black-400">
                      Graduate BE-CSE from The Oxford College of Engineering [Expected] {2026}
                    </p>
                    </div>
                   
          </section> */}


    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12">Journey</h2>
      <div className="space-y-12">
        {journeyData.map((item) => (
          <div key={item.year} className="relative pl-8 border-l-2 border-purple-400">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400" />
            <h3 className="text-2xl font-bold mb-4">{item.year}</h3>
            <p className="text-black-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
     </div>
        </div>
  
       
    );
  };
