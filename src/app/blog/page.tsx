import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm tracking-[0.3em] uppercase font-sans text-[#c8a97e] mb-2">Journal</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#2c1a12] mb-4">Blog</h1>
      <div className="w-12 h-px bg-[#c9837a] mb-10" />

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-[#f0d5ce] pb-10">
            <p className="text-xs tracking-widest uppercase font-sans text-[#c8a97e] mb-2">
              {post.category} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h2 className="text-2xl font-light text-[#2c1a12] mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#c9837a] transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-[#7a5c52] font-light leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs tracking-widest uppercase font-sans text-[#c9837a] hover:underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
