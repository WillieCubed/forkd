import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="">
      <div className="p-4 max-w-4xl mx-auto">
        <div className="mt-16 text-5xl font-bold font-display">Whoops, that page couldn&apos;t be found.</div>
        <div className="mt-4 text-xl">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</div>
        {/* Go home */}
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center bg-primary text-on-primary rounded-full px-4 h-10">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}