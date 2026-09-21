import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Code, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { motion } from 'framer-motion';

const iconMap = {
  ShoppingBag: ShoppingBag,
  CodeXml: Code,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function Services({ onSelectService, onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 md:py-32 lg:py-36 border-t border-[#EAE6DF] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Top Header & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <span className="text-[11px] md:text-[12px] font-medium tracking-[0.22em] text-[#6E6D7A] uppercase mb-4 block">
              OUR SERVICES
            </span>

            <h2 className="text-[36px] sm:text-[42px] md:text-[48px] leading-[1.08] font-medium tracking-[-0.03em] text-[#111111] mb-5">
              End-to-End Digital<br />
              Solutions
            </h2>

            <p className="text-[15px] leading-[1.65] text-[#6E6D7A] mb-8 font-normal">
              From Shopify stores to custom software and AI solutions, we build digital experiences that help your business move forward.
            </p>

            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center space-x-2 text-[14px] font-medium text-[#111111] group hover:text-[#444449] transition-colors cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 4 Minimalist Service Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-6 lg:gap-6 pt-2">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || ShoppingBag;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => onSelectService ? onSelectService(service) : setSelectedService(service)}
                  className="flex flex-col items-start group cursor-pointer p-4 -m-4 rounded-xl hover:bg-[#F4F0E8]/70 transition-all duration-200"
                >
                  {/* Minimalist Line Icon */}
                  <div className="w-10 h-10 mb-6 flex items-center justify-start text-[#111111] group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-6 h-6 stroke-[1.4]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[16px] md:text-[17px] font-semibold text-[#111111] mb-3 tracking-[-0.01em]">
                    {service.title}
                  </h3>

                  {/* Service Short Description */}
                  <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#6E6D7A] font-normal">
                    {service.shortDesc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
