const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "UI Design",
  "Brand Systems",
];

const services = ["Brand Design", "Front-end Development", "Landing Pages"];

const stats = [
  { value: "4.5+", label: "Stars" },
  { value: "10+", label: "Projects" },
  { value: "96%", label: "Satisfaction" },
];

const projects = [
  {
    title: "Vitae Health",
    type: "Brand & Digital Experience",
    description:
      "A premium healthcare brand and digital experience.",
    stack: ["HTML", "CSS", "Strategy"],
    image: "/images/Vitae%20Health.png",
  },
  {
    title: "Recipe Finder",
    type: "Web Application",
    description:
      "A web application that helps users discover and save recipes based on their dietary preferences.",
    stack: ["React", "Research", "Dashboard"],
    image: "/images/Recipe%20finder.png",
  },
  {
    title: "Ember Bean",
    type: "E-commerce Experience",
    description:
      "An e-commerce platform that focuses on creating seamless shopping experiences with a strong emphasis on user engagement and conversion.",
    stack: ["Commerce", "Branding", "Conversion"],
    image: "/images/Ember%20Bean.png",
  },
];

const journey = [
  
  {
    year: "2026",
    title: "Intern, Front-end Development",
    company: "Bluehouse Technologies",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.22em] text-white">
            HEZEKIAH
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_35%)]" />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <span className="mb-6 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Available for freelance work
              </span>

              <div className="mb-4 flex items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Open to product design and front-end roles
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                I design bold digital experiences that feel premium.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I&apos;m Hezekiah, a product designer and front-end developer crafting visually rich,
                conversion-focused experiences for brands and startups that want to stand out.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  View my work
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  About me
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="hero-card relative min-h-[500px] w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5 shadow-[0_40px_120px_rgba(14,165,233,0.22)]">
                <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="relative flex h-full flex-col items-center justify-center rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
                  <div className="mb-5 flex w-full items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-300">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Portfolio</span>
                    <span className="text-cyan-200">Creative dev</span>
                  </div>

                  <div className="relative mb-6 flex h-52 w-52 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-300/70 bg-[#0f172a] shadow-[0_0_35px_rgba(34,211,238,0.3)]">
                    <img
                      src="/images/profile-picture.png"
                      alt="Hezekiah profile"
                      className="h-full w-full scale-[1.02] translate-y-3 translate-x-2 object-contain object-center"
                    />
                  </div>

                  <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Featured</p>
                    <h2 className="mt-3 text-2xl font-bold text-white">Hezekiah</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Product designer and front-end developer building premium digital experiences.
                    </p>
                  </div>

                  <div className="mt-5 grid w-full grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Role</div>
                      <div className="mt-2 text-base font-semibold text-white">Developer</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Focus</div>
                      <div className="mt-2 text-base font-semibold text-white">Front-end</div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">About</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Building experiences with clarity and excellence.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                I help founders and teams turn complex ideas into simple, memorable digital experiences.
                
              </p>
              <p>
                Whether I&apos;m designing a brand system, building a landing page, or shaping a product flow,
                the goal is always the same: make the experience feel effortless and unforgettable.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Selected work</p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Projects that blend strategy and beauty.</h2>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="project-card group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-950"
                >
                  <div className="project-image mb-5 flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{project.type}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Experience</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A career built on thoughtful execution.</h2>

          <div className="mt-10 space-y-6">
            {journey.map((item) => (
              <div key={item.year} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">{item.year}</div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="mt-3 text-slate-300 md:mt-0">{item.company}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-950/80 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Let&apos;s work together</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Need a portfolio, product, or landing page that feels unforgettable?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I partner with founders and teams to design digital experiences that look premium and convert with purpose.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@alexportfolio.dev"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                techhubsolutionshz@gmail.com
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
