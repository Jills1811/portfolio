export const person = {
  name: "Jills Ambaliya",
  mark: "JILLS.",
  role: "AI Engineer in the Making",
  tagline: "Engineering ideas into useful intelligence.",
  heroTitle: ["Building Intelligent Systems,", "One Idea at a Time."],
  heroIntro:
    "Hi, I’m Jills Ambaliya — a Computer Engineering student focused on Artificial Intelligence, Generative AI, Agentic AI and full-stack development.",
  email: "jillsambaliya@gmail.com",
  linkedin: "https://www.linkedin.com/in/jills-ambaliya",
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "AI Systems", href: "#systems" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export const about = {
  kicker: "01 / ABOUT",
  heading: "Intent becomes context. Context becomes action.",
  paragraphs: [
    "I’m a Computer Engineering student who enjoys turning ideas into practical software and AI-powered products.",
    "My interests span Generative AI, Agentic AI, RAG, NLP, intelligent applications and full-stack engineering.",
    "I enjoy building systems that combine strong engineering fundamentals with modern AI capabilities.",
  ],
  stats: [
    { value: "B.Tech", label: "Computer Engineering" },
    { value: "7.90", label: "CGPA" },
    { value: "3+", label: "Major Projects" },
    { value: "AI / Full-Stack", label: "Engineering Focus" },
  ],
}

export const architecture = {
  kicker: "02 / SYSTEM ARCHITECTURE",
  heading: "How I Build Intelligent Systems",
  subheading: "Hover each layer to inspect its role.",
  description:
    "I design AI applications as connected systems — interface, retrieval, reasoning, tools and output — rather than isolated model calls.",
  matrixLabel: "TECHNOLOGY MATRIX",
  matrix: "Gen AI · Agentic AI · RAG · MCP · LangGraph · LangChain · NLP · LLM APIs",
  layers: [
    {
      id: "01",
      title: "User",
      detail: "Human intent enters the system through a considered, responsive interface.",
    },
    {
      id: "02",
      title: "Application",
      detail: "The application layer orchestrates state, routing and interaction logic.",
    },
    {
      id: "03",
      title: "Retrieval / Context",
      detail: "Relevant knowledge is retrieved and assembled into grounded context.",
    },
    {
      id: "04",
      title: "LLM / AI Agent",
      detail: "Reasoning models and agents plan, decide and generate responses.",
    },
    {
      id: "05",
      title: "Tools / APIs",
      detail: "Agents call external tools and APIs to take real, useful actions.",
    },
    {
      id: "06",
      title: "Intelligent Output",
      detail: "Results are returned as clear, actionable, intelligent output.",
    },
  ],
}

export type Project = {
  index: string
  badge: string
  title: string
  description: string
  stack: string[]
  links: { label: string; href: string }[]
}

export const projects = {
  kicker: "03 / SELECTED PROJECTS",
  heading: "Things I’ve Built",
  subheading:
    "Systems designed to solve real problems with modern engineering and applied AI.",
  items: [
    {
      index: "01",
      badge: "Featured System 01",
      title: "CareerMentor AI",
      description:
        "An AI-powered career assistance platform that analyzes resumes, provides ATS-style feedback, conducts AI-driven mock interviews and delivers personalized career recommendations.",
      stack: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "FastAPI",
        "MongoDB",
        "Python",
        "LangGraph",
        "AI / LLM APIs",
      ],
      links: [
        { label: "Live Demo", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
    {
      index: "02",
      badge: "Intelligence Layer 02",
      title: "Business Trust Analysis",
      description:
        "A full-stack web application that helps users evaluate business trustworthiness using reviews, ratings, AI-powered sentiment analysis, personalized recommendations, Google authentication and an integrated chatbot.",
      stack: [
        "React.js",
        "Django REST Framework",
        "Python",
        "MongoDB",
        "REST APIs",
        "Google OAuth",
        "Ollama",
        "NLP",
      ],
      links: [{ label: "View Project", href: "#" }],
    },
    {
      index: "03",
      badge: "Platform System 03",
      title: "ClassHub",
      description:
        "A MERN-stack Google Classroom-inspired platform supporting class creation, assignment management, material sharing, announcements and role-based access for teachers and students.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      links: [{ label: "View Project", href: "#" }],
    },
  ] as Project[],
}

export const skills = {
  kicker: "04 / CAPABILITIES",
  heading: "Technical Arsenal",
  subheading:
    "A practical toolkit for building intelligent products from interface to model orchestration and data.",
  groups: [
    { title: "Programming", items: ["C", "C++", "Python"] },
    { title: "Web", items: ["React.js", "Django", "Node.js", "Express.js"] },
    {
      title: "AI / ML",
      items: [
        "Generative AI",
        "Agentic AI",
        "RAG",
        "MCP",
        "LangGraph",
        "LangChain",
        "NLP",
        "Machine Learning",
      ],
    },
    { title: "Databases", items: ["MongoDB", "MySQL"] },
    { title: "Concepts", items: ["DSA", "OOP", "DBMS"] },
  ],
}

export const education = {
  kicker: "05 / EDUCATION",
  heading: "Learning with intent.",
  subheading: "Formal foundations, applied through hands-on engineering.",
  items: [
    {
      title: "B.Tech in Computer Engineering",
      org: "Dharmsinh Desai University, Nadiad, Gujarat",
      meta: "CGPA: 7.90",
      period: "Aug 2023 – May 2027",
    },
    {
      title: "Higher Secondary Certificate",
      org: "Modi Career Academy, Rajkot",
      meta: "Score: 88%",
      period: "Jun 2022 – Mar 2023",
    },
  ],
  achievementsTitle: "Selected Achievements",
  achievements: [
    {
      title: "Database Management System — NPTEL",
      detail: "Elite category",
    },
    {
      title: "Be10x",
      detail: "Certified for leveraging AI tools for proficiency",
    },
    {
      title: "A.Idea — Poster Making Competition",
      detail: "Secured position in Top 15",
    },
  ],
}

export const contact = {
  kicker: "06 / START A CONVERSATION",
  heading: "Have an idea worth building?",
  subheading: "Let’s build something intelligent.",
}
