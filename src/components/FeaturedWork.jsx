import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export default function FeaturedWork({ onSelectProject, onOpenContact }) {
  return (
    <section id="work" className="py-24 md:py-32 lg:py-36 border-t border-[#EAE6DF] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-[11px] md:text-[12px] font-medium tracking-[0.22em] text-[#6E6D7A] uppercase mb-3 block">
              FEATURED WORK
            </span>
            <h2 className="text-[34px] sm:text-[40px] md:text-[46px] leading-[1.1] font-medium tracking-[-0.03em] text-[#111111]">
              Ideas We've Brought to Life
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-1.5 text-[13px] font-medium text-[#6E6D7A] hover:text-[#111111] transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E8E3DA] aspect-[16/10] mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                
                {/* Subtle Inner Border Glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Title, Category & Arrow */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#111111] group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-[#6E6D7A] font-normal mt-0.5">
                    {project.category}
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 stroke-[1.8]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
