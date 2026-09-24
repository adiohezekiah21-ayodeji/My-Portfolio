import { projects } from "./data";

export default function WorkSection() {
  return (
    <section className="bg-slate-900/60 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Selected work</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Projects that blend strategy and beauty.</h1>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="project-card group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-950">
              <div className="project-image mb-5 flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{project.type}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
