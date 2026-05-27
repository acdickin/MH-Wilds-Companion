import Image from 'next/image';
import mhwHeroImage from '@/assets/mhw-hero.jpg';
export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={mhwHeroImage.src}
        alt="Monster Hunter Wilds Companion"
        className="rounded-lg"
        width={800}
        height={400}
        priority
      />
      <h1 className="text-center sm:text-left">
        Monster Hunter Wilds Companion
      </h1>
      <div className="text-2xl text-center sm:text-left">
        A companion app for Monster Hunter Wilds, built with Next.js and
        Tailwind CSS.
      </div>
    </div>
  );
}
