import { Footer } from "@/components/Footer";
import { HeroAbout } from "@/components/HeroAbout";
import { Projects } from "@/components/Projects";
import { ResumeLink } from "@/components/ResumeLink";
import { siteContent } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-6 py-12 sm:px-10 sm:py-16">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <HeroAbout
          name={siteContent.name}
          headline={siteContent.headline}
          bio={siteContent.bio}
          location={siteContent.location}
        />
        <Projects projects={siteContent.projects} />
        <ResumeLink resumeHref={siteContent.resumeHref} />
        <Footer name={siteContent.name} socialLinks={siteContent.socialLinks} />
      </main>
    </div>
  );
}
