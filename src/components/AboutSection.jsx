import { learningSkills, skills } from "./data";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">About</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Building experiences with clarity and excellence.</h1>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>I build responsive web interfaces that are both functional and aesthetically pleasing.</p>
          <p>Whether I&apos;m developing my skills in React and Next.js or exploring AI-assisted development to build, test and improve web applications while strengthening my understanding of the underlying code, the goal is always the same: make the experience feel effortless and unforgettable.</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-800/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.5)]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Core skills</p>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">Built</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-slate-900/90 to-slate-900 p-6 shadow-[0_24px_80px_rgba(34,211,238,0.12)]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Currently learning</p>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" aria-label="Learning" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {learningSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-100 shadow-[inset_0_1px_0_rgba(34,211,238,0.2)]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
