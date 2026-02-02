import React, { useState, useEffect } from "react";
import { GradientButton } from "./ui-components";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Nav Items */}
      <div 
        className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 top-[16px]"
        style={{ opacity: scrolled ? 1 : 0.9 }}
      >
        <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.4)] flex font-['Gesta:Light',sans-serif] gap-[27px] items-center px-[24px] py-[20px] rounded-[100px] text-[14px] text-black shadow-sm">
          <button onClick={() => scrollToSection('hero')} className="hover:opacity-60 transition-opacity">About</button>
          <button onClick={() => scrollToSection('features')} className="hover:opacity-60 transition-opacity">Features</button>
          <a href="https://app.ouest.travel" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Sign-Up</a>
          <button onClick={() => scrollToSection('contact')} className="hover:opacity-60 transition-opacity">Contact</button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="flex h-[148px] items-center justify-between max-w-[1500px] pb-[80px] pt-[20px] relative w-full px-[40px] mx-auto z-40">
        <div className="font-['Bernino_Sans:Semibold',sans-serif] text-[30px] text-black tracking-[-1.5px]">
          Ouest
        </div>
        <GradientButton href="https://app.ouest.travel">
          Join Beta
          <span className="ml-1">↗</span>
        </GradientButton>
      </nav>
    </>
  );
}
