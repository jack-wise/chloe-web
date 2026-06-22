export default function PageantPage() {
  const titles = [
    { year: "2024", title: "Your Title Here", org: "Organization Name" },
    { year: "2023", title: "Your Title Here", org: "Organization Name" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm tracking-[0.3em] uppercase font-sans text-[#c8a97e] mb-2">My Journey</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#2c1a12] mb-4">Pageant</h1>
      <div className="w-12 h-px bg-[#c9837a] mb-10" />

      {/* Bio */}
      <section className="mb-16 max-w-2xl">
        <p className="text-lg text-[#7a5c52] font-light leading-relaxed mb-4">
          Add your pageant bio here — your story, your platform, what drives you to compete,
          and what you hope to achieve through pageantry.
        </p>
        <p className="text-lg text-[#7a5c52] font-light leading-relaxed">
          Share your platform issue and why it matters to you.
        </p>
      </section>

      {/* Titles */}
      <section className="mb-16">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-8">Titles &amp; Awards</h2>
        <div className="space-y-4">
          {titles.map((t, i) => (
            <div key={i} className="flex items-start gap-6 border-b border-[#f0d5ce] pb-4">
              <span className="text-[#c9837a] font-sans text-sm w-12 shrink-0">{t.year}</span>
              <div>
                <p className="font-light text-[#2c1a12]">{t.title}</p>
                <p className="text-sm text-[#9e7b70] font-sans">{t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section className="bg-[#f0d5ce] p-8">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-4">My Platform</h2>
        <p className="text-[#7a5c52] font-light leading-relaxed">
          Describe your platform here — what cause you champion, how you raise awareness,
          and what actions you take to make a difference in your community.
        </p>
      </section>
    </div>
  );
}
