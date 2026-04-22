/*
 * Design: 东方当代美学 - 鲜活韵律
 * Blog: 杂志式博客列表，分类筛选
 * 优化: 面包屑导航、SEO Meta、浮动咨询
 */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SectionTitle from "@/components/SectionTitle";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEOHead from "@/components/SEOHead";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogPosts } from "@/lib/blogData";
import { Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const allCategories = ["全部", ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = activeCategory === "全部"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = blogPosts[0];

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "百慧农业新闻资讯",
    "description": "了解百慧农业最新动态，获取行业前沿资讯和健康饮食知识",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": post.author }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="新闻资讯 - 百慧农业 | 行业动态与健康饮食知识"
        description="了解百慧农业最新动态，获取行业前沿资讯、食材知识和健康饮食建议。涵盖品质保障、食品安全、行业洞察、健康饮食等多个话题。"
        keywords="百慧农业新闻,生鲜配送资讯,食品安全,冷链物流,健康饮食,重庆农业"
        schema={blogListSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0D2818] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/manus-storage/blog-1_840003fa.jpg" alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2818]/80 to-[#0D2818]" />
        <div className="container relative">
          <PageBreadcrumb items={[{ label: "新闻资讯" }]} light />
          <div className="max-w-2xl">
            <span className="text-[#4ADE80] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>NEWS & INSIGHTS</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
              新闻资讯
            </h1>
            <p className="text-lg text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              了解百慧农业最新动态，获取行业前沿资讯和健康饮食知识
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <Link href={`/blog/${featured.slug}`}>
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center cursor-pointer">
              <div className="rounded-2xl overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-[280px] lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-white bg-[#1B8A2E] px-3 py-1 rounded-full" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    置顶推荐
                  </span>
                  <span className="text-xs font-medium text-[#1B8A2E] bg-[#1B8A2E]/5 px-3 py-1 rounded-full" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">{featured.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {featured.title}
                </h2>
                <p className="text-[#6B7280] leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#1B8A2E] font-semibold group-hover:gap-3 transition-all" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  阅读全文 <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category filter + posts */}
      <section className="py-16 lg:py-20 bg-[#FAFAF5]">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {allCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1B8A2E] text-white shadow-md shadow-[#1B8A2E]/20'
                    : 'bg-white text-[#6B7280] hover:text-[#1B8A2E] hover:bg-[#1B8A2E]/5 border border-gray-200'
                }`}
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((post, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article ref={ref}
                    className={`group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-[#1B8A2E]/5 hover:border-[#1B8A2E]/10 transition-all duration-500 hover:-translate-y-1
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-[#1B8A2E] bg-[#1B8A2E]/5 px-3 py-1 rounded-full" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {post.category}
                        </span>
                        <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-[#1A1A1A] mb-2 line-clamp-2 group-hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm text-[#9CA3AF]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}阅读</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
