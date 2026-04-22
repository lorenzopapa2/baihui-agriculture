/*
 * Design: 东方当代美学 - 鲜活韵律
 * 404页面：品牌风格统一的404错误页
 */
import { Link } from "wouter";
import { ArrowLeft, Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#1B8A2E]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#1B8A2E]/3 rounded-full blur-[60px]" />

      <div className="text-center px-4 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1B8A2E]/8 mb-8">
          <Leaf className="w-10 h-10 text-[#1B8A2E]" />
        </div>

        <h1 className="text-7xl lg:text-8xl font-bold text-[#1B8A2E]/20 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          404
        </h1>

        <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          页面未找到
        </h2>

        <p className="text-[#6B7280] mb-10 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          抱歉，您访问的页面不存在或已被移除。请返回首页继续浏览。
        </p>

        <Link href="/">
          <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1B8A2E] text-white font-semibold rounded-lg hover:bg-[#0D4F1C] transition-all duration-300 shadow-lg shadow-[#1B8A2E]/20" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </span>
        </Link>
      </div>
    </div>
  );
}
