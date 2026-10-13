import React, { useState } from 'react';
import { NavRoute, Project } from '../types';
import { PROJECTS } from '../data/contentData';
import { ProjectModal } from './ProjectModal';

interface ProjectsViewProps {
  onNavigate: (route: NavRoute) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'robotics' | 'cardiovascular' | 'microfluidics'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'specs' | 'dossier' | 'results'>('specs');

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedFilter === 'all' || proj.categorySlug === selectedFilter;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProjectModal = (project: Project, tab: 'specs' | 'dossier' | 'results') => {
    setSelectedProject(project);
    setModalInitialTab(tab);
  };

  const surgibot = PROJECTS.find((p) => p.id === 'surgibot')!;
  const pulsecare = PROJECTS.find((p) => p.id === 'pulsecare')!;
  const microfluidics = PROJECTS.find((p) => p.id === 'microfluidics')!;

  return (
    <div className="w-full">
      {/* Top Breadcrumb & Administrative Header Bar */}
      <section className="relative w-full bg-gradient-to-b from-blue-50/50 via-white to-slate-50/30 pt-10 pb-12 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-md bg-brand-red-subtle text-brand-red text-xs uppercase tracking-widest font-bold border border-brand-red/20">
              <span className="material-symbols-outlined text-base">biotech</span>
              Translational MedTech Portfolio &amp; Clinical Trials
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              From Lab Benchtop to Patient Bedside: Flagship HealthTech Projects
            </h1>
            <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
              Discover the innovative medical devices, diagnostic platforms, and surgical robotics actively undergoing engineering prototyping, pre-clinical trials, and multi-centre hospital validation at IIT Madras Research Park.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Category Tabs Bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none py-1">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'robotics', label: 'Surgical Robotics' },
              { id: 'cardiovascular', label: 'Cardiovascular Telemetry' },
              { id: 'microfluidics', label: 'Microfluidics & Bio-MEMS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-brand-red text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by device code or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand-red/30 focus:bg-white"
            />
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-sm">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Flagship Clinical Testbeds */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-brand-red font-bold uppercase tracking-wider block">
              Top-Tier Innovations
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-display mt-1">
              Featured Flagship Clinical Testbeds
            </h2>
          </div>
          <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="material-symbols-outlined text-sm text-emerald-600">
              published_with_changes
            </span>
            Active Pilot Enrollment Open
          </span>
        </div>

        {/* Flagship Project 1 (Large Bento Card) */}
        {(selectedFilter === 'all' || selectedFilter === 'robotics') && (
          <article className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 group transition-all hover:shadow-xl">
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900">
              <img
                src={surgibot.image}
                alt={surgibot.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-brand-red text-white text-[11px] font-bold uppercase tracking-wide shadow-xs">
                  Surgical Robotics
                </span>
                <span className="px-2.5 py-1 rounded-md bg-brand-orange text-white text-[11px] font-bold tracking-wide shadow-xs">
                  TRL 6: Cadaveric Trials
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-medium">
                  <span>Project ID: {surgibot.code}</span>
                  <span>•</span>
                  <span className="text-brand-red font-bold">Joint Flagship</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-display text-slate-900 mt-2 group-hover:text-brand-red transition-colors">
                  {surgibot.title}
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {surgibot.description}
                </p>

                {/* Specs Grid */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs">
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Key Architecture</span>
                    <span className="text-slate-900 font-semibold mt-0.5">{surgibot.keyArchitecture}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Electrical Safety</span>
                    <span className="text-slate-900 font-semibold mt-0.5">{surgibot.electricalSafety}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Clinical Validation Partners</span>
                    <span className="text-slate-900 font-semibold mt-0.5">{surgibot.clinicalPartners}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Principal Investigator</span>
                    <span className="text-slate-900 font-semibold mt-0.5">{surgibot.principalInvestigator}</span>
                  </div>
                </div>
              </div>

              {/* TRL Progress & Interactive Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-1 w-full sm:w-auto">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">TRL 6 of 9</span>
                    <span className="text-brand-red font-medium">(Pre-Clinical Operational Phase)</span>
                  </div>
                  <div className="w-full sm:w-48 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-brand-red rounded-full" style={{ width: '66.6%' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openProjectModal(surgibot, 'specs')}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">terminal</span>
                    Technical Specs
                  </button>
                  <button
                    onClick={() => openProjectModal(surgibot, 'dossier')}
                    className="px-4 py-2 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">article</span>
                    View Clinical Dossier
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Flagship Projects Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 2: PulseCare */}
          {(selectedFilter === 'all' || selectedFilter === 'cardiovascular') && (
            <article className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden flex flex-col justify-between group transition-all hover:shadow-xl">
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={pulsecare.image}
                    alt={pulsecare.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wide shadow-xs">
                      Cardiovascular Telemetry
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white text-brand-red text-[11px] font-bold shadow-xs">
                      TRL 7: Multicentre Validation
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <span>Device File: {pulsecare.code}</span>
                    <span>•</span>
                    <span className="text-brand-orange font-bold">1,200+ ICU Cohort Validated</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-brand-red transition-colors">
                    {pulsecare.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {pulsecare.description}
                  </p>

                  <div className="mt-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Quality Standard:</span>
                      <span className="font-semibold text-slate-900">ISO 13485 Pilot Line Complete</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Regulatory Filing:</span>
                      <span className="font-semibold text-slate-900">CDSCO Class B MDR Lodged</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Hospital Trials:</span>
                      <span className="font-semibold text-slate-900">Sri Ramachandra &amp; Apollo Hospitals</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-slate-500">TRL 7 / 9 Progress</span>
                  <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-brand-orange rounded-full" style={{ width: '77.7%' }}></div>
                  </div>
                </div>
                <button
                  onClick={() => openProjectModal(pulsecare, 'results')}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">visibility</span>
                  View Study Results
                </button>
              </div>
            </article>
          )}

          {/* Project 3: Microfluidic Molecular Diagnostics */}
          {(selectedFilter === 'all' || selectedFilter === 'microfluidics') && (
            <article className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden flex flex-col justify-between group transition-all hover:shadow-xl">
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={microfluidics.image}
                    alt={microfluidics.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-brand-maroon text-white text-[11px] font-bold uppercase tracking-wide shadow-xs">
                      Microfluidics &amp; Bio-MEMS
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white text-brand-maroon text-[11px] font-bold shadow-xs">
                      TRL 5: Clinical Lab Testbed
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <span>Device File: {microfluidics.code}</span>
                    <span>•</span>
                    <span className="text-brand-maroon font-bold">Detection Under 45 Mins</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-brand-red transition-colors">
                    {microfluidics.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {microfluidics.description}
                  </p>

                  <div className="mt-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Analytical Accuracy:</span>
                      <span className="font-semibold text-slate-900">Sensitivity &gt;98.4% (vs Blood Culture)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Cartridge Shelf Life:</span>
                      <span className="font-semibold text-slate-900">Lyophilized 12-month ambient stability</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clinical Trial Sites:</span>
                      <span className="font-semibold text-slate-900">CMC Vellore &amp; Natl Inst of Epidemiology</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-slate-500">TRL 5 / 9 Progress</span>
                  <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-brand-maroon rounded-full" style={{ width: '55.5%' }}></div>
                  </div>
                </div>
                <button
                  onClick={() => openProjectModal(microfluidics, 'dossier')}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">biotech</span>
                  View Microfluidics Dossier
                </button>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* High-Impact Collaboration CTA Box */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-14 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-brand-red/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-brand-orange/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-rose-200 text-xs font-bold uppercase tracking-widest self-start border border-white/10">
              <span className="material-symbols-outlined text-base">handshake</span>
              Clinical &amp; Industrial Partnerships
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white font-display tracking-tight">
              Have a Clinical Challenge or Want to License an IIT Madras MedTech Device?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Whether you are a practicing surgeon seeking engineering co-development or a medical device manufacturer exploring commercial licensing, connect directly with our translational translation office at the IIT Madras Research Park.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-us')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Connect with Translational Liaison</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        initialTab={modalInitialTab}
        onClose={() => setSelectedProject(null)}
        onContact={() => {
          setSelectedProject(null);
          onNavigate('contact-us');
        }}
      />
    </div>
  );
};
