import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-[var(--background)]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-4xl items-center gap-6 px-6 py-4 sm:px-10">
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
    </header>
  );
}
