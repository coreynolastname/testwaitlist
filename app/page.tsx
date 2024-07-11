import Image from "next/image";
import React from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Footer/>
    </main>
  );
}
