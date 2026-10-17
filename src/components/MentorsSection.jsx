'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Award,
  Users,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const mentors = [
  {
    name: 'Dr. Jayraj Patel',
    role: 'Founder & Chief Admissions Strategist',
    qualification: 'Ph.D. in Comparative Education • Ex-Admissions Evaluator',
    experience: '16+ Years Experience',
    bio: 'Guided over 4,500 students into top 100 global universities. Specializes in profile-building, SOP strategy, and high-value scholarship negotiations.',
    specialty: 'Ivy League & Top 50 Global Universities',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ananya Sharma, M.Ed (Leeds)',
    role: 'Lead UK & European Visa Director',
    qualification: 'M.Ed. University of Leeds, UK • ICEF Certified',
    experience: '12+ Years Experience',
    bio: 'Renowned expert in UK Visas & Immigration (UKVI) guidelines, CAS document auditing, and post-study work authorization across the UK, Germany, and Ireland.',
    specialty: '99.4% UK & Europe Visa Approval Rate',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'David Richardson',
    role: 'Senior USA & Canada Admissions Mentor',
    qualification: 'M.A. Columbia University • Former US Admissions Officer',
    experience: '14+ Years Experience',
    bio: 'Deep insider knowledge of North American university selection panels, STEM OPT regulations, financial affidavits, and F-1 visa interview preparation.',
    specialty: 'F-1 Visa Mock Interviews & Ivy League SOPs',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'Head of IELTS / TOEFL & PTE Masterclasses',
    qualification: 'Cambridge Certified Master Trainer • Band 8.5/9.0',
    experience: '10+ Years Experience',
    bio: 'Trained 6,000+ students with an average score increase of 1.5 bands. Personalized diagnostic feedback, speaking drills, and speed reading strategies.',
    specialty: 'Avg. IELTS Band 7.5+ / PTE 70+ Track Record',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
];

export default function MentorsSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.mentor-card-anim',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="mentors"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#0B132B] border-t border-[#1C2541]"
    >
      {/* Background Accent Radial */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#E6AF2E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#E6AF2E]/40 text-xs text-[#E6AF2E] mb-3.5">
            <Users className="w-3.5 h-3.5 text-[#E6AF2E]" />
            <span className="font-semibold uppercase tracking-widest text-[11px]">
              Faculty &amp; Admissions Mentors
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F6F8] tracking-tight">
            Learn From <span className="text-accent-gradient font-extrabold">Global Education Leaders</span>
          </h2>
          <p className="mt-4 text-[#F4F6F8]/80 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Our counselors and language trainers are international alumni and former university evaluators.
            They don&apos;t just fill forms—they build an unassailable student profile.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="mentor-card-anim navy-glass-card rounded-3xl overflow-hidden group border border-[#1C2541] hover:border-[#E6AF2E]/60 flex flex-col justify-between"
            >
              <div>
                {/* Photo Placeholder */}
                <div className="relative h-64 w-full overflow-hidden bg-[#1C2541]">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0B132B]/95 text-[#E6AF2E] border border-[#E6AF2E]/40 backdrop-blur-md">
                    {mentor.experience}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#F4F6F8] group-hover:text-[#E6AF2E] transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-[#E6AF2E] font-semibold mt-0.5 mb-2">
                    {mentor.role}
                  </p>
                  <p className="text-[11px] text-[#F4F6F8]/70 font-mono mb-4 border-b border-[#1C2541] pb-3">
                    {mentor.qualification}
                  </p>

                  <p className="text-xs text-[#F4F6F8]/80 font-light leading-relaxed mb-4">
                    {mentor.bio}
                  </p>
                </div>
              </div>

              {/* Specialty Tag */}
              <div className="p-6 pt-0">
                <div className="p-3 rounded-xl bg-[#1C2541] border border-[#E6AF2E]/25 text-[11px] text-[#F4F6F8] font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                  <span>{mentor.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
