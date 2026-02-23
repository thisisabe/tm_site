import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-8 md:px-16 lg:px-24 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        {/* Wordmark */}
        <Image
          src="/TM_wordmark_wht.svg"
          alt="Thinker Maker"
          width={169}
          height={27}
        />

        {/* Info */}
        <div className="flex flex-col gap-1.5 text-xs md:text-right">
          <a
            href="mailto:abe@thinkermaker.com.au"
            className="hover:underline underline-offset-2"
          >
            abe@thinkermaker.com.au
          </a>
          <p>Sydney, Australia</p>
          <p>&copy; {year} Thinker Maker</p>
        </div>
      </div>
    </footer>
  );
}
