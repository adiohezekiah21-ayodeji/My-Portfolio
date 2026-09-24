"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationLinks = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" onClick={closeMenu} className="text-lg font-semibold tracking-[0.22em] text-white">
          HEZEKIAH
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">{link.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950">Let&apos;s talk</Link>
          <button type="button" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan-300/60 hover:bg-cyan-400/10 md:hidden">
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className={`${isMenuOpen ? "grid" : "hidden"} border-t border-white/10 px-6 py-4 md:hidden`}>
        <div className="grid gap-2 text-sm text-slate-300">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white">{link.label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}
