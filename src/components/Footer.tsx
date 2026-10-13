import React from 'react';
import { NavRoute } from '../types';
import { LOGOS } from '../data/contentData';

interface FooterProps {
  onNavigate: (route: NavRoute) => void;
  onOpenMap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenMap }) => {
  const handleNav = (route: NavRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 pt-16 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Logo & Identity */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-hidden"
              aria-label="WIN CoE IIT Madras"
            >
              <img
                src={LOGOS.footerLogo}
                alt="Wadhwani IIT Madras Innovation Centre"
                className="h-12 w-auto object-contain"
              />
            </button>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-sm">
              Fostering innovation and community, WIN CoE at IIT Madras is your hub for groundbreaking events, research, and collaborative initiatives. Join us in shaping the future!
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/school/iit-madras/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-[#0077b5] text-white inline-flex items-center justify-center transition-transform hover:scale-105 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <span className="text-xs text-slate-500 font-medium">Connect with research fellows</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                Quick Links
              </h4>
              <div className="w-10 h-0.5 bg-brand-red mt-2.5"></div>
            </div>
            <ul className="space-y-3 text-xs md:text-sm font-medium pt-1">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-600 hover:text-brand-red transition-colors block py-0.5 text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-us')}
                  className="text-slate-600 hover:text-brand-red transition-colors block py-0.5 text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="text-slate-600 hover:text-brand-red transition-colors block py-0.5 text-left cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact-us')}
                  className="text-slate-600 hover:text-brand-red transition-colors block py-0.5 text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                Get in Touch
              </h4>
              <div className="w-10 h-0.5 bg-brand-orange mt-2.5"></div>
            </div>
            <ul className="space-y-3.5 text-xs md:text-sm pt-1">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-base text-brand-orange shrink-0 mt-0.5">
                  call
                </span>
                <a href="tel:+914466469800" className="hover:text-brand-red transition-colors font-medium">
                  +91 44 6646 9800
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-base text-brand-orange shrink-0 mt-0.5">
                  schedule
                </span>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-base text-brand-orange shrink-0 mt-0.5">
                  mail
                </span>
                <a
                  href="mailto:wincoe@iitm.ac.in"
                  className="hover:text-brand-red transition-colors underline-offset-2 font-medium"
                >
                  wincoe@iitm.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Location */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                Campus Location
              </h4>
              <div className="w-10 h-0.5 bg-brand-red mt-2.5"></div>
            </div>
            <div className="space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed pt-1">
              <p className="font-semibold text-slate-900">
                Wadhwani Innovation Network Centre of Excellence
              </p>
              <p className="text-slate-600">
                Healthcare Technology Innovation Centre, IIT Madras Research Park, Kanagam Road, Taramani, Chennai, Tamil Nadu 600113
              </p>
            </div>
            <div className="pt-3">
              <button
                onClick={onOpenMap}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>View on Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 WIN CoE Foundation. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            <span className="font-medium text-slate-600">Joint Initiative: IIT Madras & Wadhwani Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
