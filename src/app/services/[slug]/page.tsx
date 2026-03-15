import React from 'react';
import { notFound } from 'next/navigation';
import { companyLinks } from '@/components/nav-links';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = companyLinks.find(s => s.href === `/services/${params.slug}`);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            {service.icon && <service.icon size={32} />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.label}</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-12">
          {service.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl border bg-card shadow-sm border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              For {service.label}, we use data-driven strategies to ensure your business stands out. 
              Our comprehensive analysis and implementation roadmap guarantee sustainable growth.
            </p>
          </div>
          <div className="p-8 rounded-3xl border bg-card shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Deliverables</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Performance Audits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Strategy Optimisation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Monthly Reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return companyLinks.map((service) => ({
    slug: service.href.split('/').pop(),
  }));
}
