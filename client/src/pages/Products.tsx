/*
 * Design: 东方当代美学 - 鲜活韵律
 * Products: 产品分类展示，瀑布流卡片
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "新鲜蔬菜",
    image: "/manus-storage/cat-vegetables_1ca6edc3.jpg",
    desc: "每日凌晨从基地直采，确保蔬菜的新鲜度和营养价值。品种涵盖叶菜类、根茎类、瓜果类、豆类等上百个品种。",
    items: ["时令叶菜", "根茎蔬菜", "瓜果蔬菜", "豆类蔬菜", "菌菇类", "芽苗菜"]
  },
  {
    name: "时令水果",
    image: "/manus-storage/cat-fruits_ded75179.jpg",
    desc: "精选国内外优质水果产区的时令鲜果，从热带水果到温带水果，品种丰富，品质上乘。",
    items: ["苹果梨类", "柑橘类", "热带水果", "浆果类", "瓜类水果", "进口水果"]
  },
  {
    name: "肉禽蛋类",
    image: "/manus-storage/cat-meat_56d75033.jpg",
    desc: "与正规屠宰场和养殖基地合作，所有肉类产品均经过严格的检疫检验，确保安全放心。",
    items: ["猪肉系列", "牛肉系列", "羊肉系列", "鸡鸭禽类", "鲜蛋系列", "冷冻肉品"]
  },
  {
    name: "水产海鲜",
    image: "/manus-storage/cat-seafood_380314d7.jpg",
    desc: "提供鲜活水产和优质冷冻海鲜，从淡水鱼虾到深海海鲜，满足不同客户的需求。",
    items: ["淡水鱼类", "海水鱼类", "虾蟹类", "贝壳类", "冷冻海鲜", "水产加工品"]
  },
  {
    name: "粮油干货",
    image: "/manus-storage/cat-grain_0deb06a8.jpg",
    desc: "精选优质品牌粮油产品，包括大米、面粉、食用油、干货等，品牌正品，品质保证。",
    items: ["大米系列", "面粉面条", "食用油", "杂粮豆类", "干货系列", "南北干货"]
  },
  {
    name: "调料副食",
    image: "/manus-storage/cat-seasoning_08d7a383.jpg",
    desc: "提供各类烹饪调料和副食品，从基础调味品到特色酱料，一站式满足厨房所需。",
    items: ["酱油醋类", "料酒香油", "辣椒花椒", "复合调料", "酱料系列", "腌制食品"]
  },
];

export default function Products() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0D2818] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/manus-storage/fresh-vegetables_69f31b1d.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2818]/80 to-[#0D2818]" />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="text-[#4ADE80] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>OUR PRODUCTS</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
              产品中心
            </h1>
            <p className="text-lg text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              六大品类，数千种食材，为您提供一站式食材采购解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="PRODUCT CATEGORIES"
            title="全品类食材供应"
            description="从田间到餐桌，我们精选每一份食材，只为给您最好的品质"
          />

          <div className="space-y-16 lg:space-y-24">
            {categories.map((cat, i) => {
              const { ref, isVisible } = useScrollAnimation();
              const isEven = i % 2 === 0;
              return (
                <div
                  key={cat.name}
                  ref={ref}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-[300px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/30 to-transparent" />
                    </div>
                  </div>
                  <div className={`${isEven ? '' : 'lg:order-1'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B8A2E]/5 mb-4">
                      <span className="text-xs font-bold text-[#1B8A2E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      {cat.name}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {cat.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#1B8A2E] shrink-0" />
                          <span className="text-sm text-[#4B5563]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#FAFAF5]">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            需要了解更多产品信息？
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-lg mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            联系我们的专业客户经理，获取详细的产品清单和报价方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:13983082571" className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B8A2E] text-white font-semibold rounded-lg hover:bg-[#0D4F1C] transition-all duration-300 shadow-lg shadow-[#1B8A2E]/20" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              拨打热线
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1B8A2E] text-[#1B8A2E] font-semibold rounded-lg hover:bg-[#1B8A2E] hover:text-white transition-all duration-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                在线咨询 <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
