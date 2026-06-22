import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-xs tracking-widest uppercase font-sans text-[#c9837a] hover:underline mb-10 inline-block">
        ← Back to Blog
      </Link>

      <p className="text-xs tracking-widest uppercase font-sans text-[#c8a97e] mb-2">
        {post.category} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="text-4xl font-light text-[#2c1a12] mb-4">{post.title}</h1>
      <div className="w-12 h-px bg-[#c9837a] mb-10" />

      <div className="prose prose-stone max-w-none">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i} className="text-[#7a5c52] font-light leading-relaxed mb-6">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
