import React from 'react';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Stay updated with the latest trends in web performance and SEO optimisation.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for blog posts */}
        <div className="rounded-xl border bg-card overflow-hidden shadow-sm">
          <div className="h-48 bg-muted animate-pulse" />
          <div className="p-6">
            <div className="h-6 w-3/4 bg-muted rounded mb-4" />
            <div className="h-4 w-full bg-muted rounded mb-2" />
            <div className="h-4 w-2/3 bg-muted rounded" />
          </div>
        </div>
        <div className="rounded-xl border bg-card overflow-hidden shadow-sm">
          <div className="h-48 bg-muted animate-pulse" />
          <div className="p-6">
            <div className="h-6 w-3/4 bg-muted rounded mb-4" />
            <div className="h-4 w-full bg-muted rounded mb-2" />
            <div className="h-4 w-2/3 bg-muted rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
