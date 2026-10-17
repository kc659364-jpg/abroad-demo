'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  GraduationCap,
} from 'lucide-react';

const Hero3DCanvas = dynamic(() => import('./Hero3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border-2 border-[#a7F432]/30 border-t-[#a7F432] animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const canvasWrapperRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          // Safeguard: Clear any lingering opacity or transform locks
          gsap.set([badgeRef.current, '.hero-word', subtextRef.current, ctaRef.current, statsRef.current, canvasWrapperRef.current], {
            clearProps: 'opacity,transform',
          });
        },
      });

      tl.from(badgeRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          '.hero-word',
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
            stagger: 0.06,
          },
          '-=0.4'
        )
        .from(
          subtextRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          statsRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          canvasWrapperRef.current,
          {
            scale: 0.92,
            opacity: 0,
            duration: 1,
          },
          '-=0.9'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-36 pb-16 bg-[#0F1F16]"
    >
      {/* Background Ambient Glow with new palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(167,244,50,0.08)_0%,rgba(59,143,123,0.06)_45%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Subtext & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Accreditation Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#152a1e] border border-[#a7F432]/40 shadow-[0_0_20px_rgba(167,244,50,0.15)] text-xs text-[#a7F432]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#a7F432] animate-pulse" />
              <span className="font-semibold uppercase tracking-widest text-[11px]">
                Premier Study Abroad Consultancy
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a7F432]" />
              <span className="text-[#EAF3E7]/80 hidden sm:inline text-[11px]">
                AIRC &amp; ICEF Certified
              </span>
            </div>

            {/* GSAP Staggered Main Heading */}
            <h1
              ref={headlineRef}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#EAF3E7] tracking-tight leading-[1.12]"
            >
              <span className="inline-block hero-word">Your</span>{' '}
              <span className="inline-block hero-word text-accent-gradient font-extrabold">
                Global
              </span>{' '}
              <span className="inline-block hero-word text-accent-gradient font-extrabold">
                Journey
              </span>{' '}
              <span className="inline-block hero-word">Starts</span>{' '}
              <span className="inline-block hero-word">Here</span>{' '}
              <span className="inline-block hero-word">with</span>{' '}
              <span className="inline-block hero-word text-[#a7F432]">
                JY
              </span>{' '}
              <span className="inline-block hero-word text-[#a7F432]">
                Overseas.
              </span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="text-base sm:text-lg text-[#EAF3E7]/85 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Turn your ambition of studying at top-ranked international universities into reality. 
              From Ivy League admissions and IELTS coaching to comprehensive visa filing and post-landing support, 
              we guide you every mile of the way.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#inquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest btn-primary-lime flex items-center justify-center gap-2 group"
              >
                <span>Book Free Counseling Session</span>
                <ArrowRight className="w-4 h-4 text-[#0F1F16] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#destinations"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-widest btn-secondary-teal flex items-center justify-center gap-2"
              >
                <Globe2 className="w-4 h-4 text-[#a7F432]" />
                <span>Explore Top Countries</span>
              </a>
            </div>

            {/* Quick Micro Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#EAF3E7]/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#a7F432]" />
                <span>100% Transparent Visa Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#a7F432]" />
                <span>Zero File Rejection Guarantee*</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Rotating Earth & Flight Path */}
          <div
            ref={canvasWrapperRef}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-[500px] aspect-square relative">
              <Hero3DCanvas />

              {/* Floating Orbit Info Badge 1 */}
              <div className="absolute top-4 left-0 sm:left-4 forest-glass px-4 py-2.5 rounded-2xl border border-[#3B8F7B]/40 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#a7F432] to-[#3B8F7B] flex items-center justify-center text-[#0F1F16]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#EAF3E7]/70 uppercase tracking-wider block font-sans">
                    Ivy League &amp; Russell Group
                  </span>
                  <span className="text-xs font-bold text-[#EAF3E7] font-serif">
                    500+ Partner Universities
                  </span>
                </div>
              </div>

              {/* Floating Orbit Info Badge 2 */}
              <div className="absolute bottom-6 right-0 sm:right-4 forest-glass px-4 py-2.5 rounded-2xl border border-[#a7F432]/40 shadow-xl flex items-center gap-3 animate-float [animation-delay:2.5s]">
                <div className="w-9 h-9 rounded-xl bg-[#a7F432]/20 border border-[#a7F432]/50 flex items-center justify-center text-[#a7F432]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#EAF3E7]/70 uppercase tracking-wider block font-sans">
                    Proven Track Record
                  </span>
                  <span className="text-xs font-bold text-[#a7F432] font-serif">
                    98.7% Visa Approval Rate
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust & Numbers Bar */}
        <div
          ref={statsRef}
          className="mt-16 sm:mt-24 forest-glass rounded-3xl p-6 sm:p-10 border border-[#3B8F7B]/35 shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#3B8F7B]/20">
            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#EAF3E7] mb-1">
                98.7<span className="text-[#a7F432]">%</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#a7F432] font-semibold">
                Visa Success Rate
              </p>
              <span className="text-[11px] text-[#EAF3E7]/70 font-light">
                Across 25+ Global Embassies
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#EAF3E7] mb-1">
                500<span className="text-[#a7F432]">+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#a7F432] font-semibold">
                University Tie-ups
              </p>
              <span className="text-[11px] text-[#EAF3E7]/70 font-light">
                Direct Tie-ups &amp; Priority Spot Offers
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#EAF3E7] mb-1">
                ₹15<span className="text-[#a7F432]">Cr+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#a7F432] font-semibold">
                Scholarships Secured
              </p>
              <span className="text-[11px] text-[#EAF3E7]/70 font-light">
                Merit-based &amp; Need-based Aid
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#EAF3E7] mb-1">
                10k<span className="text-[#a7F432]">+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#a7F432] font-semibold">
                Happy Students
              </p>
              <span className="text-[11px] text-[#EAF3E7]/70 font-light">
                Studying in USA, UK, Canada &amp; Europe
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
