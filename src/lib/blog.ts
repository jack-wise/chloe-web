export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
};

// Add your blog posts here. Later you can move these to markdown files or a CMS.
export const posts: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to My Blog",
    date: "2026-06-22",
    category: "Life",
    excerpt: "I'm so excited to finally have a space to share my thoughts, experiences, and journey with you all.",
    content: `I'm so excited to finally have a space to share my thoughts, experiences, and journey with you all.

Here I'll be writing about pageantry, modeling, my nonprofit work, fashion, wellness, and everything in between.

Stay tuned for more posts coming soon!`,
  },
];
