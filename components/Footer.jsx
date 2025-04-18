// components/Navbar.jsx
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                                About BoxCraft
                            </h3>
                            <p className="text-gray-600 text-sm">
                                BoxCraft provides high-quality storage solutions for homes and
                                businesses. Our products are made from sustainable materials and
                                designed to last.
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    Facebook Icon
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    Twitter Icon
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    Instagram Icon
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    YouTube Icon
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                                Shop
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        All Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Storage Boxes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Moving Kits
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Organizational Tools
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Gift Boxes
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                                Customer Service
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Returns & Exchanges
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 text-sm"
                                    >
                                        Track Your Order
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                                Newsletter
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Subscribe to our newsletter for new products and special offers.
                            </p>
                            <form>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="min-w-0 flex-1 appearance-none border border-gray-300 bg-white py-2 px-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 rounded-l-md"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 border border-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-r-md"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            &copy; BoxCraft. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
};

export default Footer;