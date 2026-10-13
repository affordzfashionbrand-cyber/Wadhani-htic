import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'specs' | 'dossier' | 'results';
  onClose: () => void;
  onContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'specs',
  onClose,
  onContact,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'dossier' | 'regulatory'>('specs');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-semibold">
                {project.badge}
              </span>
              <span className="text-xs text-slate-300 font-mono">
                {project.code}
              </span>
            </div>
            <h3 className="text-xl font-bold font-display text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close Modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 border-b border-slate-200 bg-slate-50 flex gap-4">
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'specs'
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('dossier')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'dossier'
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Clinical Dossier &amp; Trials
          </button>
          <button
            onClick={() => setActiveTab('regulatory')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'regulatory'
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Regulatory Compliance
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Architecture Overview
                </span>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Engineering Benchmarks
                </h4>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                  {project.specs.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 bg-white hover:bg-slate-50/50">
                      <span className="font-semibold text-slate-800 text-xs">{item.label}</span>
                      <span className="text-slate-600 text-xs sm:text-right">{item.value}</span>
                    </div>
                  ))}
                  <div className="p-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 bg-white">
                    <span className="font-semibold text-slate-800 text-xs">Electrical Safety Standard</span>
                    <span className="text-slate-600 text-xs">{project.electricalSafety}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dossier' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 flex items-start gap-3">
                <span className="material-symbols-outlined text-brand-orange text-xl shrink-0 mt-0.5">
                  clinical_notes
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Hospital Trial Collaboration
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong>Primary Partner Centers:</strong> {project.clinicalPartners}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong>Principal Investigator:</strong> {project.principalInvestigator}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Validated Clinical Endpoints
                </h4>
                <ul className="space-y-2.5">
                  {project.clinicalHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="material-symbols-outlined text-brand-red text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Complete Clinical Investigator Brochure (IB)</span>
                  <span className="text-[11px] text-slate-500">PDF Document • 48 Pages • Rev 3.2</span>
                </div>
                <button
                  onClick={() => alert(`Downloaded Official Clinical Dossier for ${project.title}`)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-brand-red text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Download Dossier
                </button>
              </div>
            </div>
          )}

          {activeTab === 'regulatory' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-800 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-base">verified</span>
                  CDSCO &amp; ISO 13485 Alignment
                </div>
                <p className="leading-relaxed">
                  {project.regulatoryStatus}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Risk Classification</span>
                  <span className="font-semibold text-slate-900">Class B/C Non-Implantable Device</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Biocompatibility</span>
                  <span className="font-semibold text-slate-900">ISO 10993 Cytotoxicity Cleared</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            TRL {project.trl} of 9 · {project.trlPhase}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="px-4 py-2 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              Request Collaboration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
