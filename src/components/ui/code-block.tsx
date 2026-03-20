import * as React from "react"
import { cn } from "@/lib/utils"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  headerTitle?: React.ReactNode;
  headerRight?: React.ReactNode;
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ className, headerTitle, headerRight, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-background shadow-sm overflow-hidden flex flex-col", className)}
        {...props}
      >
        <div className="relative flex items-center justify-between px-4 py-2.5 bg-zinc-100/50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="flex space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          {headerTitle && (
            <div className="absolute left-1/2 -translate-x-1/2">
              {headerTitle}
            </div>
          )}
          {headerRight && (
            <div className="flex items-center">
              {headerRight}
            </div>
          )}
        </div>
        <div className="p-4 md:p-5 bg-white dark:bg-[#0D1117] overflow-x-auto font-jetbrains text-sm leading-relaxed">
          {children}
        </div>
      </div>
    )
  }
)
CodeBlock.displayName = "CodeBlock"

export { CodeBlock }
