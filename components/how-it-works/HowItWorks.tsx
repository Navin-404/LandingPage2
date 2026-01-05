"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanFace, Wand2, BarChart3, Crown, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Analyze",
    desc: "We scan your brand's footprint across GPT-4, Claude, and Gemini to find visibility gaps.",
    icon: ScanFace,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "02",
    title: "Optimize",
    desc: "We restructure your data into 'Answer-Ready' formats that LLMs prefer to cite.",
    icon: Wand2,
    color: "bg-violet-50 text-violet-600",
  },
  {
    id: "03",
    title: "Monitor",
    desc: "Track your 'Share of Voice' and citation frequency with our real-time dashboard.",
    icon: BarChart3,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: "04",
    title: "Dominate",
    desc: "Secure the top recommendation spot for high-intent queries in your specific niche.",
    icon: Crown,
    color: "bg-amber-50 text-amber-600",
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How We Win the Board</h2>
                <p className="text-xl text-gray-500">A four-step strategy to turn your brand into the answer.</p>
            </div>
            {/* Optional CTA Button */}
            <div className="hidden md:block">
                <button className="px-6 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                    See Case Studies <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-xl ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                    {step.id}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};