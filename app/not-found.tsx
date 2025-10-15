import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-xl">Page not found</p>
        <Link 
          href="/" 
          className="rounded bg-white px-6 py-3 text-black hover:bg-gray-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
