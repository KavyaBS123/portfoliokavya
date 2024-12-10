import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: "GH Constellation 2024 💡",
      date: "June 12, 2024",
      location: "Bengaluru",
      description: "Attended GitHub's in-person developer conference that brought industry leaders, and developers to discuss the latest in software development.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      tags: ["Conference", "Networking", "Tech"]
    },
    {
      title: "Open Source India-2024🎉",
      date: "Oct 23-24, 2024",
      location: "Bengaluru",
      description: "Attended OSI Developer Conference 2024, a premier open source event in India to network with developers, unite stakeholders and boost the adoption of Open Source technologies",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      tags: ["Conference", "Networking", "Tech"]
    },
    {
      title: "HacktoberFest-2024 ⚡",
      date: " Oct 12, 2024",
      location: "Bengaluru",
      description: "This event bought together developers, tech enthusiasts, and open-source advocates to connect, collaborate, and learn from one another in an interactive, hands-on sessions",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      tags: ["Conference", "Networking", "Tech"]
    },
    {
      title: "Vichārāgni!🚀",
      date: "Oct 23-24, 2024",
      location: "Bengaluru",
      description: "Organised an incredible startup pitching event hosted by the Enterpreneurship Cell,IIT Bombay! ",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      tags: ["Conference", "Networking", "Tech"]
    },
    
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Events</h1>
      
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="flex items-center space-x-4 text-black-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <p className="text-black-400 mb-6">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-black-900/30 rounded-full text-sm text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}