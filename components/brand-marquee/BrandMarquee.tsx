"use client";

import React from "react";
import { Hexagon, Circle, Triangle, Box, Layers, Activity, Command, Cloud, Shield } from "lucide-react";

const logos = [
  { icon: Hexagon, name: "Snapdeal" },
  { icon: Circle, name: "Matrimony" },
  { icon: Triangle, name: "Titan" },
  { icon: Box, name: "Bajaj Finserv" },
  { icon: Layers, name: "HiveMinds" },
  { icon: Activity, name: "Razorpay" },
  { icon: Command, name: "Logitech" },
  { icon: Cloud, name: "Salesforce" },
  { icon: Shield, name: "CyberArk" },
];

export const BrandMarquee = () => {
  return (
    <section className="w-full py-12 bg-white border-b border-gray-100 overflow-hidden relative">
      
      {/* Label */}
      <div className="text-center mb-8">
        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Trusted by Future-Ready Brands</p>
      </div>

      {/* Gradient Masks for smooth fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-full">
        <div className="flex items-center gap-16 animate-infinite-scroll whitespace-nowrap pl-16">
          {/* We duplicate the list to ensure seamless looping */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-violet-50 transition-colors duration-300">
                 <logo.icon className="w-6 h-6 text-gray-400 group-hover:text-violet-600 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add this animation to your global css or tailwind config if not present */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};