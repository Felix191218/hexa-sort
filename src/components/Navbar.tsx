import Link from "next/link";
import Image from 'next/image';


export default function Navbar() {
    return (
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
          <Image 
            src="/hexa-sort-logo.webp" 
            alt="Hexa Sort Logo" 
            className="h-8" 
            width={32}  // You need to specify width and height for the `Image` component
            height={32}
          />
            <span className="font-bold text-lg">Hexa Sort</span>
          </div>
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/levels" className="hover:text-blue-600">Levels</Link>
            <Link href="/magic-sort" className="hover:text-blue-600">Magic Sort</Link>
            <Link href="/playonline" className="hover:text-blue-600">Play Online</Link>
            <Link href="/download" className="hover:text-blue-600">Download</Link>
            <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
          </div>
        </div>
      </nav>
    );
  }
  