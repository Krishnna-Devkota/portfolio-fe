import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        404 - Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10"
      >
        Return Home
      </Link>
    </div>
  );
}
