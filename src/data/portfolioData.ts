export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Backend & APIs' | 'Frontend / UI';
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    location: string;
    availability: string;
    resumeUrl: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      email: string;
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
  terminalCommands: Record<string, string | string[]>;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Rivera",
    role: "Full-Stack Software Engineer",
    tagline: "Architecting high-performance web applications, scalable backend systems, and delightful digital experiences.",
    bio: "I'm a full-stack engineer passionate about building reliable distributed systems, clean RESTful/GraphQL APIs, and responsive, accessible user interfaces. I bridge the gap between intuitive design and rock-solid backend infrastructure.",
    email: "alex.rivera.dev@gmail.com",
    location: "San Francisco, CA (Open to Remote)",
    availability: "Available for Full-time Roles & Contracts",
    resumeUrl: "#",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "mailto:alex.rivera.dev@gmail.com"
    },
    stats: [
      { label: "Years Experience", value: "3+", description: "Building production software" },
      { label: "Completed Projects", value: "20+", description: "From SaaS to mobile apps" },
      { label: "API Requests/mo", value: "5M+", description: "Handled across architectures" },
      { label: "Code Quality", value: "100%", description: "Committed to tested, clean code" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux / Zustand", level: "Proficient" },
        { name: "HTML5 / CSS3 / WebSockets", level: "Advanced" },
        { name: "Responsive UI/UX", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "Node.js & Express", level: "Advanced" },
        { name: "Python / FastAPI", level: "Proficient" },
        { name: "Go / Gin", level: "Familiar" },
        { name: "RESTful & GraphQL APIs", level: "Advanced" },
        { name: "Microservices & Auth (JWT/OAuth)", level: "Advanced" },
        { name: "Message Queues (RabbitMQ/Kafka)", level: "Proficient" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL & Prisma", level: "Advanced" },
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "Redis Caching", level: "Proficient" },
        { name: "Elasticsearch", level: "Familiar" },
        { name: "Database Indexing & Optimization", level: "Proficient" }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "AWS (S3, EC2, Lambda)", level: "Proficient" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced" },
        { name: "Linux / Bash Scripting", level: "Proficient" },
        { name: "Git & Version Control", level: "Expert" }
      ]
    }
  ],
  projects: [
    {
      id: "cloud-saas",
      title: "PulseFlow - Realtime Analytics SaaS",
      description: "A comprehensive analytics platform monitoring web telemetry, user journeys, and funnel conversion rates with real-time SSE streams and live dashboard visualization.",
      category: "Full-Stack",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
      metrics: "<150ms query latency, 50k+ daily events",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "ai-doc-engine",
      title: "DocuSense - AI Knowledge Retrieval",
      description: "Document intelligent search and QA engine using vector embeddings, hybrid search, semantic chunking, and LLM orchestration with streaming responses.",
      category: "Full-Stack",
      tags: ["Next.js", "FastAPI", "Python", "OpenAI", "Pinecone", "Docker"],
      metrics: "94% semantic retrieval precision",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "distributed-task-queue",
      title: "TaskForge - Distributed Job Engine",
      description: "High-throughput asynchronous task scheduler supporting priority queues, exponential backoff retries, cron patterns, and dead-letter queue management.",
      category: "Backend & APIs",
      tags: ["Go", "Node.js", "Redis", "Docker", "Prometheus", "Grafana"],
      metrics: "12,000 tasks/second peak capacity",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "dev-marketplace",
      title: "CodeCraft - Developer Component Store",
      description: "E-commerce platform for curated developer UI kits, custom design system components, automated Stripe subscription billing, and instant license generation.",
      category: "Full-Stack",
      tags: ["React", "Express", "Stripe API", "MongoDB", "Tailwind CSS"],
      metrics: "PCI-compliant checkout & webhooks",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: "api-gateway",
      title: "ShieldGate - Cloud API Gateway",
      description: "Lightweight reverse proxy featuring sliding-window rate limiting, API token validation, dynamic routing, and Prometheus metrics telemetry.",
      category: "Backend & APIs",
      tags: ["Node.js", "TypeScript", "Redis", "Docker", "Nginx"],
      metrics: "0.8ms middleware overhead",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: "kanban-flow",
      title: "SyncBoard - Collaborative Workspace",
      description: "Real-time multiplayer project management board with optimistic state updates, WebSocket synchronization, drag-and-drop workflow, and markdown notes.",
      category: "Frontend / UI",
      tags: ["React", "TypeScript", "WebSockets", "Zustand", "Tailwind CSS"],
      metrics: "Sub-50ms sync latency across peers",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    }
  ],
  experiences: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Apex Tech Labs",
      period: "2023 - Present",
      description: [
        "Led architecture of core microservices handling 4M+ monthly requests with 99.98% uptime.",
        "Engineered React & TypeScript dashboards cutting customer onboarding time by 35%.",
        "Mentored junior developers and instituted automated CI/CD pipelines reducing deployment failure rates."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      role: "Software Engineer",
      company: "Streamline Digital",
      period: "2021 - 2023",
      description: [
        "Developed REST and GraphQL endpoints in Node.js & Express powering mobile and web apps.",
        "Migrated legacy database queries to indexed PostgreSQL & Redis caching, speeding up p95 response time by 4x.",
        "Collaborated closely with UX designers to implement responsive, mobile-first interfaces."
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Tailwind CSS", "Jest"]
    },
    {
      role: "Junior Web Developer",
      company: "Innovate Solutions",
      period: "2020 - 2021",
      description: [
        "Built responsive client portals and interactive web applications with modern JavaScript.",
        "Implemented automated unit tests and accessibility audits adhering to WCAG 2.1 AA guidelines."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Git"]
    }
  ],
  terminalCommands: {
    help: "Available commands: bio, skills, projects, experience, contact, stats, clear, hire",
    bio: "Full-Stack Software Engineer focused on architecting resilient web applications, distributed systems, and modern UI experiences.",
    skills: "Frontend: React, TypeScript, Tailwind | Backend: Node.js, Python, Go | DB: Postgres, MongoDB, Redis | Cloud: Docker, AWS, CI/CD",
    projects: "Check out: PulseFlow (Realtime Analytics), DocuSense (AI Knowledge Engine), TaskForge (Distributed Queue)",
    experience: "Senior Full-Stack Engineer @ Apex Tech Labs (2023-Present) | Software Engineer @ Streamline Digital (2021-2023)",
    contact: "Email: alex.rivera.dev@gmail.com | GitHub: github.com | LinkedIn: linkedin.com",
    stats: "3+ Years Exp | 20+ Production Projects | 5M+ API Requests Handled | 99.9% Uptime Mindset",
    hire: "Awesome! Let's connect! Email me at alex.rivera.dev@gmail.com or scroll down to the contact section."
  }
};
