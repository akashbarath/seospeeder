import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { companyLinks, companyLinks2, productLinks } from "@/components/nav-links";
import { LinkItem } from "@/components/sheard";
import Link from "next/link";
import React from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { LightRays } from "@/components/ui/light-rays";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/config/services";

export function DesktopNav({ hasScrolled }: { hasScrolled?: boolean }) {
	const [isAuditHovered, setIsAuditHovered] = React.useState(false);
	const pathname = usePathname();

	const rayColor = React.useMemo(() => {
		const defaultColors = ["rgba(45, 187, 176, 0.35)", "rgba(139, 92, 246, 0.25)"];
		if (!pathname) return defaultColors;

		const serviceMatch = pathname.match(/\/(services|products)\/([^/]+)/);
		if (serviceMatch) {
			const slug = serviceMatch[2];
			const service = SERVICES.find((s) => s.slug === slug);
			if (service) {
				const primaryColor = service.color;
				let secondaryColor = primaryColor.replace(/[\d.]+\)$/, "0.2)");
				
				if (slug === "wordpress") secondaryColor = "rgba(14, 165, 233, 0.25)";
				if (slug === "shopify") secondaryColor = "rgba(16, 185, 129, 0.25)";
				if (slug === "magento") secondaryColor = "rgba(245, 158, 11, 0.25)";
				if (slug === "laravel") secondaryColor = "rgba(251, 146, 60, 0.25)";
				
				return [primaryColor, secondaryColor];
			}
		}

		if (pathname === "/about") {
			return ["rgba(16, 185, 129, 0.35)", "rgba(14, 165, 233, 0.25)"];
		}

		if (pathname === "/contact") {
			return ["rgba(245, 158, 11, 0.35)", "rgba(249, 115, 22, 0.25)"];
		}

		return defaultColors;
	}, [pathname]);

	return (
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList className="gap-2 lg:gap-1 space-x-0">
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="px-4 text-base font-semibold">
						<Link className="rounded-md p-2 border-2 border-transparent hover:border-border hover:bg-accent font-inter font-semibold transition-all" href="/about#about-section">
							About
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent text-base font-semibold font-inter border-2 border-transparent hover:border-border transition-all">
						Optimisation
					</NavigationMenuTrigger>
					<NavigationMenuContent className="relative overflow-hidden">
						{!hasScrolled && (
							<LightRays
								className="absolute inset-0 z-0"
								count={7}
								color={rayColor}
								blur={35}
								speed={18}
								length="120%"
							/>
						)}
						<ul className="relative z-10 grid w-[400px] gap-2 p-4 md:w-[650px] md:grid-cols-2 lg:w-[950px] lg:grid-cols-3">
							{productLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} className="p-2" />
								</NavigationMenuLink>
							))}
						</ul>
						<div className="relative z-10 border-t p-4">
							<p className="text-muted-foreground text-sm font-inter font-medium leading-relaxed">
								Need help optimising?{" "}
								<Link 
									href="/contact" 
									className="font-medium text-foreground inline-block"
									onMouseEnter={() => setIsAuditHovered(true)}
									onMouseLeave={() => setIsAuditHovered(false)}
								>
									<span className="relative">
										{isAuditHovered ? (
											<Highlighter action="underline" color="hsl(var(--primary))" padding={2}>
												Get a free audit
											</Highlighter>
										) : (
											"Get a free audit"
										)}
									</span>
								</Link>
							</p>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent text-base font-semibold font-inter border-2 border-transparent hover:border-border transition-all">
						Digital Marketing
					</NavigationMenuTrigger>
					<NavigationMenuContent className="relative overflow-hidden">
						{!hasScrolled && (
							<LightRays
								className="absolute inset-0 z-0"
								count={6}
								color={rayColor}
								blur={35}
								speed={18}
								length="120%"
							/>
						)}
						<ul className="relative z-10 grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
							<div className="space-y-3 col-span-3">
								<h4 className="text-sm font-semibold leading-none px-2 font-inter">SEO Services</h4>
							</div>
							{companyLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} />
								</NavigationMenuLink>
							))}
							<div className="space-y-3 col-span-3 border-t pt-3">
								<h4 className="text-sm font-semibold leading-none px-2 font-inter">Quick Links</h4>
							</div>
							{companyLinks2.map((item, i) => (
								<NavigationMenuLink
									className="flex flex-row items-center gap-2 rounded-md p-2 hover:bg-accent border-2 border-border font-inter font-medium"
									href={item.href}
									key={`item-${item.label}-${i}`}
								>
									<item.icon className="size-4 text-foreground" />
									<span className="font-semibold text-sm font-inter">{item.label}</span>
								</NavigationMenuLink>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="px-4 text-base font-semibold">
						<Link className="rounded-md p-2 border-2 border-transparent hover:border-border hover:bg-accent font-inter font-semibold transition-all" href="/contact">
							Contact
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
