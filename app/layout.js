import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'MindMap Maker',
  description: 'Easily organize your thoughts and visualize ideas.',
};

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-grid h-6 w-6 place-items-center rounded bg-brand-600 text-xs">MM</span>
          <span>MindMap Maker</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/create" className="rounded-md px-3 py-1.5 hover:bg-neutral-800">Create Mindmap</Link>
          <Link href="/templates" className="rounded-md px-3 py-1.5 hover:bg-neutral-800">Templates</Link>
          <a href="#pricing" className="rounded-md px-3 py-1.5 hover:bg-neutral-800">Pricing</a>
          <Link href="#" className="rounded-md border border-neutral-700 px-3 py-1.5 hover:bg-neutral-800">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-10 text-sm text-neutral-300">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-grid h-6 w-6 place-items-center rounded bg-brand-600 text-xs">MM</span>
          <span className="text-neutral-200">MindMap</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/create" className="hover:text-white">Create</Link>
          <Link href="/templates" className="hover:text-white">Templates</Link>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Nav />
        <main className="container-page py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
