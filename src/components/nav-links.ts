import {
  FileText,
  HelpCircle,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Icons } from "@/components/icons";
import type { LinkItemType } from "@/components/sheard";

export const productLinks: LinkItemType[] = [
  {
    label: "WordPress",
    href: "/services/wordpress",
    description: "Speed optimisation for WordPress sites",
    icon: Icons.wordpress,
  },
  {
    label: "Shopify",
    href: "/services/shopify",
    description: "Boost your Shopify store speed",
    icon: Icons.shopify,
  },
  {
    label: "Magento",
    href: "/services/magento",
    description: "E-commerce performance optimisation",
    icon: Icons.magento,
  },
  {
    label: "BigCommerce",
    href: "/services/bigcommerce",
    description: "Optimise your BigCommerce store",
    icon: Icons.bigcommerce,
  },
  {
    label: "Laravel",
    href: "/services/laravel",
    description: "Framework optimisation services",
    icon: Icons.laravel,
  },
  {
    label: "CodeIgniter",
    href: "/services/codeigniter",
    description: "PHP framework speed enhancement",
    icon: Icons.codeigniter,
  },
  {
    label: "Core PHP",
    href: "/services/php",
    description: "Custom PHP application optimisation",
    icon: Icons.php,
  },
  {
    label: "React JS",
    href: "/services/react",
    description: "React application optimisation",
    icon: Icons.react,
  },
  {
    label: ".Net",
    href: "/services/dotnet",
    description: ".Net application speed tuning",
    icon: Icons.dotnet,
  },
  {
    label: "HTML",
    href: "/services/html",
    description: "Static HTML performance",
    icon: Icons.html,
  },
  {
    label: "Framer",
    href: "/services/framer",
    description: "Framer site speed optimisation",
    icon: Icons.framer,
  },
  {
    label: "HubSpot",
    href: "/services/hubspot",
    description: "HubSpot CMS performance tuning",
    icon: Icons.hubspot,
  },
  {
    label: "Webflow",
    href: "/services/webflow",
    description: "No-code platform optimisation",
    icon: Icons.webflow,
  },
  {
    label: "Core Web Vitals",
    href: "/services/core-web-vitals",
    description: "Improve LCP, FID, and CLS metrics",
    icon: Icons.vitals,
  },
  {
    label: "Server Side",
    href: "/services/server-side",
    description: "Backend and server optimisation",
    icon: Icons.backend,
  },
];

export const companyLinks: LinkItemType[] = [
  {
    label: "Search Engine Optimisation",
    href: "/services/seo",
    description: "Improve online visibility and rankings",
    icon: Icons.vitals,
  },
  {
    label: "Local SEO",
    href: "/services/local-seo",
    description: "Attract nearby customers effectively",
    icon: Icons.local,
  },
  {
    label: "On Page SEO",
    href: "/services/on-page-seo",
    description: "Optimise content for better ranking",
    icon: Icons.onPage,
  },
  {
    label: "Boost Organic Traffic",
    href: "/services/organic-traffic",
    description: "Increase website visitors naturally",
    icon: Icons.organic,
  },
  {
    label: "App Store Optimisation",
    href: "/services/app-store-optimisation",
    description: "Enhance app discoverability",
    icon: Icons.aso,
  },
  {
    label: "Social Media Optimisation",
    href: "/services/social-media-optimisation",
    description: "Increase interaction on social networks",
    icon: Icons.social,
  },
  {
    label: "Paid Advertising",
    href: "/services/paid-advertising",
    description: "Drive traffic with targeted ads",
    icon: Icons.paid,
  },
  {
    label: "Content Marketing",
    href: "/services/content-marketing",
    description: "Deliver valuable content consistently",
    icon: Icons.content,
  },
  {
    label: "Domain Authority",
    href: "/services/domain-authority",
    description: "Strengthen website credibility",
    icon: Icons.domain,
  },
];

export const companyLinks2: LinkItemType[] = [
  {
    label: "About Us",
    href: "/about#about-section",
    icon: Users,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: HelpCircle,
  },
  {
    label: "Test Your Website",
    href: "#audit",
    icon: Zap,
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
    icon: Shield,
  },
  {
    label: "Terms of Service",
    href: "/terms",
    icon: FileText,
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
    icon: Shield,
  },
];
