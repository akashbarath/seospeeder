import React from 'react';
import { notFound } from 'next/navigation';
import { productLinks } from '@/components/nav-links';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productLinks.find(p => p.href === `/products/${params.slug}`);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            {product.icon && <product.icon size={32} />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{product.label}</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-12">
          {product.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl border bg-card shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Optimisation Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our {product.label} performance optimization service focuses on delivers measurable results. 
              We dive deep into the architecture to ensure maximum speed and efficiency.
            </p>
          </div>
          <div className="p-8 rounded-3xl border bg-card shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Faster Loading Times
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Improved User Experience
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Better Search Rankings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return productLinks.map((product) => ({
    slug: product.href.split('/').pop(),
  }));
}
