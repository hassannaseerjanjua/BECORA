import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['contact', 'work', 'approach', 'services', 'home'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'About', href: '#approach', id: 'approach' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E3DA]/70 py-4 shadow-xs'
          : 'bg-[#FAF8F5] py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-lg md:text-xl font-semibold tracking-[0.22em] text-[#111111] hover:opacity-80 transition-opacity"
        >
          B E C O R A
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-9 lg:space-x-11">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-[14px] font-normal tracking-wide transition-colors py-1 ${
                activeSection === link.id
                  ? 'text-[#111111] font-medium'
                  : 'text-[#6E6D7A] hover:text-[#111111]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#111111] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-[#111111] text-white text-[13px] tracking-wide rounded-full hover:bg-[#28282B] active:scale-[0.98] transition-all duration-200 group shadow-sm cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#111111] hover:bg-[#F2EEE7] rounded-full transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E3DA] px-6 py-6 transition-all duration-200 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-normal py-1 ${
                  activeSection === link.id
                    ? 'text-[#111111] font-medium'
                    : 'text-[#6E6D7A]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 bg-[#111111] text-white text-sm rounded-full cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
