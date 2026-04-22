/*
 * Design: 东方当代美学 - 鲜活韵律
 * Navbar: 透明→毛玻璃过渡，百慧绿品牌色，优雅的导航体验
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/products", label: "产品中心" },
  { href: "/blog", label: "新闻资讯" },
  { href: "/contact", label: "联系我们" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const navBg = scrolled || !isHome
    ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[oklch(0.48_0.16_145/0.1)]"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-[#1A1A1A]" : "text-white";
  // Logo is green on white, visible on both light and dark backgrounds
  const logoFilter = "";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      {/* Top bar */}
      <div className={`hidden lg:block border-b transition-colors duration-500 ${scrolled || !isHome ? 'border-[oklch(0.48_0.16_145/0.08)]' : 'border-white/10'}`}>
        <div className="container flex items-center justify-end py-1.5 gap-6">
          <a href="tel:13983082571" className={`flex items-center gap-1.5 text-xs transition-colors ${scrolled || !isHome ? 'text-[#6B7280] hover:text-[#1B8A2E]' : 'text-white/70 hover:text-white'}`}>
            <Phone className="w-3 h-3" />
            服务热线：13983082571
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16 lg:h-18">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/manus-storage/2891_2169cd48.jpeg"
            alt="百慧农业"
            className="h-10 lg:h-12 w-auto transition-all duration-300 rounded-lg"
          />
          <div className={`hidden sm:block transition-colors duration-500 ${textColor}`}>
            <div className="text-base font-bold leading-tight" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>百慧农业</div>
            <div className={`text-[10px] tracking-widest uppercase ${scrolled || !isHome ? 'text-[#6B7280]' : 'text-white/60'}`}>BAIHUI AGRICULTURE</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href}>
                <span className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                  ${isActive
                    ? (scrolled || !isHome ? 'text-[#1B8A2E] bg-[#1B8A2E]/5' : 'text-white bg-white/10')
                    : (scrolled || !isHome ? 'text-[#4B5563] hover:text-[#1B8A2E] hover:bg-[#1B8A2E]/5' : 'text-white/80 hover:text-white hover:bg-white/10')
                  }`}
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[#1B8A2E]" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:13983082571"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B8A2E] text-white text-sm font-medium rounded-lg hover:bg-[#0D4F1C] transition-all duration-300 shadow-md shadow-[#1B8A2E]/20 hover:shadow-lg hover:shadow-[#1B8A2E]/30"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            立即咨询
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || !isHome ? 'text-[#1A1A1A] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive ? 'text-[#1B8A2E] bg-[#1B8A2E]/5' : 'text-[#4B5563] hover:text-[#1B8A2E] hover:bg-gray-50'}`}
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <a
            href="tel:13983082571"
            className="flex items-center justify-center gap-2 mx-4 mt-3 px-5 py-3 bg-[#1B8A2E] text-white text-sm font-medium rounded-lg"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            拨打电话：139 8308 2571
          </a>
        </div>
      </div>
    </header>
  );
}
