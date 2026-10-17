'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Sparkles,
  GraduationCap,
} from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'Visa Success Stories',
    title: 'Harsh Patel – University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    subtext: 'Master of Science in Computer Science with CAD $12,000 Entrance Scholarship',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    tag: 'Canada Study Permit',
  },
  {
    id: 2,
    category: 'Visa Success Stories',
    title: 'Sneha Shah – University of Leeds',
    country: 'United Kingdom',
    flag: '🇬🇧',
    subtext: 'M.Sc. International Business • 2-Year Graduate Route Visa Approved',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    tag: 'UK Tier 4 Visa',
  },
  {
    id: 3,
    category: 'Modern Campus & Labs',
    title: 'High-Tech Computerized IELTS / PTE Testing Lab',
    country: 'Demo Campus',
    flag: '📍',
    subtext: 'Equipped with Sennheiser acoustic noise-canceling headsets and authentic mock software',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    tag: 'Campus Infrastructure',
  },
  {
    id: 4,
    category: 'Visa Success Stories',
    title: 'Rohan Desai – Northeastern University, Boston',
    country: 'United States',
    flag: '🇺🇸',
    subtext: 'Master of Professional Studies in Analytics • F-1 Visa Approved in 1st Attempt',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
    tag: 'US F-1 Visa',
  },
  {
    id: 5,
    category: 'University Delegations & Events',
    title: 'Deakin University (Australia) Official Delegate Day',
    country: 'International Event',
    flag: '🇦🇺',
    subtext: 'Direct on-the-spot profile assessment and conditional offer letters for 40+ students',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    tag: 'Spot Admissions',
  },
  {
    id: 6,
    category: 'Modern Campus & Labs',
    title: 'Executive 1-on-1 Visa Counseling Chambers',
    country: 'Demo Campus',
    flag: '📍',
    subtext: 'Private, confidential consultation suites for parents and prospective applicants',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    tag: 'Counseling Suites',
  },
  {
    id: 7,
    category: 'Visa Success Stories',
    title: 'Manan Joshi – Technical University of Munich (TUM)',
    country: 'Germany',
    flag: '🇩🇪',
    subtext: 'Master of Automotive Engineering • 100% Tuition-Free German Public University',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    tag: 'German National Visa',
  },
  {
    id: 8,
    category: 'University Delegations & Events',
    title: 'Annual Pre-Departure Orientation & Student Farewell Banquet',
    country: 'Community',
    flag: '🎉',
    subtext: 'Connecting departing students with senior alumni currently studying overseas',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
    tag: 'Alumni Network',
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Visa Success Stories',
    'Modern Campus & Labs',
    'University Delegations & Events',
  ];

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F4F6F8] py-16 sm:py-24 selection:bg-[#E6AF2E] selection:text-[#0B132B]">
      {/* Decorative ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#E6AF2E]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Bar Back */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[#1C2541]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C2541] text-[#E6AF2E] border border-[#E6AF2E]/40 hover:bg-[#E6AF2E] hover:text-[#0B132B] text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#F4F6F8]/70">
            <GraduationCap className="w-4 h-4 text-[#E6AF2E]" />
            <span className="font-semibold text-[#F4F6F8]">DEMO</span>
            <span>• Success Gallery</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#E6AF2E]/40 text-xs text-[#E6AF2E] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E]" />
            <span className="font-semibold uppercase tracking-widest text-[11px]">
              Visual Gallery &amp; Archives
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#F4F6F8] tracking-tight">
            Our Campus &amp; <span className="text-accent-gradient font-extrabold">Success Stories</span>
          </h1>
          <p className="mt-4 text-[#F4F6F8]/80 text-sm sm:text-base font-light leading-relaxed">
            Explore authentic visa approvals, our state-of-the-art classroom facilities, and global delegation visits. 
            Real students, verified admissions, and lifetime career milestones.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-3 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#E6AF2E] text-[#0B132B] font-bold shadow-[0_0_20px_rgba(230,175,46,0.4)]'
                  : 'bg-[#1C2541] text-[#F4F6F8]/80 border border-[#1C2541] hover:text-[#F4F6F8] hover:border-[#E6AF2E]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="navy-glass-card rounded-3xl overflow-hidden border border-[#1C2541] hover:border-[#E6AF2E]/60 group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#1C2541]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/30" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0B132B]/90 text-[#E6AF2E] border border-[#E6AF2E]/40 backdrop-blur-md">
                  {item.tag}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-xl">{item.flag}</span>
                  <span className="text-xs font-semibold text-[#F4F6F8] bg-[#0B132B]/90 px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {item.country}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] uppercase tracking-wider text-[#E6AF2E] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F4F6F8] group-hover:text-[#E6AF2E] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F4F6F8]/70 font-light leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Visit Campus */}
        <div className="mt-20 navy-glass rounded-3xl p-8 sm:p-12 border border-[#1C2541] text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F4F6F8] mb-4">
            Want to Experience Our Campus in Person?
          </h2>
          <p className="text-[#F4F6F8]/80 text-sm max-w-xl mx-auto font-light leading-relaxed mb-8">
            Walk into our flagship office for a face-to-face evaluation with our admissions directors and IELTS master trainers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#inquiry"
              className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-[#E6AF2E] text-[#0B132B] shadow-lg hover:scale-105 transition-all"
            >
              Book In-Person Campus Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
