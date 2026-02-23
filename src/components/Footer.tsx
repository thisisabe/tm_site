import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end justify-between gap-10">
        {/* Wordmark */}
        <Image
          src="/TM_wordmark_wht.svg"
          alt="Thinker Maker"
          width={140}
          height={22}
          style={{ opacity: 0.6 }}
        />

        {/* Info */}
        <div className="flex flex-col gap-1.5 text-xs text-white/30 md:text-right">
          <p>Sydney, Australia</p>
          <p>&copy; {year} Thinker Maker</p>
        </div>
      </div>
    </footer>
  );
}
