import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose, preselectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService?.title || 'Shopify & E-commerce',
    budget: 'PKR 10k - PKR 25k',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate response
    }, 400);
  };

  const servicesList = [
    'Shopify & E-commerce',
    'Web Development',
    'Custom Software Solutions',
    'AI & Automation'
  ];

  const budgetOptions = ['<PKR 10k', 'PKR 10k - PKR 25k', 'PKR 25k - PKR 50k', 'PKR 50k+'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#E8E3DA] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#6E6D7A] hover:text-[#111111] hover:bg-[#F2EEE7] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#6E6D7A] uppercase mb-2 block">
                  LET'S CONNECT
                </span>
                <h3 className="text-[26px] sm:text-[30px] font-medium tracking-[-0.03em] text-[#111111]">
                  Start Your Project
                </h3>
                <p className="text-[14px] text-[#6E6D7A] mt-1.5">
                  Tell us about your timeline and vision. We will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Choice */}
                <div>
                  <label className="block text-[12px] font-semibold tracking-wider text-[#111111] uppercase mb-2">
                    Service Needed
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesList.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setFormData({ ...formData, service: svc })}
                        className={`px-3 py-2 text-[12px] font-medium rounded-xl border text-left transition-all cursor-pointer ${formData.service === svc
                            ? 'border-[#111111] bg-[#111111] text-white shadow-xs'
                            : 'border-[#E8E3DA] bg-white text-[#4B4A54] hover:border-[#B5B2BA]'
                          }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[12px] font-semibold tracking-wider text-[#111111] uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E8E3DA] rounded-xl focus:outline-hidden focus:border-[#111111] transition-colors placeholder:text-[#B5B2BA]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold tracking-wider text-[#111111] uppercase mb-1.5">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E8E3DA] rounded-xl focus:outline-hidden focus:border-[#111111] transition-colors placeholder:text-[#B5B2BA]"
                    />
                  </div>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-[12px] font-semibold tracking-wider text-[#111111] uppercase mb-2">
                    Approximate Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1.5 text-[12px] rounded-lg border font-medium transition-colors cursor-pointer ${formData.budget === b
                            ? 'border-[#111111] bg-[#111111] text-white'
                            : 'border-[#E8E3DA] bg-white text-[#6E6D7A] hover:border-[#B5B2BA]'
                          }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[12px] font-semibold tracking-wider text-[#111111] uppercase mb-1.5">
                    Project Overview
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the product, objectives, or current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E8E3DA] rounded-xl focus:outline-hidden focus:border-[#111111] transition-colors placeholder:text-[#B5B2BA] resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-[#111111] text-white text-[14px] font-medium rounded-full hover:bg-[#28282B] active:scale-[0.99] transition-all cursor-pointer shadow-md"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-[24px] font-medium text-[#111111] mb-2">Inquiry Received</h4>
              <p className="text-[14px] text-[#6E6D7A] max-w-sm mx-auto mb-6">
                Thank you, {formData.name || 'there'}. Our studio lead will review your requirements and reach out within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#111111] text-white text-[13px] rounded-full hover:bg-[#28282B] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
