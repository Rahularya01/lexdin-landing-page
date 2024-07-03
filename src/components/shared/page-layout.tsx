import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface PageLayoutProps extends React.ComponentPropsWithRef<"div"> {}

export const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("container", className)} {...props} />;
  }
);

PageLayout.displayName = "PageLayout";
