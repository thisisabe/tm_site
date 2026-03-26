import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto max-w-6xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
