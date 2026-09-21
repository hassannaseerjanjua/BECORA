import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenContact }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start z-10"
          >
            {/* Kicker */}
            <span className="text-[11px] md:text-[12px] font-medium tracking-[0.4em] text-[#6E6D7A] uppercase mb-5 md:mb-6 block">
              DIGITAL PRODUCT STUDIO
            </span>

            {/* Display Headline */}
            <h1 className="text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px] leading-[1.04] font-medium tracking-[-0.035em] text-[#111111] mb-6 md:mb-7">
              The Process Of <br />
              Becoming.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#6E6D7A] max-w-[440px] mb-8 md:mb-10 font-normal">
              We craft exceptional digital products that drive real business growth. From strategy to launch, we bring your vision to life with creativity, technology, and purpose.
            </p>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-[#111111] text-white text-[14px] font-medium tracking-wide rounded-full hover:bg-[#28282B] active:scale-[0.98] transition-all duration-200 group shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Column: Layered Artistic Collage */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px]">

            {/* Glowing Soft Ambient Radial Glow Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Lavender glow */}
              <div className="w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#E9D5FF]/60 via-[#DDD6FE]/50 to-[#C4B5FD]/40 blur-3xl transform -translate-y-12 translate-x-8" />
              {/* Peach glow */}
              <div className="w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full bg-gradient-to-br from-[#FED7AA]/50 via-[#FDE68A]/40 to-[#FBCFE8]/45 blur-3xl transform translate-y-16 -translate-x-12" />
              {/* Soft sky blue glow */}
              <div className="w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full bg-gradient-to-r from-[#BAE6FD]/40 to-[#E0E7FF]/30 blur-2xl transform -translate-y-24 -translate-x-20" />
            </div>

            {/* Collage Container */}
            <div className="relative w-full max-w-[620px] lg:max-w-none h-[440px] sm:h-[500px] md:h-[560px] flex items-center justify-center">

              {/* 1. Top Right Tilted UI Card ("Better Tools. Bigger Dreams.") */}
              {/* <motion.div
                initial={{ opacity: 0, y: -20, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotate: 1, scale: 1.02 }}
                className="absolute top-2 right-2 sm:top-0 sm:right-6 md:right-10 w-[190px] sm:w-[240px] md:w-[270px] z-10"
              >
                <div className="overflow-hidden rounded-2xl dark-card-shadow border border-[#374151]/30 bg-[#121216] transition-transform duration-300">
                  <img
                    src="/images/hero_tools.jpg"
                    alt="Better Tools. Bigger Dreams. interface preview"
                    className="w-full h-auto object-cover block"
                    loading="eager"
                  />
                </div>
              </motion.div> */}

              {/* 2. Right Side Editorial Portrait (Designer with Headphones) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-6 right-0 sm:bottom-8 sm:right-4 md:right-8 w-[150px] sm:w-[190px] md:w-[220px] z-10"
              >
                <div className="overflow-hidden rounded-2xl editorial-card-shadow border border-white/60 bg-white/40 backdrop-blur-xs">
                  <img
                    src="/images/hero_designer.jpg"
                    alt="Designer at creative workstation"
                    className="w-full h-auto object-cover block aspect-[3/4]"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* 3. Center Hero Laptop Mockup (MacBook Pro - Lunara Store) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-20 w-[290px] sm:w-[380px] md:w-[460px] lg:w-[490px] top-[18%] sm:top-[16%] left-[16%] sm:left-[18%] md:left-[16%]"
              >
                <div className="rounded-2xl overflow-hidden laptop-mockup-shadow border border-[#E8E3DA]/80 bg-[#FAF8F5] transition-transform duration-300 hover:scale-[1.01]">
                  <img
                    src="/images/hero_laptop.jpg"
                    alt="MacBook Pro showcasing Lunara luxury e-commerce website"
                    className="w-full h-auto object-cover block"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* 4. Left Overlapping Smartphone Mockup ("Your AI Companion") */}
              <motion.div
                initial={{ opacity: 0, x: -25, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="absolute z-30 bottom-2 left-0 sm:bottom-4 sm:left-4 md:left-6 w-[120px] sm:w-[155px] md:w-[185px]"
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden phone-mockup-shadow border border-[#27272A]/40 bg-[#0E0E11] transition-transform duration-300">
                  <img
                    src="/images/hero_phone.jpg"
                    alt="Mobile interface showing Your AI Companion"
                    className="w-full h-auto object-cover block aspect-[3/4]"
                    loading="eager"
                  />
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
