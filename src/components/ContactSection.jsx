import ContactForm from "./ContactForm";
import { socialLinks } from "./data";

export default function ContactSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950/80 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Let&apos;s work together</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Need a portfolio, product, or landing page that feels unforgettable?</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">I partner with founders and teams to design digital experiences that look premium and convert with purpose.</p>
        <ContactForm />
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Find me online</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:text-white">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
