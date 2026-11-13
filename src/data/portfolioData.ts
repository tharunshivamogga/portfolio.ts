export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Featured Four' | 'Web Technologies' | 'Python & Data Analysis' | 'All';
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  apkDownload?: boolean;
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
    role: "Python & Web Technologies Developer | Data Analysis",
    tagline: "Computer Science graduate building high-performance web applications, Python backend services, SQL data pipelines, and practical business software.",
    bio: "Computer Science graduate (B.E. 8.2 CGPA from JNNCE, Diploma 7.64 CGPA) specializing in Python, Web Technologies, SQL, and Data Analysis. Proven track record developing end-to-end commercial solutions — from deterministic fintech transaction engines and real-world industrial ERP APKs to dynamic client web platforms and data-driven logistics systems.",
    email: "tharuntharu8088@gmail.com",
    phone: "+91 8088045351",
    location: "Bengaluru, India",
    availability: "Available for Full-time Roles & Software Opportunities",
    resumeUrl: "#",
    social: {
      github: "https://github.com/tharunshivamogga",
      linkedin: "https://linkedin.com/in/tharun-80880-ts",
      email: "mailto:tharuntharu8088@gmail.com",
      phone: "tel:+918088045351"
    },
    stats: [
      { label: "B.E. Computer Science", value: "8.2 CGPA", description: "JNNCE, Shimoga (2023 – 2026)" },
      { label: "Core Flagship Projects", value: "4 Systems", description: "CardShare, BrickOps APK, PMK Bricks & Shuttering" },
      { label: "GitHub Repositories", value: "8+ Projects", description: "All public on github.com/tharunshivamogga" },
      { label: "Technical Precision", value: "100%", description: "Clean SQL, Python logic & Web Engineering" }
    ]
  },
  skills: [
    {
      category: "Python & Backend Development",
      skills: [
        { name: "Python (OOP, Async, Automation)", level: "Advanced" },
        { name: "Flask Framework", level: "Advanced" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "SQLAlchemy ORM", level: "Advanced" },
        { name: "PyJWT & User Authentication", level: "Proficient" },
        { name: "Pytest Automated Testing", level: "Advanced" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React.js & Modern UI", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & Modern CSS3", level: "Expert" },
        { name: "Tailwind CSS & Responsive Design", level: "Advanced" },
        { name: "Leaflet Interactive Maps", level: "Proficient" },
        { name: "React Native (Expo Mobile)", level: "Proficient" }
      ]
    },
    {
      category: "SQL & Data Analysis",
      skills: [
        { name: "SQL Query Writing & Optimization", level: "Advanced" },
        { name: "MySQL & SQLite", level: "Advanced" },
        { name: "Database Indexing & Performance", level: "Proficient" },
        { name: "Data Analysis & Aggregation", level: "Advanced" },
        { name: "Data Cleaning & Validation Pipelines", level: "Advanced" },
        { name: "NumPy & Pandas Analysis Basics", level: "Proficient" }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      skills: [
        { name: "Git & GitHub Version Control", level: "Expert" },
        { name: "Postman API Contract Testing", level: "Advanced" },
        { name: "Vercel & Render Deployment", level: "Proficient" },
        { name: "Linux (Ubuntu) & Bash", level: "Proficient" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Mobile APK Packaging & Distribution", level: "Proficient" }
      ]
    }
  ],
  projects: [
    // 1. CARDSHARE
    {
      id: "cardshare",
      title: "CardShare — Fintech Discount-Sharing Marketplace",
      subtitle: "Deterministic 19-state financial transaction engine with zero-drift precision",
      description: "A compliant peer-to-peer fintech marketplace featuring a deterministic 19-state transaction lifecycle covering order initiation, delayed cashback reconciliation, and simulated settlement.",
      category: "Featured Four",
      tags: ["Python", "Flask", "React", "SQL", "SQLAlchemy", "Tailwind CSS", "Pytest"],
      metrics: "19-state transaction lifecycle • Python Decimal precision • RBAC security",
      githubUrl: "https://github.com/tharunshivamogga/cardshare",
      liveUrl: "https://github.com/tharunshivamogga/cardshare",
      featured: true,
      highlights: [
        "Architected a compliant peer-to-peer marketplace with a deterministic 19-state transaction lifecycle covering orders, escrow hold, and settlement.",
        "Guaranteed zero floating-point financial drift across multi-tier discount math using Python Decimal (ROUND_HALF_UP) and SQL NUMERIC precision.",
        "Engineered role-based access control (Buyer, Cardholder, Admin) with secure JWT authentication and automated Pytest test suites."
      ]
    },
    // 2. BRICKOPS
    {
      id: "brickops",
      title: "BrickOps — Industrial Manufacturing Mobile ERP (Android APK)",
      subtitle: "Offline-first mobile ERP APK for daily factory batching, logistics & payroll",
      description: "An offline-capable mobile ERP Android application developed to automate daily factory operations: brick production batches, vehicle transport tracking, worker piece-rate wages, and double-entry sales bookkeeping.",
      category: "Featured Four",
      tags: ["Android APK", "React Native", "Expo", "JavaScript", "Context API", "AsyncStorage", "PDF Reports"],
      metrics: "Production Android APK • Automated double-entry ledger • 1-tap PDF invoices",
      githubUrl: "https://github.com/tharunshivamogga/portfolio.ts",
      liveUrl: "https://github.com/tharunshivamogga/portfolio.ts",
      apkDownload: true,
      featured: true,
      highlights: [
        "Packaged and deployed standalone Android APKs ('Brick_Factory_Manager_v1.0.apk') for on-site factory tablets and smartphones.",
        "Replaced manual paper ledgers with an automated double-entry ledger algorithm computing worker advances, piece-rate earnings, and weekly net-profit.",
        "Integrated instantaneous 1-tap PDF invoice and receipt generation with date-filtered analytical summaries, eliminating bookkeeping reconciliation delays."
      ]
    },
    // 3. BRICKS-WEB
    {
      id: "bricks-web",
      title: "PMK Brick Factory — Commercial Web Platform",
      subtitle: "Client-facing commercial website with product catalogs & interactive estimation",
      description: "A responsive commercial web platform designed for PMK Brick Factory featuring brick product catalogs, technical compressive strength specifications, order calculators, and direct WhatsApp customer enquiry routing.",
      category: "Featured Four",
      tags: ["Web Technologies", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Lead Generation"],
      metrics: "Live WhatsApp enquiry generation • Instant brick load estimation • Mobile-first UI",
      githubUrl: "https://github.com/tharunshivamogga/bricks-web",
      liveUrl: "https://tharunshivamogga.github.io/bricks-web/",
      featured: true,
      highlights: [
        "Built a mobile-first, high-converting commercial web interface showcasing standard wire-cut and fly-ash brick catalog lines.",
        "Implemented interactive quantity and transport cost estimator allowing contractors to calculate truckloads based on construction area.",
        "Automated direct WhatsApp enquiry generation pre-filling order specifications, quantities, and site delivery locations."
      ]
    },
    // 4. SHUTTERING WEB
    {
      id: "shuttering-web",
      title: "Shuttering & Roofing Works — Contractor Commercial Portal",
      subtitle: "Dual-rate construction cost estimator (Plywood ₹34 vs Steel Sheet ₹25)",
      description: "A modern commercial website built for civil construction contractors featuring a dual-rate comparison system (Plywood Shuttering at ₹34/sq.ft vs Steel Sheet at ₹25/sq.ft), interactive area cost calculator, and piece-work contract booking.",
      category: "Featured Four",
      tags: ["Web Technologies", "JavaScript", "HTML5", "Modern CSS", "Area Calculator", "Contractor Portal"],
      metrics: "Live sq.ft cost calculator • WhatsApp estimate sender • Piece-work labor portal",
      githubUrl: "https://github.com/tharunshivamogga/portfolio.ts",
      liveUrl: "https://github.com/tharunshivamogga/portfolio.ts",
      featured: true,
      highlights: [
        "Engineered an interactive cost and rate calculator supporting live area inputs (sq.ft) with instant toggle between Plywood (₹34) and Steel Sheet (₹25).",
        "Created a specialized piece-work and sub-contract booking section enabling fellow builders to hire shuttering and bar-bending gangs on contract.",
        "Integrated one-click 'Send Estimate on WhatsApp' modal pre-formatting calculated estimates directly into WhatsApp chat messages."
      ]
    },
    // 5. SMART WASTE MANAGEMENT (from GitHub)
    {
      id: "smart-waste",
      title: "Smart Waste Management System",
      subtitle: "Geospatial logistics coordination with GIS mapping & volume analytics",
      description: "Full-stack logistics and route coordination platform for municipal waste operations featuring interactive Leaflet mapping, container volume telemetry, and driver dispatch route updates.",
      category: "Python & Data Analysis",
      tags: ["Python", "JavaScript", "SQL", "Leaflet Maps", "Data Analysis", "REST APIs"],
      metrics: "GIS Geospatial Mapping • Route Analytics • Telemetry Updates",
      githubUrl: "https://github.com/tharunshivamogga/smart-waste-management",
      liveUrl: "https://github.com/tharunshivamogga/smart-waste-management",
      featured: false,
      highlights: [
        "Developed full-stack logistics coordination with interactive Leaflet GIS map layers tracking containers across admin and driver views.",
        "Created analytical volume aggregation routines to monitor container fill cycles and forecast collection schedules.",
        "Exposed modular REST endpoints for real-time truck location telemetry and container status logging."
      ]
    },
    // 6. VEHICLE RENTAL SYSTEM (from GitHub)
    {
      id: "vehicle-rental",
      title: "Vehicle Rental Management System",
      subtitle: "Object-oriented fleet booking, availability tracking, and revenue reporting",
      description: "Python and SQL-powered fleet rental management system managing vehicle inventories, customer reservations, rental duration calculations, and return billing audits.",
      category: "Python & Data Analysis",
      tags: ["Python", "SQL", "OOP Architecture", "Data Analysis", "Inventory Tracking"],
      metrics: "Relational fleet audit • Reservation lifecycle • Billing & revenue summaries",
      githubUrl: "https://github.com/tharunshivamogga/vehicle_rental_system",
      liveUrl: "https://github.com/tharunshivamogga/vehicle_rental_system",
      featured: false,
      highlights: [
        "Architected modular Python OOP domain classes for fleet categories, vehicle availability states, and rental tariffs.",
        "Structured SQL queries to analyze fleet utilization rates, rental duration trends, and customer return histories.",
        "Handled automated late-fee calculations, security deposits, and booking invoice summaries."
      ]
    },
    // 7. PHARMACY MANAGEMENT SYSTEM (from GitHub)
    {
      id: "pharmacy-management",
      title: "Pharmacy Management System",
      subtitle: "Medical inventory management, batch expiry tracking, and billing portal",
      description: "Web application for retail pharmacy operations managing medication inventory, batch expiry notifications, supplier stock replenishment, and customer prescription sales invoices.",
      category: "Web Technologies",
      tags: ["JavaScript", "Web Technologies", "SQL", "HTML5/CSS3", "Inventory Billing"],
      metrics: "Batch expiry tracking • Prescription invoices • Real-time stock alerts",
      githubUrl: "https://github.com/tharunshivamogga/pharmacy-management-system",
      liveUrl: "https://github.com/tharunshivamogga/pharmacy-management-system",
      featured: false,
      highlights: [
        "Implemented real-time inventory tracking with threshold notifications for low-stock and near-expiry medications.",
        "Designed structured billing workflows with instantaneous tax calculations and receipt printing.",
        "Integrated SQL records for supplier purchase orders and sales transaction auditing."
      ]
    },
    // 8. SPEECH TO TEXT CONVERSION (from GitHub)
    {
      id: "speech-to-text",
      title: "Speech to Text Audio Conversion",
      subtitle: "Audio processing & speech recognition pipeline with text transcription",
      description: "Python-based audio speech recognition utility parsing spoken voice input and audio WAV/MP3 files into structured textual transcripts for automated data logging.",
      category: "Python & Data Analysis",
      tags: ["Python", "Speech Recognition", "Audio Processing", "Data Analysis", "Automation"],
      metrics: "Acoustic audio parsing • Automated transcript generation • Noise filtering",
      githubUrl: "https://github.com/tharunshivamogga/speech_to_text_conversion",
      liveUrl: "https://github.com/tharunshivamogga/speech_to_text_conversion",
      featured: false,
      highlights: [
        "Built an automated audio ingestion pipeline converting spoken microphone streams and pre-recorded audio into text.",
        "Applied noise-filtering algorithms to enhance speech recognition accuracy across noisy acoustic recordings.",
        "Provided clean text formatting and export utilities for rapid notes transcription."
      ]
    },
    // 9. HSRP SYSTEM (from GitHub)
    {
      id: "hsrp",
      title: "HSRP Vehicle Registration System",
      subtitle: "Vehicle number plate compliance & registration verification system",
      description: "Python and SQL utility system for managing High Security Registration Plate (HSRP) verification, vehicle class categorization, and regional transport office compliance records.",
      category: "Python & Data Analysis",
      tags: ["Python", "SQL", "Data Verification", "Record Management"],
      metrics: "HSRP compliance verification • Vehicle number validation • Audit logs",
      githubUrl: "https://github.com/tharunshivamogga/hsrp",
      liveUrl: "https://github.com/tharunshivamogga/hsrp",
      featured: false,
      highlights: [
        "Structured automated data validation routines ensuring vehicle chassis and registration formats match standard RTO guidelines.",
        "Executed SQL database operations to query, log, and update vehicle plate tracking statuses.",
        "Designed clean command-line and script interfaces for high-throughput batch verification."
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
        "Built and tested modular Python backend scripts for automated data validation, cleaning, and pipeline ingestion across SQL databases (MySQL/SQLite).",
        "Optimized slow-running SQL queries through index tuning and normalization, improving query execution latency across simulated user management datasets.",
        "Developed REST API testing suites in Postman and Pytest, identifying edge cases and validating JSON payloads against strict schema requirements."
      ],
      technologies: ["Python", "Flask", "SQL", "MySQL", "Pytest", "Postman", "SQL Indexing", "REST APIs", "Data Analysis"]
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
        "Specialized in Python, Web Technologies, Database Systems, and Data Analysis.",
        "Strong academic standing with deep focus on Data Structures, Algorithms, SQL, and Web Application Engineering."
      ]
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "D.S. Dinakar Polytechnic",
      location: "Shimoga, India",
      period: "2020 – 2023",
      score: "CGPA: 7.64 / 10",
      highlights: [
        "Core foundational coursework in Object-Oriented Programming, C/C++, Database Systems, and Web Fundamentals."
      ]
    }
  ],
  terminalCommands: {
    help: "Available commands: bio, skills, projects, flagship, experience, education, contact, stats, clear, hire",
    bio: "Tharun A - Computer Science Graduate (B.E. 8.2 CGPA) | Python, Web Technologies & Data Analysis Developer from Bengaluru.",
    skills: "Python (Flask), Web Technologies (React, JavaScript, HTML5/CSS3), SQL (MySQL, SQLite), Data Analysis, Pytest, Git, Linux",
    flagship: "The 4 Core Projects: 1) CardShare (Fintech Marketplace) 2) BrickOps (Industrial ERP APK) 3) PMK Bricks Web (Commercial Site) 4) Shuttering Web (Contractor Portal)",
    projects: "All projects: CardShare, BrickOps APK, PMK Bricks Web, Shuttering Web, Smart Waste Management, Vehicle Rental, Pharmacy Management, Speech-to-Text, HSRP.",
    experience: "Software Engineering Trainee @ QSpiders (Bengaluru | Sep 2025 – Apr 2026) - Python pipelines, SQL index optimization, and Pytest/Postman test suites.",
    education: "B.E. Computer Science @ JNNCE (8.2 CGPA | 2023-2026) & Diploma in CSE @ D.S. Dinakar Polytechnic (7.64 CGPA | 2020-2023)",
    contact: "Email: tharuntharu8088@gmail.com | Phone: +91 8088045351 | Bengaluru, India | LinkedIn: linkedin.com/in/tharun-80880-ts | GitHub: github.com/tharunshivamogga",
    stats: "8.2 CGPA (B.E.) | 4 Flagship Projects Built | 8+ GitHub Repositories | 100% Verified Real Projects",
    hire: "Awesome! Tharun is actively available for full-time opportunities. Reach out at tharuntharu8088@gmail.com or call +91 8088045351!"
  }
};
