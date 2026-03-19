"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import * as React from "react";
import { SearchIcon, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";

export function FaqsSection() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [activeCategory, setActiveCategory] = React.useState("all");
	const [openId, setOpenId] = React.useState<number | null>(null);
	const [isLinkHovered, setIsLinkHovered] = React.useState(false);
	const containerRef = React.useRef<HTMLDivElement>(null);
	const titleRef = React.useRef<HTMLDivElement>(null);

	const categories = [
		{ id: "all", label: "All" },
		{ id: "services", label: "Services" },
		{ id: "pricing", label: "Pricing" },
		{ id: "support", label: "Support" },
	];

	const filtered = faqs.filter((faq) => {
		const matchesCategory =
			activeCategory === "all" || faq.category === activeCategory;
		const matchesSearch =
			faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.content.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Removed intro animations as per user request

	return (
		<section ref={containerRef} className="py-20 md:py-28 bg-background w-full overflow-hidden">
			<div className="container px-4 md:px-6 mx-auto max-w-4xl">
				<div ref={titleRef} className="text-center mb-8 md:mb-12">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
						Frequently Asked Questions
					</h2>
					<p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-inter">
						Everything you need to know about our SEO and speed optimisation services.
					</p>
				</div>

				<div className="flex flex-col items-center mb-8 md:mb-12 space-y-6 md:space-y-8">
					<div className="faq-search-bar relative w-full max-w-md group">
						<div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
						<div className="relative flex items-center bg-card border-2 border-border rounded-xl shadow-sm focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-500 h-12 md:h-14 overflow-hidden">
							<SearchIcon className="h-5 w-5 ml-4 text-muted-foreground" />
							<input
								onChange={(e) => setSearchTerm(e.target.value)}
								type="text"
								placeholder="Search FAQs..."
								value={searchTerm}
								className="w-full h-full bg-transparent border-none outline-none px-4 text-base placeholder:text-muted-foreground/50"
							/>
							{searchTerm && (
								<button
									onClick={() => setSearchTerm("")}
									className="mr-4 p-1 hover:bg-muted rounded-full transition-colors duration-300"
								>
									<X className="h-4 w-4 text-muted-foreground" />
								</button>
							)}
						</div>
					</div>

					<div className="flex flex-wrap justify-center gap-2 md:gap-3">
						{categories.map((cat) => (
							<button
								key={cat.id}
								onClick={() => setActiveCategory(cat.id)}
								className={cn(
									"faq-category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-500",
									activeCategory === cat.id
										? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
										: "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:-translate-y-0.5"
								)}
							>
								{cat.label}
							</button>
						))}
					</div>
				</div>

				<motion.div layout className="max-w-3xl mx-auto space-y-4 min-h-[400px]">
					<AnimatePresence mode="popLayout" initial={false}>
						{filtered.length > 0 ? (
							filtered.map((faq) => (
								<motion.div
									layout
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.96 }}
									transition={{ 
										layout: { type: "spring", stiffness: 100, damping: 15 },
										opacity: { duration: 0.4 }
									}}
									key={faq.id}
									className="faq-item"
								>
									<Card
										className={cn(
											"group border-2 rounded-2xl bg-card overflow-hidden transition-all duration-500 ease-out shadow-none",
											openId === faq.id
												? "border-primary/50 shadow-lg shadow-primary/5 ring-1 ring-primary/5"
												: "border-border hover:border-primary/30 hover:shadow-md"
										)}
									>
										<button
											onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
											className="w-full flex items-center justify-between p-4 md:p-6 text-left"
										>
											<span className="text-base md:text-lg font-semibold pr-4 md:pr-8 leading-snug">
												{faq.title}
											</span>
											<span
												className={cn(
													"flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-500 ease-out",
													openId === faq.id
														? "bg-primary border-primary text-primary-foreground rotate-180"
														: "border-muted bg-muted/50 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
												)}
											>
												{openId === faq.id ? (
													<Minus className="w-4 h-4" />
												) : (
													<Plus className="w-4 h-4" />
												)}
											</span>
										</button>
										<AnimatePresence initial={false}>
											{openId === faq.id && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{
														height: "auto",
														opacity: 1,
														transition: {
															height: {
																type: "spring",
																stiffness: 200,
																damping: 25,
															},
															opacity: { duration: 0.3, delay: 0.1 },
														},
													}}
													exit={{
														height: 0,
														opacity: 0,
														transition: {
															height: { duration: 0.3, ease: "easeInOut" },
															opacity: { duration: 0.2 },
														},
													}}
												>
													<div className="px-4 pb-4 md:px-6 md:pb-6 text-muted-foreground leading-relaxed text-sm md:text-base font-inter">
														{faq.content}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</Card>
								</motion.div>
							))
						) : (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="text-center py-20 text-muted-foreground"
							>
								<div className="bg-muted/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<SearchIcon className="w-8 h-8 opacity-50" />
								</div>
								<h3 className="text-lg font-medium mb-1">No results found</h3>
								<p>Try adjusting your search or category filter.</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>

				<div className="mt-8 text-center">
					<p className="text-muted-foreground">
						Still have questions?{" "}
						<Link
							className="text-primary font-medium transition-all inline-block"
							href="/contact"
							onMouseEnter={() => setIsLinkHovered(true)}
							onMouseLeave={() => setIsLinkHovered(false)}
						>
							<span className="relative">
								{isLinkHovered ? (
									<Highlighter action="underline" color="hsl(var(--primary))">
										Contact Support
									</Highlighter>
								) : (
									"Contact Support"
								)}
							</span>
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}

const faqs = [
	{
		id: 1,
		category: "services",
		title: "How does seospeeder improve my Core Web Vitals?",
		content:
			"We systematically eliminate bottlenecks like render-blocking JavaScript, unoptimised assets, and slow server response times. Our focus is on passing Google's Core Web Vitals (LCP, CLS, INP) for both mobile and desktop, directly boosting your SEO rankings and conversion rates.",
	},
	{
		id: 2,
		category: "services",
		title: "What platforms do you specialise in?",
		content:
			"We are architect-level experts in WordPress, Shopify, Magento, Webflow, Wix, Laravel, and custom PHP environments. Whether you run a high-traffic WooCommerce store or a custom SaaS application, we optimise for your specific tech stack.",
	},
	{
		id: 3,
		category: "services",
		title: "Will this break my site or change the design?",
		content:
			"Absolutely not. We optimise the engine, not the paint. All work is performed with zero downtime and strict version control. Your website's design, functionality, and user experience will remain 100% pixel-perfect—just significantly faster.",
	},
	{
		id: 4,
		category: "services",
		title: "What is the typical turnaround time?",
		content:
			"We move fast. Standard optimisations are completed within 2–5 business days. We begin with a deep-dive technical audit and deploy fixes rapidly to get your site passing speed tests and indexing faster on Google immediately.",
	},
	{
		id: 5,
		category: "pricing",
		title: "Do you offer a performance guarantee?",
		content:
			"Yes. We deal in data, not guesses. If we fail to meaningfully improve your Google PageSpeed scores and load time metrics as agreed upon in our initial proposal, you will receive a full refund. Zero risk.",
	},
	{
		id: 6,
		category: "pricing",
		title: "Is this a one-time fee or monthly?",
		content:
			"Our core speed optimisation is a comprehensive one-time service. However, we offer optional monthly 'Speed Guard' plans to monitor Core Web Vitals continuously and fix new issues as you publish content or add plugins.",
	},
	{
		id: 7,
		category: "support",
		title: "How do I verify the results?",
		content:
			"Transparency is everything. We provide a detailed 'Before & After' technical report using third-party tools like Google PageSpeed Insights and GTmetrix. You will see exactly what was fixed and the direct impact on your load times.",
	},
	{
		id: 8,
		category: "support",
		title: "How do I get a quote?",
		content:
			"Click 'Test Your Website' above to request a comprehensive manual audit. Our engineers will analyse your site's specific bottlenecks and provide a custom roadmap and quote within 24 hours.",
	},
];
