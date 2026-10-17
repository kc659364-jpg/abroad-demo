'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

export default function GalleryCTA() {
  const buttonRef = useRef(null);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Magnetic pull calculation
    const deltaX = (e.clientX - centerX) * 0.28;
    const deltaY = (e.clientY - centerY) * 0.28;
    setMagneticPos({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#0B132B] border-t border-[#1C2541] overflow-hidden">
      {/* Background Radial Light with Champagne Gold Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E6AF2E]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating Pre-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#E6AF2E]/40 text-xs text-[#E6AF2E] mb-5">
          <ImageIcon className="w-3.5 h-3.5 text-[#E6AF2E]" />
          <span className="font-semibold uppercase tracking-widest text-[11px]">
            Visual Proof of Excellence
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4F6F8] tracking-tight mb-4">
          Witness Real <span className="text-accent-gradient font-extrabold">Success Stories</span> &amp; Modern Campus
        </h2>

        <p className="text-[#F4F6F8]/85 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-10">
          From emotional visa arrival moments and student pre-departure celebrations to our cutting-edge IELTS coaching labs in Surat. 
          Step inside our world of transformative international education.
        </p>

        {/* Magnetic Interactive Button */}
        <div
          className="inline-block p-4"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            ref={buttonRef}
            href="/gallery"
            style={{
              transform: `translate3d(${magneticPos.x}px, ${magneticPos.y}px, 0)`,
              transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#E6AF2E] text-[#0B132B] shadow-[0_0_35px_rgba(230,175,46,0.4)] hover:shadow-[0_0_55px_rgba(230,175,46,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {/* Pulsing ambient halo */}
            <span className="absolute -inset-1 rounded-full bg-[#E6AF2E] opacity-40 blur-md group-hover:opacity-80 transition duration-500 animate-pulse" />
            
            <span className="relative flex items-center gap-3 font-extrabold text-[#0B132B]">
              <Sparkles className="w-5 h-5 text-[#0B132B]" />
              <span>Explore Our Campus &amp; Success Stories (Gallery)</span>
              <ArrowRight className="w-5 h-5 text-[#0B132B] group-hover:translate-x-1.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Quick Preview Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F4F6F8]/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E6AF2E]" />
            <span>2,500+ Visa Handover Photographs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E6AF2E]" />
            <span>Smart Interactive IELTS Classrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E6AF2E]" />
            <span>Foreign Delegate Seminars</span>
          </div>
        </div>

      </div>
    </section>
  );
}
