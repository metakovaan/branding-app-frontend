import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <img src="/logo.png" alt="Brand Logo" className="h-8 mr-2" /> {/* Add your logo here */}
        BRAND
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <Link to="/industries" className="hover:underline">
          Industries
        </Link>
        <Link to="/cases" className="hover:underline">
          Cases
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* "Let's Talk" Button */}
      <button className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">
        Let’s Talk
      </button>
    </nav>
  );
}
