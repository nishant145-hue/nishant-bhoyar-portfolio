import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
};

/** Reusable button primitive. Visual variants can be refined with the design system. */
export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={classNames("ui-button", `ui-button--${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
