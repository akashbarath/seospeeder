import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

type Integration = {
	src: string;
	name: string;
	description: string;
	isInvertable?: boolean;
};

const data: Integration[] = [
	{
		src: "https://storage.efferd.com/logo/vercel.svg",
		name: "Vercel",
		description: "Seamless deployment and edge-native performance for modern web apps.",
		isInvertable: true,
	},
	{
		src: "https://storage.efferd.com/logo/openai.svg",
		name: "OpenAI",
		description: "Next-gen AI content analysis and predictive performance modeling.",
		isInvertable: true,
	},
	{
		src: "https://storage.efferd.com/logo/supabase.svg",
		name: "Supabase",
		description: "Real-time data architecture with low-latency backend optimisation.",
	},
	{
		src: "https://storage.efferd.com/logo/notion.svg",
		name: "Notion",
		description: "Unified workflow integration for seamless content and SEO management.",
	},
	{
		src: "https://storage.efferd.com/logo/cloudflare.svg",
		name: "Cloudflare",
		description: "Global edge network integration for sub-100ms content delivery.",
		isInvertable: true,
	},
	{
		src: "https://storage.efferd.com/logo/shopify.svg",
		name: "Shopify",
		description: "Precision speed optimisations for high-conversion e-commerce engines.",
	},
];

export function Integrations() {
	return (
		<div
			className={cn(
				"mx-auto grid max-w-5xl gap-1 overflow-hidden rounded-md bg-secondary p-1 sm:grid-cols-2 lg:grid-cols-3 dark:bg-secondary/50"
			)}
		>
			{data.map((item) => (
				<div
					className={cn(
						"group relative flex flex-col justify-between gap-2 rounded-md bg-background p-6 shadow-sm border border-transparent hover:border-primary/20 transition-all duration-300"
					)}
					key={item.name}
				>
					<div className="flex items-center justify-between">
						<Image
							alt={item.name}
							className={cn(
								"pointer-events-none size-8 shrink-0 select-none object-contain",
								item.isInvertable && "dark:invert"
							)}
							height={32}
							src={item.src}
							width={32}
						/>
						<div className="size-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
					</div>
					<div className="space-y-2 mt-4">
						<h3 className="font-bold text-lg">{item.name}</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{item.description}
						</p>
					</div>
				</div>
			))}
			<div className="relative flex items-center justify-center py-6 sm:col-span-2 lg:col-span-3">
				<Button asChild className="group text-sm font-bold" size="sm" variant="link">
					<a href="#">
						Explore Full Ecosystem
						<ArrowUpRightIcon className="ml-2 size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
					</a>
				</Button>
			</div>
		</div>
	);
}
