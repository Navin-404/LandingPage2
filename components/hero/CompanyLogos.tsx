import React from "react";
import { Activity, Box, Circle, Hexagon, Triangle, Layers } from "lucide-react";
import { motion } from "framer-motion";

const logos = [
  { icon: Hexagon, name: "Snapdeal" },
  { icon: Circle, name: "matrimony.com" },
  { icon: Triangle, name: "TITAN" },
  { icon: Box, name: "BAJAJ" },
  { icon: Layers, name: "HiveMinds" },
  { icon: Activity, name: "Razorpay" },
];

export const CompanyLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all">
          {/* Icons colored to look like real brands in light mode */}
          <logo.icon className="h-8 w-8 text-gray-400 group-hover:text-blue-600 transition-colors" strokeWidth={2} />
          <span className="text-xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors">{logo.name}</span>
        </div>
      ))}
    </motion.div>
  );
};