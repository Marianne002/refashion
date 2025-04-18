// components/Navbar.jsx
import React from 'react';
// import { ShoppingCartIcon, MenuIcon, SearchIcon, UserIcon } from 'lucide-react'

const Navbar = () => {
    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <button className="mr-4 md:hidden">
                           Menu Icon
                        </button>
                        <a href="/" className="text-xl font-bold text-gray-800">
                            BoxCraft
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="text-gray-800 hover:text-gray-600">
                            Home
                        </a>
                        <a
                            href="/products"
                            className="text-gray-800 hover:text-gray-600 font-medium"
                        >
                            Products
                        </a>
                        <a href="/about" className="text-gray-800 hover:text-gray-600">
                            About
                        </a>
                        <a href="/contact" className="text-gray-800 hover:text-gray-600">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-gray-900">
                            Search Icon
                        </button>
                        <button className="text-gray-700 hover:text-gray-900">
                            User Icon
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 relative">
                            Cart Icon
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar