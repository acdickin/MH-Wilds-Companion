import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h3 className="text-6xl font-bold text-center sm:text-left">
        Monster Hunter Wilds Companion
      </h3>
      <div className="mt-6 text-2xl text-center sm:text-left">
        A companion app for Monster Hunter Wilds, built with Next.js and
        Tailwind CSS.
      </div>
    </>
  );
}
