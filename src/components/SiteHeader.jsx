import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.22em] text-white">
          HEZEKIAH
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/work" className="transition hover:text-white">Work</Link>
          <Link href="/experience" className="transition hover:text-white">Experience</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </div>
        <Link
          href="/contact"
          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
