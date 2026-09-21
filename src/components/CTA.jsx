import React, { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA({ onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@becora.co');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Banner Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[240px] md:min-h-[260px] flex items-center p-8 sm:p-12 md:p-14 lg:p-16 shadow-xl"
        >
          {/* Background Silk Gradient Banner Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/cta_banner.jpg"
              alt="Silk dunes gradient background"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle dark overlay to ensure high contrast */}
            <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
          </div>

          {/* Banner Content Layout */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-10">
            
            {/* Left Side: Text */}
            <div className="max-w-[620px]">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-white/80 uppercase mb-3 block">
                LET'S BUILD TOGETHER
              </span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.12] font-medium tracking-[-0.03em] text-white">
                Ready to turn your idea<br />
                into something extraordinary?
              </h2>
            </div>

            {/* Right Side: CTA Button & Subtext */}
            <div className="flex flex-col items-start lg:items-end shrink-0">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2.5 px-8 py-3.5 bg-[#111111] text-white text-[14px] font-medium tracking-wide rounded-full hover:bg-[#242426] active:scale-[0.98] transition-all duration-200 group shadow-lg cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="mt-3 flex items-center space-x-1.5 text-[12px] sm:text-[13px] text-white/80 font-normal">
                <span>or just say hello at</span>
                <button
                  onClick={handleCopyEmail}
                  title="Click to copy email address"
                  className="text-white font-medium underline underline-offset-4 hover:text-white/90 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>hello@becora.co</span>
                  {copied ? (
                    <Check className="w-3 h-3 text-emerald-300 ml-0.5" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-60 ml-0.5" />
                  )}
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
