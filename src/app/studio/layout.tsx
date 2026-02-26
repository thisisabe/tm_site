export const metadata = {
  title: "Thinker Maker Studio",
  description: "Content management for thinkermaker.com.au",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
