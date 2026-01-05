"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, ShieldCheck, AlertCircle, CheckCircle2, MoreHorizontal, Fingerprint } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <Fingerprint className="w-5 h-5 text-violet-600" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Core Capabilities</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold    text-gray-900 tracking-tight leading-tight">
                    Shape Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Digital Fingerprint.</span>
                </h2>
            </div>
            <div className="hidden md:block pb-2">
                <p className="text-gray-500 max-w-sm text-right leading-relaxed">
                    We translate your brand values into the structured data formats that Large Language Models understand.
                </p>
            </div>
        </div>

        {/* --- Dashboard Grid --- */}
        <div className="grid md:grid-cols-3 gap-6">
            
            {/* 1. Gap Analysis Widget */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
                <div className="p-8 pb-0 z-10">
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-6">
                        <Search className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">LLM Gap Analysis</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Identify where models like GPT-4 hallucinate or omit your brand entirely.
                    </p>
                </div>
                
                {/* Visual: Mock Scan List */}
                <div className="mt-8 mx-6 mb-6 bg-gray-50 rounded-xl border border-gray-100 p-4 space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-[loading_2s_ease-in-out_infinite]" />
                    {[
                        { text: "Brand Sentiment", status: "found" },
                        { text: "Pricing Accuracy", status: "missing" },
                        { text: "Feature Citations", status: "found" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-xs">
                            <span className="font-medium text-gray-600">{item.text}</span>
                            {item.status === 'found' ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : (
                                <AlertCircle className="w-4 h-4 text-red-500" />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Knowledge Graph Widget (Featured) */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="group relative bg-gray-900 rounded-[2rem] border border-gray-800 overflow-hidden shadow-2xl flex flex-col md:-mt-8 md:mb-8" // Slight offset for visual interest
            >
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />

                <div className="p-8 pb-0 z-10">
                    <div className="w-10 h-10 bg-violet-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mb-6">
                        <Share2 className="w-5 h-5 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Knowledge Graph</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Inject structured JSON-LD schema to become the factual entity in the model's training set.
                    </p>
                </div>

                {/* Visual: Code Snippet */}
                <div className="mt-8 bg-black/50 border-t border-white/10 flex-grow p-6 font-mono text-[10px] text-gray-300 leading-loose">
                    <div className="flex gap-1.5 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <p><span className="text-violet-400">"@context"</span>: "https://schema.org",</p>
                    <p><span className="text-violet-400">"@type"</span>: "Organization",</p>
                    <p><span className="text-violet-400">"name"</span>: "Kasparro",</p>
                    <p><span className="text-violet-400">"sameAs"</span>: [</p>
                    <p className="pl-4 text-green-400">"https://twitter.com/kasparro"</p>
                    <p>]</p>
                    <div className="mt-2 text-xs text-violet-500 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Validated
                    </div>
                </div>
            </motion.div>

            {/* 3. Authority Widget */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
                <div className="p-8 pb-0 z-10">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Authority</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Ensure AI summaries carry a positive sentiment and cite your official documentation.
                    </p>
                </div>

                {/* Visual: Trust Score */}
                <div className="mt-auto p-6 flex items-center justify-center">
                    <div className="relative w-full bg-blue-50 rounded-2xl p-4 border border-blue-100 flex items-center justify-between">
                         <div>
                             <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Trust Score</div>
                             <div className="text-3xl font-black text-gray-900">98<span className="text-lg text-gray-400 font-medium">/100</span></div>
                         </div>
                         
                         {/* Simple Donut Chart Representation */}
                         <div className="relative w-12 h-12">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="24" cy="24" r="20" stroke="#DBEAFE" strokeWidth="4" fill="none" />
                                <circle cx="24" cy="24" r="20" stroke="#3B82F6" strokeWidth="4" fill="none" strokeDasharray="126" strokeDashoffset="10" strokeLinecap="round" />
                            </svg>
                         </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};