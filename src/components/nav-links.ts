import {
	BarChart,
	Code2,
	FileText,
	Flame,
	Globe,
	HelpCircle,
	Layers,
	Leaf,
	Server,
	Shield,
	ShoppingBag,
	Users,
	Workflow,
	Zap,
} from "lucide-react";
import type { LinkItemType } from "@/components/sheard";

export const productLinks: LinkItemType[] = [
	{
		label: "WordPress",
		href: "/products/wordpress",
		description: "Speed optimisation for WordPress sites",
		icon: Globe,
	},
	{
		label: "Shopify",
		href: "/products/shopify",
		description: "Boost your Shopify store speed",
		icon: ShoppingBag,
	},
	{
		label: "Magento",
		href: "/products/magento",
		description: "E-commerce performance optimisation",
		icon: ShoppingBag,
	},
	{
		label: "Laravel",
		href: "/products/laravel",
		description: "Framework optimisation services",
		icon: Code2,
	},
	{
		label: "CodeIgniter",
		href: "/products/codeigniter",
		description: "PHP framework speed enhancement",
		icon: Flame,
	},
	{
		label: "Core PHP",
		href: "/products/core-php",
		description: "Custom PHP application optimisation",
		icon: Code2,
	},
	{
		label: "React JS",
		href: "/products/react-js",
		description: "React application optimisation",
		icon: Code2,
	},
	{
		label: ".Net",
		href: "/products/dotnet",
		description: ".Net application speed tuning",
		icon: Server,
	},
	{
		label: "Wix",
		href: "/products/wix",
		description: "Website builder performance tuning",
		icon: Layers,
	},
	{
		label: "SquareSpace",
		href: "/products/squarespace",
		description: "SquareSpace site optimisation",
		icon: Layers,
	},
	{
		label: "Webflow",
		href: "/products/webflow",
		description: "No-code platform optimisation",
		icon: Workflow,
	},
	{
		label: "Core Web Vitals",
		href: "/products/core-web-vitals",
		description: "Improve LCP, FID, and CLS metrics",
		icon: Zap,
	},
	{
		label: "Server Side",
		href: "/products/server-side",
		description: "Backend and server optimisation",
		icon: Server,
	},
	{
		label: "HTML",
		href: "/products/html",
		description: "Static HTML performance",
		icon: Code2,
	},
];

export const companyLinks: LinkItemType[] = [
	{
		label: "Search Engine Optimisation",
		href: "/services/seo",
		description: "Improve online visibility and rankings",
		icon: Globe,
	},
	{
		label: "Local SEO",
		href: "/services/local-seo",
		description: "Attract nearby customers effectively",
		icon: Globe,
	},
	{
		label: "On Page SEO",
		href: "/services/on-page-seo",
		description: "Optimise content for better ranking",
		icon: FileText,
	},
	{
		label: "Boost Organic Traffic",
		href: "/services/organic-traffic",
		description: "Increase website visitors naturally",
		icon: BarChart,
	},
	{
		label: "App Store Optimisation",
		href: "/services/app-store-optimisation",
		description: "Enhance app discoverability",
		icon: ShoppingBag,
	},
	{
		label: "Social Media Optimisation",
		href: "/services/social-media-optimisation",
		description: "Increase interaction on social networks",
		icon: Users,
	},
	{
		label: "Paid Advertising",
		href: "/services/paid-advertising",
		description: "Drive traffic with targeted ads",
		icon: Zap,
	},
	{
		label: "Content Marketing",
		href: "/services/content-marketing",
		description: "Deliver valuable content consistently",
		icon: FileText,
	},
	{
		label: "Domain Authority",
		href: "/services/domain-authority",
		description: "Strengthen website credibility",
		icon: Shield,
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
		label: "Blog",
		href: "/blog",
		icon: Leaf,
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
];
