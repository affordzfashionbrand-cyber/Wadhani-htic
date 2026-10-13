import React, { useState } from 'react';
import { NavRoute } from '../types';
import { LOGOS } from '../data/contentData';

interface HeaderProps {
  currentRoute: NavRoute;
  onNavigate: (route: NavRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: NavRoute; code: string }[] = [
    { label: 'Home', route: 'home', code: '00' },
    { label: 'About Us', route: 'about-us', code: '01' },
    { label: 'Projects', route: 'projects', code: '03' },
    { label: 'Contact Us', route: 'contact-us', code: '05' },
  ];

  const handleNavClick = (route: NavRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Official Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left transition-all duration-300 hover:opacity-90 focus:outline-hidden"
          aria-label="Wadhwani IIT Madras Innovation Centre Home"
        >
          <img
            src={LOGOS.mainHeader}
            alt="Wadhwani IIT Madras Innovation Centre"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`transition-colors duration-200 py-1 font-medium cursor-pointer relative ${
                  isActive
                    ? 'text-brand-red font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red'
                    : 'text-slate-700 hover:text-brand-red'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact-us')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white bg-brand-red hover:bg-brand-red-dark shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Contact Us
          </button>

          <button
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-slate-100 text-slate-800 bg-white cursor-pointer"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 rounded-2xl bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-2xl text-slate-800 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                IIT Madras · WIN CoE
              </span>
            </div>
            <span className="text-[10px] bg-brand-orange-subtle text-brand-orange px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
              Translational MedTech
            </span>
          </div>

          <nav className="flex flex-col space-y-2.5 font-medium text-sm">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`py-2 px-1 flex justify-between items-center border-b border-slate-50 text-left cursor-pointer ${
                    isActive
                      ? 'text-brand-red font-bold'
                      : 'text-slate-700 hover:text-brand-red'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-xs ${isActive ? 'text-brand-red font-bold' : 'text-slate-400'}`}>
                    {item.code}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('contact-us')}
              className="w-full block text-center py-3 rounded-xl btn-brand-gradient text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
            >
              Get in Touch with WIN CoE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
