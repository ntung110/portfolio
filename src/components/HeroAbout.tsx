import Link from "next/link";

type HeroAboutProps = {
  name: string;
  headline: string;
  bio: string[];
  location: string;
};

export function HeroAbout({ name, headline, bio, location }: HeroAboutProps) {
  return (
    <section className="space-y-6 border-b border-zinc-200 pb-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{location}</p>
        <nav className="flex items-center gap-5 tracking-[0.04em]">
          <Link href="/#top" className="text-sm font-medium text-zinc-700 hover:text-zinc-950">
            Home
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
          >
            Projects
          </Link>
          <Link href="/resume" className="text-sm font-medium text-zinc-700 hover:text-zinc-950">
            Resume
          </Link>
        </nav>
      </div>
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {name}
        </h1>
        <p className="text-lg text-zinc-700 sm:text-xl">{headline}</p>
      </div>
      <div className="max-w-2xl space-y-4 text-base leading-8 text-zinc-600">
        {bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
