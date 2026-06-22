export default function NonprofitPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm tracking-[0.3em] uppercase font-sans text-[#c8a97e] mb-2">Giving Back</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#2c1a12] mb-4">Nonprofit</h1>
      <div className="w-12 h-px bg-[#c9837a] mb-10" />

      {/* Mission */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-4">Our Mission</h2>
        <p className="text-lg text-[#7a5c52] font-light leading-relaxed mb-4">
          Add your nonprofit name and mission statement here. What does your organization do?
          Who does it serve? What change are you working toward?
        </p>
        <p className="text-lg text-[#7a5c52] font-light leading-relaxed">
          Share the story of why you started it and what impact you&apos;ve made so far.
        </p>
      </section>

      {/* Impact numbers */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { stat: "0+", label: "People Helped" },
          { stat: "0+", label: "Events Hosted" },
          { stat: "0+", label: "Volunteers" },
        ].map((item, i) => (
          <div key={i} className="text-center border border-[#f0d5ce] p-8">
            <p className="text-4xl font-light text-[#c9837a] mb-2">{item.stat}</p>
            <p className="text-sm tracking-widest uppercase font-sans text-[#7a5c52]">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Get Involved */}
      <section className="bg-[#f0d5ce] p-8 mb-16">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-4">Get Involved</h2>
        <p className="text-[#7a5c52] font-light leading-relaxed mb-6">
          Want to volunteer, donate, or partner with us? We&apos;d love to have you join our community.
        </p>
        <a
          href="mailto:hello@chloedietz.com"
          className="inline-block px-8 py-3 bg-[#c9837a] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#b8726a] transition-colors"
        >
          Contact Us
        </a>
      </section>

      {/* Donate */}
      <section className="border border-[#f0d5ce] p-8 max-w-md">
        <h2 className="text-sm tracking-[0.3em] uppercase font-sans text-[#2c1a12] mb-4">Donate</h2>
        <p className="text-[#7a5c52] font-light leading-relaxed mb-4">
          Your support makes our work possible. Add a donation link or embed a form here.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border border-[#c9837a] text-[#c9837a] text-sm tracking-widest uppercase font-sans hover:bg-[#f0d5ce] transition-colors"
        >
          Donate Now
        </a>
      </section>
    </div>
  );
}
