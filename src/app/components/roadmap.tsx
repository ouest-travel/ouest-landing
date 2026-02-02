import React from "react";
import { GradientButton } from "./ui-components";

const stages = [
  {
    title: "BUILD.",
    desc: "Development began summer 2025. Invite-only events & social media will be ways to show progress."
  },
  {
    title: "ALPHA.",
    desc: "Sign up for alpha/beta testing to get exclusive perks."
  },
  {
    title: "LIVE & GTM.",
    desc: "As MVP goes live, we will continue to improve the product."
  }
];

export function Roadmap() {
  return (
    <section className="max-w-[1500px] mx-auto px-[40px] pt-[80px] pb-[120px]">
      <div className="border-t border-[#e9e9e9] pt-[80px] flex flex-col gap-[80px]">
        <div className="flex justify-between items-start">
          <h2 className="font-['Bernino_Sans:Semibold',sans-serif] text-[60px] tracking-[-1.8px]">The Plan</h2>
          <GradientButton href="https://app.ouest.travel">Join Beta</GradientButton>
        </div>
        
        <p className="font-['Gesta:Light',sans-serif] text-[24px] text-[#6f6f6f] max-w-[1200px]">
          The mission is to simplify planning and travel. The vision is to be the world’s social travel app connecting people through journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {stages.map((stage, i) => (
            <div key={i} className="border-t border-[#e9e9e9] pt-[60px] pb-[20px] flex flex-col gap-[60px]">
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-[#6f6f6f] tracking-[-0.96px]">{stage.title}</h3>
              <p className="font-['Gesta:Light',sans-serif] text-[24px] text-[#6f6f6f]">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
