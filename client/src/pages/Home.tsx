/*
 * Design: 东方当代美学 - 鲜活韵律
 * Home: 全屏Hero沉浸式 → Z字型内容流 → 浮动卡片 → 数字印章 → 客户案例 → 博客杂志
 * 优化: Hero入场动画、客户案例/合作伙伴、6步服务流程、Schema.org
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SectionTitle from "@/components/SectionTitle";
import SEOHead, { getOrganizationSchema } from "@/components/SEOHead";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { ArrowRight, Truck, ShieldCheck, Leaf, Clock, ChevronRight, Quote, Building2, GraduationCap, Hotel, Utensils, Landmark, Stethoscope, PackageCheck, ClipboardCheck, Headphones } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

/* ─── Hero with entrance animation ─── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/manus-storage/hero-bg_42173f11.jpg" alt="百慧农业田间配送" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2818]/90 via-[#0D2818]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/40 via-transparent to-[#0D2818]/20" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              重庆专业生鲜配送服务商
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            <span className={`inline-block transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              鲜活直达
            </span>
            <br />
            <span className={`inline-block transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[#4ADE80]">品质</span>守护
            </span>
          </h1>

          <p className={`text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            百慧农业专注农副产品生鲜配送，全程冷链物流，从田间到餐桌，为您的每一餐保驾护航。
          </p>

          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

/* ─── Features ─── */
function FeaturesSection() {
  const features = [
    { icon: Leaf, title: "源头直采", desc: "深入农业基地，与优质农户建立长期合作，从源头直接采购，确保食材新鲜度和品质" },
    { icon: Truck, title: "冷链配送", desc: "全程冷链物流，智能温控系统，分区管理，锁住每一份新鲜与营养" },
    { icon: ShieldCheck, title: "品质保障", desc: "多层次质量检测体系，农残快速筛查，食品安全全程可追溯" },
    { icon: Clock, title: "准时送达", desc: "凌晨配送团队，专业路线规划，确保客户营业前收到新鲜食材" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B8A2E]/3 rounded-full blur-[120px]" />
      <div className="container relative">
        <SectionTitle subtitle="OUR ADVANTAGES" title="为什么选择百慧农业" description="我们以专业的服务和严格的品质标准，为客户提供安全、新鲜、便捷的食材配送体验" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div key={feat.title} ref={ref}
                className={`group p-8 rounded-2xl bg-[#FAFAF5] border border-[#1B8A2E]/5 hover:bg-white hover:shadow-xl hover:shadow-[#1B8A2E]/5 hover:border-[#1B8A2E]/10 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-[#1B8A2E]/8 flex items-center justify-center mb-6 group-hover:bg-[#1B8A2E]/12 transition-colors">
                  <feat.icon className="w-7 h-7 text-[#1B8A2E]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{feat.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── About Preview ─── */
function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B8A2E]/3 rounded-full blur-[100px]" />
      <div className="container relative">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1B8A2E]/10">
              <img src="/manus-storage/delivery-team_9c9595d6.jpg" alt="百慧农业配送团队" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-[#1B8A2E]/10">
              <div className="text-3xl font-bold text-[#1B8A2E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>10+</div>
              <div className="text-sm text-[#6B7280] mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>年行业经验</div>
            </div>
          </div>
          <div>
            <SectionTitle subtitle="ABOUT US" title="百慧农业，值得信赖" align="left" />
            <div className="space-y-4 text-[#4B5563] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              <p>重庆百慧农业发展有限公司，扎根山城重庆，是一家专注于农业生鲜配送领域的现代化企业。我们秉承"新鲜、安全、高效"的经营理念，致力于为企事业单位食堂、学校医院、酒店餐饮及政府机关提供从田间到餐桌的全方位、高品质食材供应链解决方案。</p>
              <p>百慧农业深知食材品质对健康的重要性，我们坚持源头直采，严格把控每一环节，确保每一份食材都鲜活、安全、可追溯。凭借专业化的冷链物流体系和经验丰富的配送团队，我们承诺将新鲜与健康准时送达。</p>
            </div>
            <Link href="/about">
              <span className="inline-flex items-center gap-2 mt-8 text-[#1B8A2E] font-semibold hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                了解更多 <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products Preview ─── */
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
        <SectionTitle subtitle="OUR PRODUCTS" title="全品类食材供应" description="六大品类，数千种食材，满足您的一站式采购需求" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <Link key={cat.name} href="/products">
                <div ref={ref}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/80 via-[#0D2818]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>{cat.name}</h3>
                    <p className="text-sm text-white/60" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{cat.desc}</p>
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

/* ─── Stats ─── */
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
      <div className="absolute inset-0">
        <img src="/manus-storage/fresh-vegetables_69f31b1d.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0D2818]/85" />
      </div>
      <div className="container relative" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-[#4ADE80] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>OUR ACHIEVEMENTS</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>用数据说话</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => {
            const count = useCountUp(stat.end, 2000, isVisible);
            return (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{count}{stat.suffix}</div>
                <div className="text-sm lg:text-base text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Process (expanded to 6 steps) ─── */
function ProcessSection() {
  const steps = [
    { num: "01", title: "需求沟通", desc: "专业客户经理一对一了解您的食材需求与预算", icon: Headphones },
    { num: "02", title: "方案定制", desc: "根据需求量身定制最优配送方案和价格体系", icon: ClipboardCheck },
    { num: "03", title: "源头采购", desc: "从优质基地直采，严格品质检测把关", icon: Leaf },
    { num: "04", title: "精准分拣", desc: "专业人员精细化分拣、称重与标准化包装", icon: PackageCheck },
    { num: "05", title: "冷链配送", desc: "全程冷链运输，凌晨准时送达您的厨房", icon: Truck },
    { num: "06", title: "售后服务", desc: "完善售后体系，及时响应并解决客户反馈", icon: ShieldCheck },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5]">
      <div className="container">
        <SectionTitle subtitle="SERVICE PROCESS" title="服务流程" description="从需求沟通到售后服务，每一步都精益求精" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div key={step.num} ref={ref}
                className={`relative text-center p-8 rounded-2xl bg-white border border-[#1B8A2E]/5 hover:shadow-lg hover:shadow-[#1B8A2E]/5 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B8A2E]/8 mb-5">
                  <step.icon className="w-7 h-7 text-[#1B8A2E]" />
                </div>
                <div className="absolute top-4 right-4 text-2xl font-bold text-[#1B8A2E]/10" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step.num}</div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Client Cases & Partners (NEW) ─── */
function ClientsSection() {
  const clientTypes = [
    { icon: Building2, label: "企事业单位" },
    { icon: GraduationCap, label: "学校食堂" },
    { icon: Stethoscope, label: "医院食堂" },
    { icon: Hotel, label: "星级酒店" },
    { icon: Utensils, label: "餐饮连锁" },
    { icon: Landmark, label: "政府机关" },
  ];

  const testimonials = [
    {
      quote: "与百慧农业合作三年多，食材品质一直很稳定，配送准时率非常高。他们的冷链体系让我们很放心，食材新鲜度有保障。",
      author: "张经理",
      company: "某大型企业食堂",
      role: "后勤负责人"
    },
    {
      quote: "百慧农业的服务非常专业，从需求沟通到方案定制都很细致。价格透明，品质可靠，是我们长期信赖的合作伙伴。",
      author: "李主任",
      company: "某重点中学",
      role: "总务处主任"
    },
    {
      quote: "作为餐饮连锁企业，我们对食材的品质和供应稳定性要求很高。百慧农业不仅满足了我们的需求，还经常提供行业资讯和建议。",
      author: "王总",
      company: "某知名餐饮品牌",
      role: "采购总监"
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1B8A2E]/3 rounded-full blur-[100px]" />
      <div className="container relative">
        <SectionTitle subtitle="OUR CLIENTS" title="服务客户" description="覆盖多个行业领域，赢得广大客户的信赖与好评" />

        {/* Client type icons */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-16">
          {clientTypes.map((ct, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div key={ct.label} ref={ref}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#FAFAF5] border border-[#1B8A2E]/5 hover:shadow-md hover:shadow-[#1B8A2E]/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-[#1B8A2E]/8 flex items-center justify-center">
                  <ct.icon className="w-6 h-6 text-[#1B8A2E]" />
                </div>
                <span className="text-sm font-medium text-[#4B5563] text-center" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{ct.label}</span>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div key={i} ref={ref}
                className={`relative p-8 rounded-2xl bg-[#FAFAF5] border border-[#1B8A2E]/5 transition-all duration-500 hover:shadow-lg hover:shadow-[#1B8A2E]/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}>
                <Quote className="w-8 h-8 text-[#1B8A2E]/15 mb-4" />
                <p className="text-[#4B5563] leading-relaxed mb-6 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#1B8A2E]/5">
                  <div className="w-10 h-10 rounded-full bg-[#1B8A2E]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#1B8A2E]">{t.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1A1A1A]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{t.author}</div>
                    <div className="text-xs text-[#9CA3AF]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{t.company} · {t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Blog Preview ─── */
function BlogPreview() {
  const featured = blogPosts.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5]">
      <div className="container">
        <SectionTitle subtitle="NEWS & INSIGHTS" title="新闻资讯" description="了解百慧农业最新动态，获取行业前沿资讯" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((post, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article ref={ref}
                  className={`group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-[#1B8A2E]/5 hover:border-[#1B8A2E]/10 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-[#1B8A2E] bg-[#1B8A2E]/5 px-3 py-1 rounded-full" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{post.category}</span>
                      <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-[#1A1A1A] mb-2 line-clamp-2 group-hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>{post.title}</h3>
                    <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1B8A2E] text-[#1B8A2E] font-semibold rounded-lg hover:bg-[#1B8A2E] hover:text-white transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              查看全部资讯 <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
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
          <a href="tel:13983082571" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B8A2E] font-bold rounded-lg hover:bg-[#F0FFF4] transition-all duration-300 shadow-xl shadow-black/10" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
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

/* ─── Main ─── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="重庆百慧农业 - 生鲜配送专家 | 蔬菜水果肉禽蛋一站式配送"
        description="重庆百慧农业发展有限公司，专注农副产品生鲜配送服务，提供蔬菜、水果、肉禽蛋、水产海鲜、粮油干货、调料副食等全品类食材一站式配送。全程冷链物流，品质保障。服务热线：13983082571"
        keywords="重庆生鲜配送,农副产品配送,蔬菜配送,食材配送,百慧农业,重庆食堂配送,企业团餐配送,冷链配送,重庆蔬菜批发"
        schema={getOrganizationSchema()}
      />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <ProductsPreview />
      <StatsSection />
      <ProcessSection />
      <ClientsSection />
      <BlogPreview />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
