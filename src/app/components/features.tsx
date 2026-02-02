import React from "react";
import svgPaths from "@/imports/svg-zvo1319nda";
import imgHeroImage from "figma:asset/b96135199cbe0d52ed4445916b8f75946d31aa8e.png";

const features = [
  {
    title: "Collaborative Itinerary",
    desc: "Build, Budget and Plan your trips with Friends and Family through our simple and enhanced user experience.",
    icon: svgPaths.p37c59480,
  },
  {
    title: "Global Community",
    desc: "Share and get inspired with a variety of trips and itineraries with the Oùest community.",
    icon: svgPaths.p111c3080,
  },
  {
    title: "Reducing Borders",
    desc: "Border knowledge, simplified. We’ll tell you exactly what documents or visas you need while planning.",
    icon: svgPaths.p1d817280,
  },
  {
    title: "Customize and Explore",
    desc: "Pick your theme, colours, and style - Luxury, chill, or adventure, make your trip look and feel like you.",
    icon: svgPaths.p3f011b00,
  }
];

export function Features() {
  return (
    <section id="features" className="max-w-[1500px] mx-auto px-[40px] pt-[80px]">
      <div className="border-t border-[#e9e9e9] pt-[80px] pb-[60px]">
        <div className="flex flex-col gap-[50px]">
          <div className="max-w-[848px]">
            <h2 className="font-['Bernino_Sans:Semibold',sans-serif] text-[48px] text-[#6f6f6f] tracking-[-1.44px] leading-tight">
              A Collaborative, Fun and Intuitive App that is your pocket travel buddy.
            </h2>
            <p className="font-['Gesta:Light',sans-serif] text-[15px] text-black mt-[50px]">Features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[40px]">
            {features.map((feature, i) => (
              <div key={i} className="border-t border-[#e9e9e9] pt-[40px] pb-[40px] flex flex-col gap-[24px]">
                <div className="size-[24px]">
                  <svg className="size-full" fill="none" viewBox="0 0 24 24">
                    <path d={feature.icon} fill="black" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-['Bernino_Sans:Semibold',sans-serif] text-[18px] text-black tracking-[-0.54px]">{feature.title}</h3>
                  <p className="font-['Gesta:Light',sans-serif] text-[15px] text-[#6f6f6f] leading-[1.4] tracking-[-0.075px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-[120px]">
        <div className="h-[620px] relative rounded-[30px] overflow-hidden mb-[10px]">
          <img 
            alt="Peyto Lake" 
            className="absolute h-full w-full object-cover" 
            src={imgHeroImage} 
          />
        </div>
        <p className="font-['Gesta:Light',sans-serif] text-[15px] text-[#6f6f6f] tracking-[-0.075px]">
          Peyto Lake, Alberta, Canada. 2024 By Timmy A
        </p>
      </div>
    </section>
  );
}
