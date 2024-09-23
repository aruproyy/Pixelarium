import React from 'react'
import Navbar from '../components/Navbar'
import Exibit from '../components/Exibit'
import Footer from '../components/Footer'


function Exibits() {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
        <Exibit/>
        </div>
        <Footer/>
    </>
  )
}

export default Exibits