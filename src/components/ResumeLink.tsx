import Link from "next/link";

export function ResumeLink() {
  return (
    <section className="space-y-3 border-b border-zinc-200 pb-10">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Resume</h2>
      <p className="max-w-2xl text-base leading-8 text-zinc-600">
        Interested in my background and experience? You can view or download my resume here.
      </p>
      <Link
        href="/resume"
        className="inline-flex items-center text-base font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-600"
      >
        Open resume PDF
      </Link>
    </section>
  );
}
