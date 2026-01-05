"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Database, Sparkles, Cpu } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-violet-50 via-cyan-50 to-transparent rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- Left: The Narrative --- */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-8"
            >
              <Cpu className="w-3 h-3" />
              <span>Infrastructure Layer</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[0.95] tracking-tighter">
              Make your brand <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                AI-Native.
              </span>
            </h2>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                The web has moved from <span className="text-gray-900 font-semibold">indexing links</span> to <span className="text-gray-900 font-semibold">ingesting knowledge</span>. 
                Kasparro builds the semantic layer that ensures your brand is understood, not just indexed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-2 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10">
                    Start Integration <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-2 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center">
                    Read the API Docs
                </button>
            </div>
            
            <div className="pt-8 border-t border-gray-100 flex gap-8">
                <div>
                    <div className="text-3xl font-black text-gray-900 mb-1">3.5x</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Citation Lift</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-gray-900 mb-1">0ms</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Latency Impact</div>
                </div>
            </div>
          </div>


          {/* --- Right: The "Exploded Stack" Visual --- */}
          {/* This creates a 3D perspective view of 3 hovering layers */}
          <div className="relative h-[600px] w-full flex items-center justify-center perspective-[2000px]">
            
            {/* Layer 3: AI Perception (Top - Glass) */}
            <motion.div 
                initial={{ y: 0, rotateX: 60, rotateZ: -45, opacity: 0 }}
                whileInView={{ y: -140, rotateX: 60, rotateZ: -45, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute w-64 h-64 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-2xl flex items-center justify-center z-30"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-3xl" />
                {/* Content inside is counter-rotated to face forward */}
                <div className="flex flex-col items-center gap-3 transform rotate-[45deg] -rotate-x-[60deg] scale-125"> 
                     <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-violet-500 fill-violet-100" />
                     </div>
                     <div className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-900 shadow-sm border border-gray-100">
                        AI Perception
                     </div>
                </div>
                
                {/* Connecting Beam Effect */}
                <div className="absolute w-1 h-32 bg-gradient-to-t from-violet-500 to-transparent top-full left-1/2 -translate-x-1/2 opacity-30 blur-sm" />
            </motion.div>


            {/* Layer 2: The Semantic Layer (Kasparro - Dark/Active) */}
            <motion.div 
                initial={{ y: 0, rotateX: 60, rotateZ: -45, opacity: 0 }}
                whileInView={{ y: 0, rotateX: 60, rotateZ: -45, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute w-64 h-64 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl flex items-center justify-center z-20 group"
            >
                {/* Glowing Grid Texture */}
                <div className="absolute inset-0 opacity-30" 
                     style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />
                
                <div className="flex flex-col items-center gap-3 transform rotate-[45deg] -rotate-x-[60deg] scale-125">
                     <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl shadow-lg shadow-violet-900/50 flex items-center justify-center border border-white/10">
                        <Layers className="w-8 h-8 text-white" />
                     </div>
                     <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                        Semantic Layer
                     </div>
                </div>
            </motion.div>


            {/* Layer 1: Raw Data (Bottom - Passive) */}
            <motion.div 
                initial={{ y: 0, rotateX: 60, rotateZ: -45, opacity: 0 }}
                whileInView={{ y: 140, rotateX: 60, rotateZ: -45, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0 }}
                className="absolute w-64 h-64 bg-gray-50 rounded-3xl border border-gray-200 flex items-center justify-center z-10"
            >
                <div className="flex flex-col items-center gap-3 transform rotate-[45deg] -rotate-x-[60deg] scale-125 opacity-50">
                     <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center">
                        <Database className="w-8 h-8 text-gray-400" />
                     </div>
                     <div className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-400 border border-gray-200">
                        Raw Brand Data
                     </div>
                </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};