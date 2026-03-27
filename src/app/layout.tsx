import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import FooterSection from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { DynamicLightRays } from "@/components/ui/dynamic-light-rays";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SEO SPEEDER | AI-Powered SEO Services",
    template: "%s | SEO SPEEDER",
  },
  description: "Skyrocket your search visibility and organic traffic with our advanced, data-driven AI SEO strategies.",
  keywords: ["SEO", "AI SEO", "Search Engine Optimization", "Organic Traffic", "SEO Agency", "Machine Learning SEO"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seospeeder.com",
    title: "SEO SPEEDER | AI-Powered SEO Services",
    description: "Skyrocket your search visibility and organic traffic with our advanced, data-driven AI SEO strategies.",
    siteName: "SEO SPEEDER",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO SPEEDER | AI-Powered SEO Services",
    description: "Skyrocket your search visibility and organic traffic with our advanced, data-driven AI SEO strategies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${bricolageGrotesque.variable} ${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-primary antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <div className="relative flex min-h-screen flex-col">
            {/* Brand lighting for project-wide consistency */}
            <div
              aria-hidden
              className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block pointer-events-none">
              <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
              <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
              <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>

            {/* Dynamic Brand Light Rays (Violet/Teal default, custom for dynamic pages) */}
            <DynamicLightRays />
            <Navbar />
            <main className="relative z-10 flex-1">{children}</main>
            <FooterSection />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
