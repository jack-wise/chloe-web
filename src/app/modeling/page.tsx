export default function ModelingPage() {
  // Replace these YouTube embed IDs with your actual video IDs
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Campaign Title" },
    { id: "dQw4w9WgXcQ", title: "Editorial Shoot" },
    { id: "dQw4w9WgXcQ", title: "Runway Show" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-sm tracking-[0.3em] uppercase font-sans text-[#c8a97e] mb-2">Portfolio</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#2c1a12] mb-4">Modeling</h1>
      <div className="w-12 h-px bg-[#c9837a] mb-10" />

      <p className="max-w-xl text-lg text-[#7a5c52] font-light leading-relaxed mb-16">
        A collection of my editorial, runway, and commercial work. For bookings and inquiries,
        reach out via the contact info below.
      </p>

      {/* Videos grid */}
      <section className="mb-16">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-8">Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i}>
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2 text-sm font-sans text-[#7a5c52] tracking-wide">{v.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border border-[#f0d5ce] p-8 max-w-md">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-4">Bookings &amp; Inquiries</h2>
        <p className="text-[#7a5c52] font-light mb-4">
          Interested in working together? I&apos;d love to hear from you.
        </p>
        <a
          href="mailto:hello@chloedietz.com"
          className="text-sm tracking-widest uppercase font-sans text-[#c9837a] hover:underline"
        >
          hello@chloedietz.com
        </a>
      </section>
    </div>
  );
}
