export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  // EDITABLE: Add repository and live demo URLs below (leave empty if not applicable)
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description?: string;
  // EDITABLE: Add credential verification link here (leave empty to hide button)
  credentialUrl?: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface PortfolioContent {
  personal: {
    name: string;
    monogram: string;
    title: string;
    headline: string;
    highlightRole: string;
    subheadline: string;
    rotatingRoles: string[];
    summary: string;
    location: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    linkedinUrl: string;
    // EDITABLE: Add your GitHub profile URL here (leave empty if you prefer not to display it)
    githubUrl: string;
    // EDITABLE: Path to your profile picture (defaults to /assets/profile.png)
    profileImage: string;
    // EDITABLE: Path to your PDF resume (defaults to /assets/Harshitha_A_Resume.pdf)
    resumePdf: string;
  };
  stats: StatItem[];
  about: {
    paragraphs: string[];
    quickFacts: { label: string; value: string }[];
  };
  education: EducationItem[];
  skills: SkillCategory[];
  spokenLanguages: { name: string; proficiency: string }[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
}

export const content: PortfolioContent = {
  personal: {
    name: "Harshitha A",
    monogram: "HA",
    title: "Information Science Student · Python · Data Analytics",
    headline: "Hi, I'm Harshitha.",
    highlightRole: "Harshitha",
    subheadline:
      "Information Science student who loves building reliable, secure and data-driven software.",
    rotatingRoles: [
      "Information Science Student · Python · Data Analytics",
      "Python Developer",
      "Data Analytics & Databases",
      "Information Science Engineer",
    ],
    summary:
      "Information Science and Engineering student with a strong foundation in programming, data structures, databases, and problem-solving. Proficient in Python, C, Java, SQL, and basic web technologies. Interested in applying technical knowledge through real-world projects and continuously learning new technologies. Experienced in developing academic projects focused on inventory management and secure data disposal, with a strong interest in software development, database management, and building practical solutions to real-world problems.",
    location: "Bengaluru, India",
    email: "harshitha6569@gmail.com",
    phone: "",
    phoneDisplay: "",
    linkedinUrl: "https://www.linkedin.com/in/harshitha-a-19b110374",
    // EDITABLE: Add your GitHub profile URL here (leave empty if not applicable)
    githubUrl: "",
    // EDITABLE: Profile photo path inside public directory
    profileImage: "/assets/profile.png",
    // EDITABLE: Resume PDF path inside public directory
    resumePdf: "/assets/Harshitha_A_Resume.pdf",
  },
  stats: [
    { value: 4, label: "Certifications", suffix: "" },
    { value: 3, label: "Core Projects", suffix: "" },
    { value: 4, label: "Languages (Python, C, Java, SQL)", suffix: "" },
    { value: 90, label: "Class 10 & 12 Distinction", suffix: "%+" },
  ],
  about: {
    paragraphs: [
      "Information Science and Engineering student with a strong foundation in programming, data structures, databases, and problem-solving. Proficient in Python, C, Java, SQL, and basic web technologies.",
      "Interested in applying technical knowledge through real-world projects and continuously learning new technologies.",
      "Experienced in developing academic projects focused on inventory management and secure data disposal, with a strong interest in software development, database management, and building practical solutions to real-world problems.",
    ],
    quickFacts: [
      { label: "Degree", value: "B.E. Information Science (2024–2028)" },
      { label: "College", value: "Nagarjuna College of Engineering & Technology" },
      { label: "Location", value: "Bengaluru, India" },
      { label: "Languages", value: "English, Kannada" },
      { label: "Focus Areas", value: "Python, DBMS, Security & Web" },
      { label: "Availability", value: "Open for Opportunities & Projects" },
    ],
  },
  education: [
    {
      degree: "Bachelor of Engineering in Information Science and Engineering",
      institution: "Nagarjuna College of Engineering and Technology",
      period: "2024 – 2028",
      score: "Pursuing",
      location: "Bengaluru, Karnataka",
    },
    {
      degree: "Second PUC",
      institution: "Vision Girls PU College, Anagalapura, Bengaluru",
      period: "2022 – 2024",
      score: "90.83%",
      location: "Bengaluru, Karnataka",
    },
    {
      degree: "Class 10",
      institution: "St. Thomas School, Melur",
      period: "2021 – 2022",
      score: "91.20%",
      location: "Melur, Karnataka",
    },
  ],
  skills: [
    {
      category: "Programming",
      skills: ["Python", "C", "Java", "Algorithms"],
    },
    {
      category: "Web",
      skills: ["HTML"],
    },
    {
      category: "Computer Science",
      skills: [
        "Data Structures and Algorithms (Basics)",
        "DBMS",
        "CRUD Operations",
        "NoSQL",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
  ],
  spokenLanguages: [
    { name: "English", proficiency: "Professional & Academic" },
    { name: "Kannada", proficiency: "Native / Mother Tongue" },
  ],
  projects: [
    {
      id: "inventory-management-system",
      title: "Inventory Management System",
      subtitle: "Data Structures & CRUD",
      description:
        "Developed a data structure-based system to manage inventory records efficiently. Implemented CRUD operations for item addition, updates, deletion, and retrieval. Built to make managing and retrieving inventory records simple and reliable.",
      tags: ["Data Structures", "CRUD Operations", "Algorithms", "Inventory Management"],
      githubUrl: "",
      liveUrl: "",
      highlights: [
        "Developed a data structure-based system to manage inventory records efficiently.",
        "Implemented CRUD operations for item addition, updates, deletion, and retrieval.",
        "Built to make managing and retrieving inventory records simple and reliable.",
      ],
    },
    {
      id: "secure-data-wiping",
      title: "Secure Data Wiping for Trustworthy IT Asset Recycling",
      subtitle: "Security & Safe Data Disposal",
      description:
        "Designed a solution to securely erase sensitive data from IT assets before recycling. Focused on data integrity, security, and safe data disposal practices. Aimed at preventing unauthorized data recovery.",
      tags: ["Data Security", "Data Integrity", "Safe Data Disposal", "IT Asset Recycling"],
      githubUrl: "",
      liveUrl: "",
      highlights: [
        "Designed a solution to securely erase sensitive data from IT assets before recycling.",
        "Focused on data integrity, security, and safe data disposal practices.",
        "Aimed at preventing unauthorized data recovery.",
      ],
    },
    {
      id: "grow-with-gyan",
      title: "Grow with Gyan: AI Context-Recommender System for Intermediate Students",
      subtitle: "AI Recommender & LangChain RAG",
      description:
        "Developed an AI-based system that recommends suitable engineering colleges based on marks, KCET rank, branch preference, and budget.",
      tags: ["AI Recommender", "LangChain", "RAG", "Python", "Data Analysis"],
      githubUrl: "",
      liveUrl: "",
      highlights: [
        "Developed an AI-based system to recommend suitable engineering colleges based on marks, KCET rank, branch preference, and budget.",
        "Used college data such as fees, cut-offs, eligibility, and branch availability for personalized recommendations.",
        "Implemented a RAG-based approach using LangChain for AI-driven recommendations.",
        "Enabled students to compare colleges based on key admission factors.",
      ],
    },
  ],
  certifications: [
    {
      id: "cisco-c-essentials",
      title: "Cisco C Essentials",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      badge: "Cisco",
      description:
        "Mastered fundamental programming constructs in C, including procedural logic, memory concepts, and algorithmic foundations.",
      credentialUrl: "",
    },
    {
      id: "cisco-python-essentials",
      title: "Cisco Python Essentials I",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      badge: "Cisco",
      description:
        "Comprehensive certification covering modern Python programming: syntax, data structures, control flow, and modular problem-solving.",
      credentialUrl: "",
    },
    {
      id: "python-red-hat",
      title: "Python Programming with Red Hat",
      issuer: "Red Hat",
      date: "Certified",
      badge: "Red Hat",
      description:
        "Certified in Python programming, application structuring, and scripting practices for robust software development.",
      credentialUrl: "",
    },
    {
      id: "deloitte-data-analytics",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage)",
      date: "July 2026",
      badge: "Deloitte",
      description:
        "Completed hands-on simulation addressing data analytics methodologies, dataset synthesis, statistical discovery, and insights communication.",
      credentialUrl: "",
    },
  ],
};
