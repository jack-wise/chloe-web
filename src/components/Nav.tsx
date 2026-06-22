"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/pageant", label: "Pageant" },
  { href: "/modeling", label: "Modeling" },
  { href: "/nonprofit", label: "Nonprofit" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fdf8f5] border-b border-[#f0d5ce]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-widest text-[#c9837a] font-light uppercase">
          Chloe Dietz
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-sans text-[#2c1a12]">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-[#c9837a] transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#c9837a]" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm tracking-widest uppercase font-sans">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-[#c9837a] transition-colors" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
