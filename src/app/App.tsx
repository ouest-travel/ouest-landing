import React from "react";
import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { Features } from "@/app/components/features";
import { FeaturesCarousel } from "@/app/components/carousel";
import { SpecificationsTable } from "@/app/components/specs-table";
import { Testimonial } from "@/app/components/testimonial";
import { Roadmap } from "@/app/components/roadmap";
import { CTA, Footer } from "@/app/components/cta-footer";

function LogoCloud() {
  return (
    <div className="max-w-[1500px] mx-auto py-[50px] text-center border-b border-[#e9e9e9]/30">
      <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#6f6f6f] tracking-[-0.075px]">
        Helping your Trips leave the group chat.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-pink-100">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <FeaturesCarousel />
        <SpecificationsTable />
        <Testimonial />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
