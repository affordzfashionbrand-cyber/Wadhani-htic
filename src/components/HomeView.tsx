import React from 'react';
import { NavRoute } from '../types';
import { LOGOS } from '../data/contentData';

interface HomeViewProps {
  onNavigate: (route: NavRoute) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* ============================================================== */}
      {/* 1. BRAND STRIP WITH OFFICIAL IDENTITY METRICS */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-r from-brand-red-dark via-brand-red to-brand-maroon text-white py-3.5 px-6 shadow-xs border-y border-red-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange-light shadow-xs animate-pulse"></span>
            <span className="font-medium text-amber-100">
              Joint Initiative: <strong className="text-white font-bold">Wadhwani Foundation &amp; IIT Madras</strong>
            </span>
          </div>
          <div className="flex items-center gap-6 divide-x divide-white/20">
            <span className="text-[11px] font-semibold text-rose-100 tracking-wider uppercase">
              Translational MedTech CoE
            </span>
            <span className="pl-6 text-[11px] font-semibold text-amber-200 tracking-wider uppercase">
              IIT Madras Research Park
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. EXPANDED ABOUT: WADHWANI IIT MADRAS INNOVATION CENTRE */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-slate-100" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red-subtle border border-brand-red/20 mb-3 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-brand-red shrink-0"></span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red">
                      About the Innovation Centre
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.2]">
                    Bridging the Laboratory Bench to Bedside Reality
                  </h1>
                </div>

                <div className="space-y-3.5 text-slate-600 text-base leading-relaxed">
                  <p className="text-slate-700 leading-relaxed font-normal">
                    Established as a premier translational flagship between the <strong className="text-brand-charcoal font-semibold">Indian Institute of Technology Madras</strong> and the <strong className="text-brand-charcoal font-semibold">Wadhwani Foundation</strong>, the Centre solves India’s deepest healthcare challenge: ensuring indigenous research and high-precision clinical discoveries transition swiftly into certified, deployable medical products.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 font-normal">
                    Rather than pursuing disconnected academic prototypes, our model pairs active surgical practitioners and clinical researchers directly with engineering faculties from inception. Supported by milestone-gated translational funding, prototyping micro-foundries, and regulatory mentors, we convert high-barrier scientific intellectual property into affordable patient care.
                  </p>
                </div>
              </div>

              {/* Two Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-xl bg-brand-surface border border-slate-200/80 hover:border-brand-red/30 transition-all flex items-start gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-brand-red-subtle text-brand-red flex items-center justify-center shrink-0 border border-brand-red/20 shadow-xs">
                    <span className="material-symbols-outlined text-lg">biotech</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                      Translational R&amp;D
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      End-to-end prototyping micro-foundry and bio-testing labs.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-brand-surface border border-slate-200/80 hover:border-brand-orange/30 transition-all flex items-start gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange-subtle text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/20 shadow-xs">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                      Clinical Validation
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hospital testbed trials and rapid CDSCO regulatory guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Impact Statistics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 shadow-xs hover:border-brand-red/30 transition-all">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-brand-red">50+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight mt-1">Faculty &amp; Clinicians</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 shadow-xs hover:border-brand-orange/30 transition-all">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-brand-orange">₹45 Cr+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight mt-1">Translational Grants</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 shadow-xs hover:border-brand-red/30 transition-all">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-brand-red">18+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight mt-1">Hospital Testbeds</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 shadow-xs hover:border-brand-orange/30 transition-all">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-brand-orange">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight mt-1">Regulatory Alignment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Facility Photography & Mission/Vision */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src={LOGOS.facilityImage}
                  alt="IIT Madras HTIC Translational Research Facility & Cleanroom"
                  className="w-full h-80 md:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700 block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-[11px] font-semibold tracking-wider uppercase">
                    HTIC &amp; Research Park Translational Facility, IIT Madras
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EB6923]"></span>
                    <span className="font-medium text-slate-200 text-[11px]">
                      Joint Initiative: IIT Madras &amp; Wadhwani Foundation
                    </span>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-2 hover:border-brand-red/30 transition-all flex flex-col justify-between shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-brand-red rounded-full"></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Mission</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Democratizing indigenous clinical healthcare technologies by overcoming import reliance through world-class precision engineering.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-2 hover:border-brand-orange/30 transition-all flex flex-col justify-between shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-brand-orange rounded-full"></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Vision</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Building India’s preeminent translational launchpad for biomedical technology, generating certified medical devices and venture spin-outs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. STRATEGIC PILLARS: FOUR PILLARS OF TRANSLATIONAL ACCELERATION */}
      {/* ============================================================== */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white border-b border-slate-100" id="pillars">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-orange/20 text-brand-orange text-[11px] font-bold uppercase tracking-wider">
              Systematic Framework
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal font-display tracking-tight">
              Four Pillars of Translational Acceleration
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              How the Wadhwani IIT Madras Innovation Centre navigates complex medical challenges from initial proof-of-concept (TRL 3) to clinical adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red-subtle text-brand-red font-display font-extrabold text-lg flex items-center justify-center border border-brand-red/20 shadow-xs">
                  01
                </div>
                <h3 className="text-base font-bold text-brand-charcoal">Clinical Need Co-Design</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct engagement with practicing surgeons and clinical department heads at top medical colleges to formulate explicit medical specs before circuit or mechanical engineering starts.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-[11px] font-semibold text-brand-red">
                <span>Eliminating Need Mismatch</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange font-display font-extrabold text-lg flex items-center justify-center border border-brand-orange/20 shadow-xs">
                  02
                </div>
                <h3 className="text-base font-bold text-brand-charcoal">Grant Funding &amp; Prototyping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct translational grant disbursements paired with IIT Madras specialized test labs - microfluidics, biosensors, 3D medical printing, and clinical software validation suites.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-[11px] font-semibold text-brand-orange">
                <span>Milestone De-risking</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red-subtle text-brand-red font-display font-extrabold text-lg flex items-center justify-center border border-brand-red/20 shadow-xs">
                  03
                </div>
                <h3 className="text-base font-bold text-brand-charcoal">Pre-Clinical &amp; Testbed Trials</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standardized biocompatibility tests, simulated surgical validation, human factors assessment, and institutional ethics review across hospital partner testbeds.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-[11px] font-semibold text-brand-red">
                <span>Rigorous Patient Safety</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange font-display font-extrabold text-lg flex items-center justify-center border border-brand-orange/20 shadow-xs">
                  04
                </div>
                <h3 className="text-base font-bold text-brand-charcoal">Regulatory &amp; Commercialisation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive guidance through CDSCO medical device regulatory pathways, patent drafting, and venture spin-out incubation at IITM Research Park.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-[11px] font-semibold text-brand-orange">
                <span>Scalable Real-World Impact</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. COLLABORATING ECOSYSTEM PARTNERS */}
      {/* ============================================================== */}
      <section className="py-16 px-6 md:px-12 bg-white border-t border-slate-200/70" id="partners">
        <div className="max-w-7xl mx-auto space-y-10 text-center">
          <div className="max-w-2xl mx-auto space-y-3 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-muted text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Ecosystem Stakeholders &amp; Institutional Allies
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal font-display tracking-tight">
              National Collaborative Network
            </h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Strategic synergy between premier academic research infrastructure and philanthropic translational acceleration.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* IIT Madras */}
            <div className="flex-1 p-6 sm:p-8 bg-brand-surface rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col items-center justify-center text-center group">
              <div className="h-20 w-full flex items-center justify-center mb-4">
                <img
                  src={LOGOS.iitmLogo}
                  alt="IIT Madras Logo"
                  className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-brand-red font-bold text-lg">IIT Madras</span>
              <span className="text-xs text-slate-500 font-normal mt-1">Research Park &amp; Engineering Labs</span>
            </div>

            {/* Wadhwani Foundation */}
            <div className="flex-1 p-6 sm:p-8 bg-brand-surface rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-orange/30 transition-all flex flex-col items-center justify-center text-center group">
              <div className="h-20 w-full flex items-center justify-center mb-4">
                <img
                  src={LOGOS.wadhwaniLogo}
                  alt="Wadhwani Foundation Logo"
                  className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-brand-orange font-bold text-lg">Wadhwani Foundation</span>
              <span className="text-xs text-slate-500 font-normal mt-1">Translational Innovation Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. EXPLORE PORTFOLIO CTA BANNER */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold font-display text-white">
              Ready to Explore Active Clinical Projects?
            </h3>
            <p className="text-slate-300 text-xs md:text-sm">
              Discover flagship surgical robotics, cardiovascular telemetry, and microfluidics under hospital validation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            >
              View All Projects
            </button>
            <button
              onClick={() => onNavigate('about-us')}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-all border border-white/20 cursor-pointer"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
