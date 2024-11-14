import React from 'react';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Building Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Full Stack Developer passionate about creating innovative solutions and memorable user experiences.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-12">
            <a
              href="https://github.com/yourusername"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies I Work With</h2>
          <TechStack />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className={`p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 ${
                item === 1 ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="text-xl font-bold mb-4">Feature {item}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Description of feature or achievement goes here...
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}