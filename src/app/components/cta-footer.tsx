import React from "react";
import imgImage3 from "figma:asset/0d6ef76ab8ed398b1cffdd4f5293c339b251d9f3.png";
import { GradientButton } from "./ui-components";

export function CTA() {
  return (
    <section id="contact" className="max-w-[1500px] mx-auto px-[40px]">
      <div className="pb-[40px] text-center">
        <div className="aspect-[1120/620] rounded-[30px] overflow-hidden mb-[10px]">
          <img 
            src={imgImage3} 
            alt="Fairmont Hotel" 
            className="size-full object-cover"
          />
        </div>
        <p className="font-['Gesta:Light',sans-serif] text-[15px] text-[#6f6f6f] tracking-[-0.075px]">
          The Fairmont Hotel at Lake Louise, Alberta, Canada 2024 by Timmy A
        </p>
      </div>

      <div className="border-t border-[#e9e9e9] py-[120px] text-center flex flex-col items-center gap-[40px]">
        <h2 className="font-['Bernino_Sans:Semibold',sans-serif] text-[60px] tracking-[-1.8px]">Let’s Stay in Touch.</h2>
        <p className="font-['Gesta:Light',sans-serif] text-[15px] text-[#6f6f6f] max-w-[600px]">
          We’re building Ouest together with travellers like you. Have questions, ideas, or just want to say hi?
        </p>
        <GradientButton href="https://app.ouest.travel">Join Beta <span className="ml-1">↗</span></GradientButton>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="max-w-[1500px] mx-auto px-[40px] border-t border-[#e9e9e9] py-[40px] pb-[20px]">
      <div className="flex justify-between items-center h-[40px] mb-[40px]">
        <div className="flex font-['Gesta:Light',sans-serif] gap-[27px] text-[14px]">
          <a href="https://www.instagram.com/ouesttimmy" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a>
          <a href="https://x.com/ouestapp" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Twitter/X</a>
        </div>
      </div>
      
      <div className="flex font-['Gesta:Light',sans-serif] text-[12px] text-[#485c11] tracking-[-0.12px] justify-between items-end">
        <div className="flex gap-[16px]">
          <span>© Ouest.</span>
          <span>2025</span>
        </div>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
