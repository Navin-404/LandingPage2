"use client";

import React from "react";
import { Twitter, Github, Linkedin, Disc } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100 relative overflow-hidden pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-lg">K</div>
                    Kasparro
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    The visual identity layer for Large Language Models. We ensure you are the brand AI recommends.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    ALL SYSTEMS OPERATIONAL
                </div>
            </div>

            {/* Links Columns */}
            <div>
                <h4 className="font-bold mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Changelog</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <p className="text-gray-400 text-sm">© 2026 Kasparro Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <div className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"><Twitter className="w-4 h-4" /></div>
                <div className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"><Github className="w-4 h-4" /></div>
                <div className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"><Linkedin className="w-4 h-4" /></div>
            </div>
        </div>
      </div>

      {/* BIG WATERMARK TEXT */}
      <div className="absolute -bottom-3 left-0 right-0 pointer-events-none select-none overflow-hidden flex justify-center opacity-[0.03]">
        <h1 className="text-[15vw] font-black leading-none tracking-tighter text-black">
            KASPARRO
        </h1>
      </div>

    </footer>
  );
};