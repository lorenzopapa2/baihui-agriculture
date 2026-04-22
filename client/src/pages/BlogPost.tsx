/*
 * Design: 东方当代美学 - 鲜活韵律
 * BlogPost: 博客文章详情页，SEO友好的文章结构
 */
import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost, getRelatedPosts } from "@/lib/blogData";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug || "");
  const related = getRelatedPosts(params.slug || "", 3);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>文章未找到</h1>
          <Link href="/blog">
            <span className="text-[#1B8A2E] font-medium hover:underline" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>返回博客列表</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0D2818] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2818]/80 to-[#0D2818]" />
        <div className="container relative max-w-4xl mx-auto">
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              <ArrowLeft className="w-4 h-4" /> 返回资讯列表
            </span>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-[#4ADE80] bg-[#4ADE80]/10 px-3 py-1 rounded-full" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}阅读</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden mb-12 -mt-12 relative z-10 shadow-2xl shadow-[#1B8A2E]/10">
            <img src={post.image} alt={post.title} className="w-full h-[300px] lg:h-[450px] object-cover" />
          </div>

          {/* Article body */}
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-[#1A1A1A]
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#4B5563] prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-[#1B8A2E] prose-a:no-underline hover:prose-a:underline"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & tags */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6B7280]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>标签：</span>
              <span className="text-xs bg-[#1B8A2E]/5 text-[#1B8A2E] px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-xs bg-gray-100 text-[#6B7280] px-3 py-1 rounded-full">生鲜配送</span>
              <span className="text-xs bg-gray-100 text-[#6B7280] px-3 py-1 rounded-full">百慧农业</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 lg:py-20 bg-[#FAFAF5]">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            相关推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rPost) => (
              <Link key={rPost.slug} href={`/blog/${rPost.slug}`}>
                <article className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-[#1B8A2E]/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-[#1B8A2E] bg-[#1B8A2E]/5 px-2 py-0.5 rounded-full" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {rPost.category}
                    </span>
                    <h3 className="text-base font-bold text-[#1A1A1A] mt-2 line-clamp-2 group-hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      {rPost.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
