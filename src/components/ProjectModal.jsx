import React from 'react';
import { X, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose, onStartProject }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E8E3DA] rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#111111] shadow-sm transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image */}
          <div className="relative aspect-[16/9] w-full bg-[#ECE8E0] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                {project.category}
              </span>
              <h3 className="text-3xl font-medium tracking-tight mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#8E8D99] uppercase tracking-wider block mb-1">
                Scope & Tech
              </span>
              <p className="text-sm font-medium text-[#111111]">{project.scope}</p>
            </div>

            <p className="text-[15px] leading-relaxed text-[#6E6D7A] mb-6">
              {project.description}
            </p>

            {/* Deliverables */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#8E8D99] uppercase tracking-wider block mb-3">
                Key Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables?.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-[#4B4A54]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Results */}
            {project.results && (
              <div className="p-4 rounded-2xl bg-[#F2EEE7] border border-[#E8E3DA] mb-8">
                <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider block mb-1">
                  Measurable Impact
                </span>
                <p className="text-sm font-medium text-[#4B4A54]">{project.results}</p>
              </div>
            )}

            {/* Action */}
            <div className="flex items-center justify-between pt-2 border-t border-[#E8E3DA]">
              <span className="text-xs text-[#8E8D99]">
                Concept Case Study • BECORA Studio
              </span>
              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-white text-xs font-medium rounded-full hover:bg-[#28282B] transition-colors cursor-pointer"
              >
                <span>Build Similar Product</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
