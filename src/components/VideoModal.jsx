import React from 'react';
import { X, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#111111] text-white border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">STUDIO REEL</span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/80 font-mono">01:45</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Showcase Frame */}
          <div className="relative aspect-video bg-[#0A0A0C] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
            <img
              src="/images/approach_laptop.jpg"
              alt="Studio Video Reel"
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter blur-xs"
            />
            
            <div className="relative z-10 max-w-lg">
              <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto mb-4 text-white">
                <Volume2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">The Process Of Becoming</h4>
              <p className="text-sm text-white/80 leading-relaxed mb-6 font-normal">
                How BECORA crafts bespoke digital products through obsessive art direction, high-velocity engineering, and human-centric design.
              </p>
              <div className="inline-flex items-center space-x-2 text-xs font-mono px-4 py-2 rounded-full bg-white/10 text-white/90 border border-white/15">
                <span>4K MASTER • STEREO SOUND • 60 FPS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
