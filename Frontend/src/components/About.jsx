import React from 'react';

function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
            <h1 className="mt-12 text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                About <span className="text-indigo-600">Pixelarium</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                At Pixelarium, we believe that stunning visuals can transform ideas into reality. Our mission is to provide a comprehensive library of high-quality, free images to empower creators, designers, and storytellers worldwide.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                Our Vision
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                We envision a world where everyone has access to beautiful imagery that inspires and drives creativity. Our goal is to become the go-to platform for free images, fostering a community of creators who share their work with others.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                Features
            </h2>

            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                <li>🌟 Extensive Library: Thousands of high-quality images covering a wide range of categories.</li>
                <li>🔍 Easy Search: Powerful search functionality to find the perfect image in seconds.</li>
                <li>📱 Responsive Design: Access Pixelarium on any device, anytime, anywhere.</li>
                <li>🤝 Community Driven: Contribute your own images and join a growing community of creators.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                Join Us
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                Ready to unleash your creativity? Explore our vast collection of free images and become a part of the Pixelarium community today!
            </p>

            <a
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            >
                Contact Us
            </a>
        </div>
    );
}

export default About;
