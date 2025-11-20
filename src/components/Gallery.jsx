import { useEffect, useState } from 'react'

const sampleWorks = [
  {
    id: 1,
    title: 'Neon Noir — 2025',
    tags: ['Typography', 'Event'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Analog Dreams',
    tags: ['Photography', 'Minimal'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Future Sound',
    tags: ['Music', 'Poster'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Monochrome Expo',
    tags: ['Exhibition', 'Modern'],
    image: 'https://images.unsplash.com/photo-1750113996972-d8dbce54ee11?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwRXhwb3xlbnwwfDB8fHwxNzYzNjQ2OTYzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Street Stories',
    tags: ['Photo', 'Editorial'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Gradient Motion',
    tags: ['Abstract', 'Color'],
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [items, setItems] = useState(sampleWorks)

  const filters = ['All', 'Photography', 'Typography', 'Minimal', 'Abstract']

  useEffect(() => {
    if (filter === 'All') setItems(sampleWorks)
    else setItems(sampleWorks.filter(w => w.tags.includes(filter)))
  }, [filter])

  return (
    <section id="work" className="relative z-10 bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/60">A curated selection of posters and visual experiments.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-white/15 transition ${filter === f ? 'bg-white text-slate-900' : 'text-white/80 hover:bg-white/10'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <article key={item.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-white">{item.title}</h3>
                <div className="hidden gap-2 sm:flex">
                  {item.tags.slice(0,2).map(t => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center sm:hidden">
          <div className="flex gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-white/15 transition ${filter === f ? 'bg-white text-slate-900' : 'text-white/80 hover:bg-white/10'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
