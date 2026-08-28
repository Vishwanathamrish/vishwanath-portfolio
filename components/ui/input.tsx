import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-md border bg-background/70 px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
