import { DecorIcon } from "@/components/ui/decor-icon";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
	return (
		<div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-6 px-6 md:px-12 py-16 md:py-20 group isolate overflow-hidden mt-8 mb-8">
			
			{/* BASE STRUCTURAL GRID (2px continuous lines) */}
			<div className="absolute inset-0 border-y-2 border-border/40 pointer-events-none transition-colors duration-700 group-hover:border-primary/20" />
			<div className="absolute -inset-y-16 left-0 w-[2px] bg-border/40 pointer-events-none transition-colors duration-700 group-hover:bg-primary/20" />
			<div className="absolute -inset-y-16 right-0 w-[2px] bg-border/40 pointer-events-none transition-colors duration-700 group-hover:bg-primary/20" />
			<div className="absolute top-0 left-1/2 -z-10 h-full w-[2px] -translate-x-[1px] border-l-2 border-dashed border-border/40 transition-colors duration-700 group-hover:border-primary/20" />

			{/* ========================================================== */}
			{/* PREMIUM "LASER" TRACE ARRAYS (Only appear on hover, ultra-smooth) */}
			{/* ========================================================== */}
			
			{/* Top laser */}
			<div className="absolute top-[-1px] inset-x-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
				<div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[traceRight_4s_ease-in-out_infinite]" />
			</div>
			{/* Bottom laser */}
			<div className="absolute bottom-[-1px] inset-x-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
				<div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[traceLeft_4s_ease-in-out_infinite_1s]" />
			</div>
			
			{/* Left laser */}
			<div className="absolute inset-y-0 left-[-1px] w-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
				<div className="h-1/2 w-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[traceDown_5s_ease-in-out_infinite_0.5s]" />
			</div>
			{/* Right laser */}
			<div className="absolute inset-y-0 right-[-1px] w-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
				<div className="h-1/2 w-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[traceUp_5s_ease-in-out_infinite_1.5s]" />
			</div>

			{/* Central ambient core glow */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

			{/* ========================================================== */}
			
			{/* Structural corners */}
			<DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute top-[-12px] left-[-12px]" position="top-left" />
			<DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute top-[-12px] right-[-12px]" position="top-right" />
			<DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute bottom-[-12px] left-[-12px]" position="bottom-left" />
			<DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute bottom-[-12px] right-[-12px]" position="bottom-right" />

			<div className="space-y-6 max-w-3xl relative z-10 text-center mx-auto">
				<h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-foreground leading-[1.1]">
					Ready to outrun the <span className="text-primary pr-2">competition?</span>
				</h2>
				<p className="text-balance text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-inter bg-background/50 py-2 inline-block">
					Join thousands of fast-growing brands who have transformed their digital presence. Your site&apos;s speed is your business&apos;s growth engine.
				</p>
			</div>

			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10 w-full sm:w-auto">
				<Button asChild variant="outline" className="h-14 px-8 w-full sm:w-auto rounded-xl font-bold text-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors">
					<Link href="/contact">Talk to Sales</Link>
				</Button>
				<Button className="relative overflow-hidden h-14 px-10 w-full sm:w-auto rounded-xl font-bold text-lg shadow-[0_0_30px_-10px_rgba(var(--primary),0.4)] hover:shadow-[0_0_40px_-5px_rgba(var(--primary),0.6)] transition-all duration-500 group/btn">
					{/* Premium Glossy Sweep Background */}
					<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
					
					<span className="relative z-10 flex items-center gap-2">
						Get free audit
						{/* Double Arrow Fly-Through Effect */}
						<div className="relative overflow-hidden flex items-center justify-center size-5 ml-1">
							<ArrowRightIcon className="absolute inset-0 size-5 transition-transform duration-500 ease-out group-hover/btn:translate-x-[200%]" />
							<ArrowRightIcon className="absolute inset-0 size-5 -translate-x-[200%] transition-transform duration-500 ease-out group-hover/btn:translate-x-0" />
						</div>
					</span>
				</Button>
			</div>

			<style dangerouslySetInnerHTML={{ __html: `
				@keyframes traceRight {
					0% { transform: translateX(-100%); }
					50% { transform: translateX(200%); }
					100% { transform: translateX(-100%); }
				}
				@keyframes traceLeft {
					0% { transform: translateX(200%); }
					50% { transform: translateX(-100%); }
					100% { transform: translateX(200%); }
				}
				@keyframes traceDown {
					0% { transform: translateY(-100%); }
					50% { transform: translateY(200%); }
					100% { transform: translateY(-100%); }
				}
				@keyframes traceUp {
					0% { transform: translateY(200%); }
					50% { transform: translateY(-100%); }
					100% { transform: translateY(200%); }
				}
			`}} />
		</div>
	);
}
