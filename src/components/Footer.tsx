type FooterProps = {
  name: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
};

export function Footer({ name, socialLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-3 pt-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <p>
        {year} {name}
      </p>
      <nav className="flex items-center gap-4">
        {socialLinks.github ? (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-800"
          >
            GitHub
          </a>
        ) : null}
        {socialLinks.linkedin ? (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-800"
          >
            LinkedIn
          </a>
        ) : null}
        {socialLinks.email ? (
          <a href={socialLinks.email} className="transition-colors hover:text-zinc-800">
            Email
          </a>
        ) : null}
      </nav>
    </footer>
  );
}
