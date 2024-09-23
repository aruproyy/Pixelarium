import React from 'react';

function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
            <h1 className="mt-12 text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                Get in Touch with <span className="text-indigo-600">Pixelarium</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                Have questions, suggestions, or feedback? We'd love to hear from you! Fill out the form below or contact us directly via email.
            </p>

            {/* Contact Form */}
            <div className="w-full max-w-md sm:max-w-lg">
                <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-6 sm:px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Details */}
            <div className="mt-10 text-center">
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg mb-2">Or reach us at:</p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-lg font-semibold">
                    contact@pixelarium.com
                </p>
            </div>
        </div>
    );
}

export default ContactPage;
