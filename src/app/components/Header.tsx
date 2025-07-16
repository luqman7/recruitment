"use client";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
