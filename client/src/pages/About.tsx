/*
 * Design: 东方当代美学 - 鲜活韵律
 * About: 公司介绍、企业文化、团队展示
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { Target, Heart, Award, Users, Eye, Lightbulb } from "lucide-react";

export default function About() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const stats = [
    { end: 500, suffix: "+", label: "服务客户" },
    { end: 2000, suffix: "+", label: "食材品类" },
    { end: 50, suffix: "+", label: "配送车辆" },
    { end: 100, suffix: "+", label: "专业团队" },
  ];

  const values = [
    { icon: Target, title: "使命", desc: "让每一份食材都安全新鲜，让每一餐都值得信赖" },
    { icon: Eye, title: "愿景", desc: "成为西南地区最值得信赖的农副产品供应链服务商" },
    { icon: Heart, title: "价值观", desc: "诚信为本、品质至上、客户第一、创新发展" },
    { icon: Lightbulb, title: "理念", desc: "以科技赋能传统农业，用专业服务创造价值" },
  ];

  const advantages = [
    { icon: Award, title: "品质保障体系", desc: "建立了从源头到终端的全链条品质管控体系，每一批食材都经过严格检测，确保安全可靠。" },
    { icon: Users, title: "专业服务团队", desc: "拥有经验丰富的采购、品控、物流、客服团队，为客户提供全方位的专业服务。" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0D2818] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/manus-storage/about-bg_a6a4c615.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2818]/80 to-[#0D2818]" />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="text-[#4ADE80] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>ABOUT BAIHUI</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
              关于百慧农业
            </h1>
            <p className="text-lg text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              扎根重庆，服务西南，以专业和诚信赢得客户信赖
            </p>
          </div>
        </div>
      </section>

      {/* Company intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionTitle subtitle="COMPANY PROFILE" title="企业简介" align="left" />
              <div className="space-y-4 text-[#4B5563] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                <p>重庆百慧农业发展有限公司成立于重庆市，是一家集农副产品采购、仓储、加工、配送于一体的现代化综合服务企业。公司秉承"新鲜直达，品质守护"的经营理念，致力于为企事业单位、学校、医院、酒店、餐饮连锁等客户提供安全、新鲜、便捷的一站式食材供应解决方案。</p>
                <p>公司拥有专业的采购团队、现代化的仓储物流中心、完善的冷链配送体系和严格的品质管控系统。我们与重庆及周边地区的优质农业基地建立了长期稳定的合作关系，实现从田间到餐桌的全程品质管控。</p>
                <p>经过多年的发展，百慧农业已经建立了覆盖重庆主城及周边区域的配送网络，服务客户涵盖政府机关、大型企业、教育机构、医疗机构、星级酒店等多个领域，赢得了广大客户的信赖和好评。</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/manus-storage/delivery-team_9c9595d6.jpg"
                alt="百慧农业团队"
                className="rounded-2xl shadow-2xl shadow-[#1B8A2E]/10 w-full h-[400px] lg:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#FAFAF5] border-y border-[#1B8A2E]/5" ref={statsRef}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const count = useCountUp(stat.end, 2000, statsVisible);
              return (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#1B8A2E] mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {count}{stat.suffix}
                  </div>
                  <div className="text-sm text-[#6B7280]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionTitle subtitle="OUR VALUES" title="企业文化" description="以使命驱动发展，以价值观引领行动" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={val.title}
                  ref={ref}
                  className={`p-8 rounded-2xl bg-[#FAFAF5] border border-[#1B8A2E]/5 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1B8A2E]/8 flex items-center justify-center mx-auto mb-5">
                    <val.icon className="w-7 h-7 text-[#1B8A2E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{val.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cold chain */}
      <section className="py-20 lg:py-28 bg-[#FAFAF5]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/manus-storage/cold-chain_4fe15d0a.jpg"
                alt="冷链物流中心"
                className="rounded-2xl shadow-2xl shadow-[#1B8A2E]/10 w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle subtitle="COLD CHAIN" title="冷链物流体系" align="left" />
              <div className="space-y-4 text-[#4B5563] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                <p>百慧农业投入大量资源建设现代化冷链物流体系，拥有标准化冷库和专业冷链运输车辆，实现从采购、仓储、分拣到配送的全程温控管理。</p>
                <p>我们的冷库采用分区温控管理，设有常温区、冷藏区和冷冻区，确保不同类型的食材都在最适宜的温度环境中储存。所有冷链车辆配备GPS定位和温度监控系统，实现全程可追溯。</p>
              </div>
              {advantages.map((adv, i) => {
                const { ref, isVisible } = useScrollAnimation();
                return (
                  <div
                    key={adv.title}
                    ref={ref}
                    className={`flex gap-4 mt-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1B8A2E]/8 flex items-center justify-center shrink-0 mt-1">
                      <adv.icon className="w-5 h-5 text-[#1B8A2E]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{adv.title}</h4>
                      <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{adv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
