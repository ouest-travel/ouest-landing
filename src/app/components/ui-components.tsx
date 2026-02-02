import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function GradientText({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span 
      className={cn("bg-clip-text text-transparent", className)}
      style={{ 
        backgroundImage: "linear-gradient(15.9125deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)",
        WebkitTextFillColor: "transparent",
        ...style 
      }}
    >
      {children}
    </span>
  );
}

export function GradientButton({ children, className, href, onClick }: { children: React.ReactNode; className?: string; href?: string; onClick?: () => void }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag 
      href={href}
      onClick={onClick}
      className={cn(
        "content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 transition-opacity hover:opacity-90",
        className
      )}
      style={{ backgroundImage: "linear-gradient(15.9125deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }}
    >
      <div className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]">
        {children}
      </div>
    </Tag>
  );
}
