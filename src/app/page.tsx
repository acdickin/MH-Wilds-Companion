import Image from 'next/image';
import mhwHeroImage from '@/assets/mhw-hero.jpg';
export default function Home() {
  return (
    <>
      <Image
        src={mhwHeroImage.src}
        alt="Monster Hunter Wilds Companion"
        className="rounded-lg"
        width={800}
        height={400}
        priority
      />
      <h4 className="text-6xl font-bold text-center sm:text-left">
        Monster Hunter Wilds Companion
      </h4>
      <div className="mt-6 text-2xl text-center sm:text-left">
        A companion app for Monster Hunter Wilds, built with Next.js and
        Tailwind CSS.
      </div>
    </>
  );
}
