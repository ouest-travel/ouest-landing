import React from "react";
import svgPaths from "@/imports/svg-zvo1319nda";
import { GradientButton } from "./ui-components";

const mvpFeatures = [
  "Itinerary building and sharing.",
  "Budget and Expense tracker.",
  "Community Building.",
  "Visa and entry requirements with AI insights.",
  "Simple & Seamless User experience."
];

const comingLater = [
  "Flight and Stay integration.",
  "AI planning.",
  "Where I’ve Been.",
  "Creator Hub.",
  "Pro & Org Version."
];

export function SpecificationsTable() {
  return (
    <section className="max-w-[1500px] mx-auto px-[40px] pb-[120px]">
      <div className="border-t border-[#cecece] py-[80px] text-center flex flex-col items-center gap-[40px]">
        <h2 className="font-['Bernino_Sans:Semibold',sans-serif] text-[60px] leading-[0.9] tracking-[-1.8px]">
          Why Fly with Ouest?
        </h2>
        <p className="font-['Gesta:Light',sans-serif] text-[15px] text-[#6f6f6f] max-w-[600px]">
          We have what you need to facilitate a memorable experience. Be the first to hear about our alpha launch and new features.
        </p>
        <GradientButton href="https://app.ouest.travel">Sign Up</GradientButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e9e9e9] rounded-[20px] overflow-hidden shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] bg-white">
        {/* MVP Column */}
        <div className="flex flex-col">
          <div className="h-[96px] border-b border-[#cecece] flex items-center justify-center">
            <h3 className="font-['Bernino_Sans:Semibold',sans-serif] text-[25px] tracking-[-2px]">MVP</h3>
          </div>
          {mvpFeatures.map((feature, i) => (
            <div key={i} className="px-[30px] py-[32px] border-b border-[#e9e9e9] flex items-center gap-[8px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.p4418470} fill="black" />
              </svg>
              <span className="font-['Gesta:Light',sans-serif] text-[15px] text-black">{feature}</span>
            </div>
          ))}
        </div>

        {/* Coming Later Column */}
        <div className="flex flex-col bg-[#fafafa]">
          <div className="h-[96px] border-b border-[#cecece] flex items-center justify-center">
            <h3 className="font-['Bernino_Sans:Semibold',sans-serif] text-[21px] text-[#6f6f6f] tracking-[-1.7px]">Coming Later</h3>
          </div>
          {comingLater.map((feature, i) => (
            <div key={i} className="px-[30px] py-[32px] border-b border-[#e9e9e9] border-l border-[#e9e9e9] flex items-center gap-[8px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.pad89800} fill="black" />
              </svg>
              <span className="font-['Gesta:Light',sans-serif] text-[15px] text-black">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
