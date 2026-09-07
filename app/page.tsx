import Image from "next/image";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-white px-4 overscroll-none">
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/assets/icon-red.svg"
          alt="Sunset Field"
          width={96}
          height={72}
          priority
          className="h-auto w-20 sm:w-24 pointer-events-none select-none"
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-brand-red tracking-tight">
            em breve
          </h1>
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}



