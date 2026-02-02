import React from "react";
import imgScreen16Pro from "figma:asset/b12f6d90500f44b0ebba12cad925057ab723ce2b.png";
import { GradientText } from "./ui-components";

export function Hero() {
  return (
    <section id="hero" className="h-[874px] max-w-[1500px] overflow-clip relative w-full mx-auto px-[40px]">
      <div className="absolute top-0 left-0 right-0 z-10 text-center pointer-events-none">
        <h1 className="font-['Bernino_Sans:Semibold',sans-serif] leading-[0.9] text-[160px] tracking-[-6.8px] whitespace-pre-wrap">
          <GradientText>Simplify, Trip & Track.</GradientText>
        </h1>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-[362px] rounded-[30px]" 
        style={{ backgroundImage: "linear-gradient(11.0507deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }} 
      />

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-167px] h-[657px] w-[312.75px] z-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-[0.57%_1.2%] rounded-[48.75px] border-[3.75px] border-[rgba(255,198,163,0.62)]" />
          <div className="absolute inset-[1.37%_2.88%] rounded-[43.5px] border-[5.25px] border-black" />
          <div className="absolute inset-[2.66%_35.37%_93.15%_34.65%] rounded-[33px] bg-black z-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[639px] w-[294.75px] overflow-clip rounded-[43.5px]">
            <img 
              alt="iPhone Screen" 
              className="object-cover size-full" 
              src={imgScreen16Pro} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
