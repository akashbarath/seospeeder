const fs = require('fs');

// ===== FIX 1: Bento Grid (modern-wordpress-performance.tsx) =====
const bento = 'src/components/modern-wordpress-performance.tsx';
let b = fs.readFileSync(bento, 'utf8');

// Add overflow-hidden to the inner container
b = b.replace(
  'className="mx-auto max-w-7xl px-6 relative z-10"',
  'className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 overflow-hidden"'
);

// Fix grid to be single column on mobile
b = b.replace(
  'className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6"',
  'className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 overflow-hidden"'
);

// The Card 4 has an internal grid that needs to stack on mobile
b = b.replace(
  '<div className="grid md:grid-cols-2 h-full">',
  '<div className="flex flex-col md:grid md:grid-cols-2 h-full">'
);

// Fix Card 1 internal flex layout for mobile
b = b.replace(
  '<div className="flex flex-col lg:flex-row gap-10 lg:gap-16">',
  '<div className="flex flex-col gap-8 lg:flex-row lg:gap-16">'
);

// Fix large internal padding for mobile 
b = b.replace(
  '<div className="p-8 md:p-12 flex flex-col h-full">',
  '<div className="p-5 sm:p-8 md:p-12 flex flex-col h-full">'
);

// Fix header card padding for mobile
b = b.replace(
  '<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-10 sm:p-8 md:p-10 lg:p-12">',
  '<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-10 p-5 sm:p-8 md:p-10 lg:p-12">'
);

fs.writeFileSync(bento, b);
console.log('Bento grid overflow fixed.');

// ===== FIX 2: iPhone mockup metadata bar (mobile-performance-showcase.tsx) =====
const iphone = 'src/components/mobile-performance-showcase.tsx';
let ip = fs.readFileSync(iphone, 'utf8');

// Make metadata bar wrap on mobile and hide system ID on very small screens
ip = ip.replace(
  'className="flex items-center gap-4 gsap-fade-up justify-center lg:justify-start"',
  'className="flex flex-wrap items-center gap-3 sm:gap-4 gsap-fade-up justify-center lg:justify-start"'
);

// Hide the separator line on mobile
ip = ip.replace(
  '<span className="h-px w-6 bg-slate-200 dark:bg-white/10" />',
  '<span className="h-px w-6 bg-slate-200 dark:bg-white/10 hidden sm:block" />'
);

// Hide System ID on very small screens to prevent overflow
ip = ip.replace(
  '<div className="flex items-center gap-1.5 text-slate-400 dark:text-white/20 font-jetbrains text-[9px] uppercase tracking-widest">',
  '<div className="hidden sm:flex items-center gap-1.5 text-slate-400 dark:text-white/20 font-jetbrains text-[9px] uppercase tracking-widest">'
);

fs.writeFileSync(ip, ip);
console.log('iPhone metadata bar overflow fixed.');
