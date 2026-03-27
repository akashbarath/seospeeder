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
	const [activeCategory, setActiveCategory] = React.useState("services");
	const [openId, setOpenId] = React.useState<number | null>(null);
	const [isLinkHovered, setIsLinkHovered] = React.useState(false);
	const containerRef = React.useRef<HTMLDivElement>(null);
	const titleRef = React.useRef<HTMLDivElement>(null);

	const categories = [
		{ id: "services",          label: "Services" },
		{ id: "web-development",   label: "Web Dev" },
		{ id: "app-development",   label: "App Dev" },
		{ id: "ai-development",    label: "AI Dev" },
		{ id: "digital-marketing", label: "Marketing" },
		{ id: "pricing",           label: "Pricing" },
		{ id: "support",           label: "Support" },
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
				<div ref={titleRef} className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6 mb-8 md:mb-12">
					<h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] md:leading-[1.05]">
						Frequently Asked Questions
					</h2>
					<p className="text-base md:text-xl text-muted-foreground font-inter font-medium leading-relaxed max-w-2xl mx-auto opacity-80 px-4 md:px-0">
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

					<div className="w-full overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
						<div className="flex items-center justify-start sm:justify-center gap-3 w-max mx-auto">
							{categories.map((cat) => {
								const isActive = activeCategory === cat.id;

								return (
									<button
										key={cat.id}
										onClick={() => setActiveCategory(cat.id)}
										className={cn(
											"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-xl px-6 text-sm font-inter transition-all duration-300 relative overflow-hidden group/btn",
											isActive
												? "font-bold bg-primary hover:bg-primary/95 text-primary-foreground shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)]"
												: "font-semibold border-2 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
										)}
									>
										{isActive && (
											<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
										)}
										<span className="relative z-10 text-nowrap">{cat.label}</span>
									</button>
								);
							})}
						</div>
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
	// ── Services (General) ───────────────────────────────────
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
			"Absolutely not. We optimise the engine, not the paint. All work is performed with zero downtime and strict version control. Your website's design, functionality, and user experience remain 100% pixel-perfect — just significantly faster.",
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
		category: "services",
		title: "Do you provide end-to-end digital solutions?",
		content:
			"Yes. Beyond performance optimisation, we deliver full-cycle digital services — from strategy and design through to development, deployment, and ongoing maintenance. Startups, SMBs, and enterprises all benefit from our single-team, full-stack approach.",
	},
	{
		id: 6,
		category: "services",
		title: "Which industries do you serve?",
		content:
			"We have delivered projects across Finance, Healthcare, Education, Logistics, Travel, Real Estate, Entertainment, and E-Commerce. Each solution is tailored to the compliance, performance, and scalability demands of the specific industry.",
	},

	// ── Web Development ──────────────────────────────────────
	{
		id: 7,
		category: "web-development",
		title: "What technologies do you use for web development?",
		content:
			"Our front-end stack centres on React and Next.js, paired with modern CSS frameworks for pixel-precise UI. On the back end, we use Node.js, Laravel, and Python with cloud-native infrastructure on AWS, GCP, or Azure — chosen based on your scalability requirements.",
	},
	{
		id: 8,
		category: "web-development",
		title: "Can you build a fully custom e-commerce store?",
		content:
			"Yes. We build bespoke e-commerce solutions on WooCommerce, Shopify, and headless architectures. Every store is optimised for conversion, Core Web Vitals compliance, and sub-second load times — because a one-second delay costs up to 7% in conversions.",
	},
	{
		id: 9,
		category: "web-development",
		title: "Do you handle CMS integration?",
		content:
			"We integrate and extend leading CMS platforms including WordPress, Contentful, Sanity, and Strapi. We build custom themes, plugins, and headless front-ends that give your editors a great experience while keeping performance uncompromised.",
	},
	{
		id: 10,
		category: "web-development",
		title: "Will my website be responsive and mobile-friendly?",
		content:
			"Every project we deliver is built mobile-first. We test across a wide range of real devices and screen sizes, ensuring flawless layouts, touch-optimised interactions, and fast loading on both 4G and low-bandwidth connections.",
	},
	{
		id: 11,
		category: "web-development",
		title: "Do you provide post-launch performance monitoring?",
		content:
			"Yes. We offer ongoing maintenance plans that include Core Web Vitals monitoring, automated uptime alerts, security patching, and monthly performance reviews — so your site stays fast as your content and traffic grow.",
	},

	// ── App Development ──────────────────────────────────────
	{
		id: 12,
		category: "app-development",
		title: "Do you build native or cross-platform apps?",
		content:
			"Both. We develop native iOS (Swift) and Android (Kotlin) apps when platform-specific performance is critical, and use React Native or Flutter for cross-platform products where speed-to-market and code reuse are the priority.",
	},
	{
		id: 13,
		category: "app-development",
		title: "How do you handle App Store and Play Store submission?",
		content:
			"We manage the entire release process — from provisioning profiles and code signing to store listing optimisation (ASO), screenshot design, and compliance reviews. We handle rejections and resubmissions so you can focus on your product.",
	},
	{
		id: 14,
		category: "app-development",
		title: "Can you integrate third-party APIs and payment gateways?",
		content:
			"Yes. We regularly integrate Stripe, PayPal, Razorpay, Google Maps, Firebase, Twilio, and dozens of other APIs. Complex integrations are handled with robust error handling, retry logic, and thorough end-to-end testing.",
	},
	{
		id: 15,
		category: "app-development",
		title: "What does your app development process look like?",
		content:
			"We follow a five-phase approach: Discovery & Strategy → UX Design & Prototyping → Agile Development → QA & Testing → Deployment & Maintenance. You receive weekly sprint demos and have direct Slack access to your development team throughout.",
	},
	{
		id: 16,
		category: "app-development",
		title: "How do you ensure app performance and speed?",
		content:
			"Performance is engineered from the first line of code. We implement lazy loading, efficient state management, optimised API calls with caching, and native gesture handling. Apps are profiled with Xcode Instruments and Android Profiler before every release.",
	},

	// ── AI Development ───────────────────────────────────────
	{
		id: 17,
		category: "ai-development",
		title: "What types of AI solutions do you build?",
		content:
			"We design and deploy AI-powered automation workflows, machine learning models, natural language processing (NLP) solutions, recommendation engines, and computer vision systems. Each solution is purpose-built to solve a tangible business problem, not just for the sake of technology.",
	},
	{
		id: 18,
		category: "ai-development",
		title: "Can you integrate AI into an existing product?",
		content:
			"Yes. Most of our AI engagements start with augmenting an existing platform — adding a conversational AI layer, a predictive analytics module, or intelligent search. We design clean API boundaries so AI features plug directly into your current architecture.",
	},
	{
		id: 19,
		category: "ai-development",
		title: "How do you handle model training and fine-tuning?",
		content:
			"We support the full MLOps lifecycle: data collection and labelling, model selection, training on GPU-optimised infrastructure, evaluation, fine-tuning, and production deployment with monitoring for model drift. We work with PyTorch, TensorFlow, and Hugging Face.",
	},
	{
		id: 20,
		category: "ai-development",
		title: "Is my data secure during AI model development?",
		content:
			"Data security is non-negotiable. We work under strict NDAs, use encrypted data pipelines, and can operate entirely within your private cloud environment. Sensitive datasets never leave your infrastructure unless you explicitly authorise it.",
	},
	{
		id: 21,
		category: "ai-development",
		title: "Can AI help improve our SEO strategy?",
		content:
			"Absolutely. Our AI systems analyse SERP patterns, competitor content strategies, and keyword intent signals at scale — surfacing opportunities that manual research misses entirely. We use predictive modelling to prioritise actions with the highest ranking impact.",
	},

	// ── Digital Marketing ────────────────────────────────────
	{
		id: 22,
		category: "digital-marketing",
		title: "What does your SEO service include?",
		content:
			"Our SEO service covers technical SEO auditing, on-page optimisation, semantic keyword clustering, content strategy, schema markup, Core Web Vitals, and link-building campaigns. We track every metric in a live dashboard shared with your team.",
	},
	{
		id: 23,
		category: "digital-marketing",
		title: "Do you run paid advertising campaigns?",
		content:
			"Yes. We manage Google Ads, Meta Ads, and LinkedIn campaigns end-to-end — from audience targeting and creative strategy to bid management, A/B testing, and conversion tracking. Every campaign is tied to measurable ROI, not vanity reach metrics.",
	},
	{
		id: 24,
		category: "digital-marketing",
		title: "How long does SEO take to show results?",
		content:
			"Technical fixes and on-page improvements produce measurable movement in crawlability within days. Ranking improvements for competitive keywords typically follow within 3–6 months. We set realistic, data-backed milestones from day one — no vague promises.",
	},
	{
		id: 25,
		category: "digital-marketing",
		title: "Do you create content as part of your SEO service?",
		content:
			"Yes. Our content team produces SEO-optimised articles, landing pages, and pillar content guided by our AI keyword research engine. Every piece is fact-checked, on-brand, and written to satisfy both Google's E-E-A-T signals and your readers.",
	},
	{
		id: 26,
		category: "digital-marketing",
		title: "How do you measure digital marketing success?",
		content:
			"We track organic traffic growth, keyword position changes, click-through rates, conversion rates, cost per acquisition, and return on ad spend — all in a single live reporting dashboard. Monthly strategy calls ensure we continuously align on priorities.",
	},

	// ── Pricing ──────────────────────────────────────────────
	{
		id: 32,
		category: "pricing",
		title: "Do you offer a performance guarantee?",
		content:
			"Yes. We deal in data, not guesses. If we fail to meaningfully improve your Google PageSpeed scores and load time metrics as agreed in our initial proposal, you receive a full refund. Zero risk.",
	},
	{
		id: 33,
		category: "pricing",
		title: "Is this a one-time fee or a monthly subscription?",
		content:
			"Our core speed optimisation is a comprehensive one-time service. We also offer optional monthly 'Speed Guard' plans to monitor Core Web Vitals continuously and resolve new issues as you publish content or add third-party scripts.",
	},
	{
		id: 34,
		category: "pricing",
		title: "How is project pricing determined?",
		content:
			"Every project is scoped individually. Pricing is based on complexity, timeline, and the technologies involved. After a free discovery call, we provide a fixed-price proposal with no hidden costs — what we quote is what you pay.",
	},
	{
		id: 35,
		category: "pricing",
		title: "Do you offer retainer or ongoing support plans?",
		content:
			"Yes. Our retainer plans cover a fixed number of development hours per month, priority support, proactive monitoring, and quarterly strategy reviews. Retainer clients also receive priority scheduling for new feature work.",
	},
	{
		id: 36,
		category: "pricing",
		title: "Can startups with limited budgets work with you?",
		content:
			"Absolutely. We offer phased engagement models specifically designed for early-stage companies — starting with an MVP or a targeted audit, and scaling the scope as your business grows. We would rather grow with you than price you out.",
	},

	// ── Support ──────────────────────────────────────────────
	{
		id: 37,
		category: "support",
		title: "How do I verify the results of an optimisation?",
		content:
			"Transparency is everything. We provide a detailed Before & After technical report using third-party tools including Google PageSpeed Insights, GTmetrix, and WebPageTest. You will see exactly what was fixed and the direct impact on your load times.",
	},
	{
		id: 38,
		category: "support",
		title: "How do I get a quote or start a project?",
		content:
			"Click 'Test Your Website' to request a comprehensive manual audit. Our engineers will analyse your site's specific bottlenecks and provide a custom roadmap and quote within 24 hours — no automated reports, no sales pressure.",
	},
	{
		id: 39,
		category: "support",
		title: "What communication channels do you use during a project?",
		content:
			"We keep communication simple and transparent. You will get a dedicated Slack channel with your project team, weekly written updates, and a shared project tracker (Notion or Linear) with real-time progress. You are never left wondering what is happening.",
	},
	{
		id: 40,
		category: "support",
		title: "What happens if an issue arises after delivery?",
		content:
			"All projects include a 30-day post-launch support window at no extra cost. Any regression or unexpected behaviour is treated as a priority and resolved immediately. After the 30-day period, ongoing support is available through our retainer plans.",
	},
];
