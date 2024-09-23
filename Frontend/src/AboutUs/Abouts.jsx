import React from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Abouts() {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
        <About/>
        </div>
        <Footer/>
    </>
  )
}

export default Abouts