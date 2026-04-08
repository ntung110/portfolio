export type Project = {
  title: string;
  description: string;
  href: string;
  technologies?: string[];
};

export type SiteContent = {
  name: string;
  headline: string;
  bio: string[];
  location: string;
  resumeHref: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  projects: Project[];
};

export const siteContent: SiteContent = {
  name: "Tung Nguyen",
  headline: "Machine Learning Engineer",
  bio: [
    "I am a Machine Learning Engineer with a passion for building scalable and efficient machine learning models.",
    "I enjoy turning ideas into simple products that are reliable, accessible, and easy to evolve.",
  ],
  location: "Toronto, Canada",
  resumeHref: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/ntung110",
    linkedin: "https://www.linkedin.com/in/ntung110/",
    email: "mailto:ngtung110@gmail.com",
  },
  projects: [
    // {
    //   title: "Project One",
    //   description:
    //     "A concise description of what this project does, why it matters, and your role in it.",
    //   href: "https://example.com/project-one",
    //   technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    // }
  ],
};
