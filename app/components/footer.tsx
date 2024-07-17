"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (  
        <footer className='fixed bottom-0 z-10 h-12 w-full bg-violet-500 opacity-95'> 
            <div className='absolute bottom-2.5 left-5 font-stara font-bold tracking-tighter'>bundl</div>
            <Link href="/report" className='absolute bottom-2.5 right-20 font-stara font-medium tracking-tighter opacity-60 hover:opacity-80'>report problem</Link>
            <div className='absolute bottom-2 right-8'> 
                <Image
                    src="/brandmarkinversion.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                />
            </div>
        </footer>
    );
}
