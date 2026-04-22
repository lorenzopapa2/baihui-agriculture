/*
 * Design: 东方当代美学 - 鲜活韵律
 * Contact: 联系方式、留言表单
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, MapPin, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("感谢您的留言！我们会尽快与您联系。", {
      description: "工作人员将在24小时内回复您的咨询。",
    });
    setFormData({ name: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "服务热线", value: "139 8308 2571", link: "tel:13983082571", desc: "周一至周日 全天候服务" },
    { icon: MapPin, title: "公司地址", value: "重庆市渝北区", link: null, desc: "欢迎来访考察洽谈" },
    { icon: Mail, title: "电子邮箱", value: "baihui@cqbaihui.com", link: "mailto:baihui@cqbaihui.com", desc: "商务合作请发邮件" },
    { icon: Clock, title: "配送时间", value: "凌晨配送 准时送达", link: null, desc: "每日凌晨3点开始配送" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0D2818] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2818] to-[#1B4D2E]" />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="text-[#4ADE80] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>CONTACT US</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
              联系我们
            </h1>
            <p className="text-lg text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              期待与您合作，为您提供最优质的食材配送服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={info.title}
                  ref={ref}
                  className={`p-6 rounded-2xl bg-[#FAFAF5] border border-[#1B8A2E]/5 text-center hover:shadow-lg hover:shadow-[#1B8A2E]/5 transition-all duration-500 hover:-translate-y-1
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1B8A2E]/8 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-[#1B8A2E]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-[#1B8A2E] font-medium hover:underline text-sm">{info.value}</a>
                  ) : (
                    <p className="text-sm text-[#4B5563] font-medium">{info.value}</p>
                  )}
                  <p className="text-xs text-[#9CA3AF] mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 lg:py-24 bg-[#FAFAF5]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: info */}
            <div>
              <SectionTitle subtitle="GET IN TOUCH" title="在线咨询" align="left" />
              <div className="space-y-4 text-[#4B5563] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                <p>无论您是需要了解我们的产品和服务，还是希望获取定制化的食材配送方案，我们的专业团队都将竭诚为您服务。</p>
                <p>您可以通过以下方式联系我们：</p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#1B8A2E]/5">
                  <div className="w-12 h-12 rounded-lg bg-[#1B8A2E] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>直接拨打电话</div>
                    <a href="tel:13983082571" className="text-xl font-bold text-[#1A1A1A] hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      139 8308 2571
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#1B8A2E]/5">
                  <div className="w-12 h-12 rounded-lg bg-[#1B8A2E]/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#1B8A2E]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>在线留言咨询</div>
                    <div className="text-sm text-[#4B5563]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>填写右侧表单，我们会尽快回复</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-[#1B8A2E]/5 border border-[#1B8A2E]/5">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  留言咨询
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4B5563] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      您的姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B8A2E] focus:ring-2 focus:ring-[#1B8A2E]/10 outline-none transition-all text-sm"
                      placeholder="请输入您的姓名"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4B5563] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B8A2E] focus:ring-2 focus:ring-[#1B8A2E]/10 outline-none transition-all text-sm"
                      placeholder="请输入您的联系电话"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4B5563] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      公司/单位名称
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B8A2E] focus:ring-2 focus:ring-[#1B8A2E]/10 outline-none transition-all text-sm"
                      placeholder="请输入公司或单位名称"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4B5563] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      咨询内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B8A2E] focus:ring-2 focus:ring-[#1B8A2E]/10 outline-none transition-all text-sm resize-none"
                      placeholder="请描述您的需求，如需要配送的食材品类、数量、配送地址等"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1B8A2E] text-white font-semibold rounded-lg hover:bg-[#0D4F1C] transition-all duration-300 shadow-lg shadow-[#1B8A2E]/20"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    <Send className="w-4 h-4" />
                    提交咨询
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
