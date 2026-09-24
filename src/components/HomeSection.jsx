import Link from "next/link";
import AnimatedStat from "./AnimatedStat";
import { services, skills, stats } from "./data";

export default function HomeSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_35%)]" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Available for freelance work</span>
          <div className="mb-4 flex items-center gap-3 text-sm text-slate-300"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />Open to product design and front-end roles</div>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">I design bold digital experiences that feel premium.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">I&apos;m Hezekiah, a product designer and front-end developer crafting visually rich, conversion-focused experiences for brands and startups that want to stand out.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/work" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300">View my work</Link>
            <Link href="/about" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">About me</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">{services.map((service) => <span key={service} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">{service}</span>)}</div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">{stats.map((item) => <AnimatedStat key={item.label} {...item} />)}</div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="hero-card relative min-h-[500px] w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5 shadow-[0_40px_120px_rgba(14,165,233,0.22)]">
            <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative flex h-full flex-col items-center justify-center rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
              <div className="mb-5 flex w-full items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-300"><span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Portfolio</span><span className="text-cyan-200">Creative dev</span></div>
              <div className="relative mb-6 flex h-52 w-52 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-300/70 bg-[#0f172a] shadow-[0_0_35px_rgba(34,211,238,0.3)]"><img src="/images/profile-picture.png" alt="Hezekiah profile" className="h-full w-full scale-[1.02] translate-y-3 translate-x-2 object-contain object-center" /></div>
              <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-center"><p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Featured</p><h2 className="mt-3 text-2xl font-bold text-white">Hezekiah</h2><p className="mt-2 text-sm leading-6 text-slate-300">Product designer and front-end developer building premium digital experiences.</p></div>
              <div className="mt-5 grid w-full grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-xs uppercase tracking-[0.18em] text-slate-400">Role</div><div className="mt-2 text-base font-semibold text-white">Developer</div></div><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-xs uppercase tracking-[0.18em] text-slate-400">Focus</div><div className="mt-2 text-base font-semibold text-white">Front-end</div></div></div>
              <div className="mt-5 flex flex-wrap justify-center gap-2">{skills.slice(0, 5).map((skill) => <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">{skill}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
