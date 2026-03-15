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

export function DesktopNav() {
	const [isAuditHovered, setIsAuditHovered] = React.useState(false);

	return (
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList className="gap-2 lg:gap-1 space-x-0">
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="px-4 text-base font-semibold">
						<Link className="rounded-md p-2 hover:bg-accent font-inter font-semibold" href="/about#about-section">
							About
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent text-base font-semibold font-inter">
						Optimisation
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-2 p-4 md:w-[650px] md:grid-cols-2 lg:w-[950px] lg:grid-cols-3">
							{productLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} className="p-2" />
								</NavigationMenuLink>
							))}
						</ul>
						<div className="border-t p-4">
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
					<NavigationMenuTrigger className="bg-transparent text-base font-semibold font-inter">
						Digital Marketing
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
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
						<Link className="rounded-md p-2 hover:bg-accent font-inter font-semibold" href="/contact">
							Contact
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
