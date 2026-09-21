import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { approachSteps } from '../data/approach';
import { motion } from 'framer-motion';

export default function Approach({ onOpenVideo }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-24 md:py-32 lg:py-36 border-t border-[#EAE6DF] relative overflow-hidden">
      
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FED7AA]/20 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Description, and 4 Steps */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
            <span className="text-[11px] md:text-[12px] font-medium tracking-[0.22em] text-[#6E6D7A] uppercase mb-4 block">
              OUR APPROACH
            </span>

            <h2 className="text-[38px] sm:text-[46px] md:text-[52px] leading-[1.08] font-medium tracking-[-0.03em] text-[#111111] mb-5">
              From Idea to<br />
              Impact
            </h2>

            <p className="text-[15px] leading-[1.65] text-[#6E6D7A] mb-10 font-normal max-w-[500px]">
              We turn your vision into a high-quality digital product — on time, and built to last. Every project is a collaboration, focused on real results and long-term growth.
            </p>

            {/* 4 Steps List */}
            <div className="w-full flex flex-col space-y-6 pt-2">
              {approachSteps.map((step, idx) => (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex items-start sm:items-baseline space-x-4 text-[14px] sm:text-[15px] group cursor-pointer"
                >
                  <span className="font-mono text-[13px] text-[#8E8D99] tracking-wider w-6 shrink-0">
                    {step.number}
                  </span>
                  <span className="font-semibold text-[#111111] shrink-0">
                    {step.name}
                  </span>
                  <span className="text-[#8E8D99] select-none shrink-0">—</span>
                  <span className="text-[#6E6D7A] group-hover:text-[#222226] transition-colors leading-[1.5]">
                    {step.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Lifestyle Scene with Video Play Button Overlay */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden editorial-card-shadow border border-[#E8E3DA] bg-white group"
            >
              <img
                src="/images/approach_laptop.jpg"
                alt="BECORA digital product studio workspace with open laptop showcasing Ideas. Design. Code. Growth."
                className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* "Watch Our Story" Play Badge Overlay */}
              <button
                onClick={onOpenVideo}
                className="absolute top-1/2 right-6 sm:right-10 -translate-y-1/2 flex flex-col items-center group/btn cursor-pointer"
                aria-label="Watch Our Story"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-black/85">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5" />
                </div>
                <span className="mt-2 text-[11px] sm:text-[12px] font-medium tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-90 group-hover/btn:opacity-100">
                  Watch Our Story
                </span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
