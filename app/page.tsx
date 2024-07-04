import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">

      <section className="py-8">
        <div className="max-w-4xl mx-auto bg-surface p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-center font-display">Welcome to Forkd</h1>
          <div className="mt-4 text-xl text-center font-display">It's GitHub, but for recipes.</div>
          <div className="mt-6 text-center">
            <Link href="/recipes/new" className="inline-flex items-center bg-primary text-on-primary rounded-full px-4 h-10">
              Create a new recipe
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto">
        {/* Features cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-surface p-4 rounded-lg">
            <h2 className="text-2xl font-bold font-display">Discover</h2>
            <p className="mt-2">Discover new recipes from the community.</p>
          </div>
          <div className="bg-surface p-4 rounded-lg">
            <h2 className="text-2xl font-bold font-display">Share</h2>
            <p className="mt-2">Share your favorite recipes with the world.</p>
          </div>
          <div className="bg-surface p-4 rounded-lg">
            <h2 className="text-2xl font-bold font-display">Collaborate</h2>
            <p className="mt-2">Work together to create the perfect dish.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
