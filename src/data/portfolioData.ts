export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Backend & APIs' | 'Mobile & AI';
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
    resumeUrl: string;
    social: {
      github: string;
      linkedin: string;
      email: string;
      phone: string;
    };
    stats: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  terminalCommands: Record<string, string | string[]>;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tharun A",
    role: "Python Full-Stack & Backend Engineer",
    tagline: "Specializing in Python (Flask), PostgreSQL, React, and TypeScript. Architecting resilient RESTful APIs, deterministic transactional state machines, and relational schemas.",
    bio: "Computer Science graduate (B.E. 8.2 CGPA) with hands-on expertise architecting high-integrity RESTful microservices, transactional state machines, and relational database schemas using Python (Flask), PostgreSQL, React, and TypeScript. Strong foundation in Data Structures & Algorithms, relational database indexing, zero-drift financial precision, and test-driven development (Pytest).",
    email: "tharuntharu8088@gmail.com",
    phone: "+91 8088045351",
    location: "Bengaluru, India",
    availability: "Actively Open to Full-time Backend & Full-Stack Opportunities",
    resumeUrl: "#",
    social: {
      github: "https://github.com/tharunshivamogga",
      linkedin: "https://linkedin.com/in/tharun-80880-ts",
      email: "mailto:tharuntharu8088@gmail.com",
      phone: "tel:+918088045351"
    },
    stats: [
      { label: "B.E. Computer Science", value: "8.2 CGPA", description: "JNNCE (2023 – 2026)" },
      { label: "Transaction States", value: "19 States", description: "Deterministic fintech lifecycle" },
      { label: "Financial Precision", value: "100%", description: "Zero floating-point drift" },
      { label: "Production Projects", value: "5+ Apps", description: "Fintech, AI Logistics & Mobile ERP" }
    ]
  },
  skills: [
    {
      category: "Backend & APIs",
      skills: [
        { name: "Python (OOP, Async, Type Hints)", level: "Advanced" },
        { name: "Flask & Flask-Migrate", level: "Advanced" },
        { name: "SQLAlchemy ORM", level: "Advanced" },
        { name: "RESTful API Architecture", level: "Advanced" },
        { name: "Pydantic & Validation", level: "Advanced" },
        { name: "PyJWT & RBAC Security", level: "Proficient" },
        { name: "Webhooks & Event Handlers", level: "Proficient" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "TanStack Query", level: "Proficient" },
        { name: "Vite & Tooling", level: "Advanced" },
        { name: "Recharts & Leaflet Maps", level: "Proficient" },
        { name: "React Native & Expo", level: "Proficient" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "SQLite", level: "Advanced" },
        { name: "Relational Indexing & Tuning", level: "Proficient" },
        { name: "Schema Normalization (3NF)", level: "Advanced" },
        { name: "Transactions & ACID Guarantees", level: "Advanced" }
      ]
    },
    {
      category: "Testing, Cloud & Tooling",
      skills: [
        { name: "Pytest Automated Testing", level: "Advanced" },
        { name: "Postman API Testing", level: "Advanced" },
        { name: "Git & GitHub Workflows", level: "Expert" },
        { name: "Docker Containerization", level: "Familiar" },
        { name: "Linux (Ubuntu) & Bash", level: "Proficient" },
        { name: "Vercel & Render CI/CD", level: "Proficient" },
        { name: "Data Structures & Algorithms", level: "Advanced" }
      ]
    }
  ],
  projects: [
    {
      id: "cardshare-fintech",
      title: "CardShare — Fintech Discount-Sharing Marketplace",
      description: "A compliant peer-to-peer fintech marketplace featuring a deterministic 19-state transaction lifecycle covering order initiation, delayed cashback reconciliation, and simulated escrow settlement.",
      category: "Full-Stack",
      tags: ["Python", "Flask", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Pydantic", "Tailwind CSS", "Pytest"],
      metrics: "19-state lifecycle • Zero float drift • RBAC Security",
      githubUrl: "https://github.com/tharunshivamogga/cardshare",
      liveUrl: "https://github.com/tharunshivamogga/cardshare",
      featured: true,
      highlights: [
        "Architected a compliant peer-to-peer fintech marketplace featuring a deterministic 19-state transaction lifecycle covering order initiation, delayed cashback reconciliation, and simulated settlement.",
        "Enforced zero floating-point financial drift across multi-tier discount calculations using Python Decimal (ROUND_HALF_UP) and SQL NUMERIC(12,2) precision.",
        "Built secure role-based access control (RBAC) supporting Buyer, Cardholder, and Admin personas using JWT authentication and Pydantic request validation models.",
        "Developed an interactive React/TypeScript frontend with TanStack Query for cache invalidation and live transactional status tracking, backed by a comprehensive Pytest test suite."
      ]
    },
    {
      id: "ai-smart-logistics",
      title: "AI-Enabled Smart Logistics & Waste Management System",
      description: "Full-stack geospatial logistics platform featuring automated dynamic pickup route optimization via TSP algorithm and Random Forest regression volume forecasting.",
      category: "Full-Stack",
      tags: ["Python", "Flask", "Scikit-learn", "React.js", "Leaflet", "REST APIs", "Vercel", "Render"],
      metrics: "Nearest-Neighbor TSP • Random Forest ML • Leaflet GIS",
      githubUrl: "https://github.com/tharunshivamogga/smart-waste",
      liveUrl: "https://github.com/tharunshivamogga/smart-waste",
      featured: true,
      highlights: [
        "Built a full-stack logistics coordination platform with real-time geospatial route tracking using React and Leaflet across Admin and Driver roles.",
        "Implemented automated pickup route planning using a nearest-neighbor TSP algorithm combined with a Random Forest regression model to predict waste container volume trends.",
        "Exposed modular Flask REST endpoints for telemetry and volume updates, deploying the decoupled frontend to Vercel and backend to Render with continuous deployment pipelines."
      ]
    },
    {
      id: "brickops-erp",
      title: "BrickOps — Mobile Industrial ERP Application",
      description: "Offline-capable manufacturing ERP system automating production batches, vehicle logistics dispatch, piece-rate labour wages, and double-entry sales bookkeeping.",
      category: "Mobile & AI",
      tags: ["React Native", "Expo", "JavaScript", "Context API", "AsyncStorage", "PDF Generation"],
      metrics: "Offline-First • Double-Entry Ledger • 1-Tap PDF Invoices",
      githubUrl: "https://github.com/tharunshivamogga/brickops",
      liveUrl: "https://github.com/tharunshivamogga/brickops",
      featured: true,
      highlights: [
        "Developed an offline-capable mobile ERP system automating end-to-end manufacturing workflows (production batches, vehicle transport, labour wages, and sales invoicing) for daily plant operations.",
        "Replaced paper-based tally ledgers with an automated double-entry ledger algorithm that computes daily worker advances, piece-rate earnings, and weekly owner net-profit balances.",
        "Implemented instantaneous one-tap PDF report generation and date-filtered analytical summaries, reducing manual daily bookkeeping reconciliation time."
      ]
    },
    {
      id: "medapp-llm",
      title: "MedApp — LLM Medical Report Analyzer & Health Assistant",
      description: "AI-driven diagnostic intelligence application parsing patient pathology and laboratory test reports, extracting vital health metrics, and synthesizing clinical summaries with an interactive assistant.",
      category: "Mobile & AI",
      tags: ["Python", "LLMs", "LangChain", "NLP", "OpenAI / HuggingFace", "Prompt Engineering"],
      metrics: "Automated Report Diagnostics • Conversational Health AI",
      githubUrl: "https://github.com/Tharun-TS/medapp",
      liveUrl: "https://github.com/Tharun-TS/medapp",
      featured: false,
      highlights: [
        "Built an interactive LLM-powered medical analyzer synthesizing complex clinical lab results into understandable summaries.",
        "Engineered prompt chains and semantic extraction routines to flag anomalous biometric ranges (blood markers, glucose, cholesterol).",
        "Created an interactive conversational health assistant answering contextual queries based on user lab data."
      ]
    },
    {
      id: "isl-recognition",
      title: "Indian Sign Language (ISL) Recognition System",
      description: "Real-time computer vision system recognizing Indian Sign Language gestures using OpenCV, contour extraction, and machine learning classification for accessible assistive communication.",
      category: "Mobile & AI",
      tags: ["Python", "OpenCV", "Machine Learning", "Scikit-Learn", "Computer Vision", "Jupyter"],
      metrics: "Real-time Video Processing • Multi-Gesture Classification",
      githubUrl: "https://github.com/Tharun-TS/Indian-Sign-Language-Recognition-System",
      liveUrl: "https://github.com/Tharun-TS/Indian-Sign-Language-Recognition-System",
      featured: false,
      highlights: [
        "Developed a real-time computer vision pipeline utilizing OpenCV for hand segmentation, feature vector extraction, and gesture tracking.",
        "Trained classification models to accurately translate dynamic gesture signs into textual display.",
        "Aimed at bridging communication gaps for speech- and hearing-impaired communities through lightweight computer vision models."
      ]
    }
  ],
  experiences: [
    {
      role: "Software Engineering Trainee / Intern",
      company: "QSpiders",
      location: "Bengaluru, India",
      period: "Sep 2025 – Apr 2026",
      description: [
        "Built and tested modular Python backend scripts for automated data validation, cleaning, and pipeline ingestion across relational databases (MySQL/PostgreSQL).",
        "Optimized slow-running SQL queries through index tuning and schema normalization (3NF), improving query execution latency across simulated user management datasets.",
        "Developed REST API testing suites in Postman and Pytest, identifying edge cases and validating JSON payloads against strict schema requirements."
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "MySQL", "Pytest", "Postman", "SQL Indexing", "REST APIs"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.), Computer Science",
      institution: "Jawaharlal Nehru National College of Engineering (JNNCE)",
      location: "Shimoga, India",
      period: "2023 – 2026",
      score: "CGPA: 8.2 / 10",
      highlights: [
        "Specialized in Python Full-Stack & Backend Systems Architecture.",
        "Strong academic standing with deep focus on Data Structures, Database Management Systems, and Web Technologies."
      ]
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "D.S. Dinakar Polytechnic",
      location: "Shimoga, India",
      period: "2020 – 2023",
      score: "CGPA: 7.64 / 10",
      highlights: [
        "Core foundational coursework in Object-Oriented Programming, C/C++, Database Systems, and Computer Networks."
      ]
    }
  ],
  terminalCommands: {
    help: "Available commands: bio, skills, projects, experience, education, contact, stats, clear, hire",
    bio: "Tharun A - Computer Science Graduate (B.E. 8.2 CGPA) & Python Full-Stack Engineer specializing in Flask, PostgreSQL, React, TypeScript, and clean REST APIs.",
    skills: "Languages: Python, SQL, TypeScript | Backend: Flask, SQLAlchemy, Pydantic, PyJWT | Frontend: React, Tailwind, Vite, TanStack Query | DB: PostgreSQL, MySQL, SQLite | Tools: Pytest, Postman, Docker, Git, Linux",
    projects: "Featured: 1) CardShare (Fintech Marketplace) 2) AI-Enabled Smart Logistics (TSP + Random Forest) 3) BrickOps (Mobile ERP) 4) MedApp (LLM Medical Analyzer) 5) ISL Recognition (Computer Vision)",
    experience: "Software Engineering Trainee @ QSpiders (Bengaluru | Sep 2025 – Apr 2026) - Python pipelines, SQL index optimization, and Pytest/Postman test suites.",
    education: "B.E. Computer Science @ JNNCE (8.2 CGPA | 2023-2026) & Diploma in CSE @ D.S. Dinakar Polytechnic (7.64 CGPA | 2020-2023)",
    contact: "Email: tharuntharu8088@gmail.com | Phone: +91 8088045351 | Bengaluru, India | LinkedIn: linkedin.com/in/tharun-80880-ts | GitHub: github.com/tharunshivamogga",
    stats: "8.2 CGPA (B.E.) | 19-state Deterministic Fintech Lifecycle | 100% Zero-drift Decimal Math | 5+ Full-Stack / ML / Mobile Projects",
    hire: "Awesome! Tharun is actively available for full-time opportunities. Reach out at tharuntharu8088@gmail.com or call +91 8088045351!"
  }
};
