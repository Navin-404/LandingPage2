"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, Target } from "lucide-react";
import { CompanyLogos } from "./CompanyLogos";
import { ChessScene } from "./ChessScene";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white min-h-[90vh] flex flex-col justify-center">
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 md:left-[20%] z-0 pointer-events-auto opacity-80 md:opacity-100">
         <ChessScene />
      </div>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-0 pointer-events-none md:via-white/60" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 pointer-events-none"> 
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT: MAIN COPY --- */}
          <div className="text-left pointer-events-auto">
            
            {/* Ideology Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold tracking-wide uppercase mb-6 shadow-xl"
            >
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span>AI-First Brand Strategy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 leading-[0.95] mb-8"
            >
              Checkmate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                Algorithm
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed font-medium"
            >
              Traditional SEO is the old game. We help you master the new board: 
              <span className="text-gray-900 font-bold"> Generative Engine Optimization (GEO).</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-2xl shadow-purple-900/20">
                Analyze My Brand
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* --- RIGHT: IDEOLOGY HUD CARD --- */}
          {/* This floats over the 3D scene to show "Strategy in Action" */}
          <div className="hidden lg:flex flex-col items-end justify-center pointer-events-none pr-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-2xl max-w-xs w-full"
            >
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                        <Target className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 font-bold uppercase">System Status</div>
                        <div className="text-sm font-bold text-gray-800">Calculating Next Move...</div>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Competitor Visibility</span>
                        <span className="text-red-500 font-mono">High</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-400 h-full w-[80%]" />
                    </div>

                    <div className="flex justify-between text-xs pt-2">
                        <span className="text-gray-500">Kasparro Optimization</span>
                        <span className="text-cyan-600 font-mono">Processing</span>
                    </div>
                     <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "98%" }}
                            transition={{ duration: 2, delay: 1 }}
                            className="bg-cyan-500 h-full" 
                        />
                    </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-violet-600">WIN PROBABILITY</span>
                    <span className="text-lg font-black text-gray-900">98.4%</span>
                </div>
            </motion.div>
          </div>
          
        </div>
        
        <div className="mt-20 pt-10 pointer-events-auto">
          <CompanyLogos />
        </div>
      </div>
    </section>
  );
};