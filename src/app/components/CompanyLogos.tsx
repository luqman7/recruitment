"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CompanyLogos = () => {
  const logos = [
    { name: "Microsoft", url: "/microsoft-logo.png", width: 120, height: 40 },
    { name: "Oracle", url: "/oracle-logo.png", width: 100, height: 40 },
    { name: "Atlassian", url: "/atlassian-logo.png", width: 140, height: 40 },
    { name: "Cloudflare", url: "/cloudflare-logo.png", width: 130, height: 40 },
    { name: "VMware", url: "/vmware-logo.png", width: 110, height: 40 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          Who we work with
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.url}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;
