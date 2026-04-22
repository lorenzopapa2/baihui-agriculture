/*
 * Design: 东方当代美学 - 鲜活韵律
 * PageBreadcrumb: 子页面面包屑导航，提升用户体验和SEO
 */
import { Link } from "wouter";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItemType[];
  light?: boolean;
}

export default function PageBreadcrumb({ items, light = false }: PageBreadcrumbProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <span className={`flex items-center gap-1 text-xs transition-colors ${light ? 'text-white/50 hover:text-white/80' : 'text-[#6B7280] hover:text-[#1B8A2E]'}`}>
                <Home className="w-3 h-3" />
                首页
              </span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, index) => (
          <span key={index} className="contents">
            <BreadcrumbSeparator className={light ? 'text-white/30' : 'text-[#D1D5DB]'} />
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>
                    <span className={`text-xs transition-colors ${light ? 'text-white/50 hover:text-white/80' : 'text-[#6B7280] hover:text-[#1B8A2E]'}`}>
                      {item.label}
                    </span>
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className={`text-xs font-medium ${light ? 'text-white/80' : 'text-[#1A1A1A]'}`}>
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
