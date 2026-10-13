import React, { useState } from 'react';
import { NavRoute } from '../types';
import { MENTORS, LOGOS } from '../data/contentData';

interface AboutViewProps {
  onNavigate: (route: NavRoute) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMentors = selectedCategory === 'all'
    ? MENTORS
    : MENTORS.filter((m) => m.category === selectedCategory);

  return (
    <div className="w-full">
      {/* ============================================================== */}
      {/* 1. HERO & STRATEGIC INITIATIVE BANNER */}
      {/* ============================================================== */}
      <section className="w-full bg-gradient-to-b from-blue-50/50 via-white to-white pt-10 pb-14 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 uppercase tracking-wider font-semibold">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-brand-red transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-brand-red">About Us</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-subtle text-brand-red text-xs uppercase tracking-wider mb-4 font-bold border border-brand-red/20">
              <span className="material-symbols-outlined text-sm">verified</span>
              IIT Madras &amp; Wadhwani Foundation Joint Initiative
            </div>
            <h1 className="text-3xl lg:text-4xl lg:leading-tight font-extrabold text-slate-900 font-display tracking-tight mb-5">
              Bridging World-Class Engineering &amp; Clinical Translation at Scale
            </h1>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Established as a strategic joint initiative between the Indian Institute of Technology Madras (IIT Madras) and the Wadhwani Foundation, the Innovation Centre serves as India&apos;s premier translational engine for MedTech and HealthTech.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INSTITUTIONAL GENESIS & STRATEGIC MANDATE */}
      {/* ============================================================== */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-xs text-brand-orange uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-base">biotech</span>
                Institutional Genesis &amp; Strategic Mandate
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Solving the Healthcare Import Imperative through Deep-Tech Sovereignty
              </h2>
              <div className="text-slate-600 text-sm md:text-base space-y-4 leading-relaxed font-normal">
                <p>
                  More than 80% of critical healthcare devices used across Indian intensive care units, diagnostic wards, and surgical theaters are imported at prohibitive costs. WIN CoE (Wadhwani Innovation Network Centre of Excellence) was established at the premier research enclave of IIT Madras to bridge the systemic &ldquo;valley of death&rdquo; between academic discovery and clinical reality.
                </p>
                <p>
                  By pairing India’s sharpest engineering minds with leading super-specialty clinicians, WIN CoE eliminates the translation gap. Each project is embedded within hospital operational workflows from day one, verifying clinical ergonomics, biocompatibility, and regulatory feasibility before embarking on pre-clinical and multicentric clinical trials.
                </p>
              </div>

              {/* Quote callout */}
              <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-brand-red shadow-xs">
                <p className="text-slate-800 italic leading-relaxed text-sm md:text-base mb-2 font-serif">
                  &ldquo;Our mandate is uncompromising: build certified medical hardware in India that rivals the world’s most advanced instrumentation at a fraction of the cost, making tertiary-grade healthcare accessible to every corner of our nation.&rdquo;
                </p>
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider block font-sans">
                  — Founding Directive, Joint Governance Council
                </span>
              </div>
            </div>

            {/* Right media column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Cleanroom photography */}
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200/80 group">
                <img
                  src={LOGOS.cleanroomImage}
                  alt="Cleanroom and Bio-Testing Facility"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4">
                  <p className="text-xs text-white font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-brand-orange-light">apartment</span>
                    Healthcare Technology Innovation Centre (HTIC), IIT Madras
                  </p>
                </div>
              </div>

              {/* Joint Alliance Logos Box */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/70">
                <div className="text-center mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Joint Strategic Alliance
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                  <div className="bg-white p-4 rounded-lg w-full flex items-center justify-center shadow-xs h-24 border border-slate-100">
                    <img
                      src={LOGOS.iitmLogo}
                      alt="IIT Madras Logo"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-lg w-full flex items-center justify-center shadow-xs h-24 border border-slate-100">
                    <img
                      src={LOGOS.wadhwaniLogo}
                      alt="Wadhwani Foundation Logo"
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MISSION, VISION & FOUNDATIONAL PILLARS */}
      {/* ============================================================== */}
      <section className="w-full py-16 md:py-20 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs text-brand-red uppercase tracking-wider font-bold">
              Foundational Pillars
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Guiding the Next Era of Indian MedTech Sovereignty
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Anchored in deep-tech engineering, institutional hospital linkages, and disciplined milestone governance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 01: Mission */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-brand-red font-display">01</span>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center border border-red-100">
                    <span className="material-symbols-outlined text-2xl">flag</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Democratize high-precision healthcare engineering across India by validating indigenous, life-saving medical devices through rigorous clinical trials and institutional mentorship.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-wider">
                <span>Benchtop to Bedside Translation</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>

            {/* Card 02: Vision */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-brand-red font-display">02</span>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center border border-orange-100">
                    <span className="material-symbols-outlined text-2xl">visibility</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To establish IIT Madras as the foremost global translational launchpad in South Asia, producing certified medical hardware, surgical robotics, and diagnostic platforms that impact 100M+ lives.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-wider">
                <span>Global Impact &amp; Scale</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. ESTEEMED LEADERSHIP & MENTORSHIP NETWORK */}
      {/* ============================================================== */}
      <section className="w-full py-20 bg-white" id="mentors">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs text-brand-red uppercase tracking-wider font-bold">
                ESTEEMED LEADERSHIP &amp; MENTORSHIP NETWORK
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-display tracking-tight mt-1 mb-2">
                Distinguished Mentors, Clinicians &amp; Translational Pioneers
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Guiding research scholars, faculty entrepreneurs, and MedTech innovators through preclinical prototyping, clinical trials, and regulatory compliance.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Pioneers' },
                { id: 'leadership', label: 'Executive Leadership' },
                { id: 'faculty', label: 'Academic Faculty' },
                { id: 'instrumentation', label: 'Bio-Instrumentation' }
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedCategory(pill.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === pill.id
                      ? 'bg-brand-red text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Mentor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="flex flex-col items-start">
                  <div className="w-full h-52 rounded-xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/70 border border-slate-200/50 flex items-end justify-center mb-4 relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-full w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-red-subtle text-brand-red text-[11px] uppercase tracking-wider font-bold mb-2.5 border border-brand-red/20">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    {mentor.role}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1 font-display">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-orange mb-2.5">
                    {mentor.title}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {mentor.bio}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-3.5 border-t border-slate-100 w-full">
                  {mentor.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      <span className="material-symbols-outlined text-sm text-brand-red">
                        {tag.icon}
                      </span>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CALL TO ACTION: HAVE AN INNOVATIVE SOLUTION */}
      {/* ============================================================== */}
      <section className="w-full bg-brand-red text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
              Have an Innovative MedTech Solution or Clinical Challenge?
            </h2>
            <p className="text-base lg:text-lg text-rose-100 leading-relaxed font-normal">
              Whether you are an academic researcher with a proven benchtop prototype or a clinician seeking engineering collaboration, partner with WIN CoE IIT Madras.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-us')}
                className="px-8 py-3.5 rounded-full bg-white text-brand-red font-bold text-sm tracking-wide shadow-lg hover:bg-rose-50 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Submit Clinical Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
