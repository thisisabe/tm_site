import clsx from "clsx";

export function SectionHeading({
  children,
  subtitle,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={clsx(
        "mb-12 sm:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-text-body leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
