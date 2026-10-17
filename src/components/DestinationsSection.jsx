'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe2,
  GraduationCap,
  Briefcase,
  Calendar,
  ArrowUpRight,
  Coins,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const destinationsData = [
  {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    code: 'USA',
    tagline: 'World Leader in Innovation & High-Tech Careers',
    universities: 'Harvard, MIT, Stanford, Columbia, NYU',
    workPermit: 'Up to 3 Years STEM OPT',
    avgCost: '$25k – $45k / year',
    intakes: 'Fall (Aug) & Spring (Jan)',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Generous STEM Fellowships & Highest Global Starting Salaries',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    code: 'UK',
    tagline: 'Historic Prestige & 1-Year Fast-Track Masters',
    universities: 'Oxford, Cambridge, Imperial, UCL, King’s',
    workPermit: '2-Year Graduate Route Visa',
    avgCost: '£15k – £28k / year',
    intakes: 'September & January',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Shorter Course Durations Save 1 Full Year of Tuition & Living',
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    code: 'CAN',
    tagline: 'World-Class Education with Direct PR Pathways',
    universities: 'Toronto, UBC, McGill, Waterloo, Alberta',
    workPermit: 'Up to 3-Year Open PGWP',
    avgCost: 'CAD $18k – $32k / year',
    intakes: 'September, January & May',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Co-op Paid Internships & Welcoming Immigration Framework',
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    code: 'AUS',
    tagline: 'Top 100 Universities & High Quality of Living',
    universities: 'Melbourne, Sydney, ANU, UNSW, Monash',
    workPermit: 'Up to 4-5 Years Post-Study Work',
    avgCost: 'AUD $28k – $42k / year',
    intakes: 'February & July',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Substantial Regional Study Extensions & High Hourly Wages',
  },
  {
    id: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    code: 'DEU',
    tagline: 'Zero or Low Tuition & Engineering Hub',
    universities: 'TUM, LMU Munich, Heidelberg, RWTH Aachen',
    workPermit: '18-Month Job Search Visa',
    avgCost: '€0 – €3k / year (Public Unis)',
    intakes: 'Winter (Oct) & Summer (Apr)',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Tuition-Free Public Education & Strong Automobile/IT Sector',
  },
  {
    id: 'new-zealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    code: 'NZL',
    tagline: 'Scenic Serenity & Globally Accredited Degrees',
    universities: 'Auckland, Otago, Canterbury, Victoria',
    workPermit: '3-Year Post-Study Work Visa',
    avgCost: 'NZD $22k – $35k / year',
    intakes: 'February & July',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Safe, Peaceful Environment with Focus on Practical Research',
  },
  {
    id: 'ireland',
    country: 'Ireland',
    flag: '🇮🇪',
    code: 'IRL',
    tagline: 'Silicon Valley of Europe & Tech Headquarters',
    universities: 'Trinity College Dublin, UCD, Galway, UCC',
    workPermit: '2-Year Third Level Graduate Scheme',
    avgCost: '€12k – €22k / year',
    intakes: 'September & January',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1000&q=80',
    keyBenefit: 'Home to Global Tech HQs (Google, Meta, Pfizer) for Graduate Jobs',
  },
];

export default function DestinationsSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Safe ScrollTrigger animation with guaranteed visibility clearProps
      gsap.fromTo(
        '.destination-card',
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
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="destinations"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#0F1F16] border-t border-[#3B8F7B]/20"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#a7F432]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152a1e] border border-[#a7F432]/40 text-xs text-[#a7F432] mb-3.5">
            <Globe2 className="w-3.5 h-3.5 text-[#a7F432]" />
            <span className="font-semibold uppercase tracking-widest text-[11px]">
              Top Study Destinations
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EAF3E7] tracking-tight">
            Discover Your Ideal <span className="text-accent-gradient font-extrabold">Global Campus</span>
          </h2>
          <p className="mt-4 text-[#EAF3E7]/80 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Choose from the world’s most prestigious educational powerhouses. We specialize in admissions,
            scholarships, and post-study work permits for 7 premier countries.
          </p>
        </div>

        {/* 7 Countries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest, idx) => (
            <div
              key={dest.id}
              className={`destination-card forest-glass-card rounded-3xl overflow-hidden group border border-[#3B8F7B]/30 hover:border-[#a7F432]/60 hover:shadow-[0_0_35px_rgba(167,244,50,0.2)] flex flex-col justify-between ${
                idx === 6 ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
              }`}
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#152a1e]">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F16] via-transparent to-black/40" />

                {/* Country Flag Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F1F16]/90 text-[#EAF3E7] border border-[#a7F432]/40 backdrop-blur-md">
                    {dest.country}
                  </span>
                </div>

                {/* Post-Study Work Permit Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#a7F432] bg-[#0F1F16]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#3B8F7B]/40 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#a7F432]" />
                    <span>{dest.workPermit}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#EAF3E7] group-hover:text-[#a7F432] transition-colors mb-1">
                    Study in {dest.country}
                  </h3>
                  <p className="text-xs text-[#a7F432] font-medium tracking-wide mb-4">
                    {dest.tagline}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3 py-3 border-y border-[#3B8F7B]/20 text-xs">
                    <div className="flex items-start gap-2.5 text-[#EAF3E7]/85">
                      <GraduationCap className="w-4 h-4 text-[#a7F432] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#EAF3E7] block">Top Universities:</strong>
                        <span className="text-[#EAF3E7]/70 font-light">{dest.universities}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-[#EAF3E7]/85">
                      <Calendar className="w-4 h-4 text-[#a7F432] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#EAF3E7] block">Major Intakes:</strong>
                        <span className="text-[#EAF3E7]/70 font-light">{dest.intakes}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-[#EAF3E7]/85">
                      <Coins className="w-4 h-4 text-[#a7F432] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#EAF3E7] block">Avg. Tuition:</strong>
                        <span className="text-[#EAF3E7]/70 font-light">{dest.avgCost}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#EAF3E7]/75 font-light leading-relaxed italic bg-[#152a1e]/80 p-3 rounded-xl border border-[#3B8F7B]/20">
                    💡 <span className="text-[#EAF3E7]">{dest.keyBenefit}</span>
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <a
                    href="#inquiry"
                    className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold bg-[#152a1e] hover:bg-[#a7F432] text-[#a7F432] hover:text-[#0F1F16] border border-[#a7F432]/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Check Eligibility for {dest.country}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
