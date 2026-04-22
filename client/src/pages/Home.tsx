/*
 * Design: 东方当代美学 - 鲜活韵律
 * Home: 全屏Hero沉浸式 → Z字型内容流 → 浮动卡片 → 数字印章 → 博客杂志
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { ArrowRight, Truck, ShieldCheck, Leaf, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_42173f11.jpg"
          alt="百慧农业田间配送"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2818]/90 via-[#0D2818]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/40 via-transparent to-[#0D2818]/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              重庆专业生鲜配送服务商
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            新鲜直达
            <br />
            <span className="text-[#4ADE80]">品质</span>守护
          </h1>

          <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            百慧农业专注农副产品生鲜配送，全程冷链物流，从田间到餐桌，为您的每一餐保驾护航。
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B8A2E] text-white font-semibold rounded-lg hover:bg-[#0D4F1C] transition-all duration-300 shadow-xl shadow-[#1B8A2E]/25 hover:shadow-2xl hover:shadow-[#1B8A2E]/35 hover:-translate-y-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                免费咨询
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/products">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                查看产品
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Leaf, title: "源头直采", desc: "与优质农业基地直接合作，确保食材新鲜度和品质" },
    { icon: Truck, title: "冷链配送", desc: "全程冷链物流，智能温控，锁住每一份新鲜" },
    { icon: ShieldCheck, title: "品质保障", desc: "多层次质量检测体系，食品安全全程可追溯" },
    { icon: Clock, title: "准时送达", desc: "凌晨配送团队，确保客户营业前收到新鲜食材" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B8A2E]/3 rounded-full blur-[120px]" />

      <div className="container relative">
        <SectionTitle
          subtitle="OUR ADVANTAGES"
          title="为什么选择百慧农业"
          description="我们以专业的服务和严格的品质标准，为客户提供安全、新鲜、便捷的食材配送体验"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={feat.title}
                ref={ref}
                className={`group p-8 rounded-2xl bg-[#FAFAF5] border border-[#1B8A2E]/5 hover:bg-white hover:shadow-xl hover:shadow-[#1B8A2E]/5 hover:border-[#1B8A2E]/10 transition-all duration-500 hover:-translate-y-1
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#1B8A2E]/8 flex items-center justify-center mb-6 group-hover:bg-[#1B8A2E]/12 transition-colors">
                  <feat.icon className="w-7 h-7 text-[#1B8A2E]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {feat.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B8A2E]/3 rounded-full blur-[100px]" />

      <div className="container relative">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1B8A2E]/10">
              <img
                src="/manus-storage/delivery-team_9c9595d6.jpg"
                alt="百慧农业配送团队"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-[#1B8A2E]/10">
              <div className="text-3xl font-bold text-[#1B8A2E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>10+</div>
              <div className="text-sm text-[#6B7280] mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>年行业经验</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <SectionTitle
              subtitle="ABOUT US"
              title="百慧农业，值得信赖"
              align="left"
            />
            <div className="space-y-4 text-[#4B5563] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              <p>
                重庆百慧农业发展有限公司是一家专注于农副产品生鲜配送的现代化企业。公司位于重庆市，依托西南地区丰富的农业资源，建立了完善的供应链体系。
              </p>
              <p>
                我们为企事业单位、学校、医院、酒店、餐饮连锁等客户提供蔬菜、水果、肉禽蛋、水产海鲜、粮油干货、调料副食等全品类食材的一站式配送服务。
              </p>
            </div>
            <Link href="/about">
              <span className="inline-flex items-center gap-2 mt-8 text-[#1B8A2E] font-semibold hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                了解更多
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const categories = [
    { name: "新鲜蔬菜", image: "/manus-storage/cat-vegetables_1ca6edc3.jpg", desc: "当日采摘，新鲜直达" },
    { name: "时令水果", image: "/manus-storage/cat-fruits_ded75179.jpg", desc: "精选优质，甜蜜可口" },
    { name: "肉禽蛋类", image: "/manus-storage/cat-meat_56d75033.jpg", desc: "品质保障，安全放心" },
    { name: "水产海鲜", image: "/manus-storage/cat-seafood_380314d7.jpg", desc: "鲜活直供，品质上乘" },
    { name: "粮油干货", image: "/manus-storage/cat-grain_0deb06a8.jpg", desc: "优质粮油，品牌保证" },
    { name: "调料副食", image: "/manus-storage/cat-seasoning_08d7a383.jpg", desc: "品类齐全，一站采购" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container">
        <SectionTitle
          subtitle="OUR PRODUCTS"
          title="全品类食材供应"
          description="六大品类，数千种食材，满足您的一站式采购需求"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <Link key={cat.name} href="/products">
                <div
                  ref={ref}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/80 via-[#0D2818]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      {cat.name}
                    </h3>
                    <p className="text-sm text-white/60" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {cat.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[#4ADE80] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      查看详情 <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { end: 500, suffix: "+", label: "服务客户" },
    { end: 2000, suffix: "+", label: "食材品类" },
    { end: 10, suffix: "+", label: "年行业经验" },
    { end: 99, suffix: "%", label: "客户满意度" },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/fresh-vegetables_69f31b1d.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D2818]/85" />
      </div>

      <div className="container relative" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-[#4ADE80] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            OUR ACHIEVEMENTS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            用数据说话
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const count = useCountUp(stat.end, 2000, isVisible);
            return (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {count}{stat.suffix}
                </div>
                <div className="text-sm lg:text-base text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "01", title: "需求沟通", desc: "专业客户经理一对一了解您的食材需求" },
    { num: "02", title: "方案定制", desc: "根据需求量身定制最优配送方案和价格" },
    { num: "03", title: "源头采购", desc: "从优质基地直采，严格品质检测把关" },
    { num: "04", title: "冷链配送", desc: "全程冷链运输，凌晨准时送达您的厨房" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5]">
      <div className="container">
        <SectionTitle
          subtitle="SERVICE PROCESS"
          title="服务流程"
          description="从需求沟通到准时配送，每一步都精益求精"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={step.num}
                ref={ref}
                className={`relative text-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#1B8A2E]/20 mb-6 bg-white">
                  <span className="text-2xl font-bold text-[#1B8A2E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#1B8A2E]/20 to-transparent" />
                )}
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <SectionTitle
          subtitle="NEWS & INSIGHTS"
          title="新闻资讯"
          description="了解百慧农业最新动态，获取行业前沿资讯"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((post, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article
                  ref={ref}
                  className={`group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-[#1B8A2E]/5 hover:border-[#1B8A2E]/10 transition-all duration-500 hover:-translate-y-1
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
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
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1B8A2E] text-[#1B8A2E] font-semibold rounded-lg hover:bg-[#1B8A2E] hover:text-white transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              查看全部资讯
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#1B8A2E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="container relative text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
          让我们为您的餐桌保驾护航
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          无论您是企业食堂、学校、医院还是餐饮连锁，百慧农业都能为您提供专业的食材配送解决方案
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:13983082571"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B8A2E] font-bold rounded-lg hover:bg-[#F0FFF4] transition-all duration-300 shadow-xl shadow-black/10" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            拨打电话：139 8308 2571
          </a>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              在线咨询
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <ProductsPreview />
      <StatsSection />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
      <Footer />
    </div>
  );
}
