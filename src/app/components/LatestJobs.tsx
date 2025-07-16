"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  MapPin,
  ArrowRight,
  CirclePoundSterling,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const LatestJobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const jobs = [
    {
      id: 1,
      title: "Security Engineer",
      location: "London",
      salary: "80,000",
      color: "bg-[#FCDF69]",
      textColor: "text-[#064EA4]",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    },
    {
      id: 2,
      title: "Software Engineer",
      location: "London",
      salary: "95,000",
      color: "bg-[#064EA4]",
      textColor: "text-white",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    },
    {
      id: 3,
      title: "Security Engineer",
      location: "London",
      salary: "88,000",
      color: "bg-[#F99D76]",
      textColor: "text-[#064EA4]",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    },
    {
      id: 4,
      title: "Security Engineer",
      location: "London",
      salary: "80,000",
      color: "bg-[#FCDF69]",
      textColor: "text-[#064EA4]",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    },
    {
      id: 5,
      title: "Software Engineer",
      location: "London",
      salary: "95,000",
      color: "bg-[#064EA4]",
      textColor: "text-white",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    },
    {
      id: 6,
      title: "Security Engineer",
      location: "London",
      salary: "88,000",
      color: "bg-[#F99D76]",
      textColor: "text-[#064EA4]",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === jobs.length - 3 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, jobs.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === jobs.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - 3 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const visibleJobs = jobs.slice(currentIndex, currentIndex + 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, opacity }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Jobs
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="mb-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              key={currentIndex}
            >
              <AnimatePresence mode="wait">
                {visibleJobs.map((job, index) => (
                  <motion.div
                    key={`${job.id}-${currentIndex}`}
                    variants={itemVariants}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.8 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut" as const,
                    }}
                    className={`${job.color} rounded-2xl p-14 ${job.textColor} relative overflow-hidden cursor-pointer`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Image
                          src={"/python-logo.png"}
                          alt={`python logo`}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>

                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.4,
                        }}
                        className="text-xl font-bold mb-4"
                      >
                        {job.title}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.5,
                        }}
                        className="flex items-center gap-4 text-sm mb-4"
                      >
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CirclePoundSterling className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.6,
                        }}
                        className="text-sm mb-8"
                      >
                        {job.description}
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.7,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-12 bg-white hover:bg-white/90 text-[#064EA4] text-center rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        View this job
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-between items-center"
          >
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: jobs.length - 2 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.9,
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={currentIndex === jobs.length - 3}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mx-auto"
          >
            View more jobs
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LatestJobs;
