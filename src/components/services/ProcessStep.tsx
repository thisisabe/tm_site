export function ProcessStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-sm text-text-muted font-sans">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-text-body leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
