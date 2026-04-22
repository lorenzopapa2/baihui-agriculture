/*
 * Design: 东方当代美学 - 鲜活韵律
 * Footer: 墨绿深色底，品牌信息完整展示
 */
import { Link } from "wouter";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D2818] text-white/80">
      {/* Main footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/manus-storage/logo-transparent_e744a865.png"
                alt="百慧农业"
                className="h-12 w-auto brightness-[10] contrast-[0.6] saturate-[0.5]"
              />
              <div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>百慧农业</div>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">BAIHUI AGRICULTURE</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              重庆百慧农业发展有限公司，专注农副产品生鲜配送服务，致力于为企事业单位、学校、医院、酒店等提供安全、新鲜、便捷的一站式食材供应解决方案。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>快速导航</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "首页" },
                { href: "/about", label: "关于我们" },
                { href: "/products", label: "产品中心" },
                { href: "/blog", label: "新闻资讯" },
                { href: "/contact", label: "联系我们" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-white/50 hover:text-[#4ADE80] transition-colors duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>产品分类</h4>
            <ul className="space-y-3">
              {["新鲜蔬菜", "时令水果", "肉禽蛋类", "水产海鲜", "粮油干货", "调料副食"].map((item) => (
                <li key={item}>
                  <Link href="/products">
                    <span className="text-sm text-white/50 hover:text-[#4ADE80] transition-colors duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>联系方式</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#4ADE80] shrink-0" />
                <div>
                  <div className="text-sm text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>服务热线</div>
                  <a href="tel:13983082571" className="text-sm text-white hover:text-[#4ADE80] transition-colors font-medium">139 8308 2571</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#4ADE80] shrink-0" />
                <div>
                  <div className="text-sm text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>公司地址</div>
                  <span className="text-sm text-white/70" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>重庆市渝北区</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#4ADE80] shrink-0" />
                <div>
                  <div className="text-sm text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>营业时间</div>
                  <span className="text-sm text-white/70" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>周一至周日 凌晨配送</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#4ADE80] shrink-0" />
                <div>
                  <div className="text-sm text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>电子邮箱</div>
                  <span className="text-sm text-white/70">baihui@cqbaihui.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            &copy; {new Date().getFullYear()} 重庆百慧农业发展有限公司 版权所有
          </p>
          <p className="text-xs text-white/30" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            渝ICP备XXXXXXXX号
          </p>
        </div>
      </div>
    </footer>
  );
}
