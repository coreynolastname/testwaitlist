import Image from "next/image";
import React from 'react';
import Navbar from './components/navbar'
import { StaraBold, StaraMedium } from './layout';

export default function Home() {
  return (
    <main className={StaraBold.className}>
      <Navbar/>
    </main>
  );
}
