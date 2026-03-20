"use client";

import { CopyButton } from "@/components/ui/copy-button";

export const Component = () => {
  const url = "https://uicat.vercel.app/";

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border rounded-t-lg w-full max-w-[300px]">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <CopyButton value={url} />
      </div>
      <pre className="p-4 rounded-b-lg bg-muted border-x border-b overflow-x-auto font-mono w-full max-w-[300px]">
        <code className="text-sm font-mono">{url}</code>
      </pre>
    </div>
  );
};
