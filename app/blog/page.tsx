import AllBlogPosts from "../components/blog/blogPosts";
import BlogHeader from "../components/blog/heading";
import RecentBlogPosts from "../components/blog/recentBlog";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogHeader />
      <RecentBlogPosts/>
      <AllBlogPosts/>

    </main>
  );
}