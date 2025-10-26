"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549887534-1541e9323d17?q=80&w=2000&auto=format&fit=crop"
          alt="Ancient fantasy ruins"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(800px 300px at 60% 0%, rgba(223,78,31,0.18), rgba(0,0,0,0))'}} />
      </div>
      <Container>
        <div className="relative z-10 grid gap-8 md:grid-cols-12 items-center py-24">
          <div className="md:col-span-7 space-y-6">
            <h1 className="section-title font-display tracking-wider">
              <span className="text-white">Elders of </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ember-400 to-ember-600">Emberfall</span>
            </h1>
            <p className="section-subtitle">
              A fantasy RPG roguelite. Descend through shifting dungeons, conquer ruthless bosses,
              and forge legendary builds from arcane relics. Every run tells a story.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#wishlist" className="btn-primary">Wishlist Now</Link>
              <Link href="#trailer" className="btn-ghost">Watch Trailer</Link>
            </div>
            <ul className="flex gap-6 text-white/60 pt-4">
              <li>Procedural Dungeons</li>
              <li>Buildcrafting</li>
              <li>Permadeath</li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="relative rounded-xl border border-white/15 bg-night-800/60 backdrop-blur p-3 shadow-glow">
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1607968565040-2894a43bc4b4?q=80&w=1200&auto=format&fit=crop"
                  alt="Mystic character art"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-display text-xl">Arcanist of the Veil</h3>
                  <p className="text-white/70 text-sm">Channel ember sigils to devastate foes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Features() {
  const cards = [
    {
      title: 'Endless Dungeons',
      desc: 'Hand-authored rooms stitched by procedural magic. No two descents are alike.',
      img: 'https://images.unsplash.com/photo-1522192787467-9ac6a7b2753a?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Buildcrafting',
      desc: 'Synergize relics, skills, and blessings to define your run-defining power curve.',
      img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Bosses of Legend',
      desc: 'Face the Twelve Elders—each a unique, punishing encounter with learnable patterns.',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop'
    }
  ];

  return (
    <section className="relative py-24" id="features">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Forge Your Legend</h2>
          <p className="section-subtitle mx-auto mt-3">Risk, reward, and relentless mastery. True roguelite progression with meaningful unlocks.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-night-800/50">
              <div className="relative h-52">
                <Image src={c.img} fill alt={c.title} className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="text-white/70 mt-1">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  return (
    <section className="relative py-24" id="trailer">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-night-800/60">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Reveal Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="space-y-4 self-center">
            <h2 className="section-title">A World in Ruin</h2>
            <p className="section-subtitle">Discover the secrets of Emberfall. Narrative events, branching choices, and lore-rich artifacts await.</p>
            <ul className="text-white/80 grid gap-2">
              <li>• High-impact combat with readable telegraphs</li>
              <li>• Permanent metaprogression, temporary run power spikes</li>
              <li>• Daily runs and leaderboards</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24" id="wishlist">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-night-800 to-night-700 p-8 md:p-12">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-ember-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-20 w-[28rem] h-[28rem] rounded-full bg-ember-400/10 blur-3xl" />
          <div className="relative">
            <h2 className="section-title">Summon Your Courage</h2>
            <p className="section-subtitle mt-3">Join the council. Get updates, alpha access, and rare in-game cosmetics.</p>
            <form className="mt-6 grid gap-3 sm:flex sm:items-center" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="you@realm.com" className="w-full sm:w-auto flex-1 rounded-md bg-white/5 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-ember-500 placeholder-white/40" />
              <button className="btn-primary" type="submit">Join the Council</button>
            </form>
            <p className="text-white/50 text-sm mt-2">We value your time. No spam, ever.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50">© {new Date().getFullYear()} Emberfall Studio</p>
          <nav className="flex gap-6">
            <Link href="#features" className="text-white/70 hover:text-white">Features</Link>
            <Link href="#trailer" className="text-white/70 hover:text-white">Trailer</Link>
            <Link href="#wishlist" className="text-white/70 hover:text-white">Wishlist</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
