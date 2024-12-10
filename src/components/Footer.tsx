import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-black dark:bg-black-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Kavya B S</h3>
            <p className="text-black-400">A tech enthusiast and interested in reaching peep's to share thoughts and learn somthing new.
            CSE Student @The Oxford College of Engineering.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/KavyaBS123" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://x.com/KavyaSalawadagi?t=hHPJ-Yu-VBv3QOQozbi_0Q&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/kavya-b-s/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:kavyabsalawadagi@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        
        
        
        <div className="mt-8 pt-8 border-t border-black-800 text-center text-black-400">
          <p>©{new Date().getFullYear()},Kavya B S. Source code under MIT License</p>
        </div>
        </div>
  
    </footer>
  );
}