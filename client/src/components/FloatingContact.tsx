/*
 * Design: 东方当代美学 - 鲜活韵律
 * FloatingContact: 全站固定悬浮的联系/咨询按钮，方便用户随时咨询
 */
import { useState, useEffect } from "react";
import { Phone, X, MessageSquare, ArrowUp } from "lucide-react";
import { Link } from "wouter";

export default function FloatingContact() {
  const [expanded, setExpanded] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 rounded-full bg-white shadow-lg shadow-black/10 border border-gray-100 flex items-center justify-center text-[#6B7280] hover:text-[#1B8A2E] hover:border-[#1B8A2E]/20 transition-all duration-300 hover:-translate-y-0.5"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Expanded panel */}
      {expanded && (
        <div className="bg-white rounded-2xl shadow-2xl shadow-[#1B8A2E]/10 border border-[#1B8A2E]/10 p-5 w-64 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-[#1A1A1A]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              联系我们
            </h4>
            <button
              onClick={() => setExpanded(false)}
              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[#6B7280] hover:bg-gray-200 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href="tel:13983082571"
            className="flex items-center gap-3 p-3 rounded-xl bg-[#1B8A2E]/5 hover:bg-[#1B8A2E]/10 transition-colors mb-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1B8A2E] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-[#6B7280]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>服务热线</div>
              <div className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                139 8308 2571
              </div>
            </div>
          </a>

          <Link href="/contact" onClick={() => setExpanded(false)}>
            <span className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-[#1B8A2E]/10 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-[#1B8A2E]" />
              </div>
              <div>
                <div className="text-xs text-[#6B7280]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>在线留言</div>
                <div className="text-sm font-medium text-[#4B5563] group-hover:text-[#1B8A2E] transition-colors" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  提交咨询需求
                </div>
              </div>
            </span>
          </Link>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          expanded
            ? 'bg-white text-[#1B8A2E] shadow-[#1B8A2E]/10 border border-[#1B8A2E]/20'
            : 'bg-[#1B8A2E] text-white shadow-[#1B8A2E]/30 hover:bg-[#0D4F1C]'
        }`}
        aria-label="联系咨询"
      >
        {expanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
}
