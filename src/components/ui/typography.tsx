import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";

export const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-muted/55 font-normal",
      secondary: "text-secondary-foreground font-normal",
    },

    size: {
      default: "text-base leading-[1.5] tracking-[0.01rem]",
      lg: "text-lg leading-[30px]",
      sm: "text-sm leading-6",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface H1Props extends React.ComponentPropsWithRef<"h1"> {}
interface H2Props extends React.ComponentPropsWithRef<"h2"> {}
interface H3Props extends React.ComponentPropsWithRef<"h3"> {}
interface H4Props extends React.ComponentPropsWithRef<"h4"> {}

interface TextProps
  extends React.ComponentPropsWithRef<"p">,
    VariantProps<typeof textVariants> {}

interface StrokeTextProps extends React.ComponentPropsWithRef<"span"> {
  color?: string;
}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "text-3xl font-semibold leading-[44px] md:text-5xl md:leading-[1.4]",
          className,
        )}
        {...props}
      />
    );
  },
);

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "text-2xl font-bold text-muted md:text-[34px] md:leading-[1.4]",
          className,
        )}
        {...props}
      />
    );
  },
);

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-xl font-bold text-muted lg:text-2xl", className)}
        {...props}
      />
    );
  },
);

export const H4 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-lg font-bold tracking-[1.4] text-muted", className)}
        {...props}
      />
    );
  },
);
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(textVariants({ className, size, variant }))}
        {...props}
      />
    );
  },
);

export const SecondaryText = forwardRef<
  HTMLSpanElement,
  Omit<StrokeTextProps, "color">
>(({ className, ...props }, ref) => {
  return (
    <span ref={ref} className={cn("text-secondary", className)} {...props} />
  );
});

H1.displayName = "H1";
H2.displayName = "H2";
H3.displayName = "H3";
H4.displayName = "H4";
SecondaryText.displayName = "SecondaryText";

Text.displayName = "Text";
