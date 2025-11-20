export default function About() {
  return (
    <section id="about" className="relative z-10 bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Designing posters with intention</h2>
            <p className="mt-4 text-white/70">
              I help brands, artists, and events communicate with striking posters that balance clarity and attitude. My work explores type systems, grid structures, and photographic storytelling with a minimalist approach.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Event posters, album art, campaign visuals</li>
              <li>• Art direction, typography, layout systems</li>
              <li>• Print-ready files and social cutdowns</li>
            </ul>
          </div>
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-2">
              <img
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1600&auto=format&fit=crop"
                alt="Studio"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
