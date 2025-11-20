import { Mail, Instagram, Download } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s collaborate</h2>
              <p className="mt-3 text-white/70">
                I’m available for select freelance projects, collaborations, and speaking. Send a brief and I’ll reply within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@yourname.design" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-900">
                  <Mail size={16} /> Email
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15">
                  <Download size={16} /> Download Portfolio PDF
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@email.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Project details</label>
                <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell me about your project" />
              </div>
              <button type="button" className="w-full rounded-lg bg-white py-2 font-semibold text-slate-900">Send</button>
            </form>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-white/50">© {new Date().getFullYear()} Your Name — Poster Designer</p>
      </div>
    </section>
  )
}
