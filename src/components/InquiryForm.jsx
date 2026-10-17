'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function InquiryForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'United States (USA)',
    degree: 'Masters / Post-Graduate',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successCardRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  useGSAP(() => {
    if (submitted && successCardRef.current) {
      gsap.fromTo(
        successCardRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
      );
      gsap.from('.success-tick', {
        scale: 0,
        rotation: -90,
        duration: 0.6,
        delay: 0.2,
        ease: 'back.out(2)',
      });
    }
  }, [submitted]);

  return (
    <footer
      id="inquiry"
      className="relative bg-[#0F1F16] pt-24 sm:pt-32 pb-12 border-t border-[#3B8F7B]/20"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(167,244,50,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Consultation Card */}
        <div className="forest-glass-card rounded-3xl border border-[#3B8F7B]/30 p-8 sm:p-12 lg:p-16 mb-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Consultation Channels */}
            <div className="lg:col-span-5 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152a1e] border border-[#a7F432]/40 text-xs text-[#a7F432]">
                <Sparkles className="w-3.5 h-3.5 text-[#a7F432]" />
                <span className="font-semibold uppercase tracking-widest text-[11px]">
                  Free Profile Evaluation
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF3E7] leading-tight">
                Begin Your <span className="text-accent-gradient font-extrabold">Global Journey</span> Today
              </h2>

              <p className="text-[#EAF3E7]/80 text-sm sm:text-base font-light leading-relaxed">
                Receive customized university recommendations, scholarship eligibility criteria, and a step-by-step visa roadmap tailored specifically to your academic background.
              </p>

              {/* Direct Info Touchpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#152a1e] border border-[#3B8F7B]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1F16] border border-[#a7F432]/30 flex items-center justify-center text-[#a7F432] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#a7F432] mb-1">
                      Flagship Admissions Center
                    </h3>
                    <p className="text-xs text-[#EAF3E7]/80 font-light leading-relaxed">
                      JY Overseas Tower, Ring Road &amp; Dumas Boulevard, Surat – 395007, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#152a1e] border border-[#3B8F7B]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1F16] border border-[#a7F432]/30 flex items-center justify-center text-[#a7F432] shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#a7F432] mb-1">
                      Admissions Desk &amp; WhatsApp
                    </h3>
                    <p className="text-xs text-[#EAF3E7] font-medium">
                      +91 98250 12345 / +91 261 288 9900
                    </p>
                    <span className="text-[10px] text-[#EAF3E7]/60">Monday to Saturday: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#152a1e] border border-[#3B8F7B]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1F16] border border-[#a7F432]/30 flex items-center justify-center text-[#a7F432] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#a7F432] mb-1">
                      Official Admissions Email
                    </h3>
                    <p className="text-xs text-[#EAF3E7]/80 font-light">
                      admissions@jyoverseas.com
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Modern Form with Floating Labels */}
            <div className="lg:col-span-7 bg-[#152a1e]/95 rounded-3xl p-6 sm:p-10 border border-[#3B8F7B]/30 shadow-2xl">
              
              {submitted ? (
                <div
                  ref={successCardRef}
                  className="text-center py-12 px-4 space-y-5"
                >
                  <div className="success-tick w-20 h-20 rounded-full bg-[#a7F432] text-[#0F1F16] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(167,244,50,0.6)]">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#EAF3E7]">
                    Application Request Confirmed!
                  </h3>

                  <p className="text-sm text-[#EAF3E7]/85 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#a7F432]">{formData.name}</strong>. 
                    Your study abroad inquiry for <span className="text-[#a7F432] font-semibold">{formData.country}</span> has 
                    been routed directly to our Senior Admissions Counselor. We will connect with you within 4 business hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#0F1F16] border border-[#3B8F7B]/30 max-w-sm mx-auto text-xs text-[#EAF3E7]/70">
                    <span className="text-[#a7F432] font-semibold block mb-1">Inquiry Ref: JY-2026-9041</span>
                    <span>An evaluation checklist has been dispatched to your email.</span>
                  </div>

                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold border border-[#a7F432]/40 text-[#a7F432] hover:bg-[#a7F432] hover:text-[#0F1F16] transition-all"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  suppressHydrationWarning
                  className="space-y-6"
                >
                  
                  <div className="border-b border-[#3B8F7B]/20 pb-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EAF3E7]">
                      Request Free University Shortlisting
                    </h3>
                    <p className="text-xs text-[#EAF3E7]/70 font-light mt-1">
                      Fill out your details below. No obligation, 100% confidential.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Floating Label: Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                        placeholder=" "
                        suppressHydrationWarning
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0F1F16] border border-[#3B8F7B]/30 text-sm text-[#EAF3E7] focus:outline-none focus:border-[#a7F432] focus:ring-1 focus:ring-[#a7F432] transition-all"
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute text-xs uppercase tracking-wider font-semibold text-[#EAF3E7]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#a7F432]"
                      >
                        Student Full Name *
                      </label>
                    </div>

                    {/* Floating Label: Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        autoComplete="email"
                        required
                        placeholder=" "
                        suppressHydrationWarning
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0F1F16] border border-[#3B8F7B]/30 text-sm text-[#EAF3E7] focus:outline-none focus:border-[#a7F432] focus:ring-1 focus:ring-[#a7F432] transition-all"
                      />
                      <label
                        htmlFor="emailAddress"
                        className="absolute text-xs uppercase tracking-wider font-semibold text-[#EAF3E7]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#a7F432]"
                      >
                        Email Address *
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Floating Label: Phone */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="tel"
                        required
                        placeholder=" "
                        suppressHydrationWarning
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0F1F16] border border-[#3B8F7B]/30 text-sm text-[#EAF3E7] focus:outline-none focus:border-[#a7F432] focus:ring-1 focus:ring-[#a7F432] transition-all"
                      />
                      <label
                        htmlFor="phoneNumber"
                        className="absolute text-xs uppercase tracking-wider font-semibold text-[#EAF3E7]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#a7F432]"
                      >
                        Phone / WhatsApp *
                      </label>
                    </div>

                    {/* Preferred Country Dropdown */}
                    <div className="relative">
                      <select
                        id="preferredCountry"
                        name="preferredCountry"
                        suppressHydrationWarning
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 pt-6 pb-2 rounded-xl bg-[#0F1F16] border border-[#3B8F7B]/30 text-sm text-[#EAF3E7] focus:outline-none focus:border-[#a7F432] focus:ring-1 focus:ring-[#a7F432] transition-all cursor-pointer"
                      >
                        <option value="United States (USA)">United States (USA)</option>
                        <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Other / Multiple Countries">Multiple Countries / Undecided</option>
                      </select>
                      <label
                        htmlFor="preferredCountry"
                        className="absolute text-[10px] uppercase tracking-wider font-semibold text-[#a7F432] top-1.5 left-4"
                      >
                        Preferred Study Destination *
                      </label>
                    </div>
                  </div>

                  {/* Degree Level */}
                  <div className="relative">
                    <select
                      id="degreeLevel"
                      name="degreeLevel"
                      suppressHydrationWarning
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full px-4 pt-6 pb-2 rounded-xl bg-[#0F1F16] border border-[#3B8F7B]/30 text-sm text-[#EAF3E7] focus:outline-none focus:border-[#a7F432] focus:ring-1 focus:ring-[#a7F432] transition-all cursor-pointer"
                    >
                      <option value="Masters / Post-Graduate">Post-Graduate / Masters Degree (MS / MBA)</option>
                      <option value="Bachelors / Under-Graduate">Undergraduate / Bachelors Degree (BS / BA)</option>
                      <option value="PhD / Doctorate">Doctorate / Ph.D. Fellowships</option>
                      <option value="Diploma / Foundation">Post-Graduate Diploma / Co-op</option>
                    </select>
                    <label
                      htmlFor="degreeLevel"
                      className="absolute text-[10px] uppercase tracking-wider font-semibold text-[#a7F432] top-1.5 left-4"
                    >
                      Target Degree Level
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder=" "
                      suppressHydrationWarning
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0F1F16] border border-[#3B8F7B]/30 text-sm text-[#EAF3E7] focus:outline-none focus:border-[#a7F432] focus:ring-1 focus:ring-[#a7F432] transition-all resize-none"
                    />
                    <label
                      htmlFor="notes"
                      className="absolute text-xs uppercase tracking-wider font-semibold text-[#EAF3E7]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#a7F432]"
                    >
                      Academic Scores, IELTS status, or Questions
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      suppressHydrationWarning
                      className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#a7F432] text-[#0F1F16] shadow-[0_0_25px_rgba(167,244,50,0.35)] hover:shadow-[0_0_40px_rgba(167,244,50,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Profile Assessment...</span>
                      ) : (
                        <>
                          <span>Submit For Free Assessment</span>
                          <Send className="w-4 h-4 text-[#0F1F16]" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#EAF3E7]/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#a7F432]" />
                    <span>Strict confidentiality. Zero promotional spam guaranteed.</span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>

        {/* Footer Sub-Links & Legal Disclaimers */}
        <div className="pt-8 border-t border-[#3B8F7B]/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-xs">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#a7F432] flex items-center justify-center text-[#0F1F16] font-bold">
                  JY
                </div>
                <span className="font-serif text-base font-bold text-[#EAF3E7]">
                  JY OVERSEAS
                </span>
              </div>
              <p className="text-[#EAF3E7]/70 font-light leading-relaxed">
                Empowering international scholars with verified university placement, IELTS/PTE coaching, and transparent student visa filing since 2012.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#a7F432] mb-3">
                Study Abroad
              </h4>
              <ul className="space-y-2 text-[#EAF3E7]/70 font-light">
                <li><a href="#destinations" className="hover:text-[#a7F432] transition-colors">Study in USA (STEM OPT)</a></li>
                <li><a href="#destinations" className="hover:text-[#a7F432] transition-colors">Study in United Kingdom</a></li>
                <li><a href="#destinations" className="hover:text-[#a7F432] transition-colors">Study in Canada (PGWP)</a></li>
                <li><a href="#destinations" className="hover:text-[#a7F432] transition-colors">Study in Germany (Tuition-Free)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#a7F432] mb-3">
                Coaching &amp; Tests
              </h4>
              <ul className="space-y-2 text-[#EAF3E7]/70 font-light">
                <li><a href="#inquiry" className="hover:text-[#a7F432] transition-colors">IELTS Academic Masterclasses</a></li>
                <li><a href="#inquiry" className="hover:text-[#a7F432] transition-colors">PTE Pearson Academic</a></li>
                <li><a href="#inquiry" className="hover:text-[#a7F432] transition-colors">TOEFL iBT Diagnostic Testing</a></li>
                <li><a href="#inquiry" className="hover:text-[#a7F432] transition-colors">GRE / GMAT Quantitative Guidance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#a7F432] mb-3">
                Compliance &amp; Trust
              </h4>
              <p className="text-[#EAF3E7]/70 font-light leading-relaxed mb-2">
                Certified member of AIRC, ICEF, and British Council.
              </p>
              <div className="text-[11px] text-[#a7F432] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Authorized Representative</span>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-[#3B8F7B]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EAF3E7]/50 gap-4">
            <p suppressHydrationWarning>© 2026 JY Overseas Educational Consultants Private Limited. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Crafted for JY Overseas Demo • Global Admissions &amp; Visa Advisory
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
