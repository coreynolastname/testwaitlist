import Image from "next/image";
import React from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Waitlistcontainer from './components/waitlistcontainer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Waitlistcontainer/>
      <Footer/>
    </main>
  );
}
