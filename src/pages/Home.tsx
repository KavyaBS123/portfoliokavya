import React from 'react';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack';
import myimage from '../components/myimage.jpeg';
import ME from '../assets/ME.jpeg';
import './about.css';


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col  items-center justify-center px-6 py-5 relative overflow-visible">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"  />
        <div className="max-w-10xl mx-auto relative z-10  pt-20">
          <h6 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent lending-normal">
             Hello World!
          </h6>
         
         
          <h1 className="text-5xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent leading-relaxed">
            I'm Kavya
           
            </h1>

          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Full Stack Developer passionate about creating innovative solutions🌏and memorable user experiences.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-12">
            <a
              href="https://github.com/KavyaBS123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Resume</span>
            </a>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors text-white text-lg"
          >
            View Projects <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">⚡Stacks 
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Bento Grid Section */}
      {/* <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1].map((item) => (
            <div
              key={item}
              className={`p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 ${
                item === 1 ? 'md:col-span-2' : ''
              }`}
            > */}
  <section id="about" className="py-20 px-6">
        <h5 className="text-center text-2xl">Get To Know</h5>
        <h2 className="text-center text-4xl font-bold mb-12">About Me</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" className="rounded-lg" />
            </div>
          </div>

          <div className="about__content">
          <p className="text-xl md:text-1xl text-black-600 dark:text-black-400 mb-8">


              {/* <h3 className="text-5xl font-bold mb-4">
              Get to know about me   </h3> */}
              {/* <p className="text-black-400 dark:text-black-400"> */}
              Hailing from the vibrant city of Bengaluru, I’ve always been inspired by the bustling energy of this tech-savvy hub 🏙️, where tradition meets innovation. 
              Known for its serene gardens 🌳 and a never-ending love for filter coffee ☕
             
              <p className="text-black-400 dark:text-black-400">        

I am currently pursuing a B.Tech in Computer Science and Engineering at The Oxford College of Engineering.

I thrive on solving complex problems and continuously seek opportunities for skill enhancement. 

<p className="text-black-400 dark:text-black-400"> Focused on creating real-world impact,🚀 If you have an exciting project in mind, don’t hesitate to reach out—I’d love to collaborate! 💬

Let's build something meaningful together. 🌈</p>


              </p>
              </p>
             
             
          </div>
        </div>
      </section>
  </div>
  );
}