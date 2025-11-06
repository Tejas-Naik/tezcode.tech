export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export const features = [
  {
    title: "Daily Live Coding",
    description: "Real-time doubt clearing, every session.",
  },
  {
    title: "Project-First",
    description: "Build quick, portfolio-ready mini projects daily.",
  },
  {
    title: "Mentorship & Support",
    description: "Immediate feedback and 24/7 community help.",
  },
];

export const crashCourseSnapshot = [
  {
    day: "Day 1",
    topic: "Python Basics & Project",
    details: [
      "Printing, inputting, string manipulation",
      "PROJECT: BAND NAME GENERATOR",
    ],
    status: "locked",
    isProject: true,
  },
  {
    day: "Day 2",
    topic: "Data Types & Operations",
    details: [
      "Type Error, Checking and Conversion",
      "Mathematical Operations, Number Manipulation",
      "PROJECT: Tip Calculator",
    ],
    status: "locked",
    isProject: true,
  },
  {
    day: "Day 3",
    topic: "Conditional Logic & Project",
    details: [
      "If Else, Modulo, Nesting and Elif, Multiple Ifs",
      "Python Pizza (Challenge), Logical Operators",
      "PROJECT: Treasure Island",
    ],
    status: "locked",
    isProject: true,
  },
  {
    day: "Day 4",
    topic: "Randomness, Lists & Project",
    details: [
      "Random Module, Lists, Banker Roulette, IndexError",
      "PROJECT: Rock Paper Scissors",
    ],
    status: "locked",
    isProject: true,
  },
  {
    day: "Day 5",
    topic: "Loops & Project",
    details: [
      "For Loops, Highest Score, For Loops with Range",
      "PROJECT: Password Generator",
    ],
    status: "locked",
    isProject: true,
  },
  {
    day: "Day 6",
    topic: "Functions",
    details: ["Functions (etask.py, solution.py)"],
    status: "locked",
    isProject: false,
  },
  {
    day: "Day 7",
    topic: "Capstone Project",
    details: ["PROJECT: Hangman GAME"],
    status: "locked",
    isProject: true,
  },
];

export const faq = [
  {
    question: "How long are classes?",
    answer: "60–90 minutes live daily. Recordings available.",
  },
  {
    question: "Can I try before committing?",
    answer: "Yes — this $49 trial is the way to try.",
  },
  {
    question: "What if it’s not for me?",
    answer: "Full refund within 7 days — no questions.",
  },
  {
    question: "What software do I need?",
    answer:
      "A code editor (VS Code/PyCharm) & modern browser. We provide setup guides.",
  },
  {
    question: "Do you help with college assignments?",
    answer:
      "Yes — live help & automation techniques to solve assignment tasks.",
  },
];

export const projects = [
  {
    title: "Automated Mad Libs Generator",
    description: "A fun game that takes user input to generate a funny story.",
    image: "/images/projects/blog.png",
    tags: ["Python", "Strings", "Input/Output"],
    screenshots: [
      "/images/projects/blog.png",
      "/images/projects/blog.png",
      "/images/projects/blog.png",
    ],
  },
  {
    title: "Contact Book Application",
    description: "A command-line application to manage your contacts.",
    image: "/images/projects/dataentry.jpeg",
    tags: ["Python", "JSON", "File I/O"],
    screenshots: [
      "/images/projects/dataentry.jpeg",
      "/images/projects/dataentry.jpeg",
      "/images/projects/dataentry.jpeg",
    ],
  },
  {
    title: "Simple Role-Playing Game (RPG)",
    description: "A text-based adventure game with characters, and a story.",
    image: "/images/projects/movies.png",
    tags: ["Python", "OOP", "Classes"],
    screenshots: [
      "/images/projects/movies.png",
      "/images/projects/movies.png",
      "/images/projects/movies.png",
    ],
  },
  {
    title: "Automated Job Application Bot",
    description: "A bot that automatically applies for jobs on your behalf.",
    image: "/images/projects/password.png",
    tags: ["Python", "Selenium", "Web Scraping"],
    screenshots: [
      "/images/projects/password.png",
      "/images/projects/password.png",
      "/images/projects/password.png",
    ],
  },
];

export const testimonials = [
  {
    quote: "From failing assignments to acing labs — saved my semester.",
    author: "Aaron",
    metric: "Built 7 projects",
    image: "https://randomuser.me/api/portraits/men/42.jpg", // Placeholder
  },
  {
    quote:
      "The live classes were a game-changer. I finally understood concepts my professor couldn't explain.",
    author: "Priya S.",
    metric: "GPA: 2.1 → 3.5",
    image: "https://randomuser.me/api/portraits/women/45.jpg", // Placeholder
  },
  {
    quote:
      "I was completely lost. In 7 days, I not only caught up but got ahead of my class.",
    author: "David K.",
    metric: "Passed midterm with 92%",
    image: "https://randomuser.me/api/portraits/men/46.jpg", // Placeholder
  },
];
