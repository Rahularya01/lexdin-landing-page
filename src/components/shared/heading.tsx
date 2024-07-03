import { forwardRef } from "react";
import { H2, Text } from "../ui/typography";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.ComponentPropsWithRef<"div"> {
  title: string;
  description: string;
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ description, title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto flex flex-col items-center gap-3 text-center",
          className,
        )}
        {...props}
      >
        <H2>{title}</H2>
        <Text>{description}</Text>
      </div>
    );
  },
);

SectionHeading.displayName = "SectionHeading";
