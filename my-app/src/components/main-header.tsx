import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="w-full max-w-3xl m-auto bg-gray-100 dark:bg-black p-4">
      <nav className="flex gap-4">
        <Link href="/" className="text-xl font-bold">
          Monster Hunter Wilds Companion
        </Link>
        <Link
          href="/armor"
          className="text-lg text-gray-600 hover:text-gray-900"
        >
          Armor
        </Link>
        <Link
          href="/weapons"
          className="text-lg text-gray-600 hover:text-gray-900"
        >
          Weapons
        </Link>
        <Link
          href="/charms"
          className="text-lg text-gray-600 hover:text-gray-900"
        >
          Charms
        </Link>
        <Link
          href="/skills"
          className="text-lg text-gray-600 hover:text-gray-900"
        >
          Skills
        </Link>
        <Link
          href="/decorations"
          className="text-lg text-gray-600 hover:text-gray-900"
        >
          Decorations
        </Link>
      </nav>
    </header>
  );
}
