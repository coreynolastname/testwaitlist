"use client";

import Link from 'next/link';
import Image from 'next/image';
import Waitlistform from '../components/waitlistform'

export default function Waitlistcontainer() {
  return (
    <div className="relative z-10 top-64 left-1/2 transform -translate-x-1/2 translate-y-3 w-96 h-72 bg-waitlistcon rounded-3xl shadow backdrop-blur-3xl shadow-xl shadow-violet-500/30">
      <div className="absolute top-2 left-2 right-2 bottom-2 bg-indigospecial rounded-2xl">
        <div className="absolute top-12 translate-y-2 left-3 text-center -translate-x-1 font-stara font-extrabold text-3xl leading-8 tracking-[-0.09em] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent">Bundl is your personal stylist and shopper</div>
        <div className="absolute top-36 left-14 -translate-x-1.5 tracking-tighter text-xs text-center font-bold"> buy & sell fits in bundles recommended to your style </div>
        <Waitlistform/>
      </div>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 border-4 border-violet-500 rounded-full"> 
        <Image
          src="/brandmarkinversion.svg"
          alt="Logo"
          width={50}
          height={50}
         />
      </div>
    </div>
  );
}
