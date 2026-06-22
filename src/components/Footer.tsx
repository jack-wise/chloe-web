export default function Footer() {
  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/chloebdietz/" },
    { label: "TikTok", href: "https://tiktok.com/@chloe.dietz" },
    { label: "YouTube", href: "https://youtube.com/@chloe.dietz" },
    { label: "Facebook", href: "https://facebook.com/chloe.dietz" },
  ];

  return (
    <footer className="border-t border-[#f0d5ce] mt-20 py-10 text-center">
      <p className="text-2xl tracking-widest text-[#c9837a] font-light uppercase mb-6">Chloe Dietz</p>
      <div className="flex justify-center gap-8 mb-6">
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
      <p className="text-xs text-[#9e7b70] font-sans">© {new Date().getFullYear()} Chloe Dietz. All rights reserved.</p>
    </footer>
  );
}
