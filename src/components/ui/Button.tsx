import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-btn-primary-bg text-btn-primary-text hover:bg-white",
  secondary:
    "bg-btn-secondary-bg text-white border border-border-light hover:bg-[#333]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
