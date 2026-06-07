import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { BlogListClient } from "@/components/blog/blog-list-client";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog — Artur Michałek",
};

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <BlogListClient posts={blogPosts} />
      <Footer />
    </div>
  );
}
