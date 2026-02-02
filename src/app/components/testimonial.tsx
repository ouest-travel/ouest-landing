import React from "react";
import founderImage from "figma:asset/272d85223bba423f76848abe3fb77c0b51985942.png";
import { GradientText } from "./ui-components";

export function Testimonial() {
  return (
    <section className="max-w-[1500px] mx-auto px-[40px] pb-[120px]">
      <div className="flex flex-col lg:flex-row gap-[20px]">
        <div className="flex-1 aspect-[550/624] relative rounded-[30px] overflow-hidden group">
          <img 
            src={founderImage} 
            alt="Timmy Afolabi - Founder & CEO of Ouest" 
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="flex-1 border-t border-[#e9e9e9] pt-[60px] flex flex-col justify-center pl-0 lg:pl-[50px]">
          <blockquote className="font-['Bernino_Sans:Semibold',sans-serif] text-[40px] leading-tight tracking-[-1.6px] text-black mb-[50px]">
            “Born out of redefining travel planning, my focus is on building a smart and seamless experience with personalization and community at the center.”
          </blockquote>
          <div className="font-['Gesta:Light',sans-serif] text-[15px] tracking-[-0.075px]">
            <p className="text-black font-medium">Timmy Afolabi</p>
            <GradientText className="font-medium">Founder/CEO</GradientText>
          </div>
        </div>
      </div>
    </section>
  );
}
