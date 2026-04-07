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
  name: "Your Name",
  headline: "Full-Stack Developer",
  bio: [
    "I build fast, thoughtful web applications with a focus on clean UX and maintainable code.",
    "I enjoy turning ideas into simple products that are reliable, accessible, and easy to evolve.",
  ],
  location: "Based in Your City",
  resumeHref: "https://example.com/resume.pdf",
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-handle",
    email: "mailto:you@example.com",
  },
  projects: [
    {
      title: "Project One",
      description:
        "A concise description of what this project does, why it matters, and your role in it.",
      href: "https://example.com/project-one",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Project Two",
      description:
        "An internal tool or product feature that improved workflow, speed, or reliability.",
      href: "https://example.com/project-two",
      technologies: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Project Three",
      description:
        "A side project with a clear user need, polished UI, and practical engineering trade-offs.",
      href: "https://example.com/project-three",
      technologies: ["Next.js", "Vercel", "Prisma"],
    },
  ],
};
