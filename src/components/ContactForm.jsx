"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:techhubsolutionshz@gmail.com?subject=${subject}&body=${body}`;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Name
          <input required name="name" value={form.name} onChange={handleChange} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/10" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Email
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/10" placeholder="you@example.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Message
        <textarea required name="message" value={form.message} onChange={handleChange} rows="4" className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/10" placeholder="Tell me a little about your project" />
      </label>
      <button type="submit" className="w-fit rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
        Send message
      </button>
    </form>
  );
}
