import Link from "next/link";
import { siteContent } from "@/data/site";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-6 py-8 sm:px-10 sm:py-10">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Resume
          </h1>
          <Link href="/#top" className="text-sm text-zinc-600 hover:text-zinc-900">
            Back to home
          </Link>
        </div>

        <div className="h-[75vh] overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <object data={siteContent.resumeHref} type="application/pdf" className="h-full w-full">
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-sm text-zinc-600">
                Resume PDF preview is unavailable. Add a PDF file in `public/resume.pdf` and set
                `resumeHref` in `src/data/site.ts`.
              </p>
              <a
                href={siteContent.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-800 underline"
              >
                Open resume in a new tab
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
}
