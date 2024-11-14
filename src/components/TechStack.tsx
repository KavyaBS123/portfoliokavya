import React from 'react';

const techStack = [
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg' },
];

export default function TechStack() {
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="animate-scroll flex space-x-8">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center space-y-2 min-w-[100px]"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-gray-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}