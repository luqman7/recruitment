"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 bg-white/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                Software Recruitment co.
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>For Job Seekers</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>For Clients</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>Sectors</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button className="font-semibold px-4 py-2 text-sm text-gray-700 bg-[#FCDF69] rounded-full hover:bg-yellow-500 transition-colors">
                Upload CV
              </button>
              <button className="font-semibold px-4 py-2 text-sm text-gray-700 bg-[#F99D76] rounded-full hover:bg-orange-600 transition-colors">
                Contact Us
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <span className="text-xl font-bold text-blue-600">
                Software Recruitment co.
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <a
                href="#"
                className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                <span>For Job Seekers</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                <span>For Clients</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                <span>Sectors</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            <div className="p-6 space-y-3 border-t border-gray-200">
              <button className="w-full font-semibold px-4 py-3 text-sm text-gray-700 bg-[#FCDF69] rounded-full hover:bg-yellow-500 transition-colors">
                Upload CV
              </button>
              <button className="w-full font-semibold px-4 py-3 text-sm text-gray-700 bg-[#F99D76] rounded-full hover:bg-orange-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
