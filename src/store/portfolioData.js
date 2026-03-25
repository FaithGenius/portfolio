// Portfolio Data Store
export const portfolioData = {
  personal: {
    name: "Faith Rabin",
    nickname:"",
    title: "Full Stack Developer",
    subtitle: "Full Stack Developer · Cybersecurity & Networking Expert",
    description: "Motivated and detail-oriented Computer Engineering student with experience building full‑stack web applications, REST APIs, and secure network solutions.",
    location: "Nairobi, Kenya",
    available: true, 
    bio: "Third-year Computer Engineering student at Maasai Mara University with a strong interest in software engineering, networking, and system integration. Experienced with JavaScript, React.js, Node.js, Express.js and PostgreSQL. I design scalable systems, develop RESTful APIs, integrate external services, and deploy to modern cloud platforms.",
    bio2: "I have practical experience integrating M‑Pesa payment systems into billing platforms and am recognized for problem-solving, teamwork, and rapidly learning new technologies. Currently, I work as a technician at Softlife Technologies where I install and troubleshoot WiFi networks, routers, and internet infrastructure. Certifications include a JavaScript Intermediate Certificate from SoloLearn and a recognition medal from ASTEM Center Africa. Outside of coding I explore new UX patterns and polish existing projects, always striving for high‑end, professional deliverables.",
    email: "maineric692@gmail.com",
    phone: "+254 715 190 679",
    profileImages: {
      main: "/profile-pic.jpg",
      about: "/profileavatar.jpg"
    },
    social: {
      github: "https://github.com/skipper-blue",
      linkedin: "https://www.linkedin.com/",
      whatsapp: "https://wa.me/254715190679"
    },
    cv: "/mainaeric.pdf"
  },

  skills: {
    languages: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "PHP",
      "HTML5",
      "CSS3"
    ],
    frameworks: [
      "React.js",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "ReactNative",
      "Lavarel",
      "Flutter(basic)"
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "Supabase"
    ],
    tools: [
      "Git & GitHub",
      "Visual Studio Code",
      "Postman",
      "Docker (Basic)",
      "Vercel",
      "Render"
    ],
    networking: [
      "Network configuration",
      "System integration",
      "RESTful API development",
      "API integration"
    ],
    design: [
      "Web interface design",
      "Technical system design",
      "System architecture planning"
    ],
    education: [
      {
        name: "Maasai Mara University — Computer Engineering",
        description: "Bachelor of Science (2023 – Present, 3rd Year)"
      },
      {
        name: "St. Bonaventure Kaheti Boys High School",
        description: "KCSE Grade B- (2019 – 2022)"
      },
      {
        name: "Mountain Star Academy",
        description: "KCPE 335 Marks (2018)"
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Hotel Management System",
      description: "Full‑stack application for managing rooms, bookings, customers, and payments with operational dashboards and billing workflows.",
      image: "/projects/hotel-management.png",
      tags: ["Node.js", "Express.js", "React.js", "PostgreSQL"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 2,
      title: "SmartPool System",
      description: "IoT-integrated monitoring system tracking pool conditions, usage statistics, and maintenance alerts to improve safety and efficiency.",
      image: "/projects/smartpool.png",
      tags: ["JavaScript", "Node.js", "IoT", "PostgreSQL"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 3,
      title: "M‑Pesa Billing Integration",
      description: "Backend service handling M‑Pesa payment requests and confirmations, updating billing records in real time via REST APIs.",
      image: "/projects/mpesa.png",
      tags: ["Node.js", "REST API", "Payment Gateway"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 4,
      title: "E‑Commerce Website",
      description: "Online store UI with cart and payment flow, responsive layout and accessible components.",
      image: "/projects/ecommerce.PNG",
      tags: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/skipper-blue/skipperglitch",
        live: "https://skipperglitch.alwaysdata.net/"
      }
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects, blog and contact form with smooth animations.",
      image: "/projects/portifolio.PNG",
      tags: ["HTML", "CSS", "Bootstrap"],
      links: {
        github: "https://github.com/",
        live: "https://skipper-blue.github.io/my-portifolio/"
      }
    },
    {
      id: 6,
      title: "Weather App",
      description: "Realtime weather dashboard with API integration and charted data.",
      image: "/projects/weather.jpeg",
      tags: ["HTML", "CSS", "API"],
      links: {
        github: "https://github.com/",
        live: "#"
      }
    },
    {
      id:7,
      title:"Hospital website",
      description:"A hospital website with a user-friendly interface, providing information about services, doctors, and appointment scheduling.",
      image:"/projects/mhudumist.png",
      tags:["HTML", "CSS", "JavaScript"],
      links:{
        github:"https://github.com/MHUDUMIST/hospital-website.git", 
        live:"https://mhudumist.github.io/hospital-website/"}
    }
  ],

  services: [
    {
      id: "s1",
      title: "Web Development",
      description: "Responsive, accessible front‑end development using modern HTML, CSS and JavaScript.",
      icon: "bi bi-code-slash"
    },
    {
      id: "s2",
      title: "App Development",
      description: "Single‑page apps and progressive web apps with React / frameworks of your choice.",
      icon: "bi bi-phone"
    },
    {
      id: "s3",
      title: "UX & UI Design",
      description: "User-centered interfaces and interaction design focused on clarity and conversion.",
      icon: "bi bi-bar-chart"
    },
    {
      id: "s4",
      title: "API & Integrations",
      description: "Backend integration, REST APIs and third‑party service connections for production apps.",
      icon: "bi bi-envelope-paper"
    }
  ],

  drives: [
    {
      key: "languages",
      title: "Languages & Tools",
      subtitle: "JavaScript · Python · Java · C++ · PHP"
    },
    {
      key: "education",
      title: "Education",
      subtitle: "Maasai Mara University — Computer Science"
    },
    {
      key: "projects",
      title: "Projects",
      subtitle: "Developed multiple full-stack and integration systems"
    }
  ],

  content: {
    navbar: {
      brand: "Skipper",
      links: [
        { id: 'home', icon: 'bi bi-house', label: 'Home', href: '#home' },
        { id: 'about', icon: 'bi bi-person', label: 'About', href: '#about' },
        { id: 'projects', icon: 'bi bi-folder2-open', label: 'Projects', href: '#projects' },
        { id: 'services', icon: 'bi bi-tools', label: 'Services', href: '#services' },
        { id: 'contact', icon: 'bi bi-envelope', label: 'Contact', href: '#contact' }
      ]
    },
    hero: {
      kicker: "Available for freelance",
      heading: "Hi, I'm",
      ctas: {
        primary: "See my work",
        secondary: "Contact me",
        download: "Download CV"
      },
      metaAvailableText: "Available now"
    },
    about: {
      eyebrow: "About me",
      title: "Building Meaningful Digital Experiences",
      driveTitle: "What Drives Me"
    },
    projects: {
      title: "Featured Work",
      intro: "A showcase of recent projects demonstrating design, frontend development and integration work."
    },
    services: {
      title: "Our Features & Services",
      intro: "Distinct offerings that include development, UX design and API integration."
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Get In Touch",
      intro: "I'm always open to discuss exciting projects and new opportunities. Let's collaborate!"
    },
    footer: {
      textTemplate: "© {year} · {brand}-blue · All Rights Reserved"
    },
    modal: {
      title: "Details",
      tabs: [
        { key: 'languages', label: 'Languages' },
        { key: 'frameworks', label: 'Frameworks' },
        { key: 'databases', label: 'Databases' },
        { key: 'tools', label: 'Tools' },
        { key: 'networking', label: 'Networking' },
        { key: 'design', label: 'Design' },
        { key: 'education', label: 'Education' },
        { key: 'projects', label: 'Projects' }
      ]
    }
  }
};

export default portfolioData;
