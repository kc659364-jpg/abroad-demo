'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Sparkles,
  Send,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'United States',
    intake: 'Fall 2026',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successCardRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
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
      className="relative bg-[#0B132B] pt-24 sm:pt-32 pb-12 border-t border-[#1C2541]"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(230,175,46,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Consultation Card */}
        <div className="navy-glass-card rounded-3xl border border-[#1C2541] p-8 sm:p-12 lg:p-16 mb-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Consultation Channels */}
            <div className="lg:col-span-5 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#E6AF2E]/40 text-xs text-[#E6AF2E]">
                <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E]" />
                <span className="font-semibold uppercase tracking-widest text-[11px]">
                  Free Profile Evaluation
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F6F8] leading-tight">
                Begin Your <span className="text-accent-gradient font-extrabold">Global Journey</span> Today
              </h2>

              <p className="text-[#F4F6F8]/80 text-sm sm:text-base font-light leading-relaxed">
                Receive customized university recommendations, scholarship eligibility criteria, and a step-by-step visa roadmap tailored specifically to your academic background.
              </p>

              {/* Direct Info Touchpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1C2541] border border-[#E6AF2E]/15">
                  <div className="w-10 h-10 rounded-xl bg-[#0B132B] border border-[#E6AF2E]/30 flex items-center justify-center text-[#E6AF2E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E6AF2E] mb-1">
                      Flagship Admissions Center
                    </h3>
                    <p className="text-xs text-[#F4F6F8]/80 font-light leading-relaxed">
                      Demo Tower, Ring Road &amp; Dumas Boulevard, Surat – 395007, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1C2541] border border-[#E6AF2E]/15">
                  <div className="w-10 h-10 rounded-xl bg-[#0B132B] border border-[#E6AF2E]/30 flex items-center justify-center text-[#E6AF2E] shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E6AF2E] mb-1">
                      Admissions Desk &amp; WhatsApp
                    </h3>
                    <p className="text-xs text-[#F4F6F8] font-medium">
                      +91 98250 12345 / +91 261 288 9900
                    </p>
                    <span className="text-[10px] text-[#F4F6F8]/60">Monday to Saturday: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1C2541] border border-[#E6AF2E]/15">
                  <div className="w-10 h-10 rounded-xl bg-[#0B132B] border border-[#E6AF2E]/30 flex items-center justify-center text-[#E6AF2E] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E6AF2E] mb-1">
                      Official Admissions Email
                    </h3>
                    <p className="text-xs text-[#F4F6F8]/80 font-light">
                      admissions@demo.com
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Modern Form with Floating Labels */}
            <div className="lg:col-span-7 bg-[#1C2541]/95 rounded-3xl p-6 sm:p-10 border border-[#E6AF2E]/20 shadow-2xl">
              
              {submitted ? (
                <div
                  ref={successCardRef}
                  className="text-center py-12 px-4 space-y-5"
                >
                  <div className="success-tick w-20 h-20 rounded-full bg-[#E6AF2E] text-[#0B132B] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(230,175,46,0.6)]">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4F6F8]">
                    Application Request Confirmed!
                  </h3>

                  <p className="text-sm text-[#F4F6F8]/85 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#E6AF2E]">{formData.name}</strong>. 
                    Your study abroad inquiry for <span className="text-[#E6AF2E] font-semibold">{formData.country}</span> has 
                    been routed directly to our Senior Admissions Counselor. We will connect with you within 4 business hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#0B132B] border border-[#E6AF2E]/30 max-w-sm mx-auto text-xs text-[#F4F6F8]/70">
                    <span className="text-[#E6AF2E] font-semibold block mb-1">Inquiry Ref: DEMO-2026-9041</span>
                    <span>An evaluation checklist has been dispatched to your email.</span>
                  </div>

                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold border border-[#E6AF2E]/40 text-[#E6AF2E] hover:bg-[#E6AF2E] hover:text-[#0B132B] transition-all cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form
                  suppressHydrationWarning
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="border-b border-[#0B132B]/60 pb-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F4F6F8]">
                      Request Free Evaluation &amp; Shortlist
                    </h3>
                    <p className="text-xs text-[#F4F6F8]/70 font-light mt-1">
                      Fill out your preliminary profile details. No application fees required for assessment.
                    </p>
                  </div>

                  {/* Grid for Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Floating Label: Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0B132B] border border-[#1C2541] text-sm text-[#F4F6F8] focus:outline-none focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-all"
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute text-xs uppercase tracking-wider font-semibold text-[#F4F6F8]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#E6AF2E]"
                      >
                        Full Name *
                      </label>
                    </div>

                    {/* Floating Label: Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="emailAddress"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0B132B] border border-[#1C2541] text-sm text-[#F4F6F8] focus:outline-none focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-all"
                      />
                      <label
                        htmlFor="emailAddress"
                        className="absolute text-xs uppercase tracking-wider font-semibold text-[#F4F6F8]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#E6AF2E]"
                      >
                        Email Address *
                      </label>
                    </div>

                  </div>

                  {/* Grid for Phone and Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Floating Label: Phone */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="phoneNumber"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0B132B] border border-[#1C2541] text-sm text-[#F4F6F8] focus:outline-none focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-all"
                      />
                      <label
                        htmlFor="phoneNumber"
                        className="absolute text-xs uppercase tracking-wider font-semibold text-[#F4F6F8]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#E6AF2E]"
                      >
                        Mobile / WhatsApp *
                      </label>
                    </div>

                    {/* Target Country Selection */}
                    <div className="relative">
                      <select
                        id="targetCountry"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 pt-6 pb-2 rounded-xl bg-[#0B132B] border border-[#1C2541] text-sm text-[#F4F6F8] focus:outline-none focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-all cursor-pointer"
                      >
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="United States">United States (STEM OPT)</option>
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="United Kingdom">United Kingdom (Graduate Route)</option>
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="Canada">Canada (PGWP)</option>
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="Australia">Australia (Post-Study Work)</option>
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="Germany">Germany (Tuition-Free)</option>
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="New Zealand">New Zealand</option>
                        <option className="bg-[#0B132B] text-[#F4F6F8]" value="Ireland">Ireland (European Tech Hub)</option>
                      </select>
                      <label
                        htmlFor="targetCountry"
                        className="absolute text-[10px] uppercase tracking-wider font-semibold text-[#E6AF2E] top-1.5 left-4"
                      >
                        Preferred Destination
                      </label>
                    </div>

                  </div>

                  {/* Target Intake Selection */}
                  <div className="relative">
                    <select
                      id="targetIntake"
                      name="intake"
                      value={formData.intake}
                      onChange={handleChange}
                      className="w-full px-4 pt-6 pb-2 rounded-xl bg-[#0B132B] border border-[#1C2541] text-sm text-[#F4F6F8] focus:outline-none focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-all cursor-pointer"
                    >
                      <option className="bg-[#0B132B] text-[#F4F6F8]" value="Fall 2026 (Priority)">Fall 2026 (Main Intake - Applications Open)</option>
                      <option className="bg-[#0B132B] text-[#F4F6F8]" value="Spring 2027">Spring 2027 (Rolling Admissions)</option>
                      <option className="bg-[#0B132B] text-[#F4F6F8]" value="Fall 2027">Fall 2027 (Long-Term Planning)</option>
                    </select>
                    <label
                      htmlFor="targetIntake"
                      className="absolute text-[10px] uppercase tracking-wider font-semibold text-[#E6AF2E] top-1.5 left-4"
                    >
                      Target Intake Cycle
                    </label>
                  </div>

                  {/* Message & Academic Background */}
                  <div className="relative">
                    <textarea
                      id="academicBackground"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#0B132B] border border-[#1C2541] text-sm text-[#F4F6F8] focus:outline-none focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-all resize-none"
                    />
                    <label
                      htmlFor="academicBackground"
                      className="absolute text-xs uppercase tracking-wider font-semibold text-[#F4F6F8]/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-[#E6AF2E]"
                    >
                      Highest Qualification &amp; Current GPA / IELTS (Optional)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#E6AF2E] text-[#0B132B] shadow-[0_0_25px_rgba(230,175,46,0.35)] hover:shadow-[0_0_40px_rgba(230,175,46,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 text-[#0B132B]">
                        <span className="w-4 h-4 border-2 border-[#0B132B] border-t-transparent rounded-full animate-spin" />
                        <span>Evaluating Profile...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0B132B]" />
                        <span>Submit Confidential Application Profile</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#F4F6F8]/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E6AF2E]" />
                    <span>Zero spam guaranteed. Personal student data handled with strict GDPR/FERPA compliance.</span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>

        {/* Footer Sub-Links & Legal Disclaimers */}
        <div className="pt-8 border-t border-[#1C2541]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-xs">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 rounded-lg bg-[#E6AF2E] flex items-center justify-center text-[#0B132B] font-bold text-xs">
                  DEMO
                </div>
                <span className="font-serif text-base font-bold text-[#F4F6F8]">
                  DEMO
                </span>
              </div>
              <p className="text-[#F4F6F8]/70 font-light leading-relaxed">
                Empowering international scholars with verified university placement, IELTS/PTE coaching, and transparent student visa filing since 2012.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E6AF2E] mb-3">
                Study Abroad
              </h4>
              <ul className="space-y-2 text-[#F4F6F8]/70 font-light">
                <li><a href="#destinations" className="hover:text-[#E6AF2E] transition-colors">Study in USA (STEM OPT)</a></li>
                <li><a href="#destinations" className="hover:text-[#E6AF2E] transition-colors">Study in United Kingdom</a></li>
                <li><a href="#destinations" className="hover:text-[#E6AF2E] transition-colors">Study in Canada (PGWP)</a></li>
                <li><a href="#destinations" className="hover:text-[#E6AF2E] transition-colors">Study in Germany (Tuition-Free)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E6AF2E] mb-3">
                Coaching &amp; Tests
              </h4>
              <ul className="space-y-2 text-[#F4F6F8]/70 font-light">
                <li><a href="#inquiry" className="hover:text-[#E6AF2E] transition-colors">IELTS Academic Masterclasses</a></li>
                <li><a href="#inquiry" className="hover:text-[#E6AF2E] transition-colors">PTE Pearson Academic</a></li>
                <li><a href="#inquiry" className="hover:text-[#E6AF2E] transition-colors">TOEFL iBT Diagnostic Testing</a></li>
                <li><a href="#inquiry" className="hover:text-[#E6AF2E] transition-colors">GRE / GMAT Quantitative Guidance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E6AF2E] mb-3">
                Compliance &amp; Trust
              </h4>
              <p className="text-[#F4F6F8]/70 font-light leading-relaxed mb-2">
                Certified member of AIRC, ICEF, and British Council.
              </p>
              <div className="text-[11px] text-[#E6AF2E] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Authorized Representative</span>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-[#1C2541] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F4F6F8]/60 gap-4">
            <p suppressHydrationWarning>© 2026 Demo Educational Consultants Private Limited. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Crafted for Demo • Global Admissions &amp; Visa Advisory
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
