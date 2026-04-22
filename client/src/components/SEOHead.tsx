/*
 * Design: 东方当代美学 - 鲜活韵律
 * SEOHead: 动态设置页面title、description、keywords和Schema.org结构化数据
 */
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
}

export default function SEOHead({ title, description, keywords, schema }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Update meta keywords
    if (keywords) {
      let metaKeys = document.querySelector('meta[name="keywords"]');
      if (metaKeys) {
        metaKeys.setAttribute("content", keywords);
      } else {
        metaKeys = document.createElement("meta");
        metaKeys.setAttribute("name", "keywords");
        metaKeys.setAttribute("content", keywords);
        document.head.appendChild(metaKeys);
      }
    }

    // Add Schema.org JSON-LD
    if (schema) {
      const existingScript = document.querySelector('script[data-seo-schema]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schema);
      } else {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo-schema", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup schema on unmount
      const schemaScript = document.querySelector('script[data-seo-schema]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, schema]);

  return null;
}

// Pre-built schema generators
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "重庆百慧农业发展有限公司",
    "alternateName": "百慧农业",
    "url": "https://www.cqbaihui.com",
    "logo": "/manus-storage/2891_2169cd48.jpeg",
    "description": "重庆百慧农业发展有限公司，专注农副产品生鲜配送服务，提供蔬菜、水果、肉禽蛋、水产海鲜、粮油干货、调料副食等全品类食材一站式配送。",
    "telephone": "13983082571",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "重庆市",
      "addressRegion": "重庆",
      "addressCountry": "CN"
    },
    "areaServed": {
      "@type": "City",
      "name": "重庆"
    },
    "sameAs": []
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "重庆百慧农业发展有限公司",
    "image": "/manus-storage/2891_2169cd48.jpeg",
    "telephone": "13983082571",
    "email": "baihui@cqbaihui.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "重庆市渝北区",
      "addressRegion": "重庆",
      "addressCountry": "CN"
    },
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "$$"
  };
}

export function getArticleSchema(post: { title: string; excerpt: string; date: string; author: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "重庆百慧农业发展有限公司",
      "logo": {
        "@type": "ImageObject",
        "url": "/manus-storage/2891_2169cd48.jpeg"
      }
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
