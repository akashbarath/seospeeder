"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon, ChevronRight } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { companyLinks, companyLinks2, productLinks } from "@/components/nav-links";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const [expandedSection, setExpandedSection] = React.useState<string | null>(null);
	const { isMobile } = useMediaQuery();

	// 🚫 Disable body scroll when open
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Cleanup on unmount too
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	const toggleSection = (section: string) => {
		setExpandedSection(expandedSection === section ? null : section);
	};

	const menuVariants = {
		closed: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.2,
			},
		},
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				staggerChildren: 0.05,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		closed: { opacity: 0, x: -20 },
		open: { opacity: 1, x: 0 },
	};

	const sectionVariants = {
		collapsed: { height: 0, opacity: 0 },
		expanded: { 
			height: "auto", 
			opacity: 1,
			transition: {
				height: {
					duration: 0.3,
				},
				opacity: {
					duration: 0.25,
					delay: 0.05,
				},
			},
		},
	};

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="lg:hidden border-2"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				<div
					className={cn(
						"transition-all",
						open ? "scale-100 opacity-100" : "scale-0 opacity-0"
					)}
				>
					<XIcon aria-hidden="true" className="size-4.5" />
				</div>
				<div
					className={cn(
						"absolute transition-all",
						open ? "scale-0 opacity-0" : "scale-100 opacity-100"
					)}
				>
					<MenuIcon aria-hidden="true" className="size-4.5" />
				</div>
			</Button>
			{open &&
				createPortal(
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
						onClick={() => setOpen(false)}
					>
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 30, stiffness: 300 }}
							className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background border-l-2 border-border shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex h-full flex-col">
								{/* Header */}
								<div className="flex items-center justify-between border-b-2 border-border p-4">
									<h2 className="text-lg font-semibold">Menu</h2>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => setOpen(false)}
										className="h-8 w-8"
									>
										<XIcon className="size-5" />
									</Button>
								</div>

								{/* Scrollable Content */}
								<motion.div
									className="flex-1 overflow-y-auto p-4"
									variants={menuVariants}
									initial="closed"
									animate="open"
								>
									<div className="space-y-4">
										{/* About Link */}
										<MotionLink
											variants={itemVariants}
											href="/about#about-section"
											className="flex items-center justify-between rounded-lg border-2 border-border bg-card p-3 font-medium transition-colors hover:bg-accent"
											onClick={() => setOpen(false)}
										>
											<span className="font-inter font-semibold">About</span>
											<ChevronRight className="size-5" />
										</MotionLink>

										{/* Optimisation Section */}
										<motion.div variants={itemVariants}>
											<button
												onClick={() => toggleSection("product")}
												className="flex w-full items-center justify-between rounded-lg border-2 border-border bg-card p-3 text-left font-medium transition-colors hover:bg-accent"
											>
												<span className="font-inter font-semibold">Optimisation</span>
												<ChevronRight
													className={cn(
														"size-5 transition-transform duration-300",
														expandedSection === "product" && "rotate-90"
													)}
												/>
											</button>
											<AnimatePresence>
												{expandedSection === "product" && (
													<motion.div
														variants={sectionVariants}
														initial="collapsed"
														animate="expanded"
														exit="collapsed"
														className="overflow-hidden"
													>
														<div className="mt-2 space-y-2 pl-2">
															{productLinks.map((link, i) => (
																<MotionLink
																	key={i}
																	href={link.href}
																	initial={{ opacity: 0, x: -10 }}
																	animate={{ opacity: 1, x: 0 }}
																	transition={{ delay: i * 0.05 }}
																	className="flex items-start gap-2 rounded-lg border-2 border-border bg-card p-2 transition-all hover:bg-accent hover:border-accent-foreground/20"
																	onClick={() => setOpen(false)}
																>
																	<div className="flex size-8 shrink-0 items-center justify-center rounded-md border-2 bg-background mt-0.5">
																		<link.icon className="size-4" />
																	</div>
																	<div className="flex-1 min-w-0">
																		<p className="font-semibold text-sm font-inter">{link.label}</p>
																		<p className="text-[11px] leading-tight text-muted-foreground line-clamp-2 font-inter font-medium">
																			{link.description}
																		</p>
																	</div>
																</MotionLink>
															))}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</motion.div>

										{/* Company Section */}
										<motion.div variants={itemVariants}>
											<button
												onClick={() => toggleSection("company")}
												className="flex w-full items-center justify-between rounded-lg border-2 border-border bg-card p-3 text-left font-medium transition-colors hover:bg-accent"
											>
												<span className="font-inter font-semibold">Digital Marketing</span>
												<ChevronRight
													className={cn(
														"size-5 transition-transform duration-300",
														expandedSection === "company" && "rotate-90"
													)}
												/>
											</button>
											<AnimatePresence>
												{expandedSection === "company" && (
													<motion.div
														variants={sectionVariants}
														initial="collapsed"
														animate="expanded"
														exit="collapsed"
														className="overflow-hidden"
													>
														<div className="mt-2 space-y-2 pl-2">
															{[...companyLinks, ...companyLinks2].map((link, i) => (
																<MotionLink
																	key={i}
																	href={link.href}
																	initial={{ opacity: 0, x: -10 }}
																	animate={{ opacity: 1, x: 0 }}
																	transition={{ delay: i * 0.05 }}
																	className="flex items-center gap-3 rounded-lg border-2 border-border bg-card p-3 transition-all hover:bg-accent hover:border-accent-foreground/20"
																	onClick={() => setOpen(false)}
																>
																	<div className="flex size-10 shrink-0 items-center justify-center rounded-md border-2 bg-background">
																		<link.icon className="size-5" />
																	</div>
																	<div className="flex-1 min-w-0">
																		<p className="font-semibold text-sm font-inter">{link.label}</p>
																		{link.description && (
																			<p className="text-xs text-muted-foreground line-clamp-2 font-inter font-medium">
																				{link.description}
																			</p>
																		)}
																	</div>
																</MotionLink>
															))}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</motion.div>

										{/* Contact Link */}
										<MotionLink
											variants={itemVariants}
											href="/contact"
											className="flex items-center justify-between rounded-lg border-2 border-border bg-card p-3 font-medium transition-colors hover:bg-accent"
											onClick={() => setOpen(false)}
										>
											<span className="font-inter font-semibold">Contact</span>
											<ChevronRight className="size-5" />
										</MotionLink>
									</div>
								</motion.div>

								{/* Footer Actions */}
								<div className="border-t-2 border-border p-4 space-y-3">
									<Button className="w-full border-2" variant="outline" size="lg" asChild>
										<Link href="/services/seo" className="font-inter font-semibold" onClick={() => setOpen(false)}>Explore Services</Link>
									</Button>
									<Button className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity" size="lg" asChild>
										<Link href="/contact" className="font-inter font-semibold" onClick={() => setOpen(false)}>Test Your Website</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					</motion.div>,
					document.body
				)}
		</>
	);
}
