import Link from "next/link";

const sections = [
  {
    href: "/pageant",
    title: "Pageant",
    description: "Titleholder, advocate, and competitor. Explore my pageant journey, titles, and platform.",
    icon: "👑",
  },
  {
    href: "/modeling",
    title: "Modeling",
    description: "Editorial, runway, and commercial work. Watch my latest videos and campaigns.",
    icon: "✨",
  },
  {
    href: "/nonprofit",
    title: "Nonprofit",
    description: "My mission to give back. Learn about the cause I'm passionate about and how to get involved.",
    icon: "🌸",
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Thoughts on pageantry, wellness, fashion, and life behind the crown.",
    icon: "📝",
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/chloebdietz/" },
  { label: "TikTok", href: "https://tiktok.com/@chloe.dietz" },
  { label: "YouTube", href: "https://youtube.com/@chloe.dietz" },
  { label: "Facebook", href: "https://facebook.com/chloe.dietz" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <p className="text-sm tracking-[0.3em] uppercase font-sans text-[#c8a97e] mb-4">Welcome to my world</p>
        <h1 className="text-5xl md:text-7xl font-light tracking-wide text-[#2c1a12] mb-6">
          Chloe Dietz
        </h1>
        <div className="w-16 h-px bg-[#c9837a] mx-auto mb-6" />
        <p className="max-w-xl text-lg text-[#7a5c52] font-light leading-relaxed">
          Pageant titleholder · Model · Nonprofit founder · Content creator
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link
            href="/pageant"
            className="px-8 py-3 bg-[#c9837a] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#b8726a] transition-colors"
          >
            My Story
          </Link>
          <Link
            href="/nonprofit"
            className="px-8 py-3 border border-[#c9837a] text-[#c9837a] text-sm tracking-widest uppercase font-sans hover:bg-[#f0d5ce] transition-colors"
          >
            My Cause
          </Link>
        </div>
      </section>

      {/* Sections grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group border border-[#f0d5ce] p-8 hover:border-[#c9837a] hover:bg-[#fdf0ec] transition-all"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h2 className="text-xl tracking-widest uppercase font-sans text-[#2c1a12] mb-3 group-hover:text-[#c9837a] transition-colors">
              {s.title}
            </h2>
            <p className="text-[#7a5c52] font-light leading-relaxed">{s.description}</p>
            <span className="mt-4 inline-block text-xs tracking-widest uppercase font-sans text-[#c9837a]">
              Explore →
            </span>
          </Link>
        ))}
      </section>

      {/* Socials banner */}
      <section className="bg-[#f0d5ce] py-12 text-center">
        <p className="text-sm tracking-[0.3em] uppercase font-sans text-[#7a5c52] mb-6">Follow Along</p>
        <div className="flex justify-center gap-8 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase font-sans text-[#2c1a12] hover:text-[#c9837a] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
