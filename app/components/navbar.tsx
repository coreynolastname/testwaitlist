"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="relative z-10 h-24 bg-transparent border-b border-white/60">
      <div className="absolute top-7 left-8"> 
        <Link href="/">
          <Image
            src="/fulllogo.svg"
            alt="Logo"
            width={120}
            height={20}
          />
        </Link>
      </div>
      <ul className="flex justify-end items-center h-full pr-10"> {/* Style using Tailwind */}
        <li className="mr-8">
          <Link href="/sellers" className="text-white hover:text-gray-300 font-stara font-bold">Sell</Link>
        </li>
        <li>
          <Link href="/investors" className="text-white hover:text-gray-300 font-stara font-medium">Investors</Link>
        </li>
      </ul>
    </nav>
  );
}


