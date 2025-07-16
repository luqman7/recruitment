"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const x1 = useTransform(scrollY, [0, 500], [0, -150]);
  const x2 = useTransform(scrollY, [0, 500], [0, 150]);
  const leftContentX = useTransform(scrollY, [0, 500], [0, -100]);
  const rightImageX = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative bg-gradient-to-br bg-[#064EA4] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1, x: x1 }}
          className="absolute -top-28 -left-32 w-80 h-80 bg-gradient-to-br from-[#fbb191] to-[#F99D76] rounded-full"
        />

        <motion.div
          style={{ y: y2, x: x2 }}
          className="absolute -bottom-90 -right-32 w-[40rem] h-[40rem] bg-gradient-to-br from-[#f5df7c] to-[#FCDF69] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ x: leftContentX }}
          className="text-white space-y-6"
        >
          <div>
            <p className="text-sm uppercase tracking-wide text-blue-200 mb-2">
              Software Recruitment Specialists
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate your career
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-3 rounded-l-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            <button className="px-6 py-3 bg-[#FCDF69] text-gray-900 font-semibold rounded-r-full hover:bg-yellow-500 transition-colors cursor-pointers">
              Search Jobs
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ x: rightImageX }}
          className="relative"
        >
          <Image
            src="/image1.png"
            alt="Professional woman with glasses holding documents"
            width={400}
            height={500}
            priority
            className="w-full max-w-md mx-auto h-auto object-cover rounded-4xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
