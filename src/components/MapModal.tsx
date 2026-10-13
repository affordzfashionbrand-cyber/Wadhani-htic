import React from 'react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-orange text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-base font-display text-white">
                IIT Madras Research Park Campus
              </h3>
              <p className="text-[11px] text-slate-300">
                Healthcare Technology Innovation Centre (HTIC)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Map"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Map visualization / information preview */}
        <div className="p-6 space-y-5">
          <div className="w-full h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative flex items-center justify-center">
            {/* Visual stylization of the research park map */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
            <div className="relative text-center p-4 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 shadow-md max-w-md">
              <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-2 shadow-sm animate-bounce">
                <span className="material-symbols-outlined text-xl">domain</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-display">
                WIN CoE @ HTIC · Block E
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                IIT Madras Research Park, Kanagam Road, Taramani, Chennai 600113
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Open Mon–Fri: 9 AM–6 PM
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                  Cleanroom Access: Level 3
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Visitor Instructions &amp; Directions
            </h5>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-brand-orange text-base shrink-0 mt-0.5">
                  directions_subway
                </span>
                <span>
                  <strong>MRTS Transit:</strong> 8-minute walk from Taramani or Indira Nagar MRTS railway stations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-brand-orange text-base shrink-0 mt-0.5">
                  local_parking
                </span>
                <span>
                  <strong>Visitor Parking:</strong> Dedicated basement parking available at Gate 2 of the Research Park.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-brand-orange text-base shrink-0 mt-0.5">
                  badge
                </span>
                <span>
                  <strong>Security Entry:</strong> Security gate requires photo ID for cleanroom and laboratory visitors.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Latitude: 12.9904° N, 80.2425° E</span>
          <div className="flex items-center gap-2">
            <a
              href="https://maps.google.com/?q=IIT+Madras+Research+Park"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Open in Google Maps
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
