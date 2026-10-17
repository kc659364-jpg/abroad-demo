import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import MentorsSection from '@/components/MentorsSection';
import AccreditationsSection from '@/components/AccreditationsSection';
import GalleryCTA from '@/components/GalleryCTA';
import InquiryForm from '@/components/InquiryForm';

export const metadata = {
  title: 'JY Overseas | Premier Study Abroad & Global Visa Consultancy',
  description:
    'Your Global Journey Starts Here with JY Overseas. Empowering students with top university admissions, IELTS/PTE coaching, and transparent visa processing for USA, UK, Canada, Australia, Germany, New Zealand, and Ireland.',
  keywords: [
    'JY Overseas',
    'Study abroad consultancy',
    'Study in USA',
    'Study in UK',
    'Study in Canada',
    'Study in Australia',
    'Study in Germany',
    'IELTS coaching Surat',
    'Student visa consultants',
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1F16] text-[#EAF3E7] flex flex-col selection:bg-[#a7F432] selection:text-[#0F1F16]">
      {/* 1. Fixed Forest Glassmorphism Navbar */}
      <Navbar />

      {/* 2. Hero Section with 3D Earth Globe, Orbiting Plane & GSAP Staggered Reveal */}
      <HeroSection />

      {/* 3. Top Study Destinations (7 Countries) with GSAP Swipe/Slide */}
      <DestinationsSection />

      {/* 4. Mentors & Academic Faculty with GSAP Fade-Up */}
      <MentorsSection />

      {/* 5. Accreditations & Certifications Continuous Marquee */}
      <AccreditationsSection />

      {/* 6. Dedicated Magnetic Gallery CTA Button (Routes to /gallery) */}
      <GalleryCTA />

      {/* 7. Modern Inquiry / Contact Form with GSAP Success Celebration */}
      <InquiryForm />
    </main>
  );
}
