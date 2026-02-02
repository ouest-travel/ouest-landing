import React, { useState } from "react";
import imgOriginal from "figma:asset/bc02206e36088a98d654c460b228add14109f3f7.png";
import imgGroup1 from "figma:asset/53d23397209d25b212312a8327f3e5905a420f28.png";
import imgGroup2 from "figma:asset/243751a7eab34f72b2c918796f7cb8a6bc092959.png";
import imgGroup3 from "figma:asset/d334e47c739d3523db87bcb8570df0af4a2d0f58.png";
import { GradientButton } from "./ui-components";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: imgOriginal,
    title: "Ouest plans better than the Group Chat.",
    desc: "Ouest allows you to build your travel itineraries on the fly and vote for what’s in (or out).",
    items: [
      "Find community built itineraries and experiences.",
      "Get your Mates, Dates and Eats on the same page.",
      "Track expenses and split costs without the awkward math.",
      "Inspire & be inspired for your next trip."
    ]
  },
  {
    image: imgGroup3,
    title: "Travel with your Favorite People.",
    desc: "Built for the group, Ouest makes coordinating schedules and preferences effortless.",
    items: [
      "Shared calendars for synchronized planning.",
      "Real-time updates across all devices.",
      "Direct group voting on activity selections.",
      "Centralized document storage for all travelers."
    ]
  },
  {
    image: imgGroup1,
    title: "Memories that Last Forever.",
    desc: "Focus on the experience while we handle the logistics and documentation.",
    items: [
      "Automated photo journals organized by location.",
      "Shared memory boards for the whole group.",
      "Seamless expense splitting with one tap.",
      "Secure storage for visas and boarding passes."
    ]
  },
  {
    image: imgGroup2,
    title: "Join a Global Travel Community.",
    desc: "Connect with travelers who share your passions and discover hidden gems.",
    items: [
      "Verified reviews from real community members.",
      "Direct messaging with local experts.",
      "Curated travel guides for every style.",
      "Exclusive community events and meetups."
    ]
  }
];

export function FeaturesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="max-w-[1500px] mx-auto px-[40px] pb-[120px]">
      <div className="flex flex-col lg:flex-row gap-[40px] h-auto lg:h-[831px]">
        {/* Text side */}
        <div className="flex-1 border-t border-[#e9e9e9] pt-[60px] pb-[80px] flex flex-col justify-between overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-[40px]"
            >
              <div className="flex flex-col gap-[40px]">
                <h2 className="font-['Bernino_Sans:Semibold',sans-serif] text-[60px] leading-[0.9] tracking-[-1.8px] text-black">
                  {slides[activeSlide].title}
                </h2>
                <p className="font-['Gesta:Light',sans-serif] text-[15px] text-[#6f6f6f] tracking-[-0.075px] max-w-[500px]">
                  {slides[activeSlide].desc}
                </p>
              </div>

              <div className="flex flex-col">
                {slides[activeSlide].items.map((item, i) => (
                  <div key={i} className="border-t border-[#e9e9e9] py-[20px] flex gap-[30px] items-start">
                    <span className="text-[#6f6f6f] font-['Gesta:Light',sans-serif] text-[15px]">0{i + 1}</span>
                    <p className="text-black font-['Gesta:Light',sans-serif] text-[15px]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center lg:justify-start mt-8">
            <GradientButton href="https://app.ouest.travel">Join Beta</GradientButton>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 relative rounded-[30px] overflow-hidden h-[500px] lg:h-full bg-gray-100">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={activeSlide}
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              custom={direction}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 size-full object-cover rounded-[30px]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          
          <div className="absolute top-[30px] right-[30px] flex gap-[10px] z-20">
            <button 
              className="size-[40px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:bg-gray-50 active:scale-90 shadow-md cursor-pointer"
              onClick={slidePrev}
              aria-label="Previous slide"
            >
              <span className="rotate-180 text-xl">→</span>
            </button>
            <button 
              className="size-[40px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:bg-gray-50 active:scale-90 shadow-md cursor-pointer"
              onClick={slideNext}
              aria-label="Next slide"
            >
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeSlide ? 1 : -1);
                  setActiveSlide(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-8 bg-white shadow-sm" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
