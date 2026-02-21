import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";


export const DATA = {
  image: "/me.png",
  name: "Kavya B S",
  initials: "KS",
  url: "https://kavyabs.com",
  location: "Bengaluru , Karnataka",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
  
    "Computer Science engineer building at the intersection of AI, product, and entrepreneurship",
  summary:
    " Currently pursuing Computer Science Engineering, I spend most of my time building AI-driven products, exploring entrepreneurship, and sharpening high-performance skills.I’ve developed scalable web platforms, worked on applied AI systems, participated in hackathons, and contributed to entrepreneurial communities. I’m deeply interested in how technology, business strategy, and execution combine to create meaningful ventures.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React"},
    { name: "Next.js"},
    { name: "Typescript"},
    { name: "Node.js"},
    { name: "Python"},
    { name: "Java"},
    { name: "Go"},
    { name: "Postgres"},
    { name: "SQL"},
    { name: "MongoDB"},
    { name: "Docker"},
    { name: "LangChain"},
    { name: "FastAPI"},
    { name: "Streamlit"},
    { name: "RAG"},
    { name: "Machine Learning"},
    { name: "Deep Learning"},
    { name: "PyTorch"},
    { name: "Agentic AI"},
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kavyabsalawadagi@gmail.com",
    tel: "+917204898588",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KavyaBS123",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kavya-b-s/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/KavyaSalawadagi",
        icon: Icons.x,

        navbar: true,
      },
    
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ContentLens.ai",
      href:"https://www.contentlens.ai/",
      badges: [],
      location: "Onsite - Bengaluru, Karnataka",
      title: "Software Engineer",
      logoUrl: "/contentlens.png",
      start: "February 2026",
      end: "Present",
    },
      {
      company: "CityX",
      href:"https://cityxapp.in/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/cityx.png",
      start: "December 2025",
      end: "March 2026",
      description:"Built a real-time analytics dashboard for the CityX app to monitor urban metrics like service usage, traffic patterns, user engagement, and issue resolution rates. Integrated multiple data sources and implemented interactive visualizations (charts, heatmaps, trend analysis) to enable data-driven decision-making for smarter city operations."
    },
    {
      company: "Wimera Systems",
      badges: [],
      href: "https://www.wimerasys.com/",
      location: "Onsite - Bengaluru, Karnataka",
      title: "Data Analyst Intern",
      logoUrl: "/wimera.png",
      start: "September 2025",
      end: "November 2025",
        description:
          "-Built ML models for predictive maintenance, anomaly detection, and production cycle analysis using IoT sensor data. -Developed data pipelines and dashboards to monitor OEE, downtime, and machine performance in real time. -Applied clustering and peak detection techniques to optimize production insights and reduce downtime.",
      },
    
    {
      company: "BuildSpace",
      href: "https://buildspace.so",
      badges: [],
      location: "Sanfrancisco, California (Remote)",
      title: "Full Stack Developer  Intern",
      logoUrl: "/buildspace.jpg",
      start: "June 2024",
      end: "October 2024",
      description:
        "Developed a comprehensive MERN-based Finance Dashboard App",
    },
  ],
  education: [
    {
      school: "Oxford College of Engineering",
      degree: "Bachelor's Degree of Computer Science (BCSE)",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "DealHunter",
      dates: "Jan 2024 - Jun 2024",
      active: true,
      description:
        "Engineered DealHunter, a high-performance e-commerce analytics platform using Next.js, React 18, and Bright Data's WebUnlocker, processing scrapes across major retail websites like Amazon.",
      technologies: [
      " React JS",
      " TypeScript",
      " Next JS",
       "Tailwind CSS",
        "cron jobs", 
        "Nodemailer", 
        "Headless UI", 
        "Cheerio", 
        "MongoDB"
      ],
       links: [
       
        {
          type: "Source",
         href: "https://github.com/KavyaBS123/PriceWatcher",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "ScholarSphere",
      dates: "January 2025",
      active: true,
      description:
        "Architected ScholarSphere, an AI-powered scholarship discovery platform designed for underrepresented communities, enabling personalized search, DEI-aligned filtering, and real-time application tracking across various funding opportunities.",
      technologies: [
        "Python",
         "Streamlit", 
         "BeautifulSoup", 
         "MongoDB", 
         "OpenAI", 
         "Scikit-learn",
          "Seaborn", 
          "Pandas", 
          "NumPy"
      ],
      links: [
       
        {
          type: "Source",
        href: "https://github.com/KavyaBS123/Scholar_Sphere",
          icon: <Icons.github className="size-3" />,
        },
      ],
    
    },
    {
      title: "AgriSnap",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Developed an Flutter application for farmers and implemented a CNN-based multi-class image classifier using Keras on the PlantVillage dataset, preprocessing 5,000+ leaf images and achieving 95% accuracy in disease detection.",
      technologies: [
      "Python", 
      "TensorFlow", 
      "Keras", 
      "CNN", 
      "Flutter",
      "Numpy" , 
      "Pandas"
      ],
      links: [
      
        {
          type: "Source",
          href: "https://github.com/KavyaBS123/AgriSnap",
          icon: <Icons.github className="size-3" />,
        },
      ],
    
    },
      {
      title: "BuzzBox Office",
      dates: "October 2025",
      active: true,
      description:
        "Comprehensive analytics platform that helps movie industry stakeholders make better-informed decisions about production, marketing, and distribution strategies.",
      technologies: [
      " Python", 
      "FastAPI (WebSocket)",
"Streamlit",
 "Plotly",
 "Scikit-learn (Random Forest)",
      ],
      links: [
       
        {
          type: "Source",
        href: "https://github.com/KavyaBS123/BuzzBox_Office",
          icon: <Icons.github className="size-3" />,
        },
      ],
    
    },
    {
      title: "NexusOps",
      dates: "December 2025",
      active: true,
      description:
        "Think of an AI Browser Agent as a robot. It lives inside your computer. This robot can do things for you online. It can fill out forms. It can click buttons. It can even shop for you. AI Browser Agents make using the web easy. They do the boring stuff so you don't have to!",
     technologies: [
      "Python",
      "Llama", 
      "Deepseek",
"Streamlit",
      ],
        links: [
       
        {
          type: "Source",
        href: "https://github.com/KavyaBS123/NexusOps-",
          icon: <Icons.github className="size-3" />,
        },
      ],
    
    },
  ],
  hackathons: [
    {
      title: "Google Agentic AI Hackathon – Finalist",
      dates: "June 2025 - July 2025",
      location: "Karnataka, Bengaluru",
      description:
        "Developed a mobile application for farmers and implemented a CNN-based multi-class image classifier using Keras on the PlantVillage dataset, preprocessing 5,000+ leaf images and achieving 95% accuracy in disease detection",
    },
    {
      title: "Bharatiya Antariksh Hackathon by ISRO – Finalist - National Level",
      dates: "June 2025 - July 2025",
      location: "Karnataka, Bengaluru",
      description:
        "Worked on Diffusion Models using INSAT 3DR/3DRS satellite data.",
     
    },
    {
      title: "BrinHack National Hackathon - Second",
      dates: "April 2025 - May 2025",
      location: "Karnataka, Bengaluru",
      description:
        "Built a decentralised crowdfunding platform using blockchain.",
    },
    {
      title: "Award-Winning Open Source Contributor",
      dates: "May 2024 - October 2025",
      description:
        "Recognized among the Top 20 contributors in four national-level open source programs: Hacktoberfest, Vinyasa Summer of Code (VSOC), and GirlScript Summer of Code (GSSoC), Social Summer of Code – 2025.",
    },
   
  ],
} as const;
