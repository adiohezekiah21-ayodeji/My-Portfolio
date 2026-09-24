import { journey } from "./data";

export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Experience</p>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A career built on thoughtful execution.</h1>
      <div className="mt-10 space-y-6">
        {journey.map((item) => (
          <div key={item.year} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
            <div><div className="text-sm uppercase tracking-[0.2em] text-cyan-200">{item.year}</div><h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2></div>
            <div className="mt-3 text-slate-300 md:mt-0">{item.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
