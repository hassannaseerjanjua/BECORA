import React from 'react';

export default function Footer({ onOpenContact }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-8 pb-16 border-t border-[#EAE6DF] text-[#6E6D7A]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Top Row: Brand Lockup, Navigation & Socials */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12">
          
          {/* Brand Lockup */}
          <div className="flex items-center space-x-3 text-[14px]">
            <a
              href="#hero"
              className="font-semibold tracking-[0.22em] text-[#111111] hover:opacity-80 transition-opacity"
            >
              B E C O R A
            </a>
            <span className="text-[#B5B2BA]">—</span>
            <span className="text-[#6E6D7A] font-normal text-[13px]">Digital Product Studio</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-[13px] sm:text-[14px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#111111] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons matching reference image */}
          <div className="flex items-center space-x-5 text-[#6E6D7A]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors p-1"
              aria-label="X Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors p-1"
              aria-label="Dribbble"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm6.65 6.07a8.4 8.4 0 0 1 1.76 4.77 15.3 15.3 0 0 0-4.78-.79 17.4 17.4 0 0 0-1.8.09 19.3 19.3 0 0 0-3.32-6.57 8.4 8.4 0 0 1 8.14 2.5zM12 3.6c.92 0 1.8.15 2.63.42A17.6 17.6 0 0 1 17.7 10a18.2 18.2 0 0 1-5.63.85c-.32 0-.64-.02-.95-.05A32.5 32.5 0 0 0 9.8 4.7c.69-.69 1.43-1.1 2.2-1.1zm-3.64 2.1c.38.74.8 1.5 1.25 2.27A17.9 17.9 0 0 0 4.1 10.9 8.4 8.4 0 0 1 8.36 5.7zM3.6 12.87c.23-.02.47-.03.71-.03a16.3 16.3 0 0 1 6.36 1.27 18.9 18.9 0 0 1-3.6 7.2 8.4 8.4 0 0 1-3.47-8.44zm5.07 7.7a17.3 17.3 0 0 0 3.32-6.4 15.3 15.3 0 0 1 7.15 2.76 8.4 8.4 0 0 1-10.47 3.64zm10.74-4.8a16.8 16.8 0 0 0-6.17-2.43 14.5 14.5 0 0 1 4.7-4.8 8.4 8.4 0 0 1 1.47 7.23z" />
              </svg>
            </a>
            <a
              href="https://becora.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors p-1"
              aria-label="Website"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Row: Copyright & Tagline */}
        <div className="pt-8 border-t border-[#EAE6DF]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12px] sm:text-[13px] text-[#8E8D99]">
          <p>© {currentYear} BECORA. All rights reserved.</p>
          <p className="font-serif italic text-[14px] text-[#6E6D7A] tracking-wide">
            The Process Of Becoming.
          </p>
        </div>

      </div>
    </footer>
  );
}

