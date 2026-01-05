"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Bot, AlertTriangle, Check, Zap, X, ArrowUpRight } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* --- Background: Technical Grid Floor --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ 
                  backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
                  backgroundSize: '30px 30px' 
              }} 
         />
         <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[11px] font-bold uppercase tracking-widest mb-6"
            >
                <Zap className="w-3 h-3 fill-violet-600" />
                <span>Critical Update</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 leading-[0.9]">
                The Algorithm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                    Has Evolved.
                </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
                Search engines are becoming answer engines. <br/>
                <span className="text-gray-900 font-medium">Being "ranked" is no longer enough. You need to be cited.</span>
            </p>
        </div>

        {/* --- The "Eclipse" Layout --- */}
        <div className="relative max-w-5xl mx-auto min-h-[600px] flex flex-col md:flex-row items-center justify-center">
            
            {/* 1. The OLD Way (Background, Tilted, Faded) */}
            <motion.div 
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 md:left-10 top-10 md:top-0 w-full md:w-[60%] z-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:z-20 hover:rotate-0 transition-all duration-500 ease-out"
            >
                <div className="p-10 rounded-3xl bg-gray-100 border border-gray-200 shadow-sm min-h-[450px] flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-bold uppercase rounded-full">
                            Deprecated
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-400 mb-2">Traditional SEO</h3>
                    <p className="text-gray-400 font-medium mb-10">Optimizing for robots & clicks.</p>

                    <div className="space-y-4 mt-auto">
                        {["10 blue links", "Keyword Stuffing", "Backlink Farming"].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-gray-200/50">
                                <X className="w-5 h-5 text-gray-400" />
                                <span className="text-gray-500 font-medium line-through decoration-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>


            {/* 2. The NEW Way (Foreground, Premium Dark Glass) */}
            {/* This card sits on top, creating a high-contrast 'Device' look */}
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative md:absolute md:right-0 z-10 w-full md:w-[65%] shadow-2xl shadow-violet-900/20"
            >
                <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-gray-800 overflow-hidden min-h-[500px] flex flex-col group">
                    
                    {/* Glowing Orbs in Background */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/30 blur-[120px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none opacity-40" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-10">
                            <div className="p-4 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl shadow-lg shadow-violet-900/50 text-white">
                                <Bot className="w-8 h-8" />
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                New Standard
                            </div>
                        </div>

                        <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">Generative Optimization</h3>
                        <p className="text-violet-400 font-medium mb-12 text-lg">Optimizing for Intelligence & Answers.</p>

                        <div className="space-y-4 mt-auto">
                            {[
                                { text: "AI Direct Answers", desc: "Be the single source of truth." },
                                { text: "Citation Authority", desc: "Get cited by GPT, Claude & Gemini." },
                                { text: "Zero-Click Dominance", desc: "Influence decisions before they click." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/item">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/20">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">{item.text}</div>
                                        <div className="text-gray-400 text-sm">{item.desc}</div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-600 ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:text-white transition-all" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};