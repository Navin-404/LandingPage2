"use client";

import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProblemSection } from "@/components/problem/ProblemSection";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";

// Note: For this example, I've only separated Navbar and Hero as requested.
// In a full project, you would create folders for all sections.

// Placeholder for other sections to keep the file working without errors
const ProblemSectionPlaceholder = () => <div className="py-24 text-center text-gray-500">Problem Section...</div>;
const HowItWorksPlaceholder = () => <div className="py-24 text-center text-gray-500">How It Works Section...</div>;
const FinalCTAPlaceholder = () => <div className="py-24 text-center text-gray-500">Final CTA Section...</div>;
const FooterPlaceholder = () => <div className="py-12 text-center text-gray-500 border-t border-white/10">Footer...</div>;


export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary/20">
      <Navbar />
      <Hero />
      <div className="space-y-0 bg-background relative z-10">
        {/* Replace with actual components when ready */}
        <ProblemSectionPlaceholder />
        <HowItWorksPlaceholder />
        <FinalCTAPlaceholder />
      </div>
      <FooterPlaceholder />
    </main>
  );
}