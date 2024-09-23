import React, { useState, useEffect } from 'react';
import banner1 from '../../public/Banner.jpg';
import banner2 from '../../public/pic1.jpg';
import banner3 from '../../public/pic2.jpg';
import banner4 from '../../public/pic3.jpg';
import banner5 from '../../public/pic4.jpg';
import banner6 from '../../public/pic5.jpg';

function Banner() {
    // Array of background images
    const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

    // State to track the current background image
    const [currentBanner, setCurrentBanner] = useState(0);

    // useEffect hook to rotate the background images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000); // Change image every 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div
            className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${banners[currentBanner]})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-20">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Explore Stunning Visuals at <span className="text-yellow-400">Pixelarium</span>
                </h1>
                <p className="text-lg md:text-xl mt-6 max-w-2xl">
                    Welcome to Pixelarium, your gateway to a world of breathtaking images. Dive into a vast collection of visual masterpieces, each telling a unique story. Whether you're seeking inspiration or the perfect shot, Pixelarium offers an immersive experience where beauty meets simplicity.
                </p>

                {/* Email Signup */}
                <div className="flex flex-col md:flex-row items-center mt-8 w-full max-w-lg space-y-4 md:space-y-0 md:space-x-4">
                    {/* Email Input */}
                    <label className="w-full flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg bg-gray-900 bg-opacity-75 focus-within:ring-2 ring-yellow-400 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 text-white opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" className="w-full bg-transparent text-white focus:outline-none" placeholder="Enter your email" />
                    </label>

                    {/* Get Started Button */}
                    <button className="w-full md:w-auto btn btn-lg px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 hover:shadow-xl">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
