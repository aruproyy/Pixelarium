import React from 'react';
import Home from './Home/Home';
import Exibits from './Exibit/Exibits';
import Signup from './components/Signup';
import Contact from './ContactUs/Contacts'; // Import ContactPage
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import About from './AboutUs/Abouts';

function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exibit" element={authUser ? <Exibits /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
