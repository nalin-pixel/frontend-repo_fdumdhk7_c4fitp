import { useState } from 'react'
import { Menu, X, Instagram, Mail, Palette } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30">
                <Palette size={18} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-white/60">Portfolio</p>
                <p className="-mt-1 text-lg font-semibold text-white">Poster Designer</p>
              </div>
            </a>

            <nav className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-inner shadow-white/10 ring-1 ring-white/20 hover:bg-white/20 transition"
              >
                Let’s work
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:hello@yourname.design"
                  className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white ring-1 ring-white/20"
                >
                  <Mail size={16} /> Email me
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-white/80 hover:bg-white/10"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
