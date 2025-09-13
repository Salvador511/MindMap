'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="mb-2 text-3xl font-bold">Page not found</h1>
      <p className="mb-6 text-neutral-300">The page you are looking for does not exist.</p>
      <Link href="/" className="rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700">Go home</Link>
    </div>
  );
}
