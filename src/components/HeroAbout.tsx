type HeroAboutProps = {
  name: string;
  headline: string;
  bio: string[];
  location: string;
};

export function HeroAbout({ name, headline, bio, location }: HeroAboutProps) {
  return (
    <section className="space-y-6 border-b border-zinc-200 pb-10">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{location}</p>
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
