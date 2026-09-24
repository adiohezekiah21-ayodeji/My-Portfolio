export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">About</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Building experiences with clarity and excellence.</h1>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>I help founders and teams turn complex ideas into simple, memorable digital experiences.</p>
          <p>Whether I&apos;m designing a brand system, building a landing page, or shaping a product flow, the goal is always the same: make the experience feel effortless and unforgettable.</p>
        </div>
      </div>
    </section>
  );
}
