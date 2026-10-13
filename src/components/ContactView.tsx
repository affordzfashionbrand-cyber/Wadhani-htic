import React, { useState } from 'react';
import { FAQS, LOGOS } from '../data/contentData';
import { ContactFormData } from '../types';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneOrg: '',
    inquiryType: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('ip'); // Default expanded as in Image 7!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* ============================================================== */}
      {/* 1. INSTITUTIONAL HERO & CONTEXT */}
      {/* ============================================================== */}
      <section className="w-full bg-white py-12 md:py-16 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-md bg-brand-red-subtle text-brand-red text-xs font-bold uppercase tracking-widest border border-brand-red/20">
                <span className="material-symbols-outlined text-sm">clinical_notes</span>
                Clinical &amp; Industrial Engagement Desk
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Connect with <span className="text-brand-red">WIN CoE</span> IIT Madras
              </h1>
              <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                Whether you are a clinician with an unmet clinical need, a medical device startup seeking cleanroom testbeds, or an industry partner exploring technology licensing, our translational liaison team is ready to accelerate your bench-to-bedside journey.
              </p>
            </div>

            {/* Right Trust Badge / Seal Enclave */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <img
                    alt="WIN CoE IIT Madras"
                    className="h-10 w-auto object-contain"
                    src={LOGOS.mainHeader}
                  />
                  <img
                    alt="IIT Madras Seal"
                    className="h-12 w-auto object-contain"
                    src={LOGOS.iitmLogo}
                  />
                </div>
                <div className="w-full h-px bg-slate-200"></div>
                <div className="flex items-center justify-between text-slate-600 text-xs">
                  <span className="font-semibold text-slate-700">Incubation Partner:</span>
                  <img
                    alt="Wadhwani Foundation"
                    className="h-6 w-auto object-contain"
                    src={LOGOS.wadhwaniLogo}
                  />
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-600 text-xs leading-relaxed">
                  Direct access point to ISO Class 7/8 Fabrication Suites, Biocompatibility Assessment Cells, and Clinical Cohort Validations at partner hospitals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INTERACTIVE CONTACT FORM */}
      {/* ============================================================== */}
      <section className="w-full bg-slate-50/60 py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 p-6 sm:p-10 relative">
            <div className="flex items-center justify-between border-b-2 border-brand-red pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-brand-red font-bold">
                  Get in Touch
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 font-display mt-0.5">
                  Send us a Message
                </h2>
              </div>
              <span className="material-symbols-outlined text-brand-red text-3xl">
                mail
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Have a question or looking to collaborate? Drop us a message and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand-red/30 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane.doe@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand-red/30 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="phoneOrg">
                    Phone / Organization
                  </label>
                  <input
                    id="phoneOrg"
                    type="text"
                    value={formData.phoneOrg}
                    onChange={(e) => setFormData({ ...formData, phoneOrg: e.target.value })}
                    placeholder="+91 98400 XXXXX / Institution"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand-red/30 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="inquiryType">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-red/30 focus:bg-white cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnerships">Industry &amp; Partnerships</option>
                    <option value="clinical">Clinical Collaboration</option>
                    <option value="research">Student / Academic Research</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="message">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please share details about your inquiry, requirements, or proposed collaboration..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand-red/30 focus:bg-white resize-y"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-base">send</span>
                </button>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <span className="material-symbols-outlined text-sm text-brand-red">lock</span>
                  <span>Safe &amp; Confidential Communication</span>
                </div>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 mt-2 animate-in fade-in">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">
                    task_alt
                  </span>
                  <div className="text-xs leading-relaxed">
                    <strong>Message Received!</strong> Thank you for reaching out, {formData.fullName}. A team member from WIN CoE translational desk will respond to {formData.email} shortly.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section className="w-full bg-white py-16 px-6 lg:px-12 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase tracking-wider text-brand-red font-bold">
              Institutional Clarity
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              Everything clinicians, entrepreneurs, and industrial R&amp;D divisions need to know prior to onboarding.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-sm md:text-base font-display">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-brand-red text-xl transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
