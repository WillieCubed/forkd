import Link from 'next/link';

export default function SiteHeader() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-baseline bg-primary-500 text-on-primary-500">
        <Link href="/" className="text-2xl font-bold hover:text-primary transition ease-in-out duration-200 font-display">Forkd</Link>
        <div className="space-x-4">
          <Link href="/recipes" className="hover:underline">Recipes</Link>
          <Link href="/sign-up" className="hover:underline">Create account</Link>
        </div>
      </header>
    </div>
  );
}